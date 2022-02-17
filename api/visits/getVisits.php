<?php
/** необходимые HTTP-заголовки */

use Api\Objects\Visits;

header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json; charset=UTF-8");

require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

$visitsClass = new Visits($db);

$data = $visitsClass->visits();

/** установим код ответа - 200 OK */
http_response_code(200);

/** время выполнения скрипта */
//$data["time"] = (microtime(true) - $start);

/** вывод в json-формате */
echo json_encode($data, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
