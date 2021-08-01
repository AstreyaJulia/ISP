<?php
$title = "Редактировать запись";
$desc = "Описание чего-то коротко";

//Редактируем ссылку
if (!empty($_GET["editStaff"])) {
  //редактируем ссылку
  if ($_GET["editStaff"] !== "add") {
    //получаем запись для редактирования
    $editStaff = $link->prepare("SELECT *, sdc_users.id, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room WHERE sdc_users.id = ?");
    $editStaff->execute([$_GET["editStaff"]]);
    while ($row = $editStaff->fetch(PDO::FETCH_LAZY)) {
      ob_start();
      include "template/tpl.edit-staff-profile.php";
      $content = ob_get_contents();
      ob_end_clean();
    }
    if (!empty($_POST["username"]) and !empty($_POST["fullname"]) and $_GET["editStaff"] !== "add") {
      //Редактируем запись в таблице sdc_users
      $query_update = "UPDATE sdc_users SET `username`=:username, `active`=:active, `primary_group`=:primary_group, `sudo`=:sudo WHERE `id` = :id";
      $params = [
        ':id' => $_GET["editStaff"],
        ':username' => $_POST["username"],
        ':active' => $_POST["active"],
        ':primary_group' => $_POST["primary_group"],
        ':sudo' => $_POST["sudo"]
      ];
      $stmt = $link->prepare($query_update);
      $stmt->execute($params);
      //Проверка для заполнения рабочего места
      if ($_POST["active"] == 1) {
        $room = $_POST["room"];
      } else {
        $room = NULL;
      }
      //Проверяем на отсутствие принадлежности судье
      if ($_POST["profession"] == 6 or $_POST["profession"] == 7 or $_POST["profession"] == 9) {
        $affiliation = $_POST["affiliation"];
      } else {
        $affiliation = "";
      }
      //Редактируем запись в таблице sdc_user_attributes
      $query_update = "UPDATE sdc_user_attributes SET `fullname`=:fullname, `gender`=:gender, `dob`=:dob, `email`=:email, `mobilephone`=:mobilephone, `zip`=:zip, `state`=:state, `city`=:city, `address`=:address, `photo`=:photo, `comment`=:comment, `website`=:website, `profession`=:profession, `affiliation`=:affiliation, `room`=:room WHERE `internalKey` = :internalKey";
      $params = [
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
        ':affiliation' => $affiliation,
        ':room' => $room
      ];
      $stmt = $link->prepare($query_update);
      $stmt->execute($params);
      //переходим в раздел
      header("Location: /?page=staff");
    }
  } else {//добавляем пользователя
    $row = [
      "internalKey" => "",
      "fullname" => "",
      "gender" => "",
      "dob" => "",
      "email" => "",
      "mobilephone" => "",
      "zip" => "",
      "state" => "",
      "city" => "",
      "address" => "",
      "photo" => "assets/img/avatars/default.svg",
      "comment" => "",
      "website" => "",
      "profession" => "",
      "affiliation" => "",
      "room" => "",
      "position" => "",
      "username" => "",
      "active" => "",
      "primary_group" => "",
      "sudo" => ""
    ];

    ob_start();
    include "template/tpl.edit-staff-profile.php";
    $content = ob_get_contents();
    ob_end_clean();

    if (!empty($_POST["username"]) and !empty($_POST["fullname"]) and $_GET["editStaff"] == "add") {
      //добавляем запись в таблицу sdc_users
      $query = "INSERT INTO `sdc_users` (`username`, `active`, `primary_group`, `sudo`) VALUES (:username, :active, :primary_group, :sudo)";
      $params = [
        ':username' => $_POST["username"],
        ':active' => $_POST["active"],
        ':primary_group' => $_POST["primary_group"],
        ':sudo' => $_POST["sudo"]
      ];
      $stmt = $link->prepare($query);
      $stmt->execute($params);
      //получаем id вставленной записи. Если запрос не выполнен вернёт 0. Используется после запроса INSERT
      $LAST_ID = $link->lastInsertId();
      //добавляем запись в таблицу sdc_user_attributes
      $query = "INSERT INTO `sdc_user_attributes` (`internalKey`, `fullname`, `gender`, `dob`, `email`, `mobilephone`, `zip`, `state`, `city`, `address`, `photo`, `comment`, `website`, `profession`, `affiliation`, `room`) VALUES (:internalKey, :fullname, :gender, :dob, :email, :mobilephone, :zip, :state, :city, :address, :photo, :comment, :website, :profession, :affiliation, :room)";
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
        ':affiliation' => $_POST["affiliation"],
        ':room' => $_POST["room"]
      ];
      $stmt = $link->prepare($query);
      $stmt->execute($params);
      //переходим в раздел
      header("Location: /?page=staff");
    }
  }
}
