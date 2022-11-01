<?php

namespace Api\Objects;

class Helpers extends Router
{

  /**
   * Возвращает JSON-представление данных. Не код кодирует многобайтовые
   * символы Unicode, (по умолчанию они кодируются как \uXXXX). Использует
   * пробельные символы в возвращаемых данных для их форматирования.
   */
  public static function getJsonEncode(array|string|bool|int $data):void
  {
    echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
  }

  /**
   * Обёртка, помещает все данные в ассоциативный массив
   * 
   * @param mixed $data данные которые необходимо обернуть в массив
   * @param string $name имя ключа массива
   * 
   */
  public static function wrap(mixed $data, string $name):array
  {
    $showing[$name] = $data;
    return $showing;
  }

  /**
   * Проверка прав пользователя
   *
   * @return Exception
   */
  public function validateSudo()
  {
    if (!$this->sudo === 1) {
      throw new \Exception("Недостаточно прав");
    }
  }

  /**
   * Проверка наличия idGAS
   *
   * @return Exception
   */
  public function validateIdGAS()
  {
    try {
      if (!$this->idGAS) {
        throw new \Exception("Недостаточно прав для просмотра данного ресурса");
      }
    } catch (\Exception $e) {
      self::isErrorInfo(200, "Доступ закрыт.", $e);
    }
  }

  // Проверка роутера на валидность
  public function isValidRouter($router)
  {
    return in_array($router, array(
      'users',
      'ProxyList',
      'sidebar',
      'search',
      'authorization',
      'registration',
      'gas-api',
      'weather'
    ));
  }

  // Проверяем существует ли запись
  public function isExistsById($table, $id)
  {

    $sql = "SELECT COUNT(id) FROM $table WHERE id = ?";
    $row = $this->db->run($sql, [$id])->fetchColumn();

    return $row === 1;
  }

  /**
   * Необходимые заголовки
   */
  public static function headlinesGET()
  {
    //header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
  }

  /**
   * Необходимые заголовки для POST-запросов
   */
  public static function headlinesPOST()
  {
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  }

  /**
   * Сообщение об ошибке.
   *
   */
  public static function isErrorInfo(int $responseCode, string $mesage, object|string $e):string
  {

    $info = array(
      "data" => [],
      "error" => array(
        "message" => $mesage,
        "info" => is_string($e) ? $e : $e->getMessage()
      )
    );

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
   */
  public static function sendGET(array $params, string $host_api):array
  {
    // собираем адрес и параметры запроса
    $url = $host_api . http_build_query($params);
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //ожидание при попытке подключения, секунд (0 - бесконечно)
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 1);

    $result = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $message = json_decode($result) ?? array();
    if (in_array($httpcode, [0, 504])) {
      $message = self::isErrorInfo(501, "ГАС недоступен", "Обратитесь к администратору");
    } else {
      http_response_code($httpcode);
      $message;
    }
    return $message;
  }

  /**
   * Отправка данных методом $_GET через прокси
   * 
   * @param array $params массив с параметрами key => value
   * @param string $host адрес на который отправляем запрос
   * @param string $host ip-адрес либо url proxy-сервера
   * @param int $port порт proxy-сервера
   * 
   */
  public function sendGETtoProxy(array $params, string $host, string $proxy = '10.67.254.42', int $port = 3128):string|bool 
  {
    $url = $host . http_build_query($params);
    $ch = curl_init($url);

    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 5);
    curl_setopt($ch, CURLOPT_URL, $url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_PROXY, $proxy);
    curl_setopt($ch, CURLOPT_PROXYPORT, $port);
    //curl_setopt($ch, CURLOPT_PROXYUSERPWD, "username:pass"); //username:pass 
    $file_contents = curl_exec($ch);
    curl_close($ch);
    return $file_contents;
  }
}
