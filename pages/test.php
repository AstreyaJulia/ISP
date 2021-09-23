<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";



if (($handle = fopen("data/logs.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
        //Удаляем Username
        unset($data[1]);
        $content[] = $data;
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
}

//$array = array_combine($key, $value);
print_r($array);

$sdc_visits = 'sdc_visits';




$VisitsClass = new \Core\Model\Visits($db);


$VisitsClass->insert($array, $sdc_visits);

