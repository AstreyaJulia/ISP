<?php

  $autorizationClass = new \Core\Model\Autorization($db);

  // авторизация пользователя
  $error = $autorizationClass->setUserAutorization() ?? array ("pass" => "", "login" => "");

  //Регистрация пользователя
  $autorizationClass->setUserRregister();
  // неверно введён пароль при авторизации
  $error_pass_reg = $autorizationClass->setUserRregister()["error_pass"] ?? "";
  // неверно введён логин при авторизации
  $error_login_reg = $autorizationClass->setUserRregister()["error_login"] ?? "";

  if (array_key_exists('reg', $_GET)) {
    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.register.php";
  } else {
    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.autorization.php";
  }