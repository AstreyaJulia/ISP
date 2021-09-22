<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
$content = "";

$row = 1;
if (($handle = fopen("data/logs.csv", "r")) !== FALSE) {
    while (($data = fgetcsv($handle, 1000, ";")) !== FALSE) {
        $num = count($data);
        $content1 = (array_values($data));
        echo $content1;
        //echo "($data[0],$data[1],$data[2],$data[2],$data[4],$data[5])";
        $row++;
        for ($c=0; $c < $num; $c++) {
            $content .= $data[$c] . "<br />\n";
        }
    }
    fclose($handle);
}

