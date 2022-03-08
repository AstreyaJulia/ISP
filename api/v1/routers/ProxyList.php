<?php

// Роутинг, основная функция
function route($data, $db, $helpers, $key) {

    $jwt = $data["formData"]["jwt"] ?? "";

    // GET
    if ($data['method'] === 'GET') {
         // необходимые HTTP-заголовки
        $helpers::headlinesGET();

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
                // GET /ProxyList
                case 1: {
                    // если запрос без параметров выдаём полный список
                    ProxyList($proxyListClass);
                    break;
                }
                // GET /ProxyList/5
                case 2: {
                    // если запрос с параметрами отдаём запрашиваемую запись
                    ProxyListOne($proxyListClass, $helpers, $data['urlData'][1]);
                    break;
                }
                default:
                    // если переданы лишние параметры выбрасываем ошибку
                    $helpers->throwHttpError('invalid_router', 'router not found');
                    break;
            }
        }
        // если декодирование не удалось, это означает, что JWT является недействительным
        catch (Exception $e){
            $helpers::isAccessDenied($e);
        }
        exit;
    }

    // POST /ProxyList
    if ($data['method'] === 'POST' && count($data['urlData']) === 1 ) {
        // необходимые HTTP-заголовки
        $helpers::headlinesPOST();

        $proxyListClass = new Api\Objects\ProxyList($db);
        // если декодирование выполнено успешно, показать данные пользователю
        try {
            // декодирование jwt
            $proxyListClass->secureJWT($jwt, $key);
            // сверяем jwt с базой данных 
            if (!$proxyListClass->assignValues()) {
                throw new Exception("Ключ не прошёл проверку");
            }

            echo json_encode("Я метод POST", JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        }
        // если декодирование не удалось, это означает, что JWT является недействительным
        catch (Exception $e){
            $helpers::isAccessDenied($e);
        }
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

// Формитруем список Категории + Ссылки
function ProxyList($proxyListClass) {
    $proxylist["data"]["father"] = $proxyListClass->multipleFather();
    $proxylist["data"]["children"] = $proxyListClass->multipleChildren();
    // установим код ответа - 200 OK
    http_response_code(200);
    // вывод в json-формате
    echo json_encode($proxylist, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}

// Формитруем одну запись
function ProxyListOne($proxyListClass, $helpers, $id) {

    // проверяем права пользователя
    if (!$proxyListClass->getSudo() === 1) {
        throw new Exception("Недостаточно прав");
    }
    // проверяем существует ли запись
    if (!$helpers->isExistsById("sdc_proxy_list", $id)) {
        $helpers->throwHttpError('not_exists', 'записи не существует');
        exit;
    }

    // если запрос отдаёт группу
    if ($proxyListClass->readOne($id)[0]["parent_id"] === 0 ) {
        foreach ($proxyListClass->readOne($id) as $key => $value) {
            $proxylist["data"]["group"][] = [
                "id" => $value["id"],
                "menuindex" => $value["menuindex"],
                "name_href" => $value["name_href"],
                "proxy_href" => $value["proxy_href"]
            ];
        }
    } else { // в противном случае получаем ссылку
        $proxylist["data"]["link"] = $proxyListClass->readOne($id);
        /* 
            список категорий + 
            для категории которой принадлежит ссылка ставим атрибут selected
        */
        foreach ($proxyListClass->multipleFather() as $key => $value) {
            if ($proxylist["data"]["link"][0]["parent_id"]== $value["id"]) {
                $proxylist["data"]["category"][] = [
                    "id" => $value["id"],
                    "selected" => "selected",
                    "name_href" => $value["name_href"]
                ];
            } else {
                $proxylist["data"]["category"][] = [
                    "id" => $value["id"],
                    "name_href" => $value["name_href"]
                ];
            }
        }
    }

    // установим код ответа - 200 OK
    http_response_code(200);
    // вывод в json-формате
    echo json_encode($proxylist, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
}