<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
$content = "";



$tableName = "sdc_calendar";

/*$paramsPost = [
  'id' => 'id',
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
  'display' => 'display',
  'allDay' => NULL
];*/

$paramsPost = [
  'id' => 47,
  'operation' => 'operation',
  'title' => 'Название события 2',
  'start' => '2021-08-03 00:00',
  'end' => '2021-08-03 00:00',
  'url' => '',
  'calendar' => 'Primary',
  'user_id' => 1,
  'description' => '',
  'allDay' => NULL,
  'tzid' => 'Europe/Moscow',
  'freq' => null,
  'byweekday' => '',
  'bysetpos' => '',
  'bymonthday' => '',
  'interval' => '',
  'dtstart' => '',
  'count' => '',
  'until' => ''
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



  function add($params, $tableName = 'sdc_calendar', $index = 'id') {
    if (!empty($params)) {
      $keys = "";
      $i = 1;
      foreach ($params as $key => $value ) {
        if ($index !== $key and count($params) !== $i) {
          $keys .= "`".$key."`=:".$key.", ";
        }
        if ($index !== $key and count($params) == $i) {
          $keys .= "`".$key."`=:".$key;
        }
        if ($index == $key ) {
          $where = "`".$key."` = :".$key;
        }
        $i++;
      }

      return $sql = "UPDATE `$tableName` SET $keys WHERE $where";
    }
  }
  

$content .= add($paramsPost);



