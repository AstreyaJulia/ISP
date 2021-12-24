<?php
$path = $host_api.'/api/certificatework/getCertificateWork.php?quarter=1,2,3,4&year=2021';
$ourData = file_get_contents($path);
$row = json_decode($ourData);
$title = "Справка о работе судей";
$i = 1; // начальное значение для номерации
ob_start();
    include "components/certificatework/tpl.certificatework.php";
    $content = ob_get_contents();
ob_end_clean();
