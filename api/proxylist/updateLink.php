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

// убеждаемся, что данные не пусты
if (
    !empty($data["id_group"]) &&
    !empty($data["href"]) &&
    !empty($data["name_href"])
) {
    // создание ссылки
    if($proxyListClass->updateLink($data)){

        // установим код ответа - 201 создано
        http_response_code(201);

        // сообщим пользователю
        echo json_encode(array("message" => "Ссылка изменена."), JSON_UNESCAPED_UNICODE);
    }

    // если не удается изменить ссылку, сообщим пользователю
    else {

        // установим код ответа - 503 сервис недоступен
        http_response_code(503);

        // сообщим пользователю
        echo json_encode(array("message" => "Невозможно изменить ссылку."), JSON_UNESCAPED_UNICODE);
    }
}

// сообщим пользователю что данные неполные
else {

    // установим код ответа - 400 неверный запрос
    http_response_code(400);

    // сообщим пользователю
    echo json_encode(array("message" => "Невозможно изменить ссылку. Данные неполные."), JSON_UNESCAPED_UNICODE);
}