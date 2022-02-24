<?php
$title = "Публикация судебных актов";

// параметры $_GET запроса
$queryParams = [
    'idJudge' => $userAtributes->data->idGAS ?? "",
];

$response = $autorizationClass::sendGET($queryParams, 'http://192.168.0.254:8079/api_GAS/publication-acts.php?');

if (!empty($response)) {
    $row = $response ?? array();
} else {
    $row = array();
    $value = new class {
        public $FULL_NUMBER = false;
        public $VERDICT_DATE = false;
        public $VALIDITY_DATE = false;
        public $DATE_UNTILL = false;
        public $STAT = false;
    };
}

ob_start();
    include "components/sudact/tpl.sudact.php";
    $content = ob_get_contents();
ob_end_clean();