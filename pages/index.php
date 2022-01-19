<?php
$title = "Главная страница";

$UserAttributes = new \Core\Model\UserAttributes($db);
$birthday = $UserAttributes->getBirthday();

/*$path = 'http://192.168.0.254:8079/api_GAS/oracle.php?idJudge=8500013';
$ourData = file_get_contents($path);
$row = json_decode($ourData);*/
$row = [
	"FULL_NUMBER" => "",
	"VERDICT_DATE"  => "",
	"VALIDITY_DATE"  => "",
	"DATE_UNTILL"  => "",
	"STAT"  => ""
];
$notPub = count($row);

ob_start();
include "components/index/template/tpl.index.php";
$content = ob_get_contents();
ob_end_clean();
