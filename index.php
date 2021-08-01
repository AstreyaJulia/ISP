<?php
//$start = microtime(true);
spl_autoload_register(); // включаем автозагрузку классов
error_reporting(E_ALL);
ini_set("display_errors", "on");
//подключаемся к базе
require_once "core/config/db_config.php";
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
//формируем путь для перехода в раздел FAQ
if (isset($_GET["faq"])) {
    $page = $_GET["faq"];
    $faq = $_GET["faq"];
    $path = "components/faq/index.php";
}

//формируем путь для редактирования staff
if (isset($_GET["editStaff"])) {
    $path = "components/staff/edit-staff-profile.php";
}

//проверяем наличие куки аторизации
if (isset($_COOKIE['aut'])) {
    /*--------------------------------------*/


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
//echo '<div style="text-align:right;">Время выполнения скрипта: '.(microtime(true) - $start).' сек.</div>';
