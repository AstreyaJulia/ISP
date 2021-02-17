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
	$title = "Авторизация пользователя";

	if (!empty($_POST['login']) and !empty($_POST['password'])) {
		// Пишем логин из формы в переменную для удобства работы:
		$login = $_POST['login'];
		// Формируем и отсылаем SQL запрос:
		$query = "SELECT * FROM sdc_users WHERE username='$login'";
		$result = mysqli_query($link, $query) or die (mysqli_error($link));
		// Преобразуем ответ из БД в нормальный массив PHP:
		$user = mysqli_fetch_assoc($result);
		//Если пользователь с таким логином есть
		if (!empty($user)) {
			$hash = $user['password']; // соленый пароль из БД
			// Проверяем соответствие хеша из базы введенному паролю
			if (password_verify($_POST['password'], $hash)) {
				// Пользователь прошел авторизацию, запишем setcookie
				setcookie("aut[id]","$user[id]", time() + 3600*24*30);
				setcookie("aut[login]","$login", time() + 3600*24*30);
				setcookie("aut[active]","$user[active]", time() + 3600*24*30);
				setcookie("aut[primary_group]","$user[primary_group]", time() + 3600*24*30);
				setcookie("aut[sudo]","$user[sudo]", time() + 3600*24*30);
				header( "refresh:1;url=/" );
			} else {
				// Пароль не подошел
				echo "Пароль не подошел";
			}	
		} else {
			// Пользователь неверно ввел логин - удаляем cookie
			setcookie ("aut[id]", "", time() - 3600, "/");
			setcookie ("aut[login]", "", time() - 3600, "/");
			setcookie ("aut[active]", "", time() - 3600, "/");
			setcookie ("aut[primary_group]", "", time() - 3600, "/");
			setcookie ("aut[sudo]", "", time() - 3600, "/");
			echo 'Неверный логин';
		}
	}
	//Смотрим cookie
	if (isset($_COOKIE['aut'])) {
	    foreach ($_COOKIE['aut'] as $name => $value) {
	        $name = htmlspecialchars($name);
	        $value = htmlspecialchars($value);
	        echo "$name. $value <br />";
    	}
	}

?>

	<form action="" method="POST">
		<input name="login" placeholder="Логин" value="<?=@$_POST['login']?>">
		<input name="password" type="password" placeholder="Пароль">
		<input type="submit" value="Отправить">
	</form>

