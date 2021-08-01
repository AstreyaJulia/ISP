<?php

error_reporting(E_ALL);
ini_set("display_errors", "on");

require_once "core/config/db_config.php";

// Если форма регистрации отправлена...
if (!empty($_POST["login"]) and !empty($_POST["password"]) and !empty($_POST["confirm"])) {
  // Если пароль и подтверждение совпадают...
  if ($_POST["password"] == $_POST["confirm"]) {
    // Пишем логин и пароль из формы в переменные для удобства работы:
    $login = $_POST["login"];
    $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
    // Пробуем получить юзера с таким логином
    $query_select = $link->prepare("SELECT * FROM sdc_users WHERE `username` = ?");
    $query_select->execute([$login]);
    //извлекаем резултаты запроса
    $user = $query_select->fetch(PDO::FETCH_LAZY);
    // Если юзера с таким логином нет
    if (empty($user)) {
      // Логина нет, выведем сообщение об этом
      $notLogin = "Такого логина нет";
    } else {
      // Логин есть, записываем хэш пароль в бд
      $query_update = "UPDATE sdc_users SET `password`=:password WHERE `username` = :login";
      $params = [
        ':login' => $login,
        ':password' => $password
      ];
      $stmt = $link->prepare($query_update);
      $stmt->execute($params);
      // Пользователь прошел авторизацию, запишем cookie
      setcookie("aut[id]", "$user[id]", time() + 3600 * 24 * 30);
      setcookie("aut[login]", "$login", time() + 3600 * 24 * 30);
      setcookie("aut[active]", "$user[active]", time() + 3600 * 24 * 30);
      setcookie("aut[primary_group]", "$user[primary_group]", time() + 3600 * 24 * 30);
      setcookie("aut[sudo]", "$user[sudo]", time() + 3600 * 24 * 30);
      //переходим на главную страницу
      header("refresh:1;url=/");
    }
  } else {
    // Пароль и подтверждение НЕ совпадают - выведем сообщение
    $notConfirmPassword = "Пароли не совпадают(";
  }
}
?>


<!DOCTYPE html>
<html lang="ru">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <link rel="stylesheet" href="assets/pages/css/auth.css">
  <title>Сброс пароля / Регистрация</title>
</head>
<body class="page-body">
<!-- Содержимое страницы -->
<main class="main-content">
  <div class="login-form">
    <h2>Сброс пароля / Регистрация</h2>
    <form action="" method="post" class="form auth-form">
      <div class="form-top input-container">
        <input name="login" value="<?= @$_POST['login'] ?>" type="text" id="login" class="login-input" required>
        <label for="login" class="input-label">Логин</label>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
          <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
          <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/>
        </svg>

      </div>
      <p class="error-message"><?= @$notLogin ?></p>
      <div class="form-middle input-container">
        <input name="password" type="password" id="pass" class="pass-input" required>
        <label for="pass" class="input-label">Пароль</label>
      </div>
      <p class="error-message"></p>
      <div class="form-middle input-container">
        <input name="confirm" type="password" id="passrep" class="passrep-input">
        <label for="passrep" class="input-label">Повторите пароль</label>
      </div>
      <p class="error-message"><?= @ $notConfirmPassword ?></p>
      <div class="form-bottom">
        <button type="submit" class="btn large primary">Сохранить пароль / Регистрация</button>
      </div>
    </form>
  </div>
</main>
<script src="assets/pages/js/formcheck.js"></script>
</body>
</html>





















