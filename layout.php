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
<body class="page-body" data-sidebar-width="<?= $sirebar ?>" data-theme-name="main-light">
<div class="page-wrapper">

  <!-- Прогресс бар вверху страницы -->
  <div class="progress-container">
    <div class="topprogressbar" style="width: 0;">
    </div>
  </div>

  <!-- Спиннер-индикатор загрузки -->
  <div class="spinner-wrapper">
    <div class="spinner-bubble text-primary" role="status"></div>
  </div>

  <!-- Кнопка назад наверх -->
  <a class="back-to-top waves-effect" style="display: none;" data-bs-toggle="tooltip" data-bs-placement="top"
     title="Наверх страницы">
    <i class="mdi mdi-arrow-up"></i>
  </a>

  <!-- Контейнер для всплывашек -->
  <div class="toasts-container">
  </div>

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
