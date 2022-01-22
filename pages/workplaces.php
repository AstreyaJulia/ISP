<?php
if ($userAtributes->data->sudo == 1) {
  $title = "Рабочие места";
  $desc = "Описание чего-то коротко";
  $i = 1;
  //получаем пользователей
  $roomClass = new \Core\Model\Room($db);
  $room = $roomClass->getRoom();

  ob_start();
    include "components/workplaces/tpl.workplaces.php";
    $content = ob_get_contents();
  ob_end_clean();











}
