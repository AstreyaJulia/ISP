<?php

// Роутинг, основная функция
function route($data, $db, $helpers, $key) {

    // GET /brands
    if ($data['method'] === 'GET') {
         // необходимые HTTP-заголовки
        header("Access-Control-Allow-Origin: *");
        header("Content-Type: application/json; charset=UTF-8");
  
        $jwt = $_GET['jwt'] ?? "";
        $proxyListClass = new Api\Objects\ProxyList($db);
        // если декодирование выполнено успешно, показать данные пользователю
        try {
            // декодирование jwt
            $proxyListClass->secureJWT($jwt, $key);
            // сверяем jwt с базой данных 
            if (!$proxyListClass->assignValues()) {
                throw new Exception("Ключ не прошёл проверку");
            }

            switch (count($data['urlData'])) {
                case 1: {
                    $proxylist["data"]["father"] = $proxyListClass->multipleFather();
                    $proxylist["data"]["children"] = $proxyListClass->multipleChildren();
                    // установим код ответа - 200 OK
                    http_response_code(200);
                    // вывод в json-формате
                    echo json_encode($proxylist, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                    break;
                }
                case 2: {

                    $id = (int)$data['urlData'][1];
                    if (!$helpers->isExistsById("sdc_proxy_list", $id)) {
                        $helpers->throwHttpError('not_exists', 'записи не существует');
                        exit;
                    }
                    $proxylist["data"] = $proxyListClass->getReadOne($id);
                    // установим код ответа - 200 OK
                    http_response_code(200);
                    // вывод в json-формате
                    echo json_encode($proxylist, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
                    break;
                }
                default:
                    // Выбрасываем ошибку
                    $helpers->throwHttpError('invalid_router', 'router not found');
                    break;
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
        exit;
    }

    // POST /brands
    if ($data['method'] === 'POST' && count($data['urlData']) === 1 && isset($data['formData']['title'])) {
        $title = $data['formData']['title'];

        echo json_encode(addBrand($title));
        exit;
    }

    // PUT /brands/5
    if ($data['method'] === 'PUT' && count($data['urlData']) === 2 && isset($data['formData']['title'])) {
        $id = (int)$data['urlData'][1];
        $title = $data['formData']['title'];

        echo json_encode(updateBrand($id, $title));
        exit;
    }

    // DELETE /brands/5
    if ($data['method'] === 'DELETE' && count($data['urlData']) === 2) {
        $id = (int)$data['urlData'][1];

        echo json_encode(deleteBrand($id));
        exit;
    }

    // Если ни один роутер не отработал
    $helpers->throwHttpError('invalid_parameters', 'invalid parameters');

}