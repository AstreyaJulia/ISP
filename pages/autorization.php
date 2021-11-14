<?php

if (!empty($_POST['login']) and !empty($_POST['password']) and array_key_exists('aut', $_POST)) {
  // Пишем логин из формы в переменную для удобства работы:
  $login = $_POST['login'];
  // Формируем и отсылаем SQL запрос:
  $user = $db->run("SELECT * FROM sdc_users WHERE `username` = ?",[$login])->fetch(\PDO::FETCH_LAZY);
  //Если пользователь с таким логином есть
  if (!empty($user)) {
    $hash = $user->password; // соленый пароль из БД
    // Проверяем соответствие хеша из базы введенному паролю
    if (password_verify($_POST['password'], $hash)) {
      // Пользователь прошел авторизацию получим fullname
      $user_attributes = $db->run("SELECT fullname FROM sdc_user_attributes WHERE `internalKey` = ?",[$user->id])->fetch(\PDO::FETCH_LAZY);
      //запишем setcookie
      setcookie("aut[id]", "$user->id", time() + 3600 * 24 * 30);
      setcookie("aut[login]", "$login", time() + 3600 * 24 * 30);
      setcookie("aut[fullname]", "$user_attributes->fullname", time() + 3600 * 24 * 30);
      setcookie("aut[active]", "$user->active", time() + 3600 * 24 * 30);
      setcookie("aut[primary_group]", "$user->primary_group", time() + 3600 * 24 * 30);
      setcookie("aut[sudo]", "$user->sudo", time() + 3600 * 24 * 30);
      header("refresh:1;url=/");
    } else {
      // Пароль не подошел
      $error_pass = "Пароль не подошел";
    }
  } else {
      // Пользователь неверно ввел логин - удаляем cookie
      setcookie("aut[id]", "", time() - 3600, "/");
      setcookie("aut[login]", "", time() - 3600, "/");
      setcookie("aut[fullname]", "", time() - 3600, "/");
      setcookie("aut[active]", "", time() - 3600, "/");
      setcookie("aut[primary_group]", "", time() - 3600, "/");
      setcookie("aut[sudo]", "", time() - 3600, "/");
      $error_login = "Неверный логин";
    }
  }

  //Регистрация пользователя
  if (!empty($_POST["login"]) and !empty($_POST["password"]) and !empty($_POST["passrep"]) and array_key_exists('reg', $_POST)) {
  // Если пароль и подтверждение совпадают...
    if ($_POST["password"] == $_POST["passrep"]) {
      // Пишем логин и пароль из формы в переменные для удобства работы:
      $login = $_POST["login"];
      $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
      // Пробуем получить юзера с таким логином
      $user = $db->run("SELECT * FROM sdc_users WHERE `username` = ? AND password = ''",[$login])->fetch(\PDO::FETCH_LAZY);

      // Если юзера с таким логином нет
      if (empty($user)) {
        // Логина нет, выведем сообщение об этом
        $error_login = "Такого логина нет, либо он уже загегестрирован";
      } else {

        // Пользователь прошел авторизацию получим fullname
        $user_attributes = $db->run("SELECT fullname FROM sdc_user_attributes WHERE `internalKey` = ?",[$user->id])->fetch(\PDO::FETCH_LAZY);
        // Логин есть, записываем хэш пароль в бд
        $params = [
          ':login' => $login,
          ':password' => $password
        ];
        $user_attributes = $db->run("UPDATE sdc_users SET `password`=:password WHERE `username` = :login", $params);
        // Пользователь прошел авторизацию, запишем cookie
        setcookie("aut[id]", "$user->id", time() + 3600 * 24 * 30);
        setcookie("aut[login]", "$login", time() + 3600 * 24 * 30);
        setcookie("aut[fullname]", "$user_attributes->fullname", time() + 3600 * 24 * 30);
        setcookie("aut[active]", "$user->active", time() + 3600 * 24 * 30);
        setcookie("aut[primary_group]", "$user->primary_group", time() + 3600 * 24 * 30);
        setcookie("aut[sudo]", "$user->sudo", time() + 3600 * 24 * 30);
        //переходим на главную страницу
        header("refresh:1;url=/");
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