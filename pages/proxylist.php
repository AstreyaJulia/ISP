<?php

$title = "Каталог ссылок";
$desc = "Описание чего-то коротко";
//Если есть атрибут sudo = 1 добавляем админские плюшки
if ($_COOKIE['aut']['sudo'] == 1) {
    $query = "SELECT * FROM sdc_proxy_list";
} else {
// не показываем blacklist
    $query = "SELECT * FROM sdc_proxy_list WHERE id != 6";
}
$result = mysqli_query($link, $query) or die(mysqli_error($link));
for ($ProxyList =[]; $row = mysqli_fetch_assoc($result); $ProxyList[] = $row);

// Создаем массив только с детьми
function children($id_group, $ProxyList)
{
    $children = [];
    foreach ($ProxyList as $p) {
        if (!empty($p["id_group"]) && $p["id_group"] == $id_group["id"]) {
            $children[] = $p;
        }
    }
    return $children;
}

$family = [];

// Объединяем каждого ребенка с соответствующим родителем
foreach ($ProxyList as $p) {
    $children = children($p, $ProxyList);
    if ($children != []) {
        $family[] = array_merge($p, ["Подгруппа" => $children]);
    }
}
//Сортируем по полю $menuindex
$menuindex  = array_column($family, 'menuindex');
array_multisort($menuindex, SORT_ASC, $family);
$content = "";
//Если входит в группу sudo отображаем с кнопочками
if($_COOKIE['aut']['sudo'] == 1) {
    //подключаем модальное окно
    $content .= include "components/proxylist/modal";
    $content .= "<div class=\"row\"><div class=\"col-lg-12\"><div class=\"card shadow m-3\">
            <div class=\"card-header pt-3 d-flex justify-content-between\">
                <h6 class=\"text-primary m-0 font-weight-bold\">Заголовок</h6>
                <div class=\"dropdown\">
                    <button class=\"btn btn-link btn-sm dropdown-toggle\" data-bs-toggle=\"dropdown\" aria-expanded=\"false\" type=\"button\">
                        <i class=\"fas fa-ellipsis-v text-gray-400\"></i>
                    </button>
                    <div class=\"dropdown-menu shadow dropdown-menu-right animated--fade-in\">
                        <a class=\"dropdown-item\" href=\"\">Добавить ссылку</a>
                        <a class=\"dropdown-item\" href=\"\" data-bs-toggle=\"modal\" data-bs-target=\"#exampleModal\">Добавить группу</a>
                    </div>
                </div>
            </div>
            <div class=\"card-body\">
                <div class=\"row\">
                    <div class=\"col-lg-4\">
                        <div class=\"list-group\" role=\"tablist\" aria-orientation=\"vertical\">";
        foreach ($family as $goodname => $properties) {
        $content .= "<a class=\"list-group-item list-group-item-action\" id=\"tab-{$properties['id']}\" data-bs-toggle=\"pill\" href=\"#list-{$properties['id']}\" role=\"tab\" aria-controls=\"list-{$properties['id']}\" aria-selected=\"false\">{$properties['name_href']}
                        <object class=\"float-end mt-1\" onclick=\"location.href = '?edit={$properties['id']}'\">
                            <i class=\"fas fa-pencil-alt fa-fw text-gray-400\"></i>
                        </object>
                    </a>";
        }
    $content .= "</div></div>";
    $content .= "<div class=\"col-lg-8\"><div class=\"tab-content p-0\">";
        foreach ($family as $goodname => $properties) {
        $content .= "<div id=\"list-{$properties['id']}\" class=\"list-group tab-pane fade\" role=\"tabpanel\" aria-labelledby=\"tab-{$properties['id']}\">";
            foreach ($properties as $property => $value) {
                if (is_array($value)){
                foreach ($value as $property_list_array => $value_list_array) {
                $content .= "<a class=\"list-group-item list-group-item-action\" href=\"{$value_list_array['href']}\" target=\"_blank\">{$value_list_array['name_href']}
                                <object class=\"float-end\">
                                    <a  href=\"/components/proxylist/ajax.php?edit={$value_list_array['id']}\">
                                        <i class=\"fas fa-pencil-alt fa-fw text-gray-400\"></i>
                                    </a>
                                </object>
                            </a>";
                }
            }}
            $content .= "</div>";
        }
    $content .= "</div></div></div></div></div></div></div>";
} else { //Если не входит в группу sudo отображаем без кнопочек
    $content .= "<div class=\"row\"><div class=\"col-lg-12\"><div class=\"card shadow m-3\">
            <div class=\"card-header pt-3 d-flex justify-content-between\">
                <h6 class=\"text-primary m-0 font-weight-bold\">Заголовок</h6>
            </div>
            <div class=\"card-body\">
                <div class=\"row\">
                    <div class=\"col-lg-4\">
                        <div class=\"list-group\" role=\"tablist\" aria-orientation=\"vertical\">";
        foreach ($family as $goodname => $properties) {
        $content .= "<a class=\"list-group-item list-group-item-action\" id=\"tab-{$properties['id']}\" data-bs-toggle=\"pill\" href=\"#list-{$properties['id']}\" role=\"tab\" aria-controls=\"list-{$properties['id']}\" aria-selected=\"false\">{$properties['name_href']}</a>";
        }
    $content .= "</div></div>";
    $content .= "<div class=\"col-lg-8\"><div class=\"tab-content p-0\">";
        foreach ($family as $goodname => $properties) {
        $content .= "<div id=\"list-{$properties['id']}\" class=\"list-group tab-pane fade\" role=\"tabpanel\" aria-labelledby=\"tab-{$properties['id']}\">";
            foreach ($properties as $property => $value) {
                if (is_array($value)){
                foreach ($value as $property_list_array => $value_list_array) {
                $content .= "<a class=\"list-group-item list-group-item-action\" href=\"{$value_list_array['href']}\" target=\"_blank\">{$value_list_array['name_href']}</a>";
                }
            }}
            $content .= "</div>";
        }
    $content .= "</div></div></div></div></div></div></div>";
}
