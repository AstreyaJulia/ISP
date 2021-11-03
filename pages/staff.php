<?php
if ($_COOKIE['aut']['sudo'] == 1) {
  $title = "Список сотрудников";
  $desc = "Описание чего-то коротко";
  //получаем пользователей
  $staffClass = new \Core\Model\Staff($db);
  $staff = $staffClass->getStaff();

  $i = 1;
  ob_start();
    include "components/staff/template/tpl.staff.php";
    $content = ob_get_contents();
  ob_end_clean();
} else {
    header("HTTP/1.0 403 Forbidden");
    $title = "Ошибка на странице";
    $content = "Извините, произошла ошибка, Запрашиваемая страница не найдена!";
}





//Редактируем ссылку
if (!empty($_GET["editStaff"])) {
  $title = "Редактировать запись";
  $desc = "Описание чего-то коротко";
  $roomClass = new \Core\Model\Room($db);
  //редактируем ссылку
  if (isset($_GET["editStaff"]) and $_GET["editStaff"] !== "add") {
    //получаем запись для редактирования
    $editStaf = $staffClass->getSelectId([$_GET["editStaff"]]);
    foreach ($editStaf as $row) {
      ob_start();
        include "components/staff/template/tpl.edit-staff-profile.php";
        $content = ob_get_contents();
      ob_end_clean();
    }
    //Сбрасываем пароль
    if (array_key_exists('DropPass',$_POST)) {
      $staffClass->setDropPass([$_GET["editStaff"]]);
    }
    
    if (!empty($_POST["username"]) and !empty($_POST["fullname"]) and $_GET["editStaff"] !== "add") {
      //Редактируем запись в таблице sdc_users

      if ($_POST["active"] == 1) {
          $room = [
            ':room' => $_POST["room"]
          ];
      } else {
          $room = [
            ':room' => NULL
          ];
      }
      //Проверяем на отсутствие принадлежности судье
      if (in_array($_POST["profession"], [6, 7, 9])) {
          $affiliation = [
            ':affiliation' => $_POST["affiliation"]
          ];
      } else {
          $affiliation = [
            ':affiliation' => ""
          ];
      }

      $params = [
        //для таблицы sdc_users
        ':id' => $_GET["editStaff"],
        ':username' => $_POST["username"],
        ':active' => $_POST["active"],
        ':primary_group' => $_POST["primary_group"],
        ':sudo' => $_POST["sudo"],
        //для таблицы sdc_user_attributes
        ':internalKey' => $_GET["editStaff"],
        ':fullname' => $_POST["fullname"],
        ':gender' => $_POST["gender"],
        ':dob' => $_POST["dob"],
        ':email' => $_POST["email"],
        ':mobilephone' => $_POST["mobilephone"],
        ':zip' => $_POST["zip"],
        ':state' => $_POST["state"],
        ':city' => $_POST["city"],
        ':address' => $_POST["address"],
        ':photo' => 'assets/img/avatars/default.svg',
        ':comment' => $_POST["comment"],
        ':website' => $_POST["website"],
        ':profession' => $_POST["profession"],
        ':affiliation' => "",
        ':room' => ""
      ];
      $params = array_replace($params, $room, $affiliation);
      $staffClass->setUpdateUser($params);

      

      //Редактируем запись в таблице sdc_user_attributes
      $staffClass->setUpdateUserAtr($params);

      //переходим в раздел
      header("Location: /?page=staff");
    }
  } else {//добавляем пользователя
        $title = "Создать пользователя";
        $row = new class {
          public $username = false;
          public $active = false;
          public $primary_group = false;
          public $sudo = false;
          public $fullname = false;
          public $gender = false;
          public $dob = false;
          public $email = false;
          public $mobilephone = false;
          public $zip = false;
          public $state = "67";
          public $city = "Сафоново";
          public $address = false;
          public $photo = 'assets/img/avatars/default.svg';
          public $comment = false;
          public $website = false;
          public $profession = false;
          public $affiliation = false;
          public $room = false;
          public $position = false;
        };

    ob_start();
      include "components/staff/template/tpl.edit-staff-profile.php";
      $content = ob_get_contents();
    ob_end_clean();

    if (!empty($_POST["username"]) and !empty($_POST["fullname"]) and $_GET["editStaff"] == "add") {
      $params = [
        ':username' => $_POST["username"],
        ':active' => $_POST["active"],
        ':primary_group' => $_POST["primary_group"],
        ':sudo' => $_POST["sudo"]
      ];
      //добавляем запись в таблицу sdc_users
      $staffClass->setInsertUser($params);
      //получаем id вставленной записи. Если запрос не выполнен вернёт 0. Используется после запроса INSERT
      $LAST_ID = $db->pdo->lastInsertId();
      
      if ($_POST["active"] == 1) {
          $room = [
            ':room' => $_POST["room"]
          ];
      } else {
          $room = [
            ':room' => NULL
          ];
      }
      //Проверяем на отсутствие принадлежности судье
      if (in_array($_POST["profession"], [6, 7, 9])) {
          $affiliation = [
            ':affiliation' => $_POST["affiliation"]
          ];
      } else {
          $affiliation = [
            ':affiliation' => ""
          ];
      }

      $params = [
        ':internalKey' => $LAST_ID,
        ':fullname' => $_POST["fullname"],
        ':gender' => $_POST["gender"],
        ':dob' => $_POST["dob"],
        ':email' => $_POST["email"],
        ':mobilephone' => $_POST["mobilephone"],
        ':zip' => $_POST["zip"],
        ':state' => $_POST["state"],
        ':city' => $_POST["city"],
        ':address' => $_POST["address"],
        ':photo' => 'assets/img/avatars/default.svg',
        ':comment' => $_POST["comment"],
        ':website' => $_POST["website"],
        ':profession' => $_POST["profession"],
        ':affiliation' => "",
        ':room' => ""
      ];

      $params = array_replace($params, $room, $affiliation);

      //добавляем запись в таблицу sdc_user_attributes
      $staffClass->setInsertUserAtr($params);
      //переходим в раздел
      header("Location: /?page=staff");
    }
  }
}