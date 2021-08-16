<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";


$FullcalendarClass = new \Core\Model\Fullcalendar($db);


$startParam = "2021-12-01";
$endParam = "2021-12-01";


$data = DateTime::createFromFormat('Y-m-d', $startParam);
$startParam = $data->format('m');


$data = DateTime::createFromFormat('Y-m-d', $endParam);
$endParam = $data->format('m');


$params = [$startParam, $endParam];


$title = "День рождения";
$description = "Фамилия И.О. возраст";

$content = "";
$events = $FullcalendarClass->getBirthday($params);
foreach ($events as $key => $value) {
  $born = new DateTime($value["dob"]); // дата рождения
  $age = $born->diff(new DateTime)->format('%Y');



  $content .= $value['fullname']. ". Возраст: ". $age. "</br>";
}



/*foreach ($events as $key => $value) {
  $json[] = [
  'td' => "",
    'title' => "День рождения",
    'start' => $startParam,
    'end' => $endParam,
    'allDay' => "1",
    'calendar' => 'Danger',
    'description' => $value['fullname']. ". Возраст: ",
    'url' => "",
    'user_id' => "0"
  ];
}

if ($data) {
  $content = json_encode($json, JSON_UNESCAPED_UNICODE);
} else {
  echo "[]";
}
*/


