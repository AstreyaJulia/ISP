<?php
if ($_COOKIE['aut']['sudo'] == 1) {
  $title = "Панель администратора";
  $desc = "Описание чего-то коротко";
  $staffClass = new \Core\Model\Staff($db);
  $staffCount = $staffClass->getStaffCount();
  ob_start();
  include "components/admin/tpl.admin.php";
  $content = ob_get_contents();
  ob_end_clean();

}
