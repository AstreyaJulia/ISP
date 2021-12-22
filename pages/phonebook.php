<?php

	$title = "Телефонный справочник";
	$desc = "Описание чего-то коротко";
	$content = "";
	//задаем id для вывода результатов фильтра
	$id = "filter";
	//Группы пользователей
	$phonebookClass = new \Core\Model\Phonebook($db);
	foreach ($phonebookClass->getGroup() as $key => $value) {
		$primary_group[] = $value->id;
	}
	$phonebook = $phonebookClass->getSelect($primary_group);

	ob_start();
		include "components/phonebook/template/tpl.phonebook.php";
		$content = ob_get_contents();
	ob_end_clean();