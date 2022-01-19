<?php
$title = "Главная страница";

$UserAttributes = new \Core\Model\UserAttributes($db);
$birthday = $UserAttributes->getBirthday();

if (file_exists("http://192.168.0.254:8079/api_GAS/oracle.php?idJudge=8500013")) {
	$ourData = file_get_contents("http://192.168.0.254:8079/api_GAS/oracle.php?idJudge=8500013");
	$row = json_decode($ourData);
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
// количество неопубликованых актов
$notPub = count($row);
ob_start();
include "components/index/template/tpl.index.php";
$content = ob_get_contents();
ob_end_clean();