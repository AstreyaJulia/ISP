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

$params = [
    ':user' => $_COOKIE['aut']['id'],
    ':start' => $_GET['startParam'],
    ':end' => $_GET['endParam']
];
$FullcalendarClass = new \Core\Model\Fullcalendar($db);
$data = $FullcalendarClass->getEvents($params);

/*Дни рождения
    Выводить только активных пользователей
    Доделать статичный год 2021
    Расчитать возраст
*/
/*$events = $FullcalendarClass->getBirthday($_GET['startParam'], $_GET['endParam']);

foreach ($events as $key => $value) {
  $data = DateTime::createFromFormat('Y-m-d', $value->dob);
  $startParam = "2021-".$data->format('m-d');
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

if ($events) {
  echo json_encode($json, JSON_UNESCAPED_UNICODE);
} else {
  echo "[]";
}*/


// Передвать можно склько угодно данных, js обработает только те, которые указаны
foreach ($data as $myCalendar) {
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

if ($data) {
  echo json_encode($json, JSON_UNESCAPED_UNICODE);
} else {
  echo "[]";
}
