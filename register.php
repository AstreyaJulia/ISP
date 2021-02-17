<?php

	error_reporting(E_ALL);
	ini_set("display_errors", "on");

	$host = "localhost";
	$user = "chainik";
	$password = "qwer";
	$dbName = "isp";

	$link = mysqli_connect($host, $user, $password, $dbName);
	mysqli_query($link, "SET NAMES 'utf8'");

	// Если форма регистрации отправлена...
	if (!empty($_POST["login"]) and !empty($_POST["password"]) and !empty($_POST["confirm"])) {
		// Если пароль и подтверждение совпадают...
		if ($_POST["password"] == $_POST["confirm"]) {
			// Пишем логин и пароль из формы в переменные для удобства работы:
			$login = $_POST["login"];
			$password = password_hash($_POST['password'], PASSWORD_DEFAULT);
			// Пробуем получить юзера с таким логином
			$query = "SELECT * FROM sdc_users WHERE username='$login'";
			$user = mysqli_fetch_assoc(mysqli_query($link, $query));
			// Если юзера с таким логином нет
			if (empty($user)) {
				// Логина нет, выведем сообщение об этом
				echo "Такого логина нет";
			} else {
				// Логин есть, Формируем и отсылаем SQL запрос:
				$query = "UPDATE sdc_users SET password='$password' WHERE username='$login'";
				mysqli_query($link, $query);
				// Пользователь прошел авторизацию, запишем cookie
				setcookie("aut[id]","$user[id]", time() + 3600*24*30);
				setcookie("aut[login]","$login", time() + 3600*24*30);
				setcookie("aut[active]","$user[active]", time() + 3600*24*30);
				setcookie("aut[primary_group]","$user[primary_group]", time() + 3600*24*30);
				setcookie("aut[sudo]","$user[sudo]", time() + 3600*24*30);
				//переходим на главную страницу
				header( "refresh:1;url=/" );
			}
		} else {
			// Пароль и подтверждение НЕ совпадают - выведем сообщение
			echo "Пароли не совпадают(";
		}
	} else {
		echo "Зарегистрируйтесь";
	}
?>
	<form action="" method="POST">
		<input name="login" placeholder="Введите логин" value="<?=@$_POST['login']?>">
		<input name="password" type="password" placeholder="Введите пароль">
		<input name="confirm" type="password" placeholder="Введите пароль ещё раз">
		<input type="submit" value="Регистрация">
	</form>