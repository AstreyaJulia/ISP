<?php
	//Подключение с обработкой ошибок подключения
	try {
		$link = new PDO('mysql:host=isp;dbname=isp;charset=utf8mb4', 'root', 'root');
		$link->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
    		$link->setAttribute(PDO::ATTR_EMULATE_PREPARES, false);
	} catch (PDOException $e) {
		print "Error!: " . $e->getMessage();
		die();
	}
