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

	// собираем массив для запроса
	if (isset($_GET["filter"])) {
	  $primary_group = explode(',', $_GET["filter"]);
	}

	$phonebookClass = new \Core\Model\Phonebook($db);
	$phonebook = $phonebookClass->getSelect($primary_group);

	foreach ($phonebook as $row) {
	  echo '<tr>
		<td>' . $row->room . '</td>
		<td>' . $row->fullname . '</td>
		<td>' . $row->profession . '</td>
		<td>' . $row->phone_worck . '</td>
	</tr>' . PHP_EOL;
	}