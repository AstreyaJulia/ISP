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
    public function getJsonEncode($data) {
      return json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
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
                'search'
            ));
        }

        // Выводим 400 ошибку http-запроса
        public function throwHttpError($code, $message) {
            header('HTTP/1.0 400 Bad Request');
            echo json_encode(array(
                'code' => $code,
                'message' => $message
            ), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        }

        // Проверяем существует ли запись
        public function isExistsById($table, $id) {

            $sql = "SELECT COUNT(id) FROM $table WHERE id = ?";
            $row = $this->db->run($sql,[$id])->fetchColumn();

            return $row === 1;
        }

    /**
     * Необходимые заголовки для GET-запросов
    */
    public static function headlinesGET() {
      header("Access-Control-Allow-Origin: *");
      header("Content-Type: application/json; charset=UTF-8");
    }

    /**
     * Необходимые заголовки для POST-запросов
    */
    public static function headlinesPOST() {
      self::headlinesGET();
      header("Access-Control-Allow-Methods: POST");
      header("Access-Control-Max-Age: 3600");
      header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
    }

    /**
     * Проверяет ключ jwt.
     * Если ключ jwt не прошел проверку отдаем заголовок 401
     * и исключение из библиотеки Firebase\JWT
     *
     * @return string
     */
    public static function isAccessDenied($e) {
      header("Content-Type: application/json; charset=UTF-8");
      // код ответа
      http_response_code(401);
      // сообщить пользователю отказано в доступе и показать сообщение об ошибке
      echo json_encode(array(
        "message" => "Доступ закрыт.",
        "error" => $e->getMessage()
      ), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }



    }
