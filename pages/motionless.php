<?php
$title = "Не рассмотренные дела без движения";

// параметры $_GET запроса
$queryParams = [
    'idJudge' => $userAtributes->data->idGAS ?? "",
];

$response = $autorizationClass::sendGET($queryParams, $api_gas.'motionless.php?');

if (!empty($response)) {
    $row = $response ?? array();
} else {
    $row = array();
    $value = new class {
        public $CASE_NUM = false;
        public $PARTS_NAMES = false;
        public $STOP_DATE = false;
        public $CONTROL_DATE = false;
        public $INFO = false;
    };
}

ob_start();
    include "components/motionless/tpl.motionless.php";
    $content = ob_get_contents();
ob_end_clean();