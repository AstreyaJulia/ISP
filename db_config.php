<?php
	//Подключение с бработкой ошибок подключения
	try {
		$link = new PDO('mysql:host=сервер;dbname=имя бд;charset=utf8mb4', 'логин', 'пароль');
	} catch (PDOException $e) {
		print "Error!: " . $e->getMessage();
		die();
	}