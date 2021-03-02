<?php
	$host = "localhost";
	$user = "chainik";
	$password = "qwer";
	$dbName = "isp";

	$link = mysqli_connect($host, $user, $password, $dbName);
	mysqli_query($link, "SET NAMES 'utf8'");
//проверим заполнены ли поля перед отправкой
	if (!empty($_POST["name_href"]) and !empty($_POST["menuindex"]) and !empty($_POST["proxy_href"])) {
		$menuindex = $_POST["menuindex"];
		$name_href = $_POST["name_href"];
		$proxy_href = $_POST["proxy_href"];

		// добавляем новую запись
		$query = "INSERT INTO sdc_proxy_list SET menuindex = '$menuindex', name_href = '$name_href', proxy_href = '$proxy_href'";
		mysqli_query($link, $query);
	}

	if (!empty($_GET[edit])) {
		echo "я get-параметр";
	}
