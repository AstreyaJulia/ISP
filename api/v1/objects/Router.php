<?php
  namespace Api\Objects;

  class Router extends User {

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
     * @var array|null
     */
    public readonly array|NULL $formData;

    /**
     * Тело запроса из адресной строки:
     *
     * @var array
     */
    public readonly array $urlData;

    /**
     * Роутер для подключения
     *
     * @var string
     */
    public readonly string $router;


    /**
     * Получение данных из тела запроса
     * 
     * $_GET принимаем параметры типа ?startDate=2022-03-01&endDate=2022-05-30&query=Ковал
     * 
     * $_POST, $_PUT, $_PATCH или $_DELETE принимаем json
     *
     * @return array
     */
    public function receiveFormData():array {
      if ($this->method === 'GET') {
        $data = $_GET;
      } else {
        $data = json_decode(file_get_contents('php://input'), JSON_OBJECT_AS_ARRAY);
      }

      unset($data['q']);

      return $data;
    }

    /**
     * 
     * Устанавливаем свойства класса
     *
     */
    public function getRequestData() {

      // Получаем ключ jwt из заголовка
      $jwt = getallheaders()["authorization"] ?? getallheaders()["Authorization"] ?? "";
      $this->jwt = substr($jwt, 7) ;

      // Разбираем url
      $url = (isset($_GET['q'])) ? $_GET['q'] : '';
      $url = trim($url, '/');
      $urls = explode('/', $url);

      $this->method = $_SERVER['REQUEST_METHOD'];
      $formData = $this->receiveFormData();
      
      $this->router = $urls[0];
      array_shift($urls);
      $this->urlData = $urls;
      $this->formData = $formData;
    }

    /**
     * get элемент для jwt
     *
     * @return string
     */
    public function getJWT()
    {
      return $this->jwt;
    }

    /**
     * get элемент для method
     *
     * @return string
     */
    public function getMethod()
    {
      return $this->method;
    }

  }
