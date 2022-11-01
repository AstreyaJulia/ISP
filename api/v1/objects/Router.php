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
     * Тело запроса:
     * 0 элемент это роутер $router
     * 1 элемент параметр запроса
     *
     * @var array
     */
    public readonly array $urlData;

    /**
     * Роутер для подключения
     * 0 элемент $formData
     *
     * @var string
     */
    public readonly string $router;


    /**
     * Получение данных из тела запроса
     *
     * @return array $data
     */
    public function receiveFormData() {
      // GET или POST: данные возвращаем как есть
      if ($this->method === 'GET') {
        $data = $_GET;
      } else {
        // PUT, PATCH или DELETE
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
      $this->urlData = $urls;
      $this->router = $this->urlData[0];
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
