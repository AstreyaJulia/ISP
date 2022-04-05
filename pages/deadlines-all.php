<?php
$title = "Нарушение сроков рассмотрения";

// параметры $_GET запроса
$queryParams = [
    'idJudge' => $userAtributes->data->idGAS ?? "",
];

$response = $autorizationClass::sendGET($queryParams, 'http://192.168.0.254:8079/api_GAS/deadlines-all.php?');

if (!empty($response)) {
    $row = $response ?? array();
} else {
    $row = array();
    $value = new class {
        public $CASE_NUMBER = false;
        public $PARTS_FIO = false;
        public $CAT = false;
        public $DATE_RASSM = false;
    };
}

ob_start();
    include "components/deadlines/tpl.deadlines.php";
    $content = ob_get_contents();
ob_end_clean();