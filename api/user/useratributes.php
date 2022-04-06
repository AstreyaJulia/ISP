<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    $userAtributes = new \Api\Objects\User($db);

    // Файл с настройками
    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/jwt.php";

    // получаем значение веб-токена JSON
    $data = json_decode(file_get_contents("php://input"));

    // получаем JWT
    $jwt = $data->jwt ?? "";

    // если JWT не пуст
    if($jwt) {

        // если декодирование выполнено успешно, показать данные пользователя
        try {
            // декодирование jwt
            $decoded = \Firebase\JWT\JWT::decode($jwt, $key, array('HS256'));
            $userAtributes->username = $decoded->data->username;
            $userAtributes->loginExists();
     
            // код ответа
            http_response_code(200);

            $output['data'] = [
                "id" => $userAtributes->id,
                "idGAS" => $userAtributes->idGAS,
                "username" => $userAtributes->username,
                "fullname" => $userAtributes->fullname,
                //"password" => $userAtributes->password,
                "active" => $userAtributes->active,
                "sudo" => $userAtributes->sudo,
                "sidebar" => $userAtributes->sidebar == 0 ? "narrow": "wide",
                "theme" => $userAtributes->theme == 0 ? "main-dark": "main-light",
                "profession" => $userAtributes->profession,
                "membership" => $userAtributes->membership
            ];
            $output["time"] = (microtime(true) - $start);
            // показать детали
            echo json_encode($output, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
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
    else{
     
        // код ответа
        http_response_code(401);
     
        // сообщить пользователю что доступ запрещен
        echo json_encode(array("message" => "Доступ запрещён."));
    }






    //время выполнения скрипта
    $proxylist["time"] = (microtime(true) - $start);

    // вывод в json-формате
    