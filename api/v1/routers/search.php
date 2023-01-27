<?php

  $searchClass = new Api\Objects\Search($helpers);
  // GET
  if ($helpers->getMethod() === 'GET') {
    switch ($helpers->urlData[0]) {
      // GET /search/users
      case "users": {
        $searchClass->routUsers();
        break;
      }
      case "inbox": {
        $searchClass->correspondence();
        break;
      }
      case "outbox": {
        $searchClass->correspondence();
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
  }

