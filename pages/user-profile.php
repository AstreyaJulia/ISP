<?php

	$title = "Профиль пользователя";
	$desc = "Описание чего-то коротко";

	//получаем пользователей
	$staffUserAttributes = new \Core\Model\UserAttributes($db);
	//Сохраняем изменения в профиле пользователя
	if (array_key_exists('editUser',$_POST)) {
	    $params = [
	        'internalKey' => $userAtributes->data->id,
	        'fullname' => $_POST["fullname"],
			'email' => $_POST["email"],
			'mobilephone' => $_POST["mobilephone"],
			'dob' => $_POST["dob"],
			'gender' => $_POST["gender"],
			'state' => $_POST["state"],
			'city' => $_POST["city"],
			'address' => $_POST["address"],
			'zip' => $_POST["zip"],
			'website' => $_POST["website"]
	    ];
		$staffUserAttributes->setUpdUserAtr($params);
	}
	//Сбрасываем пароль
	$staffUserAttributes->setDropPass([$userAtributes->data->id]);

	// получаем данные личного кабинета пользователя
	$userProfile = $staffUserAttributes->getSelectId([$userAtributes->data->id]);


	//событие на кнопку выход
	if(array_key_exists('logOut',$_GET)) {
		setcookie ("aut[id]", "", time() - 3600, "/");
		setcookie ("aut[jwt]", "", time() - 3600, "/");
		header( "refresh:1;url=/" );
	}


	foreach ($userProfile as $key => $row) {
		ob_start();
	        include "components/user-profile/template/tpl.edit-user-profile.php";
	        $content = ob_get_contents();
	    ob_end_clean();
	}