<?php
$login = $_POST['login'] ?? ""; // Пишем логин из формы в переменную для удобства работы:
if (!empty($_POST['login']) and !empty($_POST['password']) and array_key_exists('aut', $_POST)) {
  // Формируем и отсылаем SQL запрос:
  $user = $db->run("SELECT
                      sdc_users.password
                    FROM sdc_users 
                    WHERE `username` = ?",[$login])->fetch(\PDO::FETCH_LAZY);
  //Если пользователь с таким логином есть
  if (!empty($user)) {
    $hash = $user->password; // соленый пароль из БД
    // Проверяем соответствие хеша из базы введенному паролю
    if (password_verify($_POST['password'], $hash)) {
      // Пользователь прошел авторизацию получим свойсива для куки
      $sql = "SELECT
                sdc_user_attributes.fullname,
                sdc_users.id,
                sdc_users.sudo,
                sdc_users.active,
                sdc_vocation.parent_id AS primary_group
              FROM sdc_users
              LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
              LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room
              LEFT JOIN sdc_vocation ON sdc_vocation.id = sdc_user_attributes.profession
              WHERE sdc_users.username = ?";
      $user_attributes = $db->run($sql, [$login])->fetch(\PDO::FETCH_LAZY);
      //запишем setcookie
      setcookie("aut[id]", "$user_attributes->id", time() + 3600 * 24 * 30);
      setcookie("aut[login]", "$login", time() + 3600 * 24 * 30);
      setcookie("aut[fullname]", "$user_attributes->fullname", time() + 3600 * 24 * 30);
      setcookie("aut[active]", "$user_attributes->active", time() + 3600 * 24 * 30);
      setcookie("aut[primary_group]", "$user_attributes->primary_group", time() + 3600 * 24 * 30);
      setcookie("aut[sudo]", "$user_attributes->sudo", time() + 3600 * 24 * 30);
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

  //Регистрация пользователя
  if (!empty($_POST["login"]) and !empty($_POST["password"]) and !empty($_POST["passrep"]) and array_key_exists('reg', $_POST)) {
  // Если пароль и подтверждение совпадают...
    if ($_POST["password"] == $_POST["passrep"]) {
      $password = password_hash($_POST['password'], PASSWORD_DEFAULT);
      // Пробуем получить юзера с таким логином
      $user = $db->run("SELECT * FROM sdc_users WHERE `username` = ? AND password = ''",[$login])->fetch(\PDO::FETCH_LAZY);

      // Если юзера с таким логином нет
      if (empty($user)) {
        // Логина нет, выведем сообщение об этом
        $error_login = "Такого логина нет, либо он уже загегестрирован";
      } else {

        // Пользователь прошел авторизацию получим fullname
        $user_attributes = $db->run("SELECT fullname FROM sdc_user_attributes WHERE `internalKey` = ?",[$user->id])->fetch(\PDO::FETCH_LAZY);
        // Логин есть, записываем хэш пароль в бд
        $params = [
          ':login' => $login,
          ':password' => $password
        ];
        $user_attributes = $db->run("UPDATE sdc_users SET `password`=:password WHERE `username` = :login", $params);
        // Пользователь прошел авторизацию, запишем cookie
        setcookie("aut[id]", "$user->id", time() + 3600 * 24 * 30);
        setcookie("aut[login]", "$login", time() + 3600 * 24 * 30);
        setcookie("aut[fullname]", "$user_attributes->fullname", time() + 3600 * 24 * 30);
        setcookie("aut[active]", "$user->active", time() + 3600 * 24 * 30);
        setcookie("aut[primary_group]", "$user->primary_group", time() + 3600 * 24 * 30);
        setcookie("aut[sudo]", "$user->sudo", time() + 3600 * 24 * 30);
        //переходим на главную страницу
        header("refresh:1;url=/");
      }
    } else {
      // Пароль и подтверждение НЕ совпадают - выведем сообщение
      $error_pass = "Пароли не совпадают(";
    }
  }

  if (array_key_exists('reg', $_GET)) {
    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.register.php";
  } else {
    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.autorization.php";
  }