<?php

use Core\Model\Fullcalendar;

$FullcalendarClass = new Fullcalendar($db);
$title = "Календарь";
$content = "";
ob_start();
    include "components/fullcalendar/template/tpl.fullcalendar.php";
    $content = ob_get_contents();
ob_end_clean();



/*


if (isset($_POST['operation'])) {
    // Если в полученном post user_id = 999999999, то меняем на id пользователя из куки, ессли 0, то user_id =0
    switch ($_POST['user_id']) {
      case 999999999:
        $user_id = $_COOKIE['aut']['id'];
        break;
      case 0:
        $user_id = "0";
        break;
    }

    $params = [
        ':title' => $_POST["title"],
        ':start' => $_POST["start"],
        ':end' => $_POST["end"],
        ':calendar' => $_POST["calendar"],
        ':description' => $_POST["description"],
        ':url' => $_POST["url"],
        ':user_id' => $_POST["user_id"],
        ':allDay' => $_POST["allDay"]
    ];



    switch ($_POST['operation']) {
        case add:
            $FullcalendarClass->setInsertEvents($params);
            break;
        case 1:
            echo "i равно 1";
            break;
        case 2:
            echo "i равно 2";
            break;
    }
}*/
