<?php

// Роутинг, основная функция
function route($helpers) {
  include_once 'config/jwt.php';
  $authorizationClass = new Api\Objects\Authorization($helpers);
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
            "id" => $helpers->id,
            "sudo" => $helpers->sudo,
            "membership" => $helpers->membership
          )
        );

        http_response_code(200);

        $jwt["data"] = ["jwt" => \Firebase\JWT\JWT::encode($token, $key)];

        $helpers->getJsonEncode($jwt);
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
}
