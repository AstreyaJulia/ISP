<?php

  $title = "Качество рассмотрения дел";
  $desc = "Описание чего-то коротко";
  ob_start();
  include "components/grade/tpl.grade.php";
  $content = ob_get_contents();
  ob_end_clean();


