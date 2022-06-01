<?php

// Роутинг, основная функция
function route($db, $helpers) {

  if ($helpers->getMethod() === 'GET') {
    // необходимые HTTP-заголовки

    switch (count($helpers->getUrlData())) {
      // GET /users
      case 1: {
        // если запрос без параметров отдаём полный список

        // установим код ответа - 200 OK
        http_response_code(200);
        // вывод в json-формате
        $helpers->getJsonEncode("Полный список пользователей в разработке");
        break;
      }
      // GET /users/parameter
      case 2: {
        // если запрос с параметрами отдаём запрашиваемую запись
        $userLoginData["data"] = [
          "id" => $helpers->getId(),
          "sudo" => $helpers->getSudo(),
          "username" => $helpers->getUsername(),
          "fullname" => $helpers->getFullname()];
        $helpers->getJsonEncode($userLoginData);
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
    exit;
  }
}