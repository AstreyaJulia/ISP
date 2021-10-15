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
      $upd = $user->setUpd($sidebar, $_COOKIE['aut']['id']);
      break;
    }
  }
}