<?php
	namespace Api\Objects;
	use Core\Config\DB;
	use Firebase\JWT\JWT;

	class Search {

    private $sudo;
		protected $db;
    private $classJWT;

    public function __construct(DB $db) {
      $this->db = $db;
      $this->classJWT = new JWT;
    }

    public function secureJWT ($jwt, $key) {
      $decoded = $this->classJWT::decode($jwt, $key, array('HS256'));
      $this->sudo = $decoded->data->sudo;
      return $decoded;
    }

    public function searchUsers($param) {
      $sql = "SELECT
                    Users.id,
                    UserAttributes.fullname,
                    ParentUserType.name AS room,
                    Vocation.name AS profession,
                    ChildUserType.phone_worck
              FROM `sdc_room` AS ChildUserType
                      LEFT JOIN `sdc_room` AS ParentUserType ON ChildUserType.affiliation = ParentUserType.id
                      LEFT JOIN `sdc_user_attributes` AS UserAttributes on ChildUserType.id = UserAttributes.room
                      LEFT JOIN `sdc_users` AS Users ON UserAttributes.internalKey=Users.id
                      LEFT JOIN `sdc_vocation` AS Vocation ON Vocation.id=UserAttributes.profession
              WHERE Users.active = 1 and UserAttributes.profession != '' AND (UserAttributes.fullname LIKE ? or ChildUserType.phone_worck LIKE ?)";
      return $this->db->run($sql, ["%$param%", "%$param%"])->fetchAll(\PDO::FETCH_CLASS);
    }

    // Отправка данных методом $_GET
    public static function sendGET($params, $host_api) {
      // URL страницы, которую открываем
    $url = $host_api. http_build_query($params);
    $ch = curl_init($url);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    //ожидание при попытке подключения, секунд (0 - бесконечно)
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 1);

    $result = curl_exec($ch);
    $httpcode = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    curl_close($ch);
    $message = json_decode($result);
    if ($result) {
      http_response_code($httpcode);
      $message;
    } else {
      http_response_code(504);
      $message;
    }
    return $message;
    }


	}
