<?php
if ($_COOKIE['aut']['sudo'] == 1) {
  $title = "Список сотрудников";
  $desc = "Описание чего-то коротко";
  //получаем пользователей
  $staff = $link->query("SELECT *, sdc_users.id, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room")->fetchAll(PDO::FETCH_ASSOC);
  $i = 1;
  ob_start();
  include "components/staff/template/tpl.staff.php";
  $content = ob_get_contents();
  ob_end_clean();
} else {
  header("HTTP/1.0 404 Not Found");
  $title = "Ошибка на странице";
  $content = "Извините, произошла ошибка, Запрашиваемая страница не найдена!";
}
