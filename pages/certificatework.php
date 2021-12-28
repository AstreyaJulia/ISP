<?php
$path = $host_api.'/api/certificatework/getCertificateWork.php?quarter&year';
$ourData = file_get_contents($path);
$row = json_decode($ourData);
$title = "Справка о работе судей";

$verification = array_key_exists('edit', $_GET) ?? "";
ob_start();
switch ($verification) {
    case 'true':
        include "components/certificatework/tpl.edit.certificatework.php";
        break;
    
    default:
        include "components/certificatework/tpl.certificatework.php";
        break;
}
    $content = ob_get_contents();
ob_end_clean();
