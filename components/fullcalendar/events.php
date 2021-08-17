<?php
spl_autoload_register(function($class) {
    require (mb_strtolower($_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', $class) . '.php'));
});
error_reporting(E_ALL);
ini_set("display_errors", "on");
//Параметры для подключения к базе
require_once $_SERVER['DOCUMENT_ROOT'] . "/conection.php";
//Подключаемся  базе
$db = new \Core\Config\DB($dbname, $user, $password, $host);

$startParam = isset($_GET['startParam']) ? $_GET['startParam'] : "";
$endParam = isset($_GET['endParam']) ? $_GET['endParam'] : "";

$params = [
    ':user' => $_COOKIE['aut']['id'],
    ':start' => $startParam,
    ':end' => $endParam
];
$FullcalendarClass = new \Core\Model\Fullcalendar($db);
$sdc_calendar = $FullcalendarClass->getEvents($params);

// Передвать можно склько угодно данных, js обработает только те, которые указаны
foreach ($sdc_calendar as $myCalendar) {
  $json[] = [
    'id' => $myCalendar['id'],
    'title' => $myCalendar['title'],
    'start' => $myCalendar['start'],
    'end' => $myCalendar['end'],
    'allDay' => $myCalendar['allDay'],
    'calendar' => $myCalendar['calendar'],
    'description' => $myCalendar['description'],
    'url' => $myCalendar['url'],
    'user_id' => $myCalendar['user_id']
  ];
}



/*Дни рождения
    Выводить только активных пользователей
    Доделать дни рождения для декабля
    Расчитать возраст
*/ 








$birthday = $FullcalendarClass->getBirthday($startParam, $endParam);

foreach ($birthday as $key => $value) {
  $paramBirthday = DateTime::createFromFormat('Y-m-d', $value->dob)->format('m-d');

  if (DateTime::createFromFormat('Y-m-d', $startParam)->format('m-d') > DateTime::createFromFormat('Y-m-d', $endParam)->format('m-d') and ($paramBirthday <= "01-31")) {
    $startParam = DateTime::createFromFormat('Y-m-d', $endParam)->format('Y')."-".$paramBirthday;
  } else {
    $startParam = DateTime::createFromFormat('Y-m-d', $startParam)->format('Y')."-".$paramBirthday;
  }



  
  $json[] = [
    'td' => "",
    'title' => "День рождения",
    'start' => $startParam,
    'end' => $startParam,
    'allDay' => "1",
    'calendar' => 'Danger',
    'description' => $value->fullname. ". Возраст: ",
    'url' => "",
    'user_id' => "0"
  ];
}

if ($birthday) {
  echo json_encode($json, JSON_UNESCAPED_UNICODE);
} else {
  echo "[]";
}




