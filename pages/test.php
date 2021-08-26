<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
$content = "";



$tableName = "sdc_calendar";

$paramsPost = [
  'operation' => 'operation',
  'title' => 'title',
  'start' => 'start',
  'end' => 'end',
  'calendar' => 'calendar',
  'description' => 'description',
  'url' => 'url',
  'user_id' => 'privat',
  'allDay' => 'allDay',
  'freq' => 'freq',
  'dtstart' => 'dtstart',
  'tzid' => 'tzid',
  'until' => 'until',
  'count' => 'count',
  'interval' => 'interval',
  'display' => 'display'
];

$operation = $paramsPost['operation'];
// Если в полученном post user_id = 999999999, то меняем на id пользователя из куки, ессли 0, то user_id =0
  if ($paramsPost['user_id'] !== 0) {
    $user_id = [
      'user_id' => $_COOKIE['aut']['id']
    ];
    $paramsPost =array_replace($paramsPost, $user_id);
  }

  unset($paramsPost["operation"]);


  ob_start();
    include "components/test/template/tpl.test.php";
    $content = ob_get_contents();
  ob_end_clean();



  function add($params, $tableName = 'sdc_calendar') {
    if (!empty($params)) {
      for ($i=0; $i < count($params) ; $i++) {
        if ($i == 0) {
          $key = "(`".array_keys($params)[$i]."`, ";
          $value = "(:".array_keys($params)[$i].", ";
        }
        if ( $i !== 0 and count($params)-1 > $i) {
          $key .= "`".array_keys($params)[$i]."`, ";
          $value .= ":".array_keys($params)[$i].", ";
        }
        if (count($params)-1 == $i) {
          $key .= "`".array_keys($params)[$i]."`)";
          $value .= ":".array_keys($params)[$i].")";
        }
      }
      return $sql = "INSERT INTO `$tableName` $key VALUES $value";
    }
  }
  
echo $operation;
$content .= print_r($paramsPost);



