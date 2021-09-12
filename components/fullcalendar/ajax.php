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

if (isset($_POST['operation'])) {
  //Записываем значение для использования в Switch`е
  $operation = $_POST['operation'];
  //Удаляем из массива 'operation' т.к. он используется для Switch
  unset($_POST["operation"], $_POST["duration"]);

  $paramsAdd = $_POST;

  switch ($operation) {
    case 'add':
      $add = $FullcalendarClass->setInsertEvents($paramsAdd);
      break;
    case 'upd': {
      //Подгоавливаем массив для изменения записи
      foreach ($paramsAdd as $key => $value) {
        //Проверка для $value. Если нет значения: везде NULL кроме url, description
        if (in_array($key, ['url', 'description'])){
          $value = !empty($value) ? $value : "";
        } else if (in_array($key, ['user_id', 'private'])) {
          $value = !empty($value) ? $value : 0;
        } else {
          $value = !empty($value) ? $value : NULL;
        }
        //Записываем подготовленный $params
        $paramsUpd[$key] = $value;
      }
      $upd = $FullcalendarClass->setUpdateEvents($paramsUpd);
      break;
    }
    case 'del':
      $del = $FullcalendarClass->setDelEvents([$_POST['id']]);
      break;
  }
}