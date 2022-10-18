<?php
$helpers->validateIdGAS();
// Роутинг, основная функция
function route($helpers) {

  // GET
  if ($helpers->getMethod() === 'GET') {
    
    switch (count($helpers->getUrlData())) {

      case 1: {
        $output["data"] = $helpers::sendGET(["idJudge" => $helpers->idGAS], 'http://192.168.2.253:8079/api_GAS/'.$helpers->getRouter().'.php?');

        // вывод в json-формате
        $helpers->getJsonEncode($output);
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
