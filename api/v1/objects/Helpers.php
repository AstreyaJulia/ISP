<?php
  namespace Api\Objects;

  class Helpers extends User {

    /**
     * Ключ jwt переданный в запросе содержит:
     * id - идентификатор пользователя
     * sudo - принадлежность к группе суперпользователя
     * Необходимо добавить новый ключь в jwt membership
     *
     * @var string
     */
    private $jwt;

    /**
     * Метод запроса для доступа к странице
     *
     * @var string
     */
    private $method;

    /**
     * Тело переданного GET, POST, PUT, DELETE запроса
     *
     * @var array
     */
    private $formData;

    /**
     * Тело запроса:
     * 0 элемент это роутер
     * 1 элемент параметр запроса
     *
     * @var array
     */
    private $urlData;

    /**
     * Роутер для подключения
     * 0 элемент $formData
     *
     * @var string
     */
    private $router;


    /**
     * Получение данных из тела запроса
     *
     * @return array $data
     */
    public function receiveFormData() {

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

      unset($data['q']);

      return $data;
    }

    /**
     * Устанавливает свойства класса
     *
     */
    public function getRequestData() {

      // Разбираем url
      $url = (isset($_GET['q'])) ? $_GET['q'] : '';
      $url = trim($url, '/');
      $urls = explode('/', $url);

      // Убираем из api-запросов префикс admin/api/v1
      //$urlData = array_slice($urls, 3);

      $formData = $this->receiveFormData();
      $this->jwt = $formData["jwt"] ?? "" ;
      unset($formData["jwt"]);
      $this->method = $_SERVER['REQUEST_METHOD'];
      $this->urlData = $urls;
      $this->router = $this->urlData[0];
      $this->formData = $formData;

      return array(
          'method' => $this->method,
          'formData' => $this->formData,
          'urlData' => $this->urlData,
          'router' => $this->router
      );

    }

    /**
     * get элемент для jwt
     *
     * @var string
     */
    public function getJWT()
    {
      return $this->jwt;
    }

    /**
     * get элемент для method
     *
     * @var string
     */
    public function getMethod()
    {
      return $this->method;
    }

    /**
     * get элемент для urlData
     *
     * @var array
     */
    public function getUrlData()
    {
      return $this->urlData;
    }

    /**
     * get элемент для router
     *
     *@var string
     */
    public function getRouter()
    {
      return $this->router;
    }

    /**
     * get элемент для formData
     *
     *@var array
     */
    public function getFormData()
    {
      return $this->formData;
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
