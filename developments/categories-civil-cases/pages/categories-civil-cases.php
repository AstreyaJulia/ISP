<?php
	$title = "Ктегории гражданских дел";
	$info = "";
	// получаем данные из JSON файла 
/*	$ourData = file_get_contents("../../data/categories-civil-cases.json");
	$row = json_decode($ourData);
	ob_start();
		include "components/categories-civil-cases/template/tpl.categories-civil-cases.php";
		$content = ob_get_contents();
	ob_end_clean();*/



	$dsn = 'firebird:dbname=192.168.0.254:C:\Data\Justice\UNI_WORK2003.GDB;charset=utf8;';
	$username = 'SYSDBA';
	$password = 'm';
	try {
		// Подключение к БД
		$dbh = new \PDO($dsn, $username, $password, [\PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION]);
		$dat = date("d.m.Y");
		$sql = "SELECT c.prefix, c.name, c.parent_va_code, C.va_code FROM UNI_SHOW_CATEGORY323_TREE(CAST('$dat' AS DATE)) C";
		// Выполняем запрос
		$query = $dbh->query($sql);

		// Получаем результат построчно в виде объекта
		ob_start();
			include $_SERVER['DOCUMENT_ROOT']."/components/categories-civil-cases/template/tpl.categories-civil-cases.php";
			$content = ob_get_contents();
		ob_end_clean();
		$query->closeCursor(); // Закрываем курсор
	} catch (\PDOException $e) {
		echo $e->getMessage();
	}
