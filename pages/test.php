<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";

$FullcalendarClass = new \Core\Model\Fullcalendar($db);


$startParam = "1957-12-01";
$data = DateTime::createFromFormat('Y-m-d', $startParam);
$startParam = $data->format('m');

$endParam = "1957-12-01";
$data = DateTime::createFromFormat('Y-m-d', $endParam);
$endParam = $data->format('m');




$params = [$startParam, $endParam];


$title = "День рождения";
$description = "Фамилия И.О. возраст";

$events = $FullcalendarClass->getBirthday($params);

var_dump($events);









    $content = $data->format('m');











/*ob_start();
include "components/test/template/tpl.test.php";
$content = ob_get_contents();
ob_end_clean();*/