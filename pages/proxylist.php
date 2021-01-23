<?php
/* Отображаем группу только для Administrator
$arr = array('id:!=' => 6);
$user = $modx->getUser();
if($user->isMember(array('Administrator'), true)) {
    $arr = array();}
*/

$title = "Каталог ссылок";
$desc = "Описание чего-то коротко";
$query = "SELECT * FROM sdc_proxy_list";
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
/*Если входит в группу Administrator отображаем с кнопочками
if($user->isMember(array('Administrator'), true)) {
    echo "<div class=\"card shadow m-3\">
            <div class=\"card-header pt-3 d-flex justify-content-between\">
                <h6 class=\"text-primary m-0 font-weight-bold\">[[*pagetitle]]</h6>
                <div class=\"dropdown no-arrow\">
                    <button class=\"btn btn-link btn-sm dropdown-toggle\" data-toggle=\"dropdown\" aria-expanded=\"false\" type=\"button\">
                        <i class=\"fas fa-ellipsis-v text-gray-400\"></i>
                    </button>
                    <div class=\"dropdown-menu shadow dropdown-menu-right animated--fade-in\">
                        <a class=\"dropdown-item\" href=\"dobavlenie-ssyilki\">Довабить ссылку</a>
                        <a class=\"dropdown-item\" href=\"dobavlenie-gruppyi\">Довабить группу</a>
                    </div>
                </div>
            </div>
            <div class=\"card-body\">
                <div class=\"row\">
                    <div class=\"col-lg-4 pr-2\">
                        <div class=\"list-group\" role=\"tablist\" aria-orientation=\"vertical\">";
        foreach ($family as $goodname => $properties) {
            echo "<a class=\"list-group-item list-group-item-action\" id=\"tab-$properties[id]\" data-toggle=\"pill\" href=\"#list-$properties[id]\" role=\"tab\" aria-controls=\"list-$properties[id]\" aria-selected=\"false\">$properties[name_href]
                    <object class=\"float-right mt-1\" onclick=\"location.href = '/ssyilki/dobavlenie-gruppyi?entry=$properties[id]'\">
                        <i class=\"fas fa-pencil-alt fa-fw text-gray-400\"></i>
                    </object>
                  </a>";
        }
    echo "</div></div>";
    echo "<div class=\"col-lg-8 pl-2 border border-secondary border-right-0 border-top-0 border-bottom-0\">
    		<div class=\"tab-content\">";
        foreach ($family as $goodname => $properties) {
            echo "<div id=\"list-$properties[id]\" class=\"list-group tab-pane fade\" role=\"tabpanel\" aria-labelledby=\"tab-$properties[id]\">";
            foreach ($properties as $property => $value) {
                foreach ($value as $property_list_array => $value_list_array) {
                    echo 
                        "<a class=\"list-group-item list-group-item-action\" href=\"$value_list_array[href]\" target=\"_blank\">$value_list_array[name_href]
                            <object class=\"float-right\">
                                <a  href=\"/ssyilki/dobavlenie-ssyilki?entry=$value_list_array[id]\">
                                    <i class=\"fas fa-pencil-alt fa-fw text-gray-400\"></i>
                                </a>
                            </object>
                        </a>";
                }
            }
            echo "</div>";
        }
    echo "</div></div></div></div></div>";
}*/
//Если не входит в группу Administrator отображаем без кнопочек
	$content = "";
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
?>