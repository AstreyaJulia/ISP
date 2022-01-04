<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    $proxyListClass = new \Api\Objects\ProxyList($db);

    $proxylist["data"] = $proxyListClass->getСategory();



    // установим код ответа - 200 OK
    http_response_code(200);

    //время выполнения скрипта
    $proxylist["time"] = (microtime(true) - $start);

    // вывод в json-формате
    echo json_encode($proxylist, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);