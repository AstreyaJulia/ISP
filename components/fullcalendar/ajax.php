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

if (!empty($_POST))
{

  $title = isset($_POST['title']) ? $_POST['title'] : "";
  $start = isset($_POST['start']) ? $_POST['start'] : "";
  $end = isset($_POST['end']) ? $_POST['end'] : "";
  $calendar = isset($_POST['calendar']) ? $_POST['calendar'] : "";
  //$allDay = isset($_POST['allDay']) ? $_POST['allDay'] : "";
  $description = isset($_POST['description']) ? $_POST['description'] : "";
  $url = isset($_POST['url']) ? $_POST['url'] : "";

  // Если в полученном post user_id = 999999999, то меняем на id пользователя из куки, ессли 0, то user_id =0
  if
  ($_POST['user_id'] = "999999999") {
    $user_id = $_COOKIE['aut']['id'];
  } else
    if ($_POST['user_id'] = "0") {
      $user_id = "0";
    };

  $sql = "INSERT INTO `sdc_calendar`
  (`title`, `start`, `end`, `calendar`, `description`, `url`, `user_id`)
VALUES
  ('".$title."','".$start."','".$end ."','".$calendar ."','".$description ."','".$url ."','".$user_id ."');";


  $stmt = $link->prepare($sql);

  $stmt->execute();
  return $stmt->rowCount($params);
}
else // $_POST пустой
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
