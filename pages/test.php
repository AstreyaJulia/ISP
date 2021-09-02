<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
$content = "";

$get = ['startParam' => 2021-01-01,
        'endParam' => 2021-12-31,
        'calendars' => ['primary', 'danger', 'warning', 'success', 'info'],
        'private' => 0];


$value = '0';

 $value = isset($get['private']) && $get['private'] !== 0 ? $get['private'] : NULL;


var_dump($value);
