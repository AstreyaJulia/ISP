<?php
    $title = "Каталог ссылок";
    $proxylistClass = new \Core\Model\ProxyList($db);

    // Проверяем права записанные в куку заменить на jwt
    $verification = $_COOKIE["aut"]["sudo"] ?? "";
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
        $path = $host_api.'/api/proxylist/getProxyList.php?sudo='.$verification;
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







/*






$title = "Каталог ссылок";
$desc = "Описание чего-то коротко";
$ProxyListClass = new \Core\Model\ProxyList($db);
//Если есть атрибут sudo = 1 добавляем админские плюшки
if ($_COOKIE['aut']['sudo'] == 1) {
    $ProxyList = $ProxyListClass->getSelectAll();
} else {
// не показываем blacklist
    $ProxyList = $ProxyListClass->getSelectUser();
}

$family = [];

// Объединяем каждого ребенка с соответствующим родителем
foreach ($ProxyList as $p) {
    $children = children($p, $ProxyList);
    if ($children != []) {
        $family[] = array_merge($p, ["Подгруппа" => $children]);
    }
}
//Сортируем группы по полю $menuindex
$menuindexGroup  = array_column($family, 'menuindex');
array_multisort($menuindexGroup, SORT_ASC, $family);
$content = "";
//Если входит в группу sudo отображаем с кнопочками
if($_COOKIE['aut']['sudo'] == 1) {
    //формируем страницу
    ob_start();
        include "components/proxylist/template/tpl.proxylist-sudo.php";
        $content = ob_get_contents();
    ob_end_clean();

    //Редактируем ссылку
    if (!empty($_POST["editLink"]) or !empty($_GET["editLink"])) {
        //Получаем все группы
        $group = $ProxyListClass->getSelectGroup();
        //редактируем ссылку
        if (!empty($_GET["editLink"]) and $_GET["editLink"] !== "add"){
            //получаем запись для редактирования
            $editLink = $ProxyListClass->getSelectId($_GET["editLink"]);

            foreach ($editLink as $row) {
                ob_start();
                    include "components/proxylist/template/tpl.form-editLink.php";
                    $content = ob_get_contents();
                ob_end_clean();
            }

            if (!empty($_POST["name_href"]) and !empty($_POST["href"]) and $_GET["editLink"] !== "add") {
                $params = [
                    ':id' => $_GET["editLink"],
                    ':menuindex' => $_POST["menuindex"],
                    ':id_group' => $_POST["id_group"],
                    ':href' => $_POST["href"],
                    ':name_href' => $_POST["name_href"],
                    ':proxy_href' => $_POST["proxy_href"]
                ];
                //Выполняем запрос на обновление ссылки
                $ProxyListClass->setUpdateLink($params);
                
                //переписываем файлы для CCProxy
                WriteProxyList ($db);
                //переходим в раздел
                header("Location: /?page=proxylist");
            }
        } else {//добавляем ссылку
        
        // устанавливаем значения по умолчанию
            $row = new class {
                public $name_href = false;
                public $menuindex = false;
                public $href = false;
                public $proxy_href = false;
                public $id_group = 1; //хорошо бы придумать универсальное решение
            };

            ob_start();
                include "components/proxylist/template/tpl.form-editLink.php";
                $content = ob_get_contents();
            ob_end_clean();
            
            if (!empty($_POST["name_href"]) and !empty($_POST["href"]) and $_POST["editLink"] == "add") {
                $params = [
                    ':menuindex' => $_POST["menuindex"],
                    ':id_group' => $_POST["id_group"],
                    ':href' => $_POST["href"],
                    ':name_href' => $_POST["name_href"],
                    ':proxy_href' => $_POST["proxy_href"]
                ];
                //добавляем запись
                $ProxyListClass->setInsertLink($params);
                
                //переписываем файлы для CCProxy
                WriteProxyList ($db);
                //переходим в раздел
                header("Location: /?page=proxylist");
            }
        }
    }
    

    //Редактируем группу
    if (!empty($_POST["editGroup"]) or !empty($_GET["editGroup"])) {
        //редактируем группу
        if (!empty($_GET["editGroup"]) and $_GET["editGroup"] !== "add"){
            $id = $_GET["editGroup"];
            //получаем запись для редактирования
            $editGroup = $ProxyListClass->getSelectId($_GET["editGroup"]);
            foreach ($editGroup as $row) {
                ob_start();
                    include "components/proxylist/template/tpl.form-editGroup.php";
                    $content = ob_get_contents();
                ob_end_clean();
            }
            if (!empty($_POST["name_href"]) and $_GET["editGroup"] !== "add") {
                $params = [
                    ':id' => $id,
                    ':menuindex' => $_POST["menuindex"],
                    ':name_href' => $_POST["name_href"],
                    ':proxy_href' => $_POST["proxy_href"]
                ];
                //Выполняем запрос на обновление группы
                $ProxyListClass->setUpdateGroup($params);
                //переписываем файлы для CCProxy
                WriteProxyList ($db);
                //переходим в раздел
                header("Location: /?page=proxylist");
            }
        } else {//добавляем группу

            // устанавливаем значения по умолчанию
            $row = new class {
                public $name_href = false;
                public $menuindex = false;
                public $proxy_href = false;
            };
            ob_start();
                include "components/proxylist/template/tpl.form-editGroup.php";
                $content = ob_get_contents();
            ob_end_clean();
            if (!empty($_POST["name_href"]) and $_POST["editGroup"] == "add") {
                $params = [
                    ':menuindex' => $_POST["menuindex"],
                    ':name_href' => $_POST["name_href"],
                    ':proxy_href' => $_POST["proxy_href"]
                ];
                //добавляем группу
                $ProxyListClass->setInsertGroup($params);
                //переписываем файлы для CCProxy
                WriteProxyList ($db);
                //переходим в раздел
                header("Location: /?page=proxylist");
            }
        }
    }

    //Удаляем ссылку
    if (!empty($_GET["delLink"])) {
        $ProxyListClass->setDelLink([$_GET['delLink']]);
        //переписываем файлы для CCProxy
        WriteProxyList ($db);
        //переходим в раздел
        header("Location: /?page=proxylist");
    }

    //Удаляем группу и все принадлежащие ей ссылки
    if (!empty($_GET["delGroup"])) {
        $params = [
            ':id' => $_GET['delGroup'],
            ':id_group' => $_GET['delGroup']
        ];
        $ProxyListClass->setDelGroup($params);
        //переписываем файлы для CCProxy
        WriteProxyList ($db);
        //переходим в раздел
        header("Location: /?page=proxylist");
    }

} else { //Если не входит в группу sudo отображаем без кнопочек
    ob_start();
        include "components/proxylist/template/tpl.proxylist-users.php";
        $content = ob_get_contents();
    ob_end_clean();
}

function WriteProxyList ($link) {
        //Получаем все name_href
        $all_name_href = $link->run("SELECT id, id_group, proxy_href FROM sdc_proxy_list WHERE name_href IS NOT NULL")->fetchAll(\PDO::FETCH_ASSOC);
        $id = 6; //Группа blacklist 
        $id_group = 6; //Ссылки из группы blacklist
        $output_whitelist = "";
        $output_blacklist = "";
        
        $whitelist = array_filter($all_name_href, function ($value) use ($id, $id_group) {
            return ($value["id"] != $id and $value["id_group"] != $id_group);
        }, ARRAY_FILTER_USE_BOTH);
        foreach ($whitelist as $resourse) {
            $output_whitelist .= $resourse["proxy_href"];
        }
        file_put_contents('data/proxylist/whitelist.txt', $output_whitelist);

        $blacklist = array_filter($all_name_href, function ($value) use ($id, $id_group) {
            return ($value["id"] == $id or $value["id_group"] == $id_group);
        }, ARRAY_FILTER_USE_BOTH);
        foreach ($blacklist as $resourse) {
            $output_blacklist .= $resourse["proxy_href"];
        }
        file_put_contents('data/proxylist/blacklist.txt', $output_blacklist);
    }*/