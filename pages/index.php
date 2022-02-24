<?php
$title = "Главная страница";

$UserAttributes = new \Core\Model\UserAttributes($db);
$birthday = $UserAttributes->getBirthday();

// параметры $_GET запроса
$queryParams = [
    'idJudge' => $userAtributes->data->idGAS ?? "",
];

// Публикации БСР
$response = $autorizationClass::sendGET($queryParams, 'http://192.168.0.254:8079/api_GAS/publication-acts.php?');

if ($response) {
    $row = $response;
    $message = "Актов не опубликовано";
    // количество неопубликованых актов
    $notPub = is_array($row) ? count($row):  0;
} else {
    $message = "";
    // сообщим об ошибке в $url
    $notPub = "Недоступен ГАС";
}

// Нарушение сроков
$deadlines = $autorizationClass::sendGET($queryParams, 'http://192.168.0.254:8079/api_GAS/deadlines.php?');

if ($deadlines) {
    $rowDeadlines = $deadlines;
    $messageDeadlines = "Нарушено сроков";
    // количество неопубликованых актов
    $deadlines = is_array($rowDeadlines) ? count($rowDeadlines):  0;
} else {
    $messageDeadlines = "";
}
// подключаем шаблон
ob_start();
    include "components/index/template/tpl.index.php";
    $content = ob_get_contents();
ob_end_clean();