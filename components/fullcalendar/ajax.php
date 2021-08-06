<?php
//namespace Core\Model;
//spl_autoload_register(); // включаем автозагрузку классов
error_reporting(E_ALL);
ini_set("display_errors", "on");
//подключаемся к базе
require_once $_SERVER["DOCUMENT_ROOT"] . "/core/config/db_config.php";
//подключаем функции
require_once $_SERVER["DOCUMENT_ROOT"] . "/core/extension/custom_functions.php";
//подключаем справочники
require_once $_SERVER["DOCUMENT_ROOT"] . "/core/extension/reference_book.php";
//подключаем классы

print_r($_POST);
echo "событие добавлено";

if (!empty($_POST))
{
  /* Этот запрос верный, запись создает
 INSERT INTO `sdc_calendar`
  (`title`, `start`, `end`)
VALUES
  ('123', '2021-05-05 10:34:44', '2021-05-05 10:34:44');
 */

  $title = isset($_POST['title']) ? $_POST['title'] : "";
  $start = isset($_POST['start']) ? $_POST['start'] : "";
  $end = isset($_POST['end']) ? $_POST['end'] : "";

  $sql = "INSERT INTO `sdc_calendar`
  (`title`, `start`, `end`)
VALUES
  ('".$title."','".$start."','".$end ."');";

 /* $params = [
    'title' => $_POST["title"],
    'start' => $_POST["start"],
    'end' => $_POST["end"]
  ];*/

// Код ниже рабочий, добавляет статичную запись
  $stmt = $link->prepare($sql);

  $stmt->execute();
  return $stmt->rowCount($params);
}
else // $_POST пустой.
{
  echo "Выполняемый для страницы код без данных POST";
}




/* Прежний код
<?php
//namespace Core\Model;
//spl_autoload_register(); // включаем автозагрузку классов
error_reporting(E_ALL);
ini_set("display_errors", "on");
//подключаемся к базе
require_once $_SERVER["DOCUMENT_ROOT"] ."/core/config/db_config.php";
//подключаем функции
require_once $_SERVER["DOCUMENT_ROOT"] ."/core/extension/custom_functions.php";
//подключаем справочники
require_once $_SERVER["DOCUMENT_ROOT"] ."/core/extension/reference_book.php";
//подключаем классы

if (!empty($_POST["title"])) {
  //print_r($_POST);
  //echo "событие добавлено";

  //добавляем запись в таблицу sdc_calendar
  $query = "INSERT INTO `sdc_calendar` (`title`, `description`, `start`, `end`, `user_id`) VALUES (:title, :description, :start, :end, :user_id)";
  $params = [
    ':title' => $_POST["title"],
    ':description' => $_POST["description"],
    ':start' => $_POST["start-date"].' '.$_POST["start-time"],
    ':end' => $_POST["end-date"].' '.$_POST["end-time"],
    ':user_id' => $_COOKIE['aut']['id']
  ];
  $stmt = $link->prepare($query);
  $stmt->execute($params);
  //получаем id вставленной записи. Если запрос не выполнен вернёт 0. Используется после запроса INSERT
  $LAST_ID = $link->lastInsertId();

  echo $LAST_ID;
}


//?filter[judges]=1&filter[assistants]=2&filter[secretary]=3
//var_dump($_GET["filter"]);

//echo $_SERVER['DOCUMENT_ROOT'] . DIRECTORY_SEPARATOR . 'core' . DIRECTORY_SEPARATOR . 'config' . DIRECTORY_SEPARATOR . 'db_config.php';


*/
