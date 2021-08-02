<?php

$title = "Профиль пользователя";
$desc = "Описание чего-то коротко";
$content = "";

	$id = $_COOKIE["aut"]["id"];

	//Сохраняем изменения в профиле пользователя
	if (array_key_exists('editUser',$_POST)) {
			    $query_update = "UPDATE sdc_user_attributes SET `fullname`=:fullname, `email`=:email, `mobilephone`=:mobilephone, `dob`=:dob, `gender`=:gender, `city`=:city, `state`=:state, `zip`=:zip, `website`=:website WHERE `internalKey`=:internalKey";
			    $params = [
			        ':internalKey' => $_COOKIE["aut"]["id"],
			        ':fullname' => $_POST["fullname"],
					':email' => $_POST["email"],
					':mobilephone' => $_POST["mobilephone"],
					':dob' => $_POST["dob"],
					':gender' => $_POST["gender"],
					':city' => $_POST["city"],
					':state' => $_POST["state"],
					':zip' => $_POST["zip"],
					':website' => $_POST["website"]
			    ];
			    $stmt = $link->prepare($query_update);
			    $stmt->execute($params);
	}
	// получаем данные личного кабинета пользователя
	$userProfile = $link->prepare("SELECT * FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room
			WHERE sdc_user_attributes.internalKey = ?");
	$userProfile->execute([$id]);


	//событие на кнопку выход
	if(array_key_exists('logOut',$_GET)) {
		setcookie ("aut[id]", "", time() - 3600, "/");
		setcookie ("aut[login]", "", time() - 3600, "/");
		setcookie ("aut[active]", "", time() - 3600, "/");
		setcookie ("aut[primary_group]", "", time() - 3600, "/");
		setcookie ("aut[sudo]", "", time() - 3600, "/");
		header( "refresh:1;url=/" );
	}
	

	while ($row = $userProfile->fetch(PDO::FETCH_LAZY)) {
		ob_start();
	        include "components/user-profile/template/tpl.edit-user-profile.php";
	        $content = ob_get_contents();
	    ob_end_clean();
		
	}