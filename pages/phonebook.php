<?php
	namespace Core\Model;
	$title = "Телефонный справочник";
	$desc = "Описание чего-то коротко";
	$content = "";
	//задаем id для вывода результатов фильтра
	$id = "filter";
	//получаем пользователей
	$primary_group = "1,2,3,4";
	//получаем массив из полученной строки
	$primary_group = explode( ',', $primary_group );
	//подготавливаем запрос
	$in  = str_repeat('?,', count($primary_group) - 1) . '?';
	$sql = "SELECT *, sdc_users.id, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room WHERE sdc_users.active = 1 and sdc_user_attributes.profession != '' and sdc_users.primary_group in ($in)
				ORDER BY sdc_user_attributes.profession + 0";
	$stm = $link->prepare($sql);
	$stm->execute($primary_group);
	$phonebook = $stm->fetchAll(\PDO::FETCH_CLASS, __NAMESPACE__ .'\\Phonebook');
	//include "components/phonebook/tamplate/phonebook.php";

	ob_start();
		include "components/phonebook/template/tpl.phonebook.php";
		$content = ob_get_contents();
	ob_end_clean();