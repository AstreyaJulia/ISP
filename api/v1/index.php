<?php declare(strict_types=1);
  error_reporting(E_ALL);
  ini_set("display_errors", "on");

  cors();
  include_once 'config/core.php';

  $helpers = new Api\Objects\Helpers();

  $helpers::headlinesGET();

  $helpers->getRequestData();

  if (!in_array($helpers->router, array("authorization", "registration"))) {
    include_once 'config/jwt.php';
    // если декодирование выполнено успешно, продолжаем выполнять скрипт
    try {
      // декодирование jwt
      $helpers->secureJWT($helpers->jwt, $key);
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
  if ($helpers->isValidRouter($helpers->router)) {

    // Подключаем файл-роутер
    include_once "routers/".$helpers->router.".php";

  } else {
    // Выбрасываем ошибку
    $helpers::isErrorInfo(400, "invalid_router", "router not found");
  }

function cors(): void
{

// Массив разрешенных адресов клиентов
$allowed_origins = ["localhost:3000",
                    "localhost:3030",
                    "http://localhost:3000",
                    "http://localhost:3030",
                    "http://isp",
                    "http://192.168.2.2:3000"];

// Из заголовка запроса получаем заголовок origin */
    $request_origin = $_SERVER['HTTP_ORIGIN'] ?? null;

// Если origin не установлен
    if ( ! $request_origin ) {
        return;
    }

// Дефолтное значение на случай ошибок
    $allowed_origin = 'http://isp';

// Если origin есть в массиве разрешенных
    if ( in_array( $request_origin, $allowed_origins ) ) {
        $allowed_origin = $request_origin;
    }

// Устанавливаем заголовки
    header("Access-Control-Allow-Origin: {$allowed_origin}");
    header('Access-Control-Allow-Credentials: true');

// Предзапрос OPTIONS
    if ( isset( $_SERVER['REQUEST_METHOD'] ) && $_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
        header( 'Access-Control-Allow-Methods: GET, POST, PATCH, OPTIONS' );
        // {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']} на строке ниже можно заменить на access-control-allow-headers,access-control-allow-origin,content-type
        header( "Access-Control-Allow-Headers: {$_SERVER['HTTP_ACCESS_CONTROL_REQUEST_HEADERS']}");
        header( 'Access-Control-Max-Age: 86400');
        header( 'Cache-Control: public, max-age=86400');
        header( 'Vary: origin' );
        exit( 0 ); // выход из проверки OPTIONS, будет дальше выполняться скрипт
    }

}