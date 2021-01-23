<?php
	$start = microtime(true); 
	error_reporting(E_ALL);
	ini_set("display_errors", "on");

	$host = "localhost";
	$user = "chainik";
	$password = "qwer";
	$dbName = "isp";

	$link = mysqli_connect($host, $user, $password, $dbName);
	mysqli_query($link, "SET NAMES 'utf8'");

	$info = "";
	
	if (isset($_GET["page"])) {
		$page = $_GET["page"];
	} else {
		$page = "index";
	}

	$path = "pages/$page.php";
	if (file_exists($path) and $page != "404"){
		$content_page = file_get_contents($path);
		include $path;
		include "layout.php";
	} else {
		//$content = file_get_contents("pages/404.php");
		header("HTTP/1.0 404 Not Found");
		$title = "Ошибка на странице";
		$content = "Извините, произошла ошибка, Запрашиваемая страница не найдена!";
		include "pages/404.php"; 
	}
	



	





	echo '<div style="text-align:right;">Время выполнения скрипта: '.(microtime(true) - $start).' сек.</div>';



