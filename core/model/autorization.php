<?php
	namespace Core\Model;
	use Core\Config\DB;
	use PDO;
	class Autorization
	{

		protected $db;
		public $jwt;

	    public function __construct(DB $db) {
	        $this->db = $db;
	    }

	    public function login($params, $host_api) {
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
		    $this->jwt = $message->jwt ?? "";
		    $messages = $message->message ?? "";
		    return $messages;
	    }

	    public function validateLogin($params, $host_api) {
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

	    // Получаем пароль активного пользователя
	    public function getPassword($login) {
	    	$sql = "SELECT
                      sdc_users.password
                    FROM sdc_users 
                    WHERE `username` = ? AND `active` = 1";
	    	return $this->db->run($sql,[$login])->fetch(PDO::FETCH_LAZY);
	    }

	    // Получаем пользователя не закончившего авторизацию
	    public function getUserActive($login) {
	    	$sql = "SELECT
                      sdc_users.username
                    FROM sdc_users
                    WHERE `username` = ? AND password = '' AND `active` = 1";
	    	return $this->db->run($sql,[$login])->fetch(PDO::FETCH_LAZY);
	    }

	    // Получаем свойства активного пользователя
	    protected function getUserAttributes($login) {
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
	    	return $this->db->run($sql,[$login])->fetch(PDO::FETCH_LAZY);
	    }

	    // Запишем куку из метода getUserAttributes()
	    public function setCookie($login) {
	    	setcookie("aut[jwt]", $this->jwt, time() + 3600 * 24 * 30);
	    	setcookie("aut[id]", $this->getUserAttributes($login)->id, time() + 3600 * 24 * 30);
	    	setcookie("aut[idGAS]", $this->getUserAttributes($login)->idGAS, time() + 3600 * 24 * 30);
		    setcookie("aut[login]", $this->getUserAttributes($login)->username, time() + 3600 * 24 * 30);
		    setcookie("aut[fullname]", $this->getUserAttributes($login)->fullname, time() + 3600 * 24 * 30);
		    setcookie("aut[active]", $this->getUserAttributes($login)->active, time() + 3600 * 24 * 30);
		    setcookie("aut[primary_group]", $this->getUserAttributes($login)->primary_group, time() + 3600 * 24 * 30);
		    setcookie("aut[sudo]", $this->getUserAttributes($login)->sudo, time() + 3600 * 24 * 30);
		    //переходим на главную страницу
		    header("refresh:1;url=/");
	    }

	    // Запишем пароль пользователя
	    public function setUserPassword($params) {
	    	$sql = "UPDATE
	    				sdc_users
	    			SET `password`=:password
	    			WHERE `username` = :login";
	    	return $this->db->run($sql, $params);
	    }

	    // Авторизация пользователя
	    public function getUserAutorization() {
	    	if (!empty($_POST['login']) and !empty($_POST['password']) and array_key_exists('aut', $_POST)) {
	   			$login = $_POST['login'];
			  //Если пользователь с таким логином есть
			  if (!empty($this->getPassword($login))) {
			    // Проверяем соответствие хеша из базы введенному паролю
			    if (password_verify($_POST['password'], $this->getPassword($login)->password)) {
			      // Пользователь прошел авторизацию запишем cookie
			      $this->setCookie($login);
			    } else {
			      return array ("pass" => "Пароль не подошел", "login" => "");
			    }
			  } else {
			      return array ("pass" => "", "login" => "Неверный логин");
			    }
			}
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