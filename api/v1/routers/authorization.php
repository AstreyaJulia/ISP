<?php

// Роутинг, основная функция
function route($db, $helpers) {
  include_once 'config/jwt.php';
  $authorizationClass = new Api\Objects\Authorization($db, $helpers);
  // POST
    switch ($helpers->getMethod()) {
      // GET /authorization
      case "POST": {
        $authorizationClass->routAuthorization();
        $token = array(
          "iss" => $iss,
          "aud" => $aud,
          "iat" => $iat,
          "nbf" => $nbf,
          "data" => array(
            "id" => $helpers->getId(),
            "sudo" => $helpers->getSudo(),
            "membership" => $helpers->getMembership()
          )
        );

        http_response_code(200);

        $jwt["data"] = [
          "jwt" => \Firebase\JWT\JWT::encode($token, $key),
          "id" => $helpers->getId(),
          "sudo" => $helpers->getSudo(),
          "username" => $helpers->getUsername(),
          "fullname" => $helpers->getFullname()];

        $helpers->getJsonEncode($jwt);
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
}
