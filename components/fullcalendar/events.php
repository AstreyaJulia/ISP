<?php

use Core\Config\DB;
use Core\Model\Fullcalendar;

spl_autoload_register(function($class) {
    require (mb_strtolower($_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', $class) . '.php'));
});
/*error_reporting(E_ALL);
ini_set("display_errors", "on");*/
//Параметры для подключения к базе
require_once $_SERVER['DOCUMENT_ROOT'] . "/conection.php";
//Подключаемся  базе
$db = new DB($dbname, $user, $password, $host);

$startParam = $_GET['startParam'] ?? ""; // тут и 2 строки ниже - вместо isset($_GET['startParam']) ? $_GET['startParam'] : ""
$endParam = $_GET['endParam'] ?? "";
$private = $_GET['private'] ?? "";
//Проверяем нажатие checkbox Private

//почитать тут: https://phpdelusions.net/pdo#in
$calendars = $_GET['calendars'];

$params = [
    'private' => $private,
    'user' => $_COOKIE['aut']['id'],
    'start' => $startParam,
    'end' => $endParam
];
//print_r($params);
$FullcalendarClass = new Fullcalendar($db);
//Получаем события из таблицы с событиями
$sdc_calendar = $FullcalendarClass->getEvents($params, $calendars);
//Переписываем массив для fullcaltndar
foreach ($sdc_calendar as $myCalendar) {
  if($myCalendar['freq'] === null) {
    $json[] = [
      'id' => $myCalendar['id'],
      'title' => $myCalendar['title'],
      'start' => $myCalendar['start'],
      'end' => $myCalendar['end'],
      'allDay' => $myCalendar['allDay'],
      'calendar' => $myCalendar['calendar'],
      'description' => $myCalendar['description'],
      'url' => $myCalendar['url'],
      'private' => $myCalendar['private'],
      'user_id' => $myCalendar['user_id'],
      'display' => $myCalendar['display']
    ];
  } else {
    $json[] = [
      'id' => $myCalendar['id'],
      'title' => $myCalendar['title'],
      'start' => $myCalendar['start'],
      'end' => $myCalendar['end'],
      'allDay' => $myCalendar['allDay'],
      'calendar' => $myCalendar['calendar'],
      'description' => $myCalendar['description'],
      'url' => $myCalendar['url'],
      'private' => $myCalendar['private'],
      'user_id' => $myCalendar['user_id'],
      'display' => $myCalendar['display'],
      'rrule' => [
        'freq' => $myCalendar['freq'],
        'tzid' => $myCalendar['tzid'],
        'count' => $myCalendar['count'],
        'interval' => $myCalendar['interval'],
        'dtstart' => $myCalendar['dtstart'],
        'until' => $myCalendar['until'],
        'bysetpos' => $myCalendar['bysetpos'],
        'byweekday' => FnByweekday($myCalendar['byweekday']),
        'bymonth' => $myCalendar['bymonth']
      ]
    ];
  }

}

//Получаем дни рождения из таблицы sdc_user_attributes
$birthday = $FullcalendarClass->getBirthday($startParam, $endParam);

foreach ($birthday as $key => $value) {
  //Собираем даты дней рождения для fullcalendar
  if (in_array(DateTime::createFromFormat('Y-m-d', $value->dob)->format('m'), ['01','02'])) {
    $startParamPrep = DateTime::createFromFormat('Y-m-d', $endParam)->format('Y')."-".DateTime::createFromFormat('Y-m-d', $value->dob)->format('m-d');
  }
  else {
    $startParamPrep = DateTime::createFromFormat('Y-m-d', $startParam)->format('Y')."-".DateTime::createFromFormat('Y-m-d', $value->dob)->format('m-d');
  }
  //Считаем возраст относительно даты в fullcalendar
  $age = DateTime::createFromFormat('Y-m-d', $startParamPrep)->format('Y') - DateTime::createFromFormat('Y-m-d', $value->dob)->format('Y');

  //Переписываем массив для fullcaltndar
  $json[] = [
    'title' => "День рождения",
    'start' => $startParamPrep,
    'end' => $startParamPrep,
    'allDay' => "1",
    'calendar' => 'danger',
    'description' => $value->fullname. ". Исполняется: ". $age,
    'user_id' => "0"
  ];
}

//Получаем праздничные и выходные дни отсюда: http://xmlcalendar.ru/data/ru/2021/calendar.json
if (in_array(DateTime::createFromFormat('Y-m-d', $startParam)->format('m'), ['12']) && in_array(DateTime::createFromFormat('Y-m-d', $endParam)->format('m'), ['01', '02'])) {
  $year = DateTime::createFromFormat('Y-m-d', $endParam)->format('Y');
}
else {
  $year = DateTime::createFromFormat('Y-m-d', $startParam)->format('Y');
}
//$path = 'http://xmlcalendar.ru/data/ru/'.$year.'/calendar.json';
$path = $_SERVER['DOCUMENT_ROOT'] . "/data/weekend/$year.json";
if (file_exists($path)) {
  $ourData = file_get_contents($path);
  $row = json_decode($ourData);

  foreach ($row->months as $value) {
    $days = explode(',', $value->days);
    foreach ($days as $day) {
      if ($day == rtrim($day, "*")){
              $title = "";
              $calendar = "danger";
      } else {
              $title = "Сокращенный рабочий день";
              $calendar = "warning";
      }

      $date = $row->year."-".addNol($value->month)."-".addNol(rtrim($day, "*"));
      $json[] = [
          'title' => $title,
          'start' => $date." 00:00:00",
          'end' => $date." 23:59:59",
          'allDay' => "1",
          'calendar' => $calendar,
          'display' => 'background'
      ];
    }
  }
}

// было
/*
if ($birthday) {
  echo json_encode($json, JSON_UNESCAPED_UNICODE);
} else {
  echo "[]";
}
*/

  echo json_encode($json, JSON_UNESCAPED_UNICODE);


//Создаёт из строки массив с разбивкой по ',' если строка пустая возвращает NULL
function FnByweekday($value){
  if ($value) {
    return explode(", ", $value);
  } else {
    return null;
  }
}

//Добавляем к месяцу и дню 0
function addNol($str) {
  if (strlen($str) == 1) {
    return '0'.$str;
  } else {
    return $str;
  }
}
