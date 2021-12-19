<?php
    // необходимые HTTP-заголовки
    header("Access-Control-Allow-Origin: *");
    header("Content-Type: application/json; charset=UTF-8");

    require_once $_SERVER['DOCUMENT_ROOT'] . "/api/config/core.php";

    $sidebarClass = new \Api\Objects\Sidebar($db);

    $sidebarClass->sudo = $_GET['sudo'];

    $sidebar = sidebarTree($sidebarClass->getSidebar());

    // установим код ответа - 200 OK
    http_response_code(200);

    //время выполнения скрипта
    $sidebar["time"] = (microtime(true) - $start);
    // Формируем дерезо сайдбара
    function sidebarTree(array $elements, $parentId = 0) {

        $branch = array();

        foreach ($elements as $element) {

            if ($element['parent'] == $parentId) {
                $children = sidebarTree($elements, $element['id']);
                if ($children) {
                    $element['children'] = $children;
                }
                $branch[$element['id']] = $element;
                unset($element);
            }
        }
        return $branch;
    }

    // вывод в json-формате
    echo json_encode($sidebar, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);

    