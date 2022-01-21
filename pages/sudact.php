<?php
$title = "Публикация судебных актов";

$UserAttributes = new \Core\Model\UserAttributes($db);
$birthday = $UserAttributes->getBirthday();

// параметры $_GET запроса
$queryParams = [
    'idJudge' => $_COOKIE["aut"]["idGAS"] ?? "",
];

// URL страницы, которую открываем
$url = 'http://192.168.0.254:8079/api_GAS/publication-acts.php?'. http_build_query($queryParams);

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