<?php
$title = "Главная страница";

$UserAttributes = new \Core\Model\UserAttributes($db);
$birthday = $UserAttributes->getBirthday();

// параметры $_GET запроса
$queryParams = [
    'idJudge' => $userAtributes->data->idGAS ?? "",
];

// Публикации БСР
$response = $autorizationClass::sendGET($queryParams, $api_gas.'publication-acts.php?');

if($response) {

    $row = $response;
    $message = "Актов не опубликовано";
        // количество неопубликованых актов
    $notPub = is_array($row) ? count($row):  0;

    // Нарушение сроков
    $messageDeadlines = "Нарушено сроков";
    // количество неопубликованых актов
    $deadlines = is_array($autorizationClass::sendGET($queryParams, $api_gas.'deadlines.php?')) ? count($autorizationClass::sendGET($queryParams, $api_gas.'deadlines.php?')):  0;

    // Не рассмотренные дела приостановленные
    $suspended = $autorizationClass::sendGET($queryParams, $api_gas.'suspended.php?');
    $suspendedCount = is_array($suspended) ? count($suspended) : "";

    // Не рассмотренные дела без движения
    $motionless = $autorizationClass::sendGET($queryParams, $api_gas.'motionless.php?');
    $motionlessCount = is_array($motionless) ? count($motionless) : "";

    // Не рассмотренные дела
    $motionlessNotReviewed = $autorizationClass::sendGET($queryParams, $api_gas.'not-reviewed.php?');
    $motionlessNotReviewedCount = is_array($motionlessNotReviewed) ? count($motionlessNotReviewed) : "";

} else {
    // выводим ошибку если ГАС недоступен
    $message = "";
        // сообщим об ошибке в $url
    $notPub = "Недоступен ГАС";

    // выводим ошибку если ГАС недоступен
    $messageDeadlines = "";
    $deadlines = "";

    $suspendedCount = "";
    $motionlessCount  = "";
    $motionlessNotReviewedCount  = "";

}

// подключаем шаблон
ob_start();
    include "components/index/template/tpl.index.php";
    $content = ob_get_contents();
ob_end_clean();