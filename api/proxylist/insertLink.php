<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");
    header("Access-Control-Allow-Methods: POST");
    header("Access-Control-Max-Age: 3600");
    header("Access-Control-Allow-Headers: Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");

    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    $proxyListClass = new \Api\Objects\ProxyList($db);

    // получаем отправленные данные в виде массива
    $data = json_decode(file_get_contents("php://input"), true);

    // получаем JWT
    $jwt = $data["jwt"] ?? "";
    unset($data["jwt"]);

    // Файлы jwt
    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/jwt.php";

    // если JWT не пуст
    if(!empty($jwt)) {

        // если декодирование выполнено успешно, показать данные пользователю
        try {
            // декодирование jwt
            $decoded = \Firebase\JWT\JWT::decode($jwt, $key, array('HS256'));
            // проверяем права пользователя
            if ($decoded->data->sudo != 1) {
                throw new Exception("Недостаточно прав для редактирования записи");
            }

            if (
                !empty($data["id_group"]) &&
                !empty($data["href"]) &&
                !empty($data["name_href"])
            ) {
                // создание ссылки
                try {
                    $proxyListClass->insertLink($data);
                    // установим код ответа - 201 создано
                    http_response_code(201);

                    // сообщим пользователю
                    echo json_encode(array("message" => "Ссылка создана."), JSON_UNESCAPED_UNICODE);
                }

                // если не удается изменить ссылку, сообщим пользователю 
                catch (Exception $e) {

                    // установим код ответа - 503 сервис недоступен
                    http_response_code(503);

                    // сообщим пользователю
                    echo json_encode(array("message" => "Невозможно создать ссылку.", "error" => $e->getMessage()), JSON_UNESCAPED_UNICODE);
                }
            }

            // сообщим пользователю что данные неполные
            else {

                // установим код ответа - 400 неверный запрос
                http_response_code(400);

                // сообщим пользователю
                echo json_encode(array("message" => "Невозможно создать ссылку. Данные неполные."), JSON_UNESCAPED_UNICODE);
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