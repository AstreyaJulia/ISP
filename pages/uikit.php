<?php
$title = "UI Kit";

ob_start();
include "components/uikit/template/tpl.uikit.php";
$content = ob_get_contents();
ob_end_clean();
