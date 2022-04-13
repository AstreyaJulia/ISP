<?php
$title = "Публикация судебных актов";
$pageReferer =  "";

  if (isset($_SERVER["HTTP_REFERER"])) {
    $pageRefererArray = explode("?", $_SERVER["HTTP_REFERER"]);
    $pageReferer = $pageRefererArray[1] ?? "";
  }

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

$response = $autorizationClass::sendGET($queryParams, 'http://192.168.0.254:8079/api_GAS/publication-acts.php?');

if (!empty($response)) {
    $row = $response ?? array();
} else {
    $row = array();
    $value = new class {
        public $FULL_NUMBER = false;
        public $JUDGE = false;
        public $VERDICT_DATE = false;
        public $VALIDITY_DATE = false;
        public $DATE_UNTILL = false;
        public $STAT = false;
    };
}

ob_start();
    include "components/sudact/tpl.sudact.php";
    $content = ob_get_contents();
ob_end_clean();