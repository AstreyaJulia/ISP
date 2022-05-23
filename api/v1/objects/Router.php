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

      // Убираем из api-запросов префикс admin/api/v1
      //$urlData = array_slice($urls, 3);

      $formData = $this->receiveFormData();
      $this->method = $_SERVER['REQUEST_METHOD'];
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

    /**
     * get элемент для urlData
     *
     * @return array
     */
    public function getUrlData()
    {
      return $this->urlData;
    }

    /**
     * get элемент для router
     *
     *@return string
     */
    public function getRouter()
    {
      return $this->router;
    }

    /**
     * get элемент для formData
     *
     *@return array
     */
    public function getFormData()
    {
      return $this->formData;
    }
  }
