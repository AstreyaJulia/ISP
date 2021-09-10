<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="icon" href="assets/img/favicons/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="assets/css/main.css">
  <title>Вход</title>
</head>
<body class="wrapper fixed page-body">
<!-- Основное содержимое -->
<main class="main-content auth">
  <div class="left-auth">
    <div class="auth-logo">
      <img src="assets/img/favicons/favicon-32x32.png" width="32" height="32" alt="Логотип">
      <p class="h4">ИСП</p>
    </div>
    <div class="form-group">
      <p class="h5">Вход</p>
    </div>
    <form action="" method="post" class="form auth-form">
      <div class="form-group">
        <label class="form-label" for="login">Имя пользователя</label>
        <input name="login" value="<?php if (isset($_POST['login'])) echo $_POST['login'] ; ?>" class="form-control" id="login" type="text"
               placeholder="Введите логин" required>
      </div>
      <p class="error-message"><?php if (isset($error_login)) echo $error_login; ?></p>
      <div class="form-group">
        <label class="form-label" for="pass">Пароль</label>
        <div class="form-control-wrap">
          <input class="form-control passinput" name="password" id="pass" type="password" placeholder="Введите пароль" required>
          <a tabindex="-1" class="form-icon form-icon-right passcode-switch is-hidden" data-bs-target="password"
             data-bs-toggle="tooltip" data-bs-placement="top" title="Показать / скрыть пароль">
            <em class="passcode-icon icon-show icon mdi mdi-eye-outline"></em>
            <em class="passcode-icon icon-hide icon mdi mdi-eye-off-outline"></em>
          </a>
        </div>
      </div>
      <p class="error-message"><?php if (isset($error_pass)) echo $error_pass; ?></p>
      <div class="form-group">
        <button type="submit" name="aut" class="btn btn-primary btn-block">Войти</button>
      </div>
    </form>
    <a href="?reg">У меня нет пароля / Пароль был сброшен</a>
  </div>
  <div class="right-auth">
  </div>
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
