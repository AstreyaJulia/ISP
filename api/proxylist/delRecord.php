<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    $proxyListClass = new \Api\Objects\ProxyList($db);

    $id = $_GET['delRecord'] ?? die();
    $jwt = $_GET['jwt'] ?? die();

    // Файлы jwt
    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/jwt.php";

    // если JWT не пуст
    if($jwt) {

        // если декодирование выполнено успешно, показать данные пользователя
        try {
            // декодирование jwt
            $proxyListClass->secureJWT($jwt, $key);
            // проверяем права пользователя
            if ($proxyListClass->getSudo() != 1) {
                throw new Exception("Недостаточно прав для удаления записи");
            }

            if ($proxyListClass->delRecord($id)) {
               
               // установим код ответа - 200 OK
                http_response_code(200);

                $proxylist["message"] = "Запись удалена";

                //время выполнения скрипта
                $proxylist["time"] = (microtime(true) - $start);

                // вывод в json-формате
                echo json_encode($proxylist, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
            } else {
                // код ответа - 404 Не найдено
                http_response_code(404);

                // сообщим пользователю, что ссылки с таким $id не существует
                echo json_encode(array("message" => "Записи не существует."), JSON_UNESCAPED_UNICODE);
            }
        }

        // если декодирование не удалось, это означает, что JWT является недействительным
        catch (Exception $e){

            // код ответа
            http_response_code(401);
        
            // сообщить пользователю отказано в доступе и показать сообщение об ошибке
            echo json_encode(array(
                "message" => "Доступ закрыт.",
                "error" => $e->getMessage()
            ), JSON_UNESCAPED_UNICODE);
        }
    }

    // показать сообщение об ошибке, если jwt пуст
    else {
     
        // код ответа
        http_response_code(401);
     
        // сообщить пользователю что доступ запрещен
        echo json_encode(array("message" => "Доступ запрещён."), JSON_UNESCAPED_UNICODE);
    }