<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <link rel="icon" href="assets/img/favicons/favicon.png" type="image/x-icon">
  <link rel="stylesheet" href="assets/css/main.css">
  <title>Регистрация</title>
</head>
<body class="wrapper fixed page-body">
<!-- Основное содержимое -->
<main class="main-content auth vh-100 mx-0 my-auto">
  <div class="row g-0 vh-100 mx-0 my-auto">
    <div class="col-xxl-4 col-xl-5 col-lg-6 left-auth p-5 mx-0 my-auto vh-100">
      <div class="auth-logo mb-4 d-flex">
        <img src="assets/img/favicons/favicon-32x32.png" width="32" height="32" alt="Логотип" class="me-4">
        <p class="h4">ИСП</p>
      </div>
      <div class="form-group">
        <p class="h5">Регистрация</p>
      </div>
      <form action="" method="post" class="form auth-form mx-0 my-auto">
        <div class="form-group">
          <label class="form-label" for="login">Имя пользователя</label>
          <input name="login" value="<?php if (isset($_POST['login'])) echo $_POST['login'] ; ?>" class="form-control" id="login" type="text"
                 placeholder="Введите логин" required>
        </div>
        <p class="error-message text-danger"><?= $error_login_reg ?></p>
        <div class="form-group">
          <label class="form-label" for="password">Пароль</label>
          <div class="form-control-wrap">
            <input class="form-control passinput" name="password" id="password" type="password" placeholder="Введите пароль" required>
            <a tabindex="-1" class="form-icon form-icon-right passcode-switch is-hidden" data-bs-target="password"
               data-bs-toggle="tooltip" data-bs-placement="top" title="Показать / скрыть пароль">
              <em class="passcode-icon icon-show icon mdi mdi-eye-outline"></em>
              <em class="passcode-icon icon-hide icon mdi mdi-eye-off-outline"></em>
            </a>
          </div>
        </div>
        <div class="form-group">
          <label class="form-label" for="passrep">Повторите пароль</label>
          <div class="form-control-wrap">
            <input class="form-control passinput" name="passrep" id="passrep" type="password" placeholder="Введите пароль" required>
          </div>
        </div>
        <p class="error-message text-danger"><?= $error_pass_reg ?></p>
        <div class="form-group">
          <button type="submit" name="reg" class="btn btn-primary btn-block">Зарегистрироваться</button>
        </div>
      </form>
      <a href="/">У меня уже есть пароль</a>
    </div>
    <div class="col-xxl-8 col-xl-7 col-lg-6 d-none d-xxl-flex d-xl-flex d-lg-flex right-auth vh-100">
    </div>
  </div>
</main>
<!-- Скрипты. Jquery вначале -->
<script src="assets/modules/jquery/dist/jquery.min.js"></script>
<script src="assets/modules/overlayscrollbars/js/OverlayScrollbars.js"></script>
<script src="assets/modules/datatables.net/js/jquery.dataTables.js"></script>
<script src="assets/modules/bootstrap/dist/js/bootstrap.bundle.js"></script>
<script src="assets/modules/jquery-validation/dist/jquery.validate.js"></script>
<script src="assets/modules/jquery-validation/dist/localization/messages_ru.js"></script>
<script src="assets/modules/flatpickr/dist/flatpickr.js"></script>
<script src="assets/modules/flatpickr/dist/l10n/ru.js"></script>
<script src="assets/modules/select2/dist/js/select2.full.js"></script>
<script src="assets/js/app.js"></script>
</body>
</html>
