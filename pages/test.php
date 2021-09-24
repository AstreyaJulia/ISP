<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
//$content = "";


/*if (($handle = fopen("data/logs.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
        //Удаляем Username
        unset($data[1]);
        $content[] = array_values($data);
    }
    fclose($handle);
}

//Получаем имена полей для запроса к бд
$key = $content[0];
//Отделяем ключи от значений
unset($content[0]);
$values = $content;
foreach ($values as $value) {
    $array[] = array_combine($key, $value);
}*/

//$array = array_combine($key, $value);

$content = "";






//$data = $db->insertMultiple("INSERT INTO `sdc_visits`(`dtime`, `REMOTE_ADDR`, `REQUEST_URI`, `HTTP_REFERER`, `UserID`) VALUES (?,?,?,?,?)",$values);