<?php
  namespace Api\Objects;

  class Helpers extends User {

    /**
     * Метод запроса для доступа к странице
     *
     * @var string
     */
    private $method;

    /**
     * Тело переданного POST, PUT запроса
     *
     * @var array
     */
    private $formData;

    /**
     * Тело запроса
     *
     * @var array
     */
    private $urlData;

    /**
     * Роутер для подключения
     *
     * @var string
     */
    private $router;


        // Получение данных из тела запроса
        public function getFormData() {

            // GET или POST: данные возвращаем как есть
            if ($this->method === 'GET') {
                $data = $_GET;
            } else if ($this->method === 'POST') {
                $data = $_POST;

            } else {
                // PUT, PATCH или DELETE
                $data = array();
                $data = json_decode(file_get_contents('php://input'), JSON_OBJECT_AS_ARRAY);
            }

            // Удаляем параметр q
            unset($data['q']);

            return $data;
        }

        // Получаем все данные о запросе
        public function getRequestData() {
            // Определяем метод запроса
            $this->method = $_SERVER['REQUEST_METHOD'];

            // Разбираем url
            $url = (isset($_GET['q'])) ? $_GET['q'] : '';
            $url = trim($url, '/');
            $urls = explode('/', $url);

            // Убираем из api-запросов префикс admin/api/v1
            //$urlData = array_slice($urls, 3);
            $this->urlData = $urls;
            $this->router = $this->urlData[0];
            $this->formData = $this->getFormData();

            return array(
                'method' => $this->method,
                'formData' => $this->formData,
                'urlData' => $this->urlData,
                'router' => $this->router
            );

        }

        // Проверка роутера на валидность
        public function isValidRouter($router) {
            return in_array($router, array(
                'ProxyList'
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

        // Заголовки для GET-запросов
        public static function headlinesGET() {
            header("Access-Control-Allow-Origin: *");
            header("Content-Type: application/json; charset=UTF-8");
        }

        // Заголовки для POST-запросов
        public static function headlinesPOST() {
            header("Access-Control-Allow-Origin: *");
            header("Content-Type: application/json; charset=UTF-8");
            header("Access-Control-Allow-Methods: POST");
            header("Access-Control-Max-Age: 3600");
            header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
        }

        // Ошибка если ключ jwt не прошел проверку
        public static function isAccessDenied($e) {
            // код ответа
            http_response_code(401);

            // сообщить пользователю отказано в доступе и показать сообщение об ошибке
            echo json_encode(array(
                "message" => "Доступ закрыт.",
                "error" => $e->getMessage()
            ), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        }



    }
