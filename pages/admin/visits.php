<?php
$start = microtime(true);
spl_autoload_register(function($class) {
    require (mb_strtolower($_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', $class) . '.php'));
});
// Включаем вывод ошибок
error_reporting(E_ALL);
ini_set("display_errors", "on");
// Параметры для подключения к базе
require_once $_SERVER['DOCUMENT_ROOT']."/conection.php";
// Подключаемся  базе
$db = new \Core\Config\DB($dbname, $user, $password, $host);
// Подключаем класс для работы со статистикой посещения сайта
$visits = new \Core\Model\Visits($db);

//Записываем статистику посещения сайта в базу 
$write = $visits->insert($visits->arrVizits($_SERVER['DOCUMENT_ROOT']."/data/logs.csv"));

// Очищаем файл с логами
$clearLogs = $visits->clearLogs($_SERVER['DOCUMENT_ROOT']."/data/logs.csv");




echo '<div style="text-align:right;">Время выполнения скрипта: '.(microtime(true) - $start).' сек.</div>';
