<?php
	//Подключение с обработкой ошибок подключения
	try {
		$link = new PDO('mysql:host=сервер;dbname=имя_бд;charset=utf8mb4', 'логин', 'пароль');
		$link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    		$link->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	} catch (PDOException $e) {
		print "Error!: " . $e->getMessage();
		die();
	}
