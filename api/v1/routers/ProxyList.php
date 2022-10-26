<?php

// Роутинг, основная функция
function route($helpers) {
  $proxyListClass = new Api\Objects\ProxyList();
  // GET
  if ($helpers->getMethod() === 'GET') {
    // необходимые HTTP-заголовки

    switch (count($helpers->getUrlData())) {
      // GET /ProxyList
      case 1: {
        // если запрос без параметров выдаём полный список
        $proxylist["data"] = $proxyListClass->getProxyList($helpers->sudo);
        // установим код ответа - 200 OK
        http_response_code(200);
        // вывод в json-формате
        $helpers->getJsonEncode($proxylist);
        break;
      }
      // GET /ProxyList/5
      case 2: {
        // если запрос с параметрами отдаём запрашиваемую запись
        ProxyListOne($proxyListClass, $helpers);
        break;
      }
      default:
        // если переданы лишние параметры выбрасываем ошибку
        $helpers::isErrorInfo(400, "invalid_router", "router not found");
        break;
    }
    exit;
  }

    // POST /ProxyList
    if ($helpers->getMethod() === 'POST' && count($helpers->getUrlData()) === 1 ) {
        // необходимые HTTP-заголовки
        $helpers::headlinesPOST();
        try {
            // проверяем права пользователя
            if (!$helpers->sudo === 1) {
                throw new Exception("Недостаточно прав");
            }

            $result = $proxyListClass->insertLink($helpers->formData);

            $helpers->getJsonEncode($result);
        } catch (Exception $e){
            $helpers::isErrorInfo(401, "Доступ закрыт.", $e);
            exit;
        }
        exit;
    }

    // PUT /ProxyList/6
    if ($helpers->getMethod() === 'PUT' && count($helpers->getUrlData()) === 2) {
      try {
        // проверяем права пользователя
        if (!$helpers->sudo === 1) {
            throw new Exception("Недостаточно прав");
        }

        $id = (int)$helpers->getUrlData()[1];
        $result = "Я метод PUT";

        echo json_encode($result." | ".$id, JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
      } catch (Exception $e){
          $helpers::isErrorInfo(401, "Доступ закрыт.", $e);
          exit;
        }
        exit;
    }

    // DELETE /ProxyList/5
    if ($helpers->getMethod() === 'DELETE' && count($helpers->getUrlData()) === 2) {
      delRecord($proxyListClass, $helpers);
      exit;
    }

    // Если ни один роутер не отработал
    $helpers::isErrorInfo(400, "invalid_parameters", "invalid parameters");

}

// Формитруем одну запись
function ProxyListOne($proxyListClass, $helpers) {
  $id = $helpers->getUrlData()[1];
  // проверяем права пользователя
  try {
    $helpers->validateSudo();
  } catch (Exception $e){
      $helpers::isErrorInfo(401, "Доступ закрыт.", $e);
      exit;
    }

  // проверяем существует ли запись
  if (!$helpers->isExistsById("sdc_proxy_list", $id)) {
    $helpers::isErrorInfo(400, "not_exists", "записи не существует");
    exit;
  }

  // если запрос отдаёт группу
  if ($proxyListClass->readOne($id)[0]["parent_id"] === 0 ) {
    foreach ($proxyListClass->readOne($id) as $key => $value) {
      $proxylist["data"]["group"][] = [
        "id" => $value["id"],
        "menuindex" => $value["menuindex"],
        "name_href" => $value["name_href"],
        "proxy_href" => $value["proxy_href"]
      ];
    }
  } else { // в противном случае получаем ссылку
      $proxylist["data"]["link"] = $proxyListClass->readOne($id);
      /*
        список категорий +
        для категории которой принадлежит ссылка ставим атрибут selected
      */
      foreach ($proxyListClass->multipleFather($helpers->sudo) as $key => $value) {
        if ($proxylist["data"]["link"][0]["parent_id"]== $value["id"]) {
          $proxylist["data"]["category"][] = [
            "id" => $value["id"],
            "selected" => "selected",
            "name_href" => $value["name_href"]
          ];
        } else {
            $proxylist["data"]["category"][] = [
              "id" => $value["id"],
              "name_href" => $value["name_href"]
            ];
          }
      }
    }

    // установим код ответа - 200 OK
    http_response_code(200);
    // вывод в json-формате
    $helpers->getJsonEncode($proxylist);
}

function delRecord($proxyListClass, $helpers) {
  $id = (int)$helpers->getUrlData()[1];
  // проверяем существует ли запись
  if (!$helpers->isExistsById("sdc_proxy_list", $id)) {
    $helpers::isErrorInfo(400, "not_exists", "записи не существует");
    exit;
  }
  // установим код ответа - 200 OK
  http_response_code(200);
  // вывод в json-формате
  echo $helpers->getJsonEncode($proxyListClass->delRecord($id));
}
