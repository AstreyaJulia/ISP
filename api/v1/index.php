<?php
  error_reporting(E_ALL);
  ini_set("display_errors", "on");

  include_once 'config/core.php';
  
  $helpers = new Api\Objects\Helpers($db);

  $helpers::headlinesGET();

  $helpers->getRequestData();

  if ($helpers->getRouter() != "authorization") {
    include_once 'config/jwt.php';
    // если декодирование выполнено успешно, продолжаем выполнять скрипт
    try {
      // декодирование jwt
      $helpers->secureJWT($helpers->getJWT(), $key);
      // сверяем jwt с базой данных
      if (!$helpers->assignValues()) {
        throw new Exception("Ключ не прошёл проверку");
      }
    }
    // если декодирование не удалось, это означает, что JWT является недействительным
    catch (Exception $e){
      $helpers::isErrorInfo(401, "Доступ закрыт.", $e);
      exit;
    }
  }
  // Проверяем роутер на валидность
  if ($helpers->isValidRouter($helpers->getRouter())) {

    // Подключаем файл-роутер
    include_once "routers/".$helpers->getRouter().".php";

    // Запускаем главную функцию
    route($db, $helpers);

  } else {
    // Выбрасываем ошибку
    $helpers::isErrorInfo(400, "invalid_router", "router not found");
  }
