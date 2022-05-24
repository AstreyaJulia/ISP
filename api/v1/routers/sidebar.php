<?php

// Роутинг, основная функция
function route($db, $helpers) {
  $sidebarClass = new Api\Objects\Sidebar($db, $helpers);
  // GET
  if ($helpers->getMethod() === 'GET') {

    switch (count($helpers->getUrlData())) {
      // GET /sidebar
      case 1: {
        // если запрос без параметров выдаём полный список

        $sidebar["user"] = array(
          "id" => $helpers->getId(),
          "idGAS" => $helpers->getIdGAS(),
          "username" => $helpers->getUsername(),
          "sudo" => $helpers->getSudo(),
          "sidebar" => $helpers->getSidebar(),
          "theme" => $helpers->getTheme(),
          "profession" => $helpers->getProfession(),
          "membership" => $helpers->getMembership()
        );

        $sidebar["data"] = sidebarTree($sidebarClass->getSidebar());

        // установим код ответа - 200 OK
        http_response_code(200);

        $helpers->getJsonEncode($sidebar);
        break;
      }
      // GET /sidebar/1
      case 2: {
        $sidebar["data"] = $sidebarClass->readOne();
        $helpers->getJsonEncode($sidebar);
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
    exit;
  }


    // Если ни один роутер не отработал
    $helpers::isErrorInfo(400, "invalid_router", "router not found");

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
