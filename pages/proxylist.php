<?php
    $title = "Каталог ссылок";
    $proxylistClass = new \Core\Model\ProxyList($db);

    // Проверяем права записанные в куку заменить на jwt
    $verification = $userAtributes->data->sudo ?? "";
    // Проверяем переданный GET для редактирования ссылки
    $verificationAdd = $_POST['editLink'] ?? "";

    // Добавляем ссылку
    if (array_key_exists("editLink", $_GET) && empty($_GET["editLink"])) {
        $path = $host_api.'/api/proxylist/getCategory.php';
    }
    // Редактируем ссылку
    else if (array_key_exists("editLink", $_GET) && !empty($_GET["editLink"])) {
        $path = $host_api.'/api/proxylist/getReadOne.php?id='.$_GET['editLink'];
    } else {
        $path = $autorizationClass::sendPOST($params, $host_api.'/api/proxylist/getProxyList.php');
    }

    $ourData = file_get_contents($path);
    $row = json_decode($ourData);

    $id = $row->data->link[0]->id ?? "";
    $menuindex = $row->data->link[0]->menuindex ?? "";
    $name_href = $row->data->link[0]->name_href ?? "";
    $href = $row->data->link[0]->href ?? "";
    $proxy_href = $row->data->link[0]->proxy_href ?? "";
    // проверка для добавления, редактирования записи
    $editLinkValue = (array_key_exists("editLink", $_GET) && empty($_GET["editLink"])) ? "add": $id;

    /*echo "<pre>";
    var_dump($row->data->link[0]->name_href);
    die();*/

    ob_start();
        if (array_key_exists("editLink", $_GET)) {
            include "components/proxylist/tpl.form-editLink.php";
        } else {
            include "components/proxylist/tpl.proxylist.php";
        }
        $content = ob_get_contents();
    ob_end_clean();


    // Добавляем запись
    if (empty($_GET["editLink"]) && $verificationAdd == "add") {
        echo "я готов добавить запись";
        /*
            запишем сообщение в переменную $info
            Теряется при переходе на новую страницу (нужно писать в куку или сессию)
        */
        $info = $proxylistClass->insertCURL($_POST, $host_api);  
    }

    // Редактируем запись
    if (!empty($_GET["editLink"]) && !empty($verificationAdd) && $verificationAdd != "add") {
        /*
            запишем сообщение в переменную $info
            Теряется при переходе на новую страницу (нужно писать в куку или сессию)
        */
        $info = $proxylistClass->updateCURL($_POST, $host_api);  
    }