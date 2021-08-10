<?php
spl_autoload_register(function($class) {
    require (mb_strtolower($_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', $class) . '.php'));
});
//Параметры для подключения к базе
require_once $_SERVER['DOCUMENT_ROOT'] . "/conection.php";
//Подключаемся  базе
$db = new \Core\Config\DB($dbname, $user, $password, $host);


$params = [
    ':user' => $_COOKIE['aut']['id'],
    ':start' => $_GET['startParam'],
    ':end' => $_GET['endParam']
];
$data = new \Core\Model\Fullcalendar($db);
$data = $data->getEvents($params);



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