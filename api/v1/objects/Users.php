<?php

namespace Api\Objects;

class Users
{

  protected Helpers $helpers;

  public function __construct(
    Helpers $helpers = new \Api\Objects\Helpers()
  ) {
    $this->helpers = $helpers;
  }

  /**
   * Список работающих сотрудников
   */
  public function userList(): array
  {
    $sql = "SELECT
                    Users.id,
                    UserAttributes.fullname,
                    ParentUserType.name AS room,
                    Vocation.name AS profession,
                    VocationGroup.name AS professionGroup,
                    ChildUserType.phone_worck
              FROM `sdc_room` AS ChildUserType
                      LEFT JOIN `sdc_room` AS ParentUserType ON ChildUserType.affiliation = ParentUserType.id
                      LEFT JOIN `sdc_user_attributes` AS UserAttributes on ChildUserType.id = UserAttributes.room
                      LEFT JOIN `sdc_users` AS Users ON UserAttributes.internalKey=Users.id
                      LEFT JOIN `sdc_vocation` AS Vocation ON Vocation.id=UserAttributes.profession
                      LEFT JOIN `sdc_vocation` AS VocationGroup ON VocationGroup.id=Vocation.parent_id
              WHERE Users.active = 1 and UserAttributes.profession != ''
              ORDER BY UserAttributes.fullname ASC";
    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * 
   * Список должностей или групп
   * 
   * @return object
   * 
   */
  public function VocationOrGroup()
  {
    $param = match ($this->helpers->urlData[1]) {
      "vocation" => "IS NOT NULL",
      "group" => "IS NULL"
    };

    $sql = "SELECT
                id,
                name AS label
            FROM sdc_vocation
            WHERE parent_id $param";
    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
  }

  /**
   * 
   * Список сотрудников по группам
   * 
   * @return object
   * 
   */
  public function usersGroup()
  {
    
    $param = $this->helpers->urlData[2];

    if ( filter_var($param, FILTER_VALIDATE_INT) === false ) {
      $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю целое число. Нолучаю: $param");
    }

    $sql = "SELECT
              userAttr.id,
              userAttr.fullname AS label
            FROM sdc_user_attributes AS userAttr
            LEFT JOIN sdc_vocation AS vocation ON vocation.id = userAttr.profession
            LEFT JOIN sdc_users AS users ON users.id = userAttr.internalKey 
            WHERE vocation.parent_id = :param AND users.active = 1";
    return $this->helpers->db->run($sql,[$param])->fetchAll(\PDO::FETCH_CLASS);
  }



  /**
   * Обрабатываем приходящие GET-запросы. 
   */
  private function metodGET()
  {
    switch (count($this->helpers->urlData)) {
        // GET /users
      case 1: {
          // если запрос без параметров отдаём полный список

          // установим код ответа - 200 OK
          http_response_code(200);
          // вывод в json-формате
          $this->helpers::getJsonEncode($this->helpers::wrap($this->userList(), "data"));
          break;
        }
        // GET /users/parameter
      case 2: {
          // если запрос с параметрами отдаём запрашиваемую запись
          switch ($this->helpers->urlData[1]) {
            case "login-data": {
                $userLoginData["data"] = [
                  "id" => $this->helpers->id,
                  "sudo" => $this->helpers->sudo,
                  "username" => $this->helpers->username,
                  "fullname" => $this->helpers->fullname,
                  "professionID" => $this->helpers->professionID,
                  "professionName" => $this->helpers->professionName,
                  "sidebar" => $this->helpers->sidebar,
                  "theme" => $this->helpers->theme
                ];
                $this->helpers->getJsonEncode($userLoginData);
                break;
              }
            case "birthday": {
                $output["data"] = !empty($this->helpers->getBirthday()) ? $this->helpers->getBirthday() : $this->helpers::isErrorInfo(200, "Нет данных", "Сегодня дней рождений нет");
                $this->helpers->getJsonEncode($output);
                break;
              }
            case "vocation": {
                $this->helpers->getJsonEncode($this->VocationOrGroup());
                break;
              }
            case "group": {
                $this->helpers->getJsonEncode($this->VocationOrGroup());
                break;
              }
            default:
              // если переданы лишние параметры выбрасываем ошибку
              $this->helpers::isErrorInfo(400, "invalid_router", "router not found");
              break;
          }
          break;
        }
      case 3: {
        $this->helpers->getJsonEncode($this->usersGroup());
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $this->helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
  }

  /**
   * Обрабатываем приходящие POST-запросы. 
   */
  private function metodPOST()
  {
    $this->helpers::headlinesPOST();

    switch ($this->helpers->urlData[1] ?? false) {
      case 'login-data': {

          $param = $this->helpers->formData ? implode(array_keys($this->helpers->formData)) : false;

          if (in_array($param, ["sidebar", "theme"])) {
            try {
              $output["data"] = $this->helpers->setUserSettings($param, (int)$this->helpers->formData[$param]);
              $this->helpers->getJsonEncode($output);
            } catch (\PDOException $e) {
              $this->helpers::isErrorInfo(200, "Што-то пошло не так", $e);
            }
          } else {
            $this->helpers::isErrorInfo(400, "invalid_router", "router not found");
          }
          break;
        }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $this->helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
  }

  public function responseUsers()
  {
    match ($this->helpers->getMethod()) {
      "GET" => $this->metodGET(),
      "POST" => $this->metodPOST()
    };
  }
}
