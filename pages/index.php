<?php
$title = "Главная страница";

$UserAttributes = new \Core\Model\UserAttributes($db);
$birthday = $UserAttributes->getBirthday();

ob_start();
include "components/index/template/tpl.index.php";
$content = ob_get_contents();
ob_end_clean();
