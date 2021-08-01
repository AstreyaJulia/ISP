<?php

namespace Core\Model;
spl_autoload_register(); // включаем автозагрузку классов
error_reporting(E_ALL);
ini_set("display_errors", "on");
//подключаемся к базе
require_once $_SERVER["DOCUMENT_ROOT"] . "/core/config/db_config.php";
//подключаем функции
require_once $_SERVER["DOCUMENT_ROOT"] . "/core/extension/custom_functions.php";
//подключаем справочники
require_once $_SERVER["DOCUMENT_ROOT"] . "/core/extension/reference_book.php";
//подключаем классы
require_once $_SERVER["DOCUMENT_ROOT"] . "/core/model/user.php";
require_once $_SERVER["DOCUMENT_ROOT"] . "/core/model/phonebook.php";
$primary_group = "";
if (isset($_GET["filter"])) {
  foreach ($_GET["filter"] as $key => $value) {
    if ($_GET["filter"] [$key][0] != 0) {
      $primary_group .= $_GET["filter"] [$key][0] . ",";
    }
  }
}
//отрезаем последний символ т.к. знаем что это ","
$primary_group = substr($primary_group, 0, -1);
//получаем массив из полученной строки
$primary_group = explode(',', $primary_group);
//подготавливаем запрос
$in = str_repeat('?,', count($primary_group) - 1) . '?';
$sql = "SELECT *, sdc_users.id, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
			LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
				LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room WHERE sdc_users.active = 1 and sdc_user_attributes.profession != '' and sdc_users.primary_group in ($in)
				ORDER BY sdc_user_attributes.profession + 0";
$stm = $link->prepare($sql);
$stm->execute($primary_group);
$phonebook = $stm->fetchAll(\PDO::FETCH_CLASS, __NAMESPACE__ . '\\Phonebook');

//(OA0.JUDGE_ID = :JUDGE or (not exists(select id from G1_Case where JUDGE_ID=:JUDGE)))


foreach ($phonebook as $row) {
  echo '<tr>
	<td>' . $row->getPositionPhonebook() . '</td>
	<td>' . shortFIO($row->fullname) . '</td>
	<td>' . $row->getProfessionPhonebook() . '</td>
	<td>' . $row->phone_worck . '</td>
</tr>' . PHP_EOL;
}
