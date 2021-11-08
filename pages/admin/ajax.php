<?php

$start = microtime(true);
spl_autoload_register(function($class) {
    require (mb_strtolower($_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', $class) . '.php'));
});

error_reporting(E_ALL);
ini_set("display_errors", "on");
//Параметры для подключения к базе
require_once $_SERVER['DOCUMENT_ROOT'] . "/conection.php";
//Подключаемся  базе
$db = new \Core\Config\DB($dbname, $user, $password, $host);

if (isset($_POST['module'])) {
  //Записываем значение для использования в Switch`е
  $module = $_POST['module'];
  //Удаляем из массива 'operation' т.к. он используется для Switch
  unset($_POST["module"]);

  switch ($module) {
    case 'sidebar': {
      // Вызываем класс
      $user = new \Core\Model\User($db);
      $sidebar = ($_POST['sidebarWidth'] == 'narrow') ? 0 : 1;
      $upd = $user->setUpd($module, $sidebar, $_COOKIE['aut']['id']);
      break;
    }
    case 'theme': {
      // Вызываем класс
      $user = new \Core\Model\User($db);
      $theme = ($_POST['theme'] == 'main-dark') ? 0 : 1;
      $upd = $user->setUpd($module, $theme, $_COOKIE['aut']['id']);
      break;
    }
  }
}

if (isset($_GET['test'])) {
  $room = new \Core\Model\Room($db);
  echo '<pre>';
  print_r($room->getRoomNew());
}
