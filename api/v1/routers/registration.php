<?php

  include_once 'config/jwt.php';
  $registrationClass = new Api\Objects\Registration($helpers);
  // POST
    switch ($helpers->getMethod()) {
      case "POST": {
        $registrationClass->routRegistration();
        $token = array(
          "iss" => $iss,
          "aud" => $aud,
          "iat" => $iat,
          "nbf" => $nbf,
          "data" => array(
            "id" => $helpers->id,
            "sudo" => $helpers->sudo,
            "professionID" => $helpers->professionID
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