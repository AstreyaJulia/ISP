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

if (isset($_POST['module']) or isset($_GET['module'])) {
  //Записываем значение для использования в Switch`е
  $module = isset($_POST['module']) ? $_POST['module'] : $_GET['module'];
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
    case 'workplaces': {
      // Вызываем класс
      $room = new \Core\Model\Room($db);
      function buildTree(array $elements, $parentId = NULL) {
        $branch = array();
        foreach ($elements as $element) {
            if ($element['affiliation'] == $parentId) {
              $arr_elem = [
                'id' => $element['id'],
                'name' => $element['name'],
                'icon' => '../../assets/img/icons/'.$element['icon'].'.png',
                'open' => ($element['affiliation'] == NULL) ? true : false
              ];
              $children = buildTree($elements, $arr_elem['id']);
              if ($children) {
                  $arr_elem['children'] = $children;
              }
              $branch[] = $arr_elem;
            }
        }
        return $branch;
      }
      echo json_encode(buildTree($room->getRoom()), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
      break;
    }
  }
}