<?php
$title = "Главная страница";

$UserAttributes = new \Core\Model\UserAttributes($db);
$birthday = $UserAttributes->getBirthday();

// параметры $_GET запроса
$queryParams = [
    'idJudge' => $userAtributes->data->idGAS ?? "",
];

// URL страницы, не опубликованных актов
$url = 'http://192.168.0.254:8079/api_GAS/publication-acts.php?'. http_build_query($queryParams);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//ожидания при попытке подключения секунд (0 - бесконечно)
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 1);

$response = curl_exec($ch);
curl_close($ch);

if ($response) {
    $row = json_decode($response);
    $message = "Актов не опубликовано";
    // количество неопубликованых актов
    $notPub = is_array($row) ? count($row):  0;
} else {
    $message = "";
    // сообщим об ошибке в $url
    $notPub = "Недоступен ГАС";
}

// URL страницы, с нарушениями сроковрассмотрения
$url = 'http://192.168.0.254:8079/api_GAS/deadlines.php?'. http_build_query($queryParams);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//ожидания при попытке подключения секунд (0 - бесконечно)
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 1);

$deadlines = curl_exec($ch);
curl_close($ch);

if ($deadlines) {
    $rowDeadlines = json_decode($deadlines);
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