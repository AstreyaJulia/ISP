<?php
$title = "Нарушение сроков рассмотрения";

// параметры $_GET запроса
$queryParams = [
    'idJudge' => $userAtributes->data->idGAS ?? "",
];

// URL страницы, которую открываем
$url = 'http://192.168.0.254:8079/api_GAS/deadlines.php?'. http_build_query($queryParams);

$ch = curl_init($url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
//ожидание при попытке подключения, секунд (0 - бесконечно)
curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 1);

$response = curl_exec($ch);
curl_close($ch);

if (!empty($response)) {
    $row = json_decode($response) ?? array();
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