<?php
  $title = "Документация";

  ob_start();
    include "components/documentation/tpl.documentation.php";
    $content = ob_get_contents();
  ob_end_clean();
