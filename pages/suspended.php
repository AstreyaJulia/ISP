<?php
$title = "Не рассмотренные дела приостановленные";

// параметры $_GET запроса
$queryParams = [
    'idJudge' => $userAtributes->data->idGAS ?? "",
];

$response = $autorizationClass::sendGET($queryParams, $api_gas.'suspended.php?');

if (!empty($response)) {
    $row = $response ?? array();
} else {
    $row = array();
    $value = new class {
        public $CASE_NUM = false;
        public $PARTS_NAMES = false;
        public $STOP_DATE = false;
        public $REASON = false;
        public $INFO = false;
    };
}

ob_start();
    include "components/suspended/tpl.suspended.php";
    $content = ob_get_contents();
ob_end_clean();