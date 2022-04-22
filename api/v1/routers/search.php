<?php

// Роутинг, основная функция
function route($db, $helpers) {
  $searchClass = new Api\Objects\Search($db);
  // GET
  if ($helpers->getMethod() === 'GET') {

    if (count($helpers->getUrlData()) == 3 and strlen($helpers->getUrlData()[2]) > 2 ) {
      switch ($helpers->getUrlData()[1]) {
        // GET /search/users
        case "users": {
          $searchUsers["data"] = $searchClass->searchUsers($helpers->getUrlData()[2]);
          http_response_code(200);
          // вывод в json-формате
          if (!empty($searchUsers["data"])) {
            $searchUsers;
          } else {
            $searchUsers["error"] = ["message" => "По вашему запросу ничего не найдено", "info" => "Not Found"];
          }

          echo $helpers->getJsonEncode($searchUsers);
          break;
        }
        case "inbox": {
          echo "Ищем входящую почту";
          break;
        }
        case "outbox": {
          echo "Ищем исходящую почту";
          break;
        }
        default:
          // если переданы лишние параметры выбрасываем ошибку
          $helpers->throwHttpError('invalid_router', 'router not found');
          break;
      }
    } else {
      $helpers->throwHttpError('invalid_router', 'router not found');
    }
  }
}
