<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    $CertificateWorkClass = new \Api\Objects\CertificateWork($db);

    $quarter = isset($_GET['quarter']) ? explode(',', $_GET["quarter"]) : die();
    $year = $_GET['year'] ?? die();

    $certificate["data"] = $CertificateWorkClass->getSelect($quarter, $year);
    $certificate["data"][] = [
        "fullname" => "Итого",
        "col_3" => array_sum(array_column($certificate["data"], "col_3")),
        "col_4" => array_sum(array_column($certificate["data"], "col_4")),
        "col_5" => array_sum(array_column($certificate["data"], "col_5")),
        "col_6" => array_sum(array_column($certificate["data"], "col_6")),
        "col_7" => array_sum(array_column($certificate["data"], "col_7")),
        "col_8" => array_sum(array_column($certificate["data"], "col_8")),
        "col_9" => array_sum(array_column($certificate["data"], "col_9")),
        "col_10" => array_sum(array_column($certificate["data"], "col_10")),
        "col_11" => array_sum(array_column($certificate["data"], "col_11")),
        "col_12" => array_sum(array_column($certificate["data"], "col_12")),
        "col_13" => array_sum(array_column($certificate["data"], "col_13")),
        "col_14" => array_sum(array_column($certificate["data"], "col_14")),
        "col_15" => array_sum(array_column($certificate["data"], "col_15")),
        "col_16" => array_sum(array_column($certificate["data"], "col_16")),
        "col_17" => array_sum(array_column($certificate["data"], "col_17"))
    ];

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