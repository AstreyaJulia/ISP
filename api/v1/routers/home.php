<?php

// Роутинг, основная функция
function route($db, $helpers) {
  $homeClass = new Api\Objects\Home($db, $helpers);
  // GET
  if ($helpers->getMethod() === 'GET') {

    switch (count($helpers->getUrlData())) {
      // GET /home
      case 1: {
        // если запрос без параметров выдаём полный список

        $home["data"] = $homeClass->getHome();

        // установим код ответа - 200 OK
        http_response_code(200);

        $helpers->getJsonEncode($home);
        break;
      }

      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
    exit;
  }
  // Если ни один роутер не отработал
  $helpers::isErrorInfo(400, "invalid_router", "router not found");
}
