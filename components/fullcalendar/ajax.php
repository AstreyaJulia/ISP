<?php
// включаем автозагрузку классов
spl_autoload_register(function($class) {
  require (mb_strtolower($_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', $class) . '.php'));
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
  $title = isset($_POST['title']) ? $_POST['title'] : "";
  $start = isset($_POST['start']) ? $_POST['start'] : "";
  $end = isset($_POST['end']) ? $_POST['end'] : "";
  $calendar = isset($_POST['calendar']) ? $_POST['calendar'] : "";
  $description = isset($_POST['description']) ? $_POST['description'] : "";
  $url = isset($_POST['url']) ? $_POST['url'] : "";
  $user_id = isset($_POST['user_id']) ? $_POST['user_id'] : "";
  $allDay = isset($_POST['allDay']) ? $_POST['allDay'] : "";

  // Если в полученном post user_id = 999999999, то меняем на id пользователя из куки, ессли 0, то user_id =0
    switch ($user_id) {
      case 999999999:
        $user_id = $_COOKIE['aut']['id'];
        break;
      case 0:
        $user_id = "0";
        break;
    }

    $params = [
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
            $FullcalendarClass->setInsertEvents($params);
        case 1:
            echo "i равно 1";
            break;
        case 2:
            echo "i равно 2";
            break;
    }