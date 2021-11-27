<?php

  $autorizationClass = new \Core\Model\Autorization($db);

  // авторизация пользователя
  $error = $autorizationClass->setUserAutorization() ?? array ("pass" => "", "login" => "");

  //Регистрация пользователя
  $error = $autorizationClass->setUserRregister() ?? array ("pass" => "", "login" => "");

  if (array_key_exists('reg', $_GET)) {
    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.register.php";
  } else {
    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.autorization.php";
  }