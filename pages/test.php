<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";

ob_start();
include "components/test/template/tpl.test.php";
$content = ob_get_contents();
ob_end_clean();