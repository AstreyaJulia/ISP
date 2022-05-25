<?php
  namespace Api\Objects;

  class Helpers extends Router {

    /**
     * Возвращает JSON-представление данных
     * Не кодирует многобайтовые символы Unicode (по умолчанию они кодируются как \uXXXX)
     * Использует пробельные символы в возвращаемых данных для их форматирования.
     *
     * @var array|string|bool|int
     *
     * @return string
     */
    public static function getJsonEncode($data) {
      echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }

    /**
     * Проверка прав пользователя
     *
     * @return Exception
     */
    public function validateSudo() {
      if (!$this->getSudo() === 1) {
        throw new \Exception("Недостаточно прав");
      }
    }

        // Проверка роутера на валидность
        public function isValidRouter($router) {
            return in_array($router, array(
                'ProxyList',
                'sidebar',
                'search',
                'authorization',
                'registration',
                'home',
                'publication-acts'
            ));
        }

        // Проверяем существует ли запись
        public function isExistsById($table, $id) {

            $sql = "SELECT COUNT(id) FROM $table WHERE id = ?";
            $row = $this->db->run($sql,[$id])->fetchColumn();

            return $row === 1;
        }

    /**
     * Необходимые заголовки
    */
    public static function headlinesGET() {
      header("Access-Control-Allow-Origin: *");
      header("Content-Type: application/json; charset=UTF-8");
    }

    /**
     * Необходимые заголовки для POST-запросов
    */
    public static function headlinesPOST() {
      header("Access-Control-Allow-Methods: POST");
      header("Access-Control-Max-Age: 3600");
      header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    }

    /**
     * Сообщение об ошибке.
     * 
     * @param int $responseCode
     * @param string $mecage
     * @param object|string $e - сообщение от исключения
     * 
     * Если ключ jwt не прошел проверку отдаем заголовок 401
     * и исключение из библиотеки Firebase\JWT
     *
     * @return string
     */
    public static function isErrorInfo($responseCode, $mesage, $e) {
      
      $info = array(
        "data" =>[],
        "error" => array(
          "message" => $mesage,
          "info" => is_string($e) ? $e : $e->getMessage()
        ));

      http_response_code($responseCode);

      self::getJsonEncode($info);
      exit;
    }

    /**
     * Отправка данных методом $_GET
     * 
     * @param array $params массив с параметрами key => value
     * @param string $host_api адрес на который отправляем запрос
     * 
     * @return array
     * 
     */
    public static function sendGET($params, $host_api) {
      // собираем адрес и параметры запроса
      $url = $host_api. http_build_query($params);
      $ch = curl_init($url);
      curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
      //ожидание при попытке подключения, секунд (0 - бесконечно)
      curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 1);

      $result = curl_exec($ch);
      $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
      curl_close($ch);
      $message = json_decode($result);
      if (in_array($httpcode, [0, 504])) {
        $message = self::isErrorInfo(200, "ГАС недоступен", "Обратитесь к администратору");
      } else {
        http_response_code($httpcode);
        $message;
      }
      return $message;
    }

  }
