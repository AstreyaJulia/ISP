<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    // Файл с настройками
    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    $proxyListClass = new \Api\Objects\ProxyList($db);

    $jwt = $_GET['jwt'] ?? die();

    // Файлы jwt
    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/jwt.php";

    // если JWT не пуст
    if($jwt) {

        // если декодирование выполнено успешно, показать данные пользователю
        try {
            // декодирование jwt
            $proxyListClass->secureJWT($jwt, $key);

            $proxylist["data"]["category"] = $proxyListClass->getСategory();
            // установим код ответа - 200 OK
            http_response_code(200);

            //время выполнения скрипта
            $proxylist["time"] = (microtime(true) - $start);

            // вывод в json-формате
            echo json_encode($proxylist, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
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
    else {
     
        // код ответа
        http_response_code(401);
     
        // сообщить пользователю что доступ запрещен
        echo json_encode(array("message" => "Доступ запрещён."), JSON_UNESCAPED_UNICODE);
    }