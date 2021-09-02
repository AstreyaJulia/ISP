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

  
  // Если в полученном post user_id = 999999999, то меняем на id пользователя из куки, ессли 0, то user_id = 0
  if ($_POST['user_id'] == 'true') {
    $user_id = [
      'user_id' => $_COOKIE['aut']['id']
    ];
    $paramsAdd = array_replace($_POST, $user_id);
  } else {
    $user_id = [
      'user_id' => 0
    ];
    $paramsAdd = array_replace($_POST, $user_id);
  }

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
        } else {
          $value = !empty($value) && $value !== 0 ? $value : NULL;
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