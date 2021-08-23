<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
$content = "";




    $arr = [
      'id_key' => 'id_value',
      'title_key' => 'title_value',
      'start_key' => 'start_value',
      'end_key' => 'end_value',
      'allDay_key' => 'allDay_value',
      'calendar_key' => 'calendar_value',
      'description_key' => 'description_value',
      'url_key' => 'url_value',
      'user_id_key' => 'user_id_value',
      'display_key' => 'display_value'
    ];

  $key = array_keys($arr);
  for ($i=0; $i < count(array_keys($arr)) ; $i++) {
    if ($i == 0) {
      $content .= "('".array_keys($arr)[$i]."', ";
    }
    if ( $i !== 0 and count(array_keys($arr))-1 > $i) {
      $content .= "'".array_keys($arr)[$i]."', ";
    }
    if (count(array_keys($arr))-1 == $i) {
      $content .= "'".array_keys($arr)[$i]."') VALUES";
    }
  }


  foreach ($arr as $key => $value) {
    echo $key;
    echo "</br>";
    echo $value;


  }

