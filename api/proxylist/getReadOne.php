<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    $proxyListClass = new \Api\Objects\ProxyList($db);

    $id = $_GET['id'] ?? die();

    if ($proxyListClass->getReadOne($id)) {
       $proxylist["data"]["link"] = $proxyListClass->getReadOne($id);
       $category = $proxyListClass->getСategory();
       foreach ($category as $key => $value) {
           if ($proxylist["data"]["link"][0]["parent_id"]== $value["id"]) {
                $proxylist["data"]["category"][] = [
                    "id" => $value["id"],
                    "selected" => "selected",
                    "name_href" => $value["name_href"]
               ];
           } else {
            $proxylist["data"]["category"][] = $value;
           }
       }

       // установим код ответа - 200 OK
        http_response_code(200);

        //время выполнения скрипта
        $proxylist["time"] = (microtime(true) - $start);

        // вывод в json-формате
        echo json_encode($proxylist, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    } else {
        // код ответа - 404 Не найдено
        http_response_code(404);

        // сообщим пользователю, что ссылки с таким $id не существует
        echo json_encode(array("message" => "Ссылки не существует."), JSON_UNESCAPED_UNICODE);
    }

    

    