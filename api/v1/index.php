<?php
error_reporting(E_ALL);
ini_set("display_errors", "on");
// Подключаем библиотеки и хелперы

include_once 'config/core.php';
include_once 'config/jwt.php';

// Получаем данные из запроса
$helpers = new Api\Objects\Helpers($db);
$data = $helpers->getRequestData();
$router = $data['router'];

var_dump($data);
// Проверяем роутер на валидность
if ($helpers->isValidRouter($router)) {

    // Подключаем файл-роутер
    include_once "routers/$router.php";

    // Запускаем главную функцию
    route($data);

} else {
    // Выбрасываем ошибку
    $helpers->throwHttpError('invalid_router', 'router not found');
}