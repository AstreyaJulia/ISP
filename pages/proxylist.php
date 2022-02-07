<?php
    $title = "Каталог ссылок";
    $proxylistClass = new \Core\Model\ProxyList($db);

    // Проверяем права записанные в куку заменить на jwt
    $verification = $userAtributes->data->sudo ?? "";
    // Проверяем переданный GET для редактирования ссылки
    $verificationAdd = $_POST['editLink'] ?? "";

    // Добавляем ссылку
    if (array_key_exists("editLink", $_GET) && empty($_GET["editLink"])) {
        $row = $autorizationClass::sendGET(array(), $host_api.'/api/proxylist/getCategory.php?');
    }
    // Редактируем ссылку
    else if (array_key_exists("editLink", $_GET) && !empty($_GET["editLink"])) {
        // Собираем ID-ссылки и jwt
        $editLink = array_merge($tokenJWT, array("id" => $_GET["editLink"]));
        $row = $autorizationClass::sendGET($editLink, $host_api.'/api/proxylist/getReadOne.php?');
    } else {
        $row = $autorizationClass::sendPOST($tokenJWT, $host_api.'/api/proxylist/getProxyList.php');
    }

    $id = $row->data->link[0]->id ?? "";
    $menuindex = $row->data->link[0]->menuindex ?? "";
    $name_href = $row->data->link[0]->name_href ?? "";
    $href = $row->data->link[0]->href ?? "";
    $proxy_href = $row->data->link[0]->proxy_href ?? "";

    // Устанавливаем значение кнопки для добавления, редактирования записи
    $editLinkValue = (array_key_exists("editLink", $_GET) && empty($_GET["editLink"])) ? "add": $id;

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
        $editLink = array_merge($tokenJWT, $_POST);

        $info = $autorizationClass::sendPOST($editLink, $host_api.'/api/proxylist/updateLink.php')->message;

        header("Location: /?page=proxylist");
    }