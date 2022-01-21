<?php

  $autorizationClass->login($_POST, $host_api.'/api/autorization/login.php') ?? "";
  $autorizationClass->getAutorization();