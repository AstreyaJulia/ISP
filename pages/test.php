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



  function add($arr, $tableName = 'sdc_calendar') {
    for ($i=0; $i < count($arr) ; $i++) {
      if ($i == 0) {
        $key = "(`".array_keys($arr)[$i]."`, ";
        $value = "(:".$arr[array_keys($arr)[$i]].", ";
      }
      if ( $i !== 0 and count($arr)-1 > $i) {
        $key .= "`".array_keys($arr)[$i]."`, ";
        $value .= ":".$arr[array_keys($arr)[$i]].", ";
      }
      if (count($arr)-1 == $i) {
        $key .= "`".array_keys($arr)[$i]."`)";
        $value .= ":".$arr[array_keys($arr)[$i]].")";
      }
    }
    return $sql = "INSERT INTO `".$tableName."` ".$key." VALUES ".$value;
  }

  

var_dump(add($_POST, "name_table"));