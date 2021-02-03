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




if (!empty($_POST['password']) and !empty($_POST['login'])) {
		
		// Пишем логин и пароль из формы в переменные для удобства работы:
		$login = $_POST['login'];
		$password = $_POST['password'];
		
		// Формируем и отсылаем SQL запрос:
		$query = "SELECT * FROM sdc_users WHERE username='$login' AND password='$password'";
		$result = mysqli_query($link, $query) or die (mysqli_error($link));
		
		// Преобразуем ответ из БД в нормальный массив PHP:
		$user = mysqli_fetch_assoc($result);
		if (!empty($user)) {
			// Пользователь прошел авторизацию, выполним какой-то код
			setcookie("aut[id]","$user[id]", time() + 3600*24*30);
			setcookie("aut[login]","$login", time() + 3600*24*30);
			setcookie("aut[password]","$password", time() + 3600*24*30);
			setcookie("aut[active]","$user[active]", time() + 3600*24*30);
			setcookie("aut[primary_group]","$user[primary_group]", time() + 3600*24*30);
			setcookie("aut[sudo]","$user[sudo]", time() + 3600*24*30);
			echo "авторизован";
		} else {
			// Пользователь неверно ввел логин или пароль, выполним какой-то код
			setcookie ("aut[id]", "", time() - 3600);
			setcookie ("aut[login]", "", time() - 3600);
			setcookie ("aut[password]", "", time() - 3600);
			setcookie ("aut[active]", "", time() - 3600);
			setcookie ("aut[primary_group]", "", time() - 3600);
			setcookie ("aut[sudo]", "", time() - 3600);
			echo 'Не авторизован';
		}

	}
	if (isset($_COOKIE['aut'])) {
	    foreach ($_COOKIE['aut'] as $name => $value) {
	        $name = htmlspecialchars($name);
	        $value = htmlspecialchars($value);
	        echo "$name. $value <br />";
    	}
	}
?>
<form action="test.php" method="POST">
	<input name="login">
	<input name="password" type="password">
	<input type="submit" value="Отправить">
</form>

