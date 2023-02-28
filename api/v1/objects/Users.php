<?php

namespace Api\Objects;

class Users
{
  use Objects;
  public function __construct(
    protected Helpers $helpers = new \Api\Objects\Helpers(),
    protected VocationGroup $vocationGroup = new \Api\Objects\VocationGroup()
  ) {
    $this->helpers = $helpers;
    $this->vocationGroup = $vocationGroup;
  }

  /**
   * Список работающих сотрудников
   */
  public function userList(): array
  {
    $sql = "SELECT
                Users.id,
                UserAttributes.fullname,
                CONCAT (BildingType.name, ' / ', DoorType.name) AS room,
                Vocation.name AS profession,
                IF(ISNULL(UserAfiliation.fullname),'',UserAfiliation.fullname) AS affiliationJudgeName,
                VocationGroup.name AS professionGroup,
                DesktopType.phone_worck
            FROM `sdc_room` AS DesktopType
                  LEFT JOIN `sdc_room` AS DoorType ON DesktopType.affiliation = DoorType.id
                  LEFT JOIN `sdc_room` AS FloorType ON DoorType.affiliation = FloorType.id
                  LEFT JOIN `sdc_room` AS BildingType ON FloorType.affiliation = BildingType.id
                  LEFT JOIN `sdc_user_attributes` AS UserAttributes on DesktopType.id = UserAttributes.room
                  LEFT JOIN `sdc_user_attributes` AS UserAfiliation on UserAfiliation.id = UserAttributes.affiliation
                  LEFT JOIN `sdc_users` AS Users ON UserAttributes.internalKey=Users.id
                  LEFT JOIN `sdc_vocation` AS Vocation ON Vocation.id=UserAttributes.profession
                  LEFT JOIN `sdc_vocation` AS VocationGroup ON VocationGroup.id=Vocation.parent_id
            WHERE Users.active = 1 and UserAttributes.profession IS NOT NULL
            ORDER BY UserAttributes.fullname ASC";
    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * Обрабатываем приходящие GET-запросы. 
   */
  private function metodGET()
  {
    switch (count($this->helpers->urlData)) {
        // GET /users
      case 0: {
          // если запрос без параметров отдаём полный список

          // установим код ответа - 200 OK
          http_response_code(200);
          // вывод в json-формате
          return $this->helpers::wrap($this->userList(), "data");
          break;
        }
        // GET /users/parameter
      case 1: {
          // если запрос с параметрами отдаём запрашиваемую запись
          switch ($this->helpers->urlData[0]) {
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
                return $userLoginData;
                break;
              }
            case "birthday": {
                $output["data"] = !empty($this->helpers->getBirthday()) ? $this->helpers->getBirthday() : $this->helpers::isErrorInfo(200, "Нет данных", "Сегодня дней рождений нет");
                return $output;
                break;
              }
            case "vocation": {
                return $this->helpers->wrap($this->vocationGroup->VocationOrGroup($this->helpers->urlData[0]), "data");
                break;
              }
            case "group": {
                return $this->helpers->wrap($this->vocationGroup->VocationOrGroup($this->helpers->urlData[0]), "data");
                break;
              }
            default:
              // если переданы лишние параметры выбрасываем ошибку
              $this->helpers::isErrorInfo(400, "invalid_router", "router not found");
              break;
          }
          break;
        }
      case 2: {
        return $this->helpers->wrap($this->vocationGroup->usersGroup($this->helpers->urlData[1]), "data");
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

    switch ($this->helpers->urlData[0] ?? false) {
      case 'login-data': {

          $param = $this->helpers->formData ? implode(array_keys($this->helpers->formData)) : false;

          if (in_array($param, ["sidebar", "theme"])) {
            try {
              return $this->helpers->wrap($this->helpers->setUserSettings($param, (int)$this->helpers->formData[$param]), "data");
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

}
