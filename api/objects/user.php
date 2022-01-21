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
        public $fullname;
        public $password;
        public $active;
        public $sudo;
        public $sidebar;
        public $theme;


        public function __construct(DB $db) {
            $this->db = $db;
        }

        // Проверка, существует ли электронная почта в нашей базе данных
        function loginExists() {
            // запрос, чтобы проверить, существует ли логин
            $sql = "SELECT
                        id,
                        username,
                        password,
                        active,
                        sudo,
                        sidebar,
                        theme
                    FROM sdc_users
                    WHERE `username` = ? AND `active` = 1";

            // получаем количество строк
            $num = $this->db->run($sql,[$this->username])->rowCount();



         
            // если логин существует,
            // присвоим значения свойствам объекта для легкого доступа и использования для php сессий
            if($num>0) {
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
                                sdc_vocation.parent_id AS primary_group
                            FROM sdc_users
                            LEFT JOIN sdc_user_attributes AS UserAttributes ON UserAttributes.internalKey=sdc_users.id
                            LEFT JOIN sdc_vocation ON sdc_vocation.id = UserAttributes.profession
                            LEFT JOIN sdc_user_attributes AS AffiliationJudge ON UserAttributes.affiliation = AffiliationJudge.id
                            WHERE sdc_users.username = ? AND `active` = 1";
                // получаем значения
                $row = $this->db->run($sqlUser,[$this->username])->fetch(\PDO::FETCH_LAZY);
         
                // присвоим значения свойствам объекта
                $this->id = $row['id'];
                $this->idGAS = $row['idGAS'];
                $this->username = $row['username'];
                $this->fullname = $row['fullname'];
                $this->password = $row['password'];
                $this->active = $row['active'];
                $this->sudo = $row['sudo'];
                $this->sidebar = $row['sidebar'];
                $this->theme = $row['theme'];
         
                // вернём 'true', потому что в базе данных существует логин
                return true;
            }
         
            // вернём 'false', если логина не существует в базе данных или он заблокирован
            return false;
        }
    }

    