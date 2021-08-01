<?php
$ourData = file_get_contents("../../../../data/categories-civil-cases.json");
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
