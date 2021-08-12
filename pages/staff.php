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
