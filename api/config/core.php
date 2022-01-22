<?php
$start = microtime(true);
spl_autoload_register(function($class) {
    require (mb_strtolower($_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', $class) . '.php'));
});

// показывать сообщения об ошибках
ini_set('display_errors', 1);
error_reporting(E_ALL);

// установить часовой пояс по умолчанию
date_default_timezone_set('Europe/Moscow');

require_once $_SERVER['DOCUMENT_ROOT'] . "/conection.php";

//Подключаемся  базе
$db = new \Core\Config\DB($dbname, $user, $password, $host);

// URL домашней страницы
//$home_url="http://isp/api/";

// страница указана в параметре URL, страница по умолчанию одна
$page = isset($_GET['page']) ? $_GET['page'] : 1;

// установка количества записей на странице
$records_per_page = 10;

// расчёт для запроса предела записей
$from_record_num = ($records_per_page * $page) - $records_per_page;