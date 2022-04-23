<?php

// Роутинг, основная функция
function route($db, $helpers) {
  $searchClass = new Api\Objects\Search($db, $helpers);
  // GET
  if ($helpers->getMethod() === 'GET') {
    
      switch ($helpers->getUrlData()[1]) {
        // GET /search/users
        case "users": {
            echo $searchClass->routUsers();
            break;
        }
        case "inbox": {
          echo "Ищем входящую почту";
          break;
        }
        case "outbox": {
          echo "Ищем исходящую почту";
          break;
        }
        default:
          // если переданы лишние параметры выбрасываем ошибку
          $helpers->throwHttpError('invalid_router', 'router not found');
          break;
      }
  }
}
