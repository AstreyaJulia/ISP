<?php

	$title = "Телефонный справочник";
	$desc = "Описание чего-то коротко";
	$content = "";
	//задаем id для вывода результатов фильтра
	$id = "filter";
	//Группы пользователей
	$primary_group = array(1, 2, 3, 4);
	$phonebookClass = new \Core\Model\Phonebook($db);
	$phonebook = $phonebookClass->getSelect($primary_group);

	ob_start();
		include "components/phonebook/template/tpl.phonebook.php";
		$content = ob_get_contents();
	ob_end_clean();