<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
$content = "";


/*$xml = simplexml_load_file('data/weekend/2021.xml');
$content = $xml->holidays->holiday['title'];*/


$ourData = file_get_contents("data/weekend/2021.json");
//$row = json_encode($ourData);
$row = json_decode($ourData);

//$content .= $row->year;
foreach ($row->months as $value) {
	//$content .= "</br>месяц: " .$value->month. "</br>";
	//$content .= "день: " .$value->days. "</br>";
	$days = explode(',', $value->days);
	foreach ($days as $day) {
		$day = rtrim($day, "*");
		$content .= $row->year."-".addNol($value->month)."-".addNol($day)."</br>";
	}
}





function addNol($str) { 
	if (strlen($str) == 1) {
		return '0'.$str;
	} else {
		return $str;
	}
}
