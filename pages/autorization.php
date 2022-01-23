<?php
  $autorizationClass->username = $_POST['login'] ?? "";
  $autorizationClass->getAutorization($host_api);
