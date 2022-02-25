<?php
$title = "Не рассмотренные дела";

// параметры $_GET запроса
$queryParams = [
    'idJudge' => $userAtributes->data->idGAS ?? "",
];

$response = $autorizationClass::sendGET($queryParams, 'http://192.168.0.254:8079/api_GAS/not-reviewed.php?');

if (!empty($response)) {
    $row = $response ?? array();
} else {
    $row = array();
    $value = new class {
        public $CASE_NUM = false;
        public $PARTS_NAMES = false;
        public $LAST_EVENT_DATE = false;
        public $LAST_EVENT = false;
        public $INFO = false;
    };
}

ob_start();
    include "components/not-reviewed/tpl.not-reviewed.php";
    $content = ob_get_contents();
ob_end_clean();