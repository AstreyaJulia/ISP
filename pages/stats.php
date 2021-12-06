<?php
$title = "Статистика";
ob_start();
    include "components/stats/tpl.stats.php";
    $content = ob_get_contents();
ob_end_clean();