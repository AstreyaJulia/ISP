<?php

$start = microtime(true);
error_reporting(E_ALL);
ini_set("display_errors", "on");
//Параметры для подключения к базе
$host = 'isp';
$dbname = "isp";
$user = "root";
$password = "root";
//подключение к базе
$db = new \Core\Config\DB($dbname, $user, $password, $host);





$params = [
    ':user' => $_COOKIE['aut']['id'],
    ':start' => '2021-05-04 12:00:00',
    ':end' => '2021-09-04 12:00:00'
];
$data = new \Core\Model\Fullcalendar($db);
$data = $data->getEvents($params);



/*
foreach ($data as $myCalendar) {
  if (!empty($myCalendar['freq'])) {
    $json[] = array(
      'id' => $myCalendar['id'],
      'title' => $myCalendar['title'],
      'description' => $myCalendar['description'],
      'start' => $myCalendar['start'],
      'end' => $myCalendar['end'],
      'allDay' => $myCalendar['allDay'],
      'color' => $myCalendar['color'],
      'duration' => $myCalendar['duration'],
      'url' => $myCalendar['url']
    );
  } else {
    $json[] = array(
      'id' => $myCalendar['id'],
      'title' => $myCalendar['title'],
      'description' => $myCalendar['description'],
      'rrule' => array(
        'freq' => $myCalendar['freq'],
        'dtstart' => $myCalendar['start'],
        'until' => $myCalendar['end'],
        'tzid' => $myCalendar['tzid'],
        'count' => $myCalendar['count'],
        'interval' => $myCalendar['interval'],
        'byweekday' => $myCalendar['byweekday'],
        'bymonth' => $myCalendar['bymonth']
      ),
      'color' => $myCalendar['color'],
      'duration' => $myCalendar['duration'],
      'url' => $myCalendar['url']
    );
  }
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

echo json_encode($json, JSON_UNESCAPED_UNICODE);
