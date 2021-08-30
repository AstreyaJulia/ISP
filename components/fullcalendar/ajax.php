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



  $paramsAdd = $_POST;

  // Если в полученном post user_id = 999999999, то меняем на id пользователя из куки, ессли 0, то user_id =0
  if (isset($_POST['user_id']) and $paramsAdd['user_id'] !== 0) {
    $user_id = [
      'user_id' => $_COOKIE['aut']['id']
    ];
    $paramsAdd =array_replace($paramsAdd, $user_id);
  }

  //Записываем значение для использования в Switch`е
  $operation = isset($_POST['operation']) ? $_POST['operation'] : "";
  //Записываем значение для использования в запросе на обновление
  $id = isset($_POST['id']) ? $_POST['id'] : "";
  //Удаляем из массива 'operation' т.к. он используется для Switch
  unset($paramsAdd["operation"]);
  $paramsUpd = $paramsAdd;
  //unset($paramsAdd["id"]);




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
