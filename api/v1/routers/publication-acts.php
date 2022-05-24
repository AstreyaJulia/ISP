<?php

// Роутинг, основная функция
function route($db, $helpers) {

  // GET
  if ($helpers->getMethod() === 'GET') {
    
    switch (count($helpers->getUrlData())) {
      // GET /ProxyList/id
      case 1: {
        $publicationActs["data"] = $helpers::sendGET(["idJudge" => $helpers->getIdGAS()], 'http://192.168.2.253:8079/api_GAS/publication-acts.php?');
        // установим код ответа - 200 OK
        http_response_code(200);
        // вывод в json-формате
        $helpers->getJsonEncode($publicationActs);
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
    exit;
  }
}
