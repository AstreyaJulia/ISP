<?php
$title = "Главная страница";

$UserAttributes = new \Core\Model\UserAttributes($db);
$birthday = $UserAttributes->getBirthday();


$url_file = "http://192.168.0.254:8079/api_GAS/oracle.php?idJudge=8500013";
$file_headers = @get_headers($url_file);

if ($file_headers) {
    $ourData = file_get_contents("http://192.168.0.254:8079/api_GAS/oracle.php?idJudge=8500013");
    $row = json_decode($ourData);
    $notPub = count($row);
} else {
    $notPub = "Что-то пошло не так";
}
// количество неопубликованых актов

ob_start();
include "components/index/template/tpl.index.php";
$content = ob_get_contents();
ob_end_clean();