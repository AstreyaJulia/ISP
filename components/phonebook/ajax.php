<?php
// включаем автозагрузку классов
spl_autoload_register(function($class) {
	require (mb_strtolower($_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', $class) . '.php'));
});
error_reporting(E_ALL);
ini_set("display_errors", "on");
//подключаемся к базе
require_once $_SERVER['DOCUMENT_ROOT'] . "/conection.php";
//подключаем функции
require_once $_SERVER["DOCUMENT_ROOT"] . "/core/extension/custom_functions.php";
//подключаем справочники
require_once $_SERVER["DOCUMENT_ROOT"] . "/core/extension/reference_book.php";

//Подключаемся  базе
$db = new \Core\Config\DB($dbname, $user, $password, $host);

$primary_group = "";
if (isset($_GET["filter"])) {
  foreach ($_GET["filter"] as $key => $value) {
    if ($_GET["filter"] [$key][0] != 0) {
      $primary_group .= $_GET["filter"] [$key][0] . ",";
    }
  }
}
//отрезаем последний символ т.к. знаем что это ","
$primary_group = substr($primary_group, 0, -1);
//получаем массив из полученной строки
$primary_group = explode(',', $primary_group);


$phonebookClass = new \Core\Model\Phonebook($db);
$phonebook = $phonebookClass->getSelect($primary_group);


foreach ($phonebook as $row) {
  echo '<tr>
	<td>' . $phonebookClass->getPositionPhonebook($row->position) . '</td>
	<td>' . shortFIO($row->fullname) . '</td>
	<td>' . $phonebookClass->getProfessionPhonebook($row->profession) . '</td>
	<td>' . $row->phone_worck . '</td>
</tr>' . PHP_EOL;
}
