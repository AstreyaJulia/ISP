<?php

  $autorizationClass = new \Core\Model\Autorization($db);
  // Пишем логин из формы в переменную для удобства работы
  $login = $_POST['login'] ?? "";

if (!empty($_POST['login']) and !empty($_POST['password']) and array_key_exists('aut', $_POST)) {
  // Формируем и отсылаем SQL запрос:
  $user = $autorizationClass->getPassword($login);
  //Если пользователь с таким логином есть
  if (!empty($user)) {
    $hash = $user->password; // соленый пароль из БД
    // Проверяем соответствие хеша из базы введенному паролю
    if (password_verify($_POST['password'], $hash)) {
      // Пользователь прошел авторизацию запишем cookie
      $autorizationClass->setCookie($login);

    } else {
      // Пароль не подошел
      $error_pass = "Пароль не подошел";
    }
  } else {
      $error_login = "Неверный логин";
    }
  }

  //Регистрация пользователя
  if (!empty($_POST["login"]) and !empty($_POST["password"]) and !empty($_POST["passrep"]) and array_key_exists('reg', $_POST)) {
  // Если пароль и подтверждение совпадают...
    if ($_POST["password"] == $_POST["passrep"]) {
      $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
      // Если юзера с таким логином нет
      if (empty($autorizationClass->getUserActive($login))) {
        // Логина нет, выведем сообщение об этом
        $error_login = "Такого логина нет, либо он уже загегестрирован";
      } else {
        // Логин есть, записываем хэш пароль в бд
        $params = [
          'login' => $login,
          'password' => $password
        ];
        // Пишем пароль в базу
        $autorizationClass->setUserPassword($params);
        // Считаем что пользователь прошел регистрацию, запишем cookie
        $autorizationClass->setCookie($login);
      }
    } else {
      // Пароль и подтверждение НЕ совпадают - выведем сообщение
      $error_pass = "Пароли не совпадают(";
    }
  }
  if (array_key_exists('reg', $_GET)) {
    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.register.php";
  } else {
    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.autorization.php";
  }