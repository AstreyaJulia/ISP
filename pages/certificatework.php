<?php
$path = $host_api.'/api/certificatework/getCertificateWork.php?quarter&year';
$ourData = file_get_contents($path);
$row = json_decode($ourData);
$title = "Справка о работе судей";

ob_start();
    include "components/certificatework/tpl.certificatework.php";
    $content = ob_get_contents();
ob_end_clean();
