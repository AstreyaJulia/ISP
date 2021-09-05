<!DOCTYPE html>
<html lang="ru">
<?php
//Подключаем head
$path = "elements/head.php";
if (file_exists($path)) {
  include "elements/head.php";
} else {
  echo "не подключен: elements/head.php";
}
?>
<body class="page-body">
<div class="page-wrapper">
  <?php
  //подключаем header
  $path = "elements/header.php";
  if (file_exists($path)) {
    include "elements/header.php";
  } else {
    echo "не подключен: elements/header.php";
  }
  ?>
  <?php
  //подключаем sidebar
  $path = "elements/sidebar.php";
  if (file_exists($path)) {
    include "elements/sidebar.php";
  } else {
    echo "не подключен: elements/sidebar.php";
  }
  ?>
  <?php
  //подключаем content
  $path = "elements/content.php";
  if (file_exists($path)) {
    include "elements/content.php";
  } else {
    echo "не подключен: elements/content.php";
  }
  ?>
  <?php
  //Подключаем javascript
  $path = "elements/javascript.php";
  if (file_exists($path)) {
    include "elements/javascript.php";
  } else {
    echo "не подключен: elements/javascript.php";
  }
  ?>
</div>
</body>
</html>
