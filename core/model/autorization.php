<?php
	namespace Core\Model;
	use Core\Config\DB;
	use PDO;
	class Autorization
	{

		protected $db;
		private $jwt;
		public $username;
		private $message;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }

	    // Отправка данных методом $_POST
	    public static function sendPOST($params, $host_api) {
	    	$data_string = json_encode ($params, JSON_UNESCAPED_UNICODE);
		    $curl = curl_init($host_api);
		    curl_setopt($curl, CURLOPT_CUSTOMREQUEST, "POST");
		    curl_setopt($curl, CURLOPT_POSTFIELDS, $data_string);
		    // Принимаем в виде массива. (false - в виде объекта)
		    curl_setopt($curl, CURLOPT_RETURNTRANSFER, true);
		    curl_setopt($curl, CURLOPT_HTTPHEADER, array(
		       'Content-Type: application/json',
		       'Content-Length: ' . strlen($data_string))
		    );
		    $result = curl_exec($curl);
		    curl_close($curl);
		    // если результат false не применять json_decode
		    $message = json_decode($result);
		    return $message;
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
			curl_close($ch);
			if ($result) {
				$message = (is_array(json_decode($result)) or is_object(json_decode($result))) ? json_decode($result):  "true";
			} else {
			    $message = $result;
			}
			return $message;
	    }

	    public function login($params, $host_api) {
	    	$output = self::sendPOST($params, $host_api);
		    $this->jwt = $output->jwt ?? "";
		    $this->message = $output->message ?? "";
	    }

	    // Запишем куку
	    public function setCookie() {
	    	setcookie("aut[id]", $this->getUserAttributes()->id, time() + 3600 * 24 * 30);/* удалить нужен для:
	    																							components/fullcalendar/events.php
	    																							pages/admin/ajax.php */
	    	setcookie("aut[jwt]", $this->jwt, time() + 3600 * 24 * 30);
		    //переходим на главную страницу
		    header("refresh:1;url=/");
	    }

	    // Авторизация пользователя
	    public function getUserAutorization() {
	    	if ($this->message == "Успешный вход в систему.") {
		      $this->setCookie();
		    } else {
		      return array ("pass" => $this->message, "login" => "");
		    }
	    }

	    // Получаем свойства активного пользователя удалить
	    protected function getUserAttributes() {
	    	$sql = "SELECT
						IFNULL(AffiliationJudge.idGAS, UserAttributes.idGAS) AS idGAS,
				    	UserAttributes.fullname,
				    	sdc_users.id,
				    	sdc_users.username,
				    	sdc_users.sudo,
				    	sdc_users.active,
				    	sdc_vocation.parent_id AS primary_group
				    FROM sdc_users
				    LEFT JOIN sdc_user_attributes AS UserAttributes ON UserAttributes.internalKey=sdc_users.id
				    LEFT JOIN sdc_vocation ON sdc_vocation.id = UserAttributes.profession
				    LEFT JOIN sdc_user_attributes AS AffiliationJudge ON UserAttributes.affiliation = AffiliationJudge.id
				    WHERE sdc_users.username = ?";
	    	return $this->db->run($sql,[$this->username])->fetch(PDO::FETCH_LAZY);
	    }

	    // Регистрация пользователя
	    public function setUserRregister($params, $host_api) {
	    	$this->jwt = self::sendPOST($params, $host_api)->jwt ?? "";
		    $this->message = self::sendPOST($params, $host_api)->message ?? "";
	    }

	    public function getAutorization($host_api) {
	    	if (array_key_exists('reg', $_GET)) {
			    //Регистрация пользователя
			    $this->login($_POST, $host_api.'/api/autorization/registration.php') ?? "";
			    $error = $this->getUserAutorization() ?? array ("pass" => "", "login" => "");
			    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.register.php";
		  } else {
			    // авторизация пользователя
		  		$this->login($_POST, $host_api.'/api/autorization/login.php') ?? "";
			    $error = $this->getUserAutorization() ?? array ("pass" => "", "login" => "");
			    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.autorization.php";
		  }
	    }
	}