<?php
    namespace Api\Objects;
    use Core\Config\DB;

    class User {
     
        // подключение к БД
        protected $db;

        // свойства объекта
        public $id;
        public $idGAS;
        public $username;
        public $password;
        public $passrep;
        public $fullname;
        public $active;
        public $sudo;
        public $sidebar;
        public $theme;
        public $membership;


        public function __construct(DB $db) {
            $this->db = $db;
        }

        // Проверка, существует ли логин в нашей базе данных
        function loginExists() {
            $sql = "SELECT
                        id
                    FROM sdc_users
                    WHERE `username` = ? AND `active` = 1";

            // получаем количество строк
            $num = $this->db->run($sql,[$this->username])->rowCount();

            /*
            если логин существует,
            присвоим значения свойствам объекта
            */
            if($num>0) {
                $this->assignValues();
                // вернём 'true', потому что в базе данных существует логин
                return true;
            }
            // вернём 'false', если логина не существует в базе данных или он заблокирован
            return false;
        }

        // Присваиваем значения свойствам объекта
        public function assignValues() {
            $sqlUser = "SELECT
                            IFNULL(AffiliationJudge.idGAS, UserAttributes.idGAS) AS idGAS,
                            UserAttributes.fullname,
                            sdc_users.id,
                            sdc_users.username,
                            sdc_users.password,
                            sdc_users.active,
                            sdc_users.sudo,
                            sdc_users.sidebar,
                            sdc_users.theme,
                            sdc_vocation.parent_id AS membership
                        FROM sdc_users
                        LEFT JOIN sdc_user_attributes AS UserAttributes ON UserAttributes.internalKey=sdc_users.id
                        LEFT JOIN sdc_vocation ON sdc_vocation.id = UserAttributes.profession
                        LEFT JOIN sdc_user_attributes AS AffiliationJudge ON UserAttributes.affiliation = AffiliationJudge.id
                        WHERE sdc_users.username = ? AND sdc_users.active = 1";
            // получаем значения
            $row = $this->db->run($sqlUser,[$this->username])->fetch(\PDO::FETCH_LAZY);
     
            // присвоим значения свойствам объекта
            $this->id = $row['id'];
            $this->idGAS = $row['idGAS'];
            //$this->username = $row['username'];
            $this->fullname = $row['fullname'];
            $this->password = $row['password'];
            $this->active = $row['active'];
            $this->sudo = $row['sudo'];
            $this->sidebar = $row['sidebar'];
            $this->theme = $row['theme'];
            $this->membership = $row['membership'];
        } 

        // Проверяем пароли
        public function passwordMatched() {
            if (!empty($this->password) and !empty($this->passrep) and ($this->password == $this->passrep)) {
                // вернём 'true', потому что пароли существуют и совпали
                return true;
            } else {
                // вернём 'false'
                return false;
            }
        }

        // Проверяем пользователя не закончившего регистрацию
        public function loginActiveExists() {
            $sql = "SELECT
                      sdc_users.username
                    FROM sdc_users
                    WHERE `username` = ? AND password = '' AND `active` = 1";
            // получаем количество строк
            $num = $this->db->run($sql,[$this->username])->rowCount();

            // Проверяем существование логина
            if ($num>0) {
                return true;
            } else {
                return false;
            }
        }

        // Запишем пароль пользователя
        public function setUserPassword() {
            $params = [
                "username" => $this->username,
                "password" => password_hash($this->password, PASSWORD_DEFAULT)
            ];
            $sql = "UPDATE
                        sdc_users
                    SET `password`=:password
                    WHERE `username` = :username";
            return $this->db->run($sql, $params);
        }


    }

    