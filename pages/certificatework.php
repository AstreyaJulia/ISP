<?php

$verification = array_key_exists('edit', $_GET) ?? "";
switch ($verification) {
    case 'true':
        $i = 1; // номерация в таблице
        $k = 0; // для формирования массива из $_POST
        $path = $host_api.'/api/certificatework/getJudge.php';
        break;
    
    default:
        $path = $host_api.'/api/certificatework/getCertificateWork.php?quarter&year';
        break;
}

$ourData = file_get_contents($path);
$row = json_decode($ourData);
$title = "Справка о работе судей";


ob_start();
switch ($verification) {
    case 'true':
        include "components/certificatework/tpl.edit.certificatework.php";
        break;
    
    default:
        include "components/certificatework/tpl.certificatework.php";
        break;
}
    $content = ob_get_contents();
ob_end_clean();


// собираем правильный массив
/*foreach ($_POST["judges"] as $key => $row) {
    $arr[] = [
        "judges" => $row,
        "col_3" => $_POST["col_3"][$key],
        "col_4" => $_POST["col_4"][$key],
        "col_5" => $_POST["col_5"][$key],
        "col_6" => $_POST["col_6"][$key],
        "col_7" => $_POST["col_7"][$key],
        "col_8" => $_POST["col_8"][$key],
        "col_9" => $_POST["col_9"][$key],
        "col_10" => $_POST["col_10"][$key],
        "col_11" => $_POST["col_11"][$key],
        "col_12" => $_POST["col_12"][$key],
        "col_13" => $_POST["col_13"][$key],
        "col_14" => $_POST["col_14"][$key],
        "col_16" => $_POST["col_16"][$key],
        "col_17" => $_POST["col_17"][$key]
    ];
}*/