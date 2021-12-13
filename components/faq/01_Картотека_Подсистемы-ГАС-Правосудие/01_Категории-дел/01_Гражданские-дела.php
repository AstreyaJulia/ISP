<?php
$path = 'http://192.168.0.254:8079/api_GAS/categories-civil-cases.php';
$ourData = file_get_contents($path);
$row = json_decode($ourData);
?>
<table class="table dataTable nosort">
  <thead>
  <tr>
    <th>Строка</th>
    <th>Наменование</th>
  </tr>
  </thead>
  <tbody>
  <?php foreach ($row as $key => $value): ?>
    <tr>
      <td><?= $value->PREFIX; ?></td>
      <td><?= $value->NAME; ?></td>
    </tr>
  <?php endforeach ?>
  </tbody>
</table>
