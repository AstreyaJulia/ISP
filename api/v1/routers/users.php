<?php

// Роутинг, основная функция
function route($helpers) {

  if ($helpers->getMethod() === 'GET') {
    // необходимые HTTP-заголовки

    switch (count($helpers->getUrlData())) {
      // GET /users
      case 1: {
        // если запрос без параметров отдаём полный список

        // установим код ответа - 200 OK
        http_response_code(200);
        // вывод в json-формате
        $helpers->getJsonEncode(array("data" => array("info" => "Полный список пользователей в разработке")));
        break;
      }
      // GET /users/parameter
      case 2: {
        // если запрос с параметрами отдаём запрашиваемую запись
        switch ($helpers->getUrlData()[1]) {
          case "login-data": {
            $userLoginData["data"] = [
              "id" => $helpers->id,
              "sudo" => $helpers->getSudo(),
              "username" => $helpers->username,
              "fullname" => $helpers->fullname,
              "sidebar" => $helpers->sidebar,
              "theme" => $helpers->theme];
            $helpers->getJsonEncode($userLoginData);
            break;
          }
          case "birthday": {
            $output["data"] = !empty($helpers->getBirthday()) ? $helpers->getBirthday() : $helpers::isErrorInfo(200, "Нет данных", "Сегодня дней рождений нет");
            $helpers->getJsonEncode($output);
            break;
          }
          case "asistant": {
            $helpers::isErrorInfo(200, "Нету", "Список помощников в разработке");
            break;
          }
          case "secretary": {
            $helpers::isErrorInfo(200, "Нету", "Список секретарей с.з. в разработке");
            break;
          }
          default:
          // если переданы лишние параметры выбрасываем ошибку
          $helpers::isErrorInfo(400, "invalid_router", "router not found");
          break;
        }
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
    exit;
  }

  // POST /user
  if ($helpers->getMethod() === 'POST' && $helpers->getUrlData()["0"] === "users") {
    // необходимые HTTP-заголовки
    $helpers::headlinesPOST();

    switch ($helpers->getUrlData()[1] ?? false) {
      case 'login-data': {

        $param = $helpers->getFormData() ? implode(array_keys($helpers->getFormData())) : false;

        if (in_array($param, ["sidebar", "theme"])) {
          try {
            $output["data"] = $helpers->setUserSettings($param, (int)$helpers->getFormData()[$param]);
            $helpers->getJsonEncode($output);
          } catch (\PDOException $e){
            $helpers::isErrorInfo(200, "Што-то пошло не так", $e);
          }
        } else {
          $helpers::isErrorInfo(400, "invalid_router", "router not found");
        }
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
    
    exit;
  }

  $helpers::isErrorInfo(400, "invalid_router", "router not found");
}