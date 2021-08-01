<?php
$title = "Ктегории гражданских дел";
$info = "";
/* получаем данные из JSON файла
PARENT_VA_CODE и VA_CODE будут применяться для фильтрации*/
$ourData = file_get_contents("data/categories-civil-cases.json");
$row = json_decode($ourData);
ob_start();
include "components/categories-civil-cases/template/tpl.categories-civil-cases.php";
$content = ob_get_contents();
ob_end_clean();
