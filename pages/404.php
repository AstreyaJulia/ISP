<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="icon" href="assets/img/favicons/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="assets/css/main.css">
  <title><?= $title ?></title>
</head>
<body class="wrapper fixed page-body">
<!-- Спиннер-индикатор загрузки -->
<div class="spinner-wrapper">
  <div class="spinner-border text-primary spinner-lg spinner-fixed">
  </div>
</div>
<!-- Основное содержимое -->
<main class="main-content err404">
  <div class="danger" data-text="404">
    <p class="m-0">404</p>
  </div>
  <p class="text-dark mb-3 lead">Страница не найдена</p>
  <p class="text-dark mb-3"><?= $content ?></p>
  <a class="btn btn-primary btn-back">← Назад</a>
</main>
<!-- Скрипты. Jquery вначале -->
<script src="assets/modules/jquery/jquery.min.js"></script>
<script src="assets/modules/datatables/jquery.dataTables.js"></script>
<script src="assets/modules/bootstrap/bootstrap.bundle.js"></script>
<script src="assets/modules/fullcalendar/main.js"></script>
<script src="assets/modules/fullcalendar/locales/ru.js"></script>
<script src="assets/modules/rrule/rrule-tz.js"></script>
<script src="assets/js/app.js"></script>
</body>
</html>
