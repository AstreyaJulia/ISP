<?php
	namespace Api\Objects;

	class Search {

		protected $db;
		protected $helpers;

    public function __construct(DB $db, helpers $helpers) {
      $this->db = $db;
      $this->helpers = $helpers;
    }

    public function secureJWT ($jwt, $key) {
      $decoded = $this->classJWT::decode($jwt, $key, array('HS256'));
      $this->sudo = $decoded->data->sudo;
      return $decoded;
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
      return $this->db->run($sql, ["%$param%", "%$param%"])->fetchAll(\PDO::FETCH_CLASS);
    }

    /**
     * Отдаём результаты поиска
     * 
     *
     * @return string строка в формате json
     *
     */
    public function routUsers(){
      if (count($this->helpers->getUrlData()) == 3 and strlen($this->helpers->getUrlData()[2]) > 2 ) {
        http_response_code(200);
        $searchUsers["data"] = $this->searchUsers($this->helpers->getUrlData()[2]);
        
        if (empty($searchUsers["data"])) {
          $searchUsers["error"] = ["message" => "По вашему запросу ничего не найдено", "info" => "Not Found"];
        }

        $this->helpers->getJsonEncode($searchUsers);

      } else {
        $this->helpers::isErrorInfo(400, "invalid_router", "router not found");
      }
      
    }

    /**
     * Поиск входящей почты
     * 
     *
     * @return string строка в формате json
     *
     */
    public function routInbox($api_gas){
      if (count($this->helpers->getUrlData()) == 5 ) {
        try {

          http_response_code(200);

          $searchInbox["data"] = self::sendGET($this->paramsSearch(), $api_gas);

          return $this->helpers->getJsonEncode($searchInbox);

        } catch (\Exception $e) {

          $this->helpers::isErrorInfo(501, "Ошибка в переданных параметрах", $e);
        }

      }
    }

    /**
     * Проверяем строку поиска
     * 
     * @return array
     * 
     */

    private function paramsSearch() {
      $queryString = $this->helpers->getUrlData()[2];
      if (mb_strlen($queryString) < 3) {
        throw new \Exception("Значение для поиска должно быть больше 3-х символов");
      } 
      
      $startDate = new \DateTime($this->helpers->getUrlData()[3]);
      $endDate = new \DateTime($this->helpers->getUrlData()[4]);
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

    /**
     * Отправка данных методом GET
     *
     * @param array $params
     * @param string $host_api
     *
     * @return mixed
     *
     */
    public static function sendGET($params, $host_api) {
      $url = $host_api. http_build_query($params);
      $ch = curl_init($url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 1);//ожидание при попытке подключения, секунд (0 - бесконечно)
      $result = curl_exec($ch);
      $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
      curl_close($ch);
      $message = json_decode($result);
      if ($result) {
        http_response_code($httpcode);
        $message;
      } else {
        http_response_code(504);
        $message;
      }
      return $message;
    }


	}
