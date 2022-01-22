<?php
	namespace Core\Model;
	use Core\Config\DB;
	use PDO;
	class Autorization
	{

		protected $db;
		private $jwt;
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
		    $message = json_decode($result);
		    return $message;
	    }

	    public function login($params, $host_api) {
		    $this->jwt = self::sendPOST($params, $host_api)->jwt ?? "";
		    $this->message = self::sendPOST($params, $host_api)->message ?? "";
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
	    	return $this->db->run($sql,[$_POST['login']])->fetch(PDO::FETCH_LAZY);
	    }








	    // Регистрация пользователя
	    public function setUserRregister() {
	    	if (!empty($_POST["login"]) and !empty($_POST["password"]) and !empty($_POST["passrep"]) and array_key_exists('reg', $_POST)) {
	    		$login = $_POST['login'];
			    // Если пароль и подтверждение совпадают...
			    if ($_POST["password"] == $_POST["passrep"]) {
			      // Проверяем существование логина
			      if (empty($this->getUserActive($login))) {
			        return array ("pass" => "", "login" => "Такого логина нет, либо он уже авторизован");
			      } else {
			        // Логин есть, записываем хэш пароль в бд
			        $params = [
			          'login' => $login,
			          'password' => password_hash($_POST['password'], PASSWORD_DEFAULT)
			        ];
			        $this->setUserPassword($params);
			        // Считаем что пользователь закончил регистрацию, запишем cookie
			        $this->setCookie($login);
			      }
			    } else {
			      return array ("pass" => "Пароли не совпадают", "login" => "");
			    }
			}
	    }

	    public function getAutorization() {
	    	if (array_key_exists('reg', $_GET)) {
			    //Регистрация пользователя
			    $error = $this->setUserRregister() ?? array ("pass" => "", "login" => "");
			    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.register.php";
		  } else {
			    // авторизация пользователя
			    $error = $this->getUserAutorization() ?? array ("pass" => "", "login" => "");
			    include $_SERVER['DOCUMENT_ROOT'] . "/components/autorization/tpl.autorization.php";
		  }
	    }
	}