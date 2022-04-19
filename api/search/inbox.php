<?php
  // необходимые HTTP-заголовки
  header("Access-Control-Allow-Origin: *");
  header("Content-Type: application/json; charset=UTF-8");
  header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

  // Файл с настройками
  require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

  $searchClass = new \Api\Objects\Search($db);
  
  $jwt = getallheaders()["Authorization"] ?? die();

  // получаем JWT
  $jwt = substr($jwt, 7);

  $queryString = $_GET['query'] ?? "";
  try {
    $startDate = new DateTime($_GET["startDate"]);
    $endDate = new DateTime($_GET["endDate"]);
    $interval = $startDate->diff($endDate);
    if ($interval->format('%m') > 2 or $startDate > $endDate) {
      throw new Exception("Большой диапазон");
    }
  } catch (Exception $e) {
    echo json_encode(array(
          "message" => "Ошибка в дате",
          "error" => $e->getMessage()
      ), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
  }


$params = [
  "startDate" => $startDate->format('Y-m-d'),
  "endDate" => $endDate->format('Y-m-d'),
  "query" => $queryString
];

  // Файлы jwt
  require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/jwt.php";

  // если JWT не пуст
  if($jwt) {

    // если декодирование выполнено успешно, показать данные пользователю
    try {
      // декодирование jwt
      $searchClass->secureJWT($jwt, $key);

      $searchInbox["data"] = $searchClass::sendGET($params, "http://192.168.2.253:8079/api_GAS/search/inbox.php?");
      // установим код ответа - 200 OK
      http_response_code(200);

      // вывод в json-формате
      echo json_encode($searchInbox, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    }

    // если декодирование не удалось, это означает, что JWT является недействительным
    catch (Exception $e){

      // код ответа
      http_response_code(401);

      // сообщить пользователю отказано в доступе и показать сообщение об ошибке
      echo json_encode(array(
          "message" => "Доступ закрыт.",
          "error" => $e->getMessage()
      ));
    }
  }

  // показать сообщение об ошибке, если jwt пуст
  else {

    // код ответа
    http_response_code(401);

    // сообщить пользователю что доступ запрещен
    echo json_encode(array("message" => "Доступ запрещён."), JSON_UNESCAPED_UNICODE);
  }
