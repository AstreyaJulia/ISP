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
<main class="main-content auth vh-100 mx-0 my-auto">
  <div class="row g-0 vh-100 mx-0 my-auto">
    <div class="col-xxl-4 col-xl-5 col-lg-6 left-auth p-5 mx-0 my-auto vh-100 d-flex align-items-center">
      <div class="d-flex flex-column w-100 p-5">
        <div class="auth-logo mb-4 d-flex">
          <img src="assets/img/favicons/favicon-32x32.png" width="32" height="32" alt="Логотип" class="me-4">
          <p class="h4">ИСП</p>
        </div>
        <div class="form-group">
          <p class="h5">Вход</p>
        </div>
        <form action="" method="post" class="form auth-form mx-0 my-auto">
          <div class="form-group">
            <label class="form-label" for="login">Имя пользователя</label>
            <input name="login" value="<?php if (isset($_POST['login'])) echo $_POST['login'] ; ?>" class="form-control" id="login" type="text"
                   placeholder="Введите логин" required>
          </div>
          <p class="error-message text-danger"><?= $error['login'] ?></p>
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
          <p class="error-message text-danger"><?= $error['pass'] ?></p>
          <div class="form-group">
            <button type="submit" name="aut" class="btn btn-primary btn-block">Войти</button>
          </div>
        </form>
        <a href="?reg">У меня нет пароля / Пароль был сброшен</a>
      </div>
    </div>
    <div class="col-xxl-8 col-xl-7 col-lg-6 d-none d-xxl-flex d-xl-flex d-lg-flex right-auth vh-100 bg-light">
      <div class="w-50 m-auto clouds-animation position-relative auth-image d-flex align-items-center justify-content-center">
        <img src="assets/img/cloud1.svg" alt="" class="cloud">
        <img src="assets/img/cloud2.svg" alt="" class="cloud">
        <img src="assets/img/cloud1.svg" alt="" class="cloud">
        <img src="assets/img/cosmonaut-rocket.svg" alt="" class="w-75 p-75">
      </div>
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
