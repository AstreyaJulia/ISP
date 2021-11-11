<?php
$start = microtime(true);
spl_autoload_register(function($class) {
    require (mb_strtolower($_SERVER['DOCUMENT_ROOT'] . '/' . str_replace('\\', '/', $class) . '.php'));
});

error_reporting(E_ALL);
ini_set("display_errors", "on");
//Параметры для подключения к базе
require_once $_SERVER['DOCUMENT_ROOT'] . "/conection.php";
//Подключаемся  базе
$db = new \Core\Config\DB($dbname, $user, $password, $host);
$visits = new \Core\Model\Visits($db);

//подключаем функции
require_once "core/extension/custom_functions.php";
//подключаем справочники
require_once "core/extension/reference_book.php";
$info = "";//быть может для уведомлений
$page = "index";                //начальная страници
$path = "pages/$page.php";
//навигация по вкладкам
if (isset($_GET["page"])) {
    $page = $_GET["page"];
    $path = "pages/$page.php";
}

//проверяем наличие куки аторизации
if (isset($_COOKIE['aut'])) {
    /*--------------------------------------*/
    $user = new \Core\Model\User($db);
    $sirebar = $user->getSirebar($_COOKIE['aut']['id']);
    $theme = $user->getTheme($_COOKIE['aut']['id']);

    if (file_exists($path) and $page != "404" and $page != "autorization") {
        $content_page = file_get_contents($path);
        include $path;
        include "layout.php";
    } else {
        //$content = file_get_contents("pages/404.php");
        header("HTTP/1.0 404 Not Found");
        $title = "Ошибка на странице";
        $content = "Извините, произошла ошибка, Запрашиваемая страница не найдена!";
        include "pages/404.php";
    }


    /*--------------------------------------*/
} else {
    include "pages/autorization.php";
}

//Логирование
$visits->startVizits($_SERVER, $_COOKIE);
