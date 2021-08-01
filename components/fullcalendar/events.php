<?php
$start = microtime(true);
error_reporting(E_ALL);
ini_set("display_errors", "on");

$host = "192.168.2.111";
$user = "root";
$password = "";
$dbName = "isp";

$link = mysqli_connect($host, $user, $password, $dbName);
mysqli_query($link, "SET NAMES 'utf8'");

$query = "SELECT * FROM sdc_calendar ";
$result = mysqli_query($link, $query) or die(mysqli_error($link));
for ($data = []; $row = mysqli_fetch_assoc($result); $data[] = $row) ;

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
}
echo json_encode($json);
