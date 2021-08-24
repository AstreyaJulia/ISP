<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";
$content = "";



    $tableName = "sdc_calendar";
    $arr = [
      'id_key' => 'id_value',
      'title_key' => 'title_value',
      'start_key' => 'start_value'
    ];


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
  

$content .= add($_POST, "tableName");

print_r($_POST);
var_dump($operation = isset($_POST['operation']) ? $_POST['operation'] : "");