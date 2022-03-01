<?php

spl_autoload_register(function($class) {
    // вырезаем имя класса
    $lastNsPos = strrpos($class, '\\');
    $className = substr($class, $lastNsPos + 1);
    // путь до файла
    $namespace = substr($class,0,$lastNsPos + 1);
    $namespace = str_replace('/',DIRECTORY_SEPARATOR,$namespace);
    $namespace = str_replace('\\',DIRECTORY_SEPARATOR,$namespace);
    // корень сайта
    $home = $_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR;

    if (in_array($className,["BeforeValidException", "ExpiredException", "SignatureInvalidException", "JWT"])) {
        require_once mb_strtolower($home.'api'.DIRECTORY_SEPARATOR.'v1'.DIRECTORY_SEPARATOR.'libs'.DIRECTORY_SEPARATOR.$namespace).$className.'.php';
    } else {
        require_once mb_strtolower($home.'api/v1/objects/').$className.'.php';
    }

});

// показывать сообщения об ошибках
ini_set('display_errors', 1);
error_reporting(E_ALL);

// установить часовой пояс по умолчанию
date_default_timezone_set('Europe/Moscow');

require_once $_SERVER['DOCUMENT_ROOT'] . "/conection.php";

//Подключаемся  базе
$db = new Api\Objects\DB($dbname, $user, $password, $host);

// URL домашней страницы
//$home_url="http://isp/api/";

// страница указана в параметре URL, страница по умолчанию одна
$page = isset($_GET['page']) ? $_GET['page'] : 1;

// установка количества записей на странице
$records_per_page = 10;

// расчёт для запроса предела записей
$from_record_num = ($records_per_page * $page) - $records_per_page;