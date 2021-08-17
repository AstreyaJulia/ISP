<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";


$FullcalendarClass = new \Core\Model\Fullcalendar($db);


$startParam = "2021-12-01";
$endParam = "2022-01-31";


/*$data = DateTime::createFromFormat('Y-m-d', $startParam);
$startParam = $data->format('m-d');


$data = DateTime::createFromFormat('Y-m-d', $endParam);
$endParam = $data->format('m-d');

*/

$params = [
    'startParam' => $startParam,
    'endParam' => $endParam
];

//$params = [$startParam, $endParam];


$title = "День рождения";
$description = "Фамилия И.О. возраст";

$content = "";
$events = $FullcalendarClass->getBirthday($startParam, $endParam);

/*$events = $db->run("SELECT * FROM `sdc_user_attributes` 
WHERE 
 (
(date_format('$startParam','%m-%d') < date_format('$endParam','%m-%d'))
 AND
(date_format(dob,'%m-%d') between date_format('$startParam','%m-%d') AND date_format('$endParam','%m-%d'))
)
OR 
(

 (date_format('$startParam','%m-%d') > date_format('$endParam','%m-%d')) 
  AND
   (
       (date_format(dob,'%m-%d') between date_format('$startParam','%m-%d') AND date_format('2021-12-31','%m-%d'))
OR 
       (date_format(dob,'%m-%d') between date_format('2021-01-01','%m-%d') AND date_format('$endParam','%m-%d'))
   )
    )")->fetchAll(\PDO::FETCH_CLASS);*/


/*foreach ($events as $key => $value) {
  $born = new DateTime($value->dob); // дата рождения
  $age = $born->diff(new DateTime)->format('%Y');



  $content .= $value->fullname. ". Возраст: ". $age. " Дата рождения: " .$value->dob."</br>";
}*/



foreach ($events as $key => $value) {
	$data = DateTime::createFromFormat('Y-m-d', $value->dob);
	$startParam = "2021-".$data->format('m-d');
  $json[] = [
  	'td' => "",
    'title' => "День рождения",
    'start' => $startParam,
    'end' => $startParam,
    'allDay' => "1",
    'calendar' => 'Danger',
    'description' => $value->fullname. ". Возраст: ",
    'url' => "",
    'user_id' => "0"
  ];
}

if ($events) {
  $content .= json_encode($json, JSON_UNESCAPED_UNICODE);
} else {
  echo "[]";
}



