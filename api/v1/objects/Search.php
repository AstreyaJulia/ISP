<?php
	namespace Api\Objects;
  use DateTime;
	class Search {

		protected Helpers $helpers;

    public function __construct(
      Helpers $helpers = new \Api\Objects\Helpers()
    ) {
      $this->helpers = $helpers;
    }

    /**
     * Поиск сотрудников по ФИО или номеров телефонов
     *
     * @param string $param
     *
     * @return object
     *
     */
    private function searchUsers($param) {
      $sql = "SELECT
                    Users.id,
                    UserAttributes.fullname,
                    ParentUserType.name AS room,
                    Vocation.name AS profession,
                    ChildUserType.phone_worck
              FROM `sdc_room` AS ChildUserType
                      LEFT JOIN `sdc_room` AS ParentUserType ON ChildUserType.affiliation = ParentUserType.id
                      LEFT JOIN `sdc_user_attributes` AS UserAttributes on ChildUserType.id = UserAttributes.room
                      LEFT JOIN `sdc_users` AS Users ON UserAttributes.internalKey=Users.id
                      LEFT JOIN `sdc_vocation` AS Vocation ON Vocation.id=UserAttributes.profession
              WHERE Users.active = 1 and UserAttributes.profession != '' AND (UserAttributes.fullname LIKE ? or ChildUserType.phone_worck LIKE ?)";
      return $this->helpers->db->run($sql, ["%$param%", "%$param%"])->fetchAll(\PDO::FETCH_CLASS);
    }

    /**
     * Отдаём результаты поиска
     * 
     *
     * @return string строка в формате json
     *
     */
    public function routUsers(){
      try {
        $queryString = $this->helpers->formData["query"] ?? "";

        if (isset($queryString) and mb_strlen($queryString) < 3) {
          throw new \Exception("Значение для поиска должно быть больше 3-х символов");
        }

        http_response_code(200);
        $searchUsers["data"] = $this->searchUsers($queryString);

        if (empty($searchUsers["data"])) {
          $searchUsers["error"] = ["message" => "По вашему запросу ничего не найдено", "info" => "Not Found"];
        }

        $this->helpers->getJsonEncode($searchUsers);
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(400, "Ошибка в переданных параметрах", $e);
      }      
    }

    /**
     * Поиск почтовой корреспонденции
     * 
     *
     * @return string строка в формате json
     *
     */
    public function correspondence(){

        try {

          http_response_code(200);

          $searchInbox["data"] = $this->helpers::sendGET($this->paramsSearch(), API_GAS."v1/".$this->helpers->router."/".$this->helpers->urlData["0"].".php?");

          return $this->helpers->getJsonEncode($searchInbox);

        } catch (\Exception $e) {

          $this->helpers::isErrorInfo(501, "Ошибка в переданных параметрах", $e);
        }


    }

    /**
     * Проверяем строку поиска
     * 
     * @return array
     * 
     */

    private function paramsSearch():array {

      $queryString = $this->helpers->formData["query"] ?? "";
      $startDate = $this->helpers->formData["startDate"] ?? "";
      $endDate = $this->helpers->formData["endDate"] ?? "";

      if (mb_strlen($queryString) < 3) {
        throw new \Exception("Значение для поиска должно быть больше 3-х символов");
      } 
      
      $startDate = new \DateTime($startDate);
      $endDate = new \DateTime($endDate);
      $interval = (int)$startDate->diff($endDate)->format("%R%m");

      if ($interval < 0) {
        throw new \Exception("Начальная дата не может быть больше конечной");
      }

      if ($interval > 2) {
        throw new \Exception("Допустимый диапазон поиска 3 месяца");
      }

      return array(
          "startDate" => $startDate->format('Y-m-d'),
          "endDate" => $endDate->format('Y-m-d'),
          "query" => $queryString
      );
    }
	}
