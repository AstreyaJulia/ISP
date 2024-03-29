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
<body class="page-body" data-sidebar-width="<?= $sidebar ?>" data-theme-name="<?= $theme ?>">

<!-- Спиннер-индикатор загрузки -->
<div class="spinner-wrapper">
  <div class="spinner-bubble text-primary spinner-lg spinner-fixed">
  </div>
</div>
<!-- Кнопка назад наверх -->
<a class="back-to-top waves-effect d-none" data-bs-toggle="tooltip" data-bs-placement="bottom"
   title="Наверх страницы">
  <i class="mdi mdi-arrow-up"></i>
</a>
<!-- Контейнер для всплывашек -->
<div class="toasts-container">
  <?php if ($userAtributes->data->id == 1): ?>
    <div class="toast align-items-center fade toast-script-time" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">Время выполнения скрипта <?= (microtime(true) - $start) ?> сек.</div><button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button></div></div>
  <?php endif ?>
</div>

<div class="page-wrapper d-flex" id="wrapper">

  <?php
  //подключаем sidebar
  $check = "elements/sidebar.php";
  if (file_exists($check)) {
    include "elements/sidebar.php";
  } else {
    echo "не подключен: elements/sidebar.php";
  }
  ?>

  <div class="main-content-wrapper">
    <!-- Прогресс бар вверху страницы -->
    <div class="progress-container">
      <div class="topprogressbar" style="width: 0;">
      </div>
    </div>

    <?php
    //подключаем header
    $check = "elements/header.php";
    if (file_exists($check)) {
      include "elements/header.php";
    } else {
      echo "не подключен: elements/header.php";
    }
    ?>

    <?php
    //подключаем content
    $check = "elements/content.php";
    if (file_exists($check)) {
      include "elements/content.php";
    } else {
      echo "не подключен: elements/content.php";
    }
    ?>

  </div>

  <?php
  //Подключаем javascript
  $check = "elements/javascript.php";
  if (file_exists($check)) {
    include "elements/javascript.php";
  } else {
    echo "не подключен: elements/javascript.php";
  }
  ?>
</div>
</body>
</html>
