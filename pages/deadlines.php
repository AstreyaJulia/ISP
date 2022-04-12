<?php
  $title = "Нарушение сроков рассмотрения";
  $pageReferer = isset(explode("?", $_SERVER["HTTP_REFERER"])[1]) ? explode("?", $_SERVER["HTTP_REFERER"])[1] : "";

  if ($pageReferer == "page=grade") {
    $sql = "SELECT
            UserAttributes.idGAS,
              UserAttributes.fullname
            FROM `sdc_users` AS Users
            LEFT JOIN `sdc_user_attributes` AS UserAttributes on Users.id = UserAttributes.internalKey
            WHERE UserAttributes.profession in(1,2,3) AND Users.active = 1";

    $optgroup = $db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
    $idGAS = "";
    for ($i=0; $i < count($optgroup); $i++) {
      $idGAS .= $optgroup[$i]->idGAS .",";
    }

    // параметры $_GET запроса
    $queryParams = [
        'idJudge' => rtrim($idGAS, ","),
    ];
  } else {
    // параметры $_GET запроса
    $queryParams = [
      'idJudge' => $userAtributes->data->idGAS ?? "",
    ];
  }

$response = $autorizationClass::sendGET($queryParams, 'http://192.168.0.254:8079/api_GAS/deadlines.php?');

if (!empty($response)) {
    $row = $response ?? array();
} else {
    $row = array();
    $value = new class {
        public $CASE_NUMBER = false;
        public $PARTS_FIO = false;
        public $CAT = false;
        public $DATE_RASSM = false;
    };
}

ob_start();
    include "components/deadlines/tpl.deadlines.php";
    $content = ob_get_contents();
ob_end_clean();
