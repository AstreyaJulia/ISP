<?php
// включаем автозагрузку классов
spl_autoload_register(function ($class) {
  require(mb_strtolower($_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', $class) . '.php'));
});
error_reporting(E_ALL);
ini_set("display_errors", "on");
//подключаемся к базе
require_once $_SERVER['DOCUMENT_ROOT'] . "/conection.php";

//Подключаемся  базе
$db = new \Core\Config\DB($dbname, $user, $password, $host);
//Вызываем класс Fullcalendar
$FullcalendarClass = new \Core\Model\Fullcalendar($db);


$operation = isset($_POST['operation']) ? $_POST['operation'] : "";
$id = isset($_POST['id']) ? $_POST['id'] : "";
$title = isset($_POST['title']) ? $_POST['title'] : "";
$start = isset($_POST['start']) ? $_POST['start'] : "";
$end = isset($_POST['end']) ? $_POST['end'] : "";
$calendar = isset($_POST['calendar']) ? $_POST['calendar'] : "";
$description = isset($_POST['description']) ? $_POST['description'] : "";
$url = isset($_POST['url']) ? $_POST['url'] : "";
$user_id = isset($_POST['user_id']) ? $_POST['user_id'] : "";
$allDay = isset($_POST['allDay']) ? $_POST['allDay'] : "";
$freq = isset($_POST['freq']) ? $_POST['freq'] : "";
$dtstart = isset($_POST['dtstart']) ? $_POST['dtstart'] : "";
$tzid = isset($_POST['tzid']) ? $_POST['tzid'] : "";
$until = isset($_POST['until']) ? $_POST['until'] : "";
$count = isset($_POST['count']) ? $_POST['count'] : "";
$interval = isset($_POST['interval']) ? $_POST['interval'] : "";
$display = isset($_POST['display']) ? $_POST['display'] : "";

// Если в полученном post user_id = 999999999, то меняем на id пользователя из куки, ессли 0, то user_id =0
switch ($user_id) {
  case 999999999:
    $user_id = $_COOKIE['aut']['id'];
    break;
  case 0:
    $user_id = "0";
    break;
}

$paramsAdd = [
  ':title' => $title,
  ':start' => $start,
  ':end' => $end,
  ':calendar' => $calendar,
  ':description' => $description,
  ':url' => $url,
  ':user_id' => $user_id,
  ':allDay' => $allDay,
  ':freq' => $freq,
  ':dtstart' => $dtstart,
  ':tzid' => $tzid,
  ':until' => $until,
  ':count' => $count,
  ':interval' => $interval,
  ':display' => $display
];

$paramsUpd = [
  ':id' => $id,
  ':title' => $title,
  ':start' => $start,
  ':end' => $end,
  ':calendar' => $calendar,
  ':description' => $description,
  ':url' => $url,
  ':user_id' => $user_id,
  ':allDay' => $allDay
];

switch ($operation) {
  case 'add':
    $add = $FullcalendarClass->setInsertEvents($paramsAdd);
    break;
  case 'upd':
    $upd = $FullcalendarClass->setUpdateEvents($paramsUpd);
    break;
  case 'del':
    $del = $FullcalendarClass->setDelEvents([$id]);
    break;
}
