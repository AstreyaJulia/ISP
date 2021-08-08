<?php
$title = "Главная страница";

$userClass = new \Core\Model\User($db);
$birthday = $userClass->getBirthday();

ob_start();
include "components/index/template/tpl.index.php";
$content = ob_get_contents();
ob_end_clean();
