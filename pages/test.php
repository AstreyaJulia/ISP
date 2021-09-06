<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
$content = "";


$xml = simplexml_load_file('data/weekend/2021.xml');

//$xml = new SimpleXMLElement($str);

$content = $xml->holidays->holiday['title']; 


$ourData = file_get_contents("data/weekend/2021.json");
$row = json_decode($ourData);

var_dump($row);



