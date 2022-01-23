<?php
    // заголовки
    header("Access-Control-Allow-Origin: http://authentication-jwt/");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // Файл с настройками
    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";
    // Файлs с JWT
    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/jwt.php";

    // создание объекта 'User'
    $userClass = new \Api\Objects\User($db);

    // получаем данные
    $data = json_decode(file_get_contents("php://input"));

    // устанавливаем значения
    $userClass->username = $data->login;
    $userClass->password = $data->password;
    $userClass->passrep = $data->passrep;
    $password_matched = $userClass->passwordMatched();

    // существует ли login и совпали ли пароли
    if ($password_matched && $userClass->loginActiveExists() ) {
        // Запишем пароль в б.д.
        $userClass->setUserPassword();
        /*
        Считаем что пользователь успешно зарегистрировался
        присвоим значения свойствам объекта
        */
        $userClass->assignValues();

        $token = array(
           "iss" => $iss,
           "aud" => $aud,
           "iat" => $iat,
           "nbf" => $nbf,
           "data" => array(
               "id" => $userClass->id,
               "idGAS" => $userClass->idGAS,
               "username" => $userClass->username,
               "active" => $userClass->active,
               "sudo" => $userClass->sudo,
               "sidebar" => $userClass->sidebar,
               "theme" => $userClass->theme
           )
        );

        // код ответа
        http_response_code(200);

        // создание jwt
        $jwt = \Firebase\JWT\JWT::encode($token, $key);
        echo json_encode(
            array(
                "message" => "Успешный вход в систему.",
                "jwt" => $jwt
            )
        );
    }

    // Если логин заблокирован или не существует или пароль не совпадает,
    // сообщим пользователю, что он не может войти в систему
    else {
     
      // код ответа
      http_response_code(401);

      // сказать пользователю что войти не удалось
      echo json_encode(array("message" => "Ошибка входа."));
    }
?>