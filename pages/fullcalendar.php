<?php

use Core\Model\Fullcalendar;

$FullcalendarClass = new Fullcalendar($db);
$title = "Календарь";
$content = "";
ob_start();
    include "components/fullcalendar/template/tpl.fullcalendar.php";
    $content = ob_get_contents();
ob_end_clean();