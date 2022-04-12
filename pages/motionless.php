<?php
$title = "Не рассмотренные дела без движения";
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

$response = $autorizationClass::sendGET($queryParams, $api_gas.'motionless.php?');

if (!empty($response)) {
    $row = $response ?? array();
} else {
    $row = array();
    $value = new class {
        public $CASE_NUM = false;
        public $JUDGE = false;
        public $PARTS_NAMES = false;
        public $STOP_DATE = false;
        public $CONTROL_DATE = false;
    };
}

ob_start();
    include "components/motionless/tpl.motionless.php";
    $content = ob_get_contents();
ob_end_clean();