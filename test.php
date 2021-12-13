<?php
//header("Content-Type: application/json; charset=windows-1251");
//header('Content-Type: text/html; charset=windows-1251');
header('Content-Type: text/html; charset=utf-8');
error_reporting(E_ALL);
ini_set("display_errors", "on");

$path = 'http://192.168.0.254:8079/api_GAS/categories-material.php';

$ourData = file_get_contents($path);

$row = json_decode($ourData);
$F1 = array_column($row, 'F1');
$NAME = array_column($row, 'NAME');
array_multisort($F1, SORT_ASC, $NAME, SORT_ASC, $row);

function objectToArray($d)
{
  if (is_object($d)) {
    // Получает свойства данного объекта
    // с функцией get_object_vars
    $d = get_object_vars($d);
  }

  if (is_array($d)) {
    /*
    * Возвращаемый массив, преобразованный в объект
    * Использование __FUNCTION__ (магическая константа)
    * для рекурсивного вызова
    */
    return array_map(__FUNCTION__, $d);
  } else {
    return $d;
  }
}

$array = objectToArray($row);

$resultArray = [];

array_walk($array, function ($item, $key) use (&$resultArray) {
  $resultArray[$item['F1']][] = $item;
});
?>

<table class="table dataTable nosort">
  <thead>
  <tr>
    <th>Индекс</th>
    <th>Предмет ходатайства</th>
  </tr>
  </thead>
  <tbody>
  <?php foreach ($resultArray as $key => $valueF1): ?>
    <tr>
      <td colspan="2"><?= $key; ?></td>
    </tr>
    <?php foreach ($valueF1 as $key => $value): ?>
      <tr>
        <td><?= $value["PREFIX"]; ?></td>
        <td><?= $value["NAME"]; ?></td>
      </tr>
    <?php endforeach ?>
  <?php endforeach ?>
  </tbody>
</table>


