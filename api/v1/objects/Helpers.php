<?php

namespace Api\Objects;

class Helpers extends Router
{

  /**
   * Возвращает JSON-представление данных. Не код кодирует многобайтовые
   * символы Unicode, (по умолчанию они кодируются как \uXXXX). Использует
   * пробельные символы в возвращаемых данных для их форматирования.
   */
  public static function getJsonEncode(mixed $data):void
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

  // Проверка роутера на валидность
  public function isValidRouter($router)
  {
    return in_array($router, array(
      'users',
      'proxylist',
      'search',
      'authorization',
      'registration',
      'gas-api',
      'weather',
      'categories-civil-cases',
      'categories-material',
      'staff'
    ));
  }

  /**
   * Проверяем существует ли запись
   * 
   * @param string $table имя таблицы в которой ищем
   * @param int $id номер записи для поиска
   * 
   * @return bool
   * 
   */ 
  public function isExistsById(string $table, int $id): bool
  {

      $sql = "SELECT COUNT(id) FROM $table WHERE id = ?";
      $row = $this->db->run($sql, [$id])->fetchColumn();

      return $row === 1;

  }

  /**
   * Поиск по ассоциативному массиву
   * 
   * @param mixed $value искомое значение
   * @param array $array массив в котором ищем
   * @param string $key ключ массива в котором ищем
   * 
   * @return int ключ первого найденного элемента в противном случае false
   */
  public function searchAssociativeArray(mixed $value, array $array, string $key)
  {
      return array_search($value, array_column($array, $key));
  }

  /**
   * Проверка на целое число
   * 
   * @param mixed $value проверяемое значение
   * @param string $name наименование поля для вывода ошибки
   * 
   * @return int isErrorInfo() со значением переданного параметра, либо $value
   */
  public function validateINT(mixed $value, string $name):int
  {
    if ( filter_var($value, FILTER_VALIDATE_INT) === false ) {
      self::isErrorInfo(400, "Неверные параметры", "Ожидаю в $name целое число. Получаю: $value");
    }
    return $value;
  }

  /**
   * Проверка на существоваение значения
   * 
   * @param mixed $value проверяемое значение
   * @param string $name наименование поля для вывода ошибки
   * 
   * @return int isErrorInfo() со значением переданного параметра, либо $value
   */
  public function validateExist(mixed $value, string $name):mixed
  {
    strlen($value) === 0 ? self::isErrorInfo(400, "Неверные параметы", "Ожидаю $name. Получаю $value"): $value;
    return $value;
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
   * @param int $responseCode код состояния HTTP
   * @param string $message заголовок ошибки
   * @param object|string $e описание ошибки 
   * 
   * @return string JSON-представление данных
   *
   */
  public static function isErrorInfo(int $responseCode, string $message, object|string $e):string
  {

    $info = array(
      "data" => [],
      "error" => array(
        "code" => $responseCode,
        "message" => $message,
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
   * @param string $proxy ip-адрес либо url proxy-сервера
   * @param int $port порт proxy-сервера
   * 
   */
  public function sendGETtoProxy(array $params, string $host, string $proxy = '10.67.254.42', int $port = 3128):string|bool 
  {
    $url = $host . http_build_query($params);;

    $ch = curl_init($url);
    
    curl_setopt($ch, CURLOPT_URL,$url);
    curl_setopt($ch, CURLOPT_PROXY, $proxy);
    curl_setopt($ch, CURLOPT_PROXYPORT, $port);

    /**
     * Висит 4 минуты после выкидывает фатальную ошибку
     * apache работает
     * 
     * CURLOPT_CONNECTTIMEOUT apache падает
     * если убрать PROXY не падает
     * 
     */
    //curl_setopt($ch,CURLOPT_CONNECTTIMEOUT,10);

    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
    curl_setopt($ch, CURLOPT_HEADER, 1);

    $result = curl_exec($ch);
    curl_close($ch);


    $message = $result ?? "";
    if (isset($message)) {
      http_response_code(200);
      $message;
    } else {    
      $message = self::isErrorInfo(501, "weather не доступна", "Обратитесь к администратору");
    }
    return $message;
  }
}
