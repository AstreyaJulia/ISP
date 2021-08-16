<?php
$start = microtime(true);
error_reporting(E_ALL);
ini_set("display_errors", "on");

require_once "core/config/db_config.php";
//подключаем функции
require_once "core/extension/custom_functions.php";

if (!empty($_POST['login']) and !empty($_POST['password'])) {
  // Пишем логин из формы в переменную для удобства работы:
  $login = $_POST['login'];
  // Формируем и отсылаем SQL запрос:
  $query_select = $link->prepare("SELECT * FROM sdc_users WHERE `username` = ?");
  $query_select->execute([$login]);
  //извлекаем резултаты запроса
  $user = $query_select->fetch(PDO::FETCH_LAZY);
  //Если пользователь с таким логином есть
  if (!empty($user)) {
    $hash = $user['password']; // соленый пароль из БД
    // Проверяем соответствие хеша из базы введенному паролю
    if (password_verify($_POST['password'], $hash)) {
      // Пользователь прошел авторизацию получим fullname
      $query_select = $link->prepare("SELECT fullname FROM sdc_user_attributes WHERE `internalKey` = ?");
      $query_select->execute([$user['id']]);
      //извлекаем резултаты запроса
      $user_attributes = $query_select->fetch(PDO::FETCH_LAZY);
      //Приводим к виду Фамилия И.О.
      $fullname = shortFIO($user_attributes['fullname']);

      //запишем setcookie
      setcookie("aut[id]", "$user[id]", time() + 3600 * 24 * 30);
      setcookie("aut[login]", "$login", time() + 3600 * 24 * 30);
      setcookie("aut[fullname]", "$fullname", time() + 3600 * 24 * 30);
      setcookie("aut[active]", "$user[active]", time() + 3600 * 24 * 30);
      setcookie("aut[primary_group]", "$user[primary_group]", time() + 3600 * 24 * 30);
      setcookie("aut[sudo]", "$user[sudo]", time() + 3600 * 24 * 30);
      header("refresh:1;url=/");
    } else {
      // Пароль не подошел
      $error_pass = "Пароль не подошел";
    }
  } else {
    // Пользователь неверно ввел логин - удаляем cookie
    setcookie("aut[id]", "", time() - 3600, "/");
    setcookie("aut[login]", "", time() - 3600, "/");
    setcookie("aut[fullname]", "", time() - 3600, "/");
    setcookie("aut[active]", "", time() - 3600, "/");
    setcookie("aut[primary_group]", "", time() - 3600, "/");
    setcookie("aut[sudo]", "", time() - 3600, "/");
    $error_login = "Неверный логин";
  }
}
/*Смотрим cookie
if (isset($_COOKIE['aut'])) {
    foreach ($_COOKIE['aut'] as $name => $value) {
        $name = htmlspecialchars($name);
        $value = htmlspecialchars($value);
        echo "$name. $value <br />";
    }
}
*/
?>

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
          <input class="form-control" name="password" id="pass" type="password" placeholder="Введите пароль" required>
          <a tabindex="-1" class="form-icon form-icon-right passcode-switch is-hidden" data-bs-target="password"
             data-bs-toggle="tooltip" data-bs-placement="top" title="Показать / скрыть пароль">
            <em class="passcode-icon icon-show icon mdi mdi-eye-outline"></em>
            <em class="passcode-icon icon-hide icon mdi mdi-eye-off-outline"></em>
          </a>
        </div>
      </div>
      <p class="error-message"><?php if (isset($error_pass)) echo $error_pass; ?></p>
      <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block">Войти</button>
      </div>
    </form>
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
