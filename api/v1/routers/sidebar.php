<?php

// Роутинг, основная функция
function route($db, $helpers) {
  $sidebarClass = new Api\Objects\Sidebar($db);
  // GET
  if ($helpers->getMethod() === 'GET') {

    switch (count($helpers->getUrlData())) {
      // GET /ProxyList
      case 1: {
        // если запрос без параметров выдаём полный список

        $sidebarClass->sudo = $helpers->getSudo();
        $sidebarClass->profession = $helpers->getProfession();
        $sidebarClass->membership = $helpers->getMembership();

        $sidebar["data"] = sidebarTree($sidebarClass->getSidebar());

        // установим код ответа - 200 OK
        http_response_code(200);

        echo $helpers->getJsonEncode($sidebar);
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers->throwHttpError('invalid_router', 'router not found');
        break;
    }
    exit;
  }


    // Если ни один роутер не отработал
    $helpers->throwHttpError('invalid_parameters', 'invalid parameters');

}

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
