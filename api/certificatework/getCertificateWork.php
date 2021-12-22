<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    $CertificateWorkClass = new \Api\Objects\CertificateWork($db);

    $quarter = isset($_GET['quarter']) ? explode(',', $_GET["quarter"]) : die();
    $year = $_GET['year'] ?? die();

    $certificate["data"] = $CertificateWorkClass->getSelect($quarter, $year);

    if ($certificate) {
        // установим код ответа - 200 OK
        http_response_code(200);

        //время выполнения скрипта
        $certificate["time"] = (microtime(true) - $start);

        // вывод в json-формате
        echo json_encode($certificate, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    } else {
        // код ответа - 404 Не найдено
        http_response_code(404);

        // сообщим пользователю, что товар не существует
        echo json_encode(array("message" => "Ничего не найдено."), JSON_UNESCAPED_UNICODE);
    }