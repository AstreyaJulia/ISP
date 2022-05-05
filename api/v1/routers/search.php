<?php

// Роутинг, основная функция
function route($db, $helpers) {
  $searchClass = new Api\Objects\Search($db, $helpers);
  // GET
  if ($helpers->getMethod() === 'GET') {
    switch ($helpers->getUrlData()[1]) {
      // GET /search/users
      case "users": {
        $searchClass->routUsers();
        break;
      }
      case "inbox": {
        $searchClass->correspondence("http://192.168.2.253:8079/api_GAS/search/inbox.php?");
        break;
      }
      case "outbox": {
        $searchClass->correspondence("http://192.168.2.253:8079/api_GAS/search/outbox.php?");
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
  }
}
