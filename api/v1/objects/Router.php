<?php

namespace Api\Objects;

use Exception;

abstract class Router extends User
{

  /**
   * Ключ jwt переданный в запросе содержит:
   * id - идентификатор пользователя
   * sudo - принадлежность к группе суперпользователя
   * Необходимо добавить новый ключь в jwt membership
   *
   * @var string
   */
  public readonly string $jwt;

  /**
   * Метод запроса для доступа к странице
   *
   * @var string
   */
  public readonly string $method;

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
  public function receiveFormData(): array
  {
    try {
      if ($this->method === 'GET') {
        $data = $_GET;
      } else {
        $data = json_decode(file_get_contents('php://input'), JSON_OBJECT_AS_ARRAY);
      }

      unset($data['q']);

      return $data;
    } catch (\Error $e) {
      http_response_code(401);
      echo json_encode(array(
        "data" => [],
        "error" => array(
          "code" => 401,
          "message" => "Ошибка в теле запроса",
          "info" => $e->getMessage()
        )
      ), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
      die();
    }
  }

  /**
   * 
   * Устанавливаем свойства класса
   *
   */
  public function getRequestData()
  {

    // Получаем ключ jwt из заголовка
    $jwt = getallheaders()["authorization"] ?? getallheaders()["Authorization"] ?? "";
    $this->jwt = substr($jwt, 7);

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
   * 
   * Проверка роутера на валидность
   * 
   */
  public function checkRoute ()
  {
    return array(
      ["route" => "users", "objects" => "Api\Objects\Users"],
      ["route" => "proxylist", "objects" => "Api\Objects\ProxyList"],
      ["route" => "search", "objects" => "Api\Objects\Search"],
      ["route" => "authorization", "objects" => "Api\Objects\Authorization"],
      ["route" => "registration", "objects" => "Api\Objects\Registration"],
      ["route" => "gas-api", "objects" => "Api\Objects\GasAPI"],
      ["route" => "weather", "objects" => "Api\Objects\Weather"],
      ["route" => "staff", "objects" => "Api\Objects\Staff"],
      ["route" => "buildingstructure", "objects" => "Api\Objects\BuildingStructure"]
    );
  }
}
