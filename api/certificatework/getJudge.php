<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    // получаем данные из ГАС Правосудие
    $ourData = file_get_contents("http://192.168.0.254:8079/api_GAS/judges-certificate-work.php");

    $judge["data"] = json_decode($ourData);

    $verification = $_COOKIE['aut']['sudo'] ?? "";
    if (1 == 1) {
        // установим код ответа - 200 OK
        http_response_code(200);

        //время выполнения скрипта
        $judge["time"] = (microtime(true) - $start);

        // вывод в json-формате
        echo json_encode($judge, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
    } else {
        // код ответа - 404 Не найдено
        http_response_code(404);

        // сообщим пользователю, что записей нет
        echo json_encode(array("message" => "Ничего не найдено."), JSON_UNESCAPED_UNICODE);
    }