<?php
$start = microtime(true);
error_reporting(E_ALL);
ini_set("display_errors", "on");

$host = "isp";
$user = "root";
$password = "root";
$dbName = "isp";

$link = mysqli_connect($host, $user, $password, $dbName);
mysqli_query($link, "SET NAMES 'utf8'");

// Нужно добавить отбор по пользователю (показываются с user_id = 0, и только с своим user_id)
// Нужно добавить отбор по календарю calendar

$user = $_COOKIE['aut']['id'];

$query = "SELECT * FROM sdc_calendar where user_id in (0, $user)";
$result = mysqli_query($link, $query) or die(mysqli_error($link));
for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row) ;

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

echo json_encode($json);
