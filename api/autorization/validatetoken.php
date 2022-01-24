<?php
    // заголовки
    header("Access-Control-Allow-Origin: http://localhost/rest-api-authentication-example/");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    // Файл с настройками
    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/jwt.php";

    // получаем значение веб-токена JSON
    $data = json_decode(file_get_contents("php://input"));

    // получаем JWT
    $jwt=isset($data->jwt) ? $data->jwt : "";

    // если JWT не пуст
    if($jwt) {

        // если декодирование выполнено успешно, показать данные пользователя
        try {
            // декодирование jwt
            $decoded = \Firebase\JWT\JWT::decode($jwt, $key, array('HS256'));
     
            // код ответа
            http_response_code(200);
     
            // показать детали
            echo json_encode(array(
                "message" => "Доступ разрешен.",
                "data" => $decoded->data
            ));
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
        echo json_encode(array("message" => "Доступ запрещён."), JSON_UNESCAPED_UNICODE);
    }
?>