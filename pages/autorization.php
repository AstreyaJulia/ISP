<?php

  $autorizationClass = new \Core\Model\Autorization($db);

  if (array_key_exists('reg', $_GET)) {
    //Регистрация пользователя
    $error = $autorizationClass->setUserRregister() ?? array ("pass" => "", "login" => "");
    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.register.php";
  } else {
    // авторизация пользователя
    $error = $autorizationClass->setUserAutorization() ?? array ("pass" => "", "login" => "");
    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.autorization.php";
  }