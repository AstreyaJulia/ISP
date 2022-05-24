<?php
  namespace Api\Objects;
  use Firebase\JWT\JWT;

  class User {

    // подключение к БД
    protected $db;
    // jwt
    private $classJWT;

    // свойства объекта
    private $id;
    private $idGAS;
    private $username;
    private $password;
    private $fullname;
    private $sudo;
    private $sidebar;
    private $theme;
    private $profession;
    private $membership;


    public function __construct(DB $db) {
      $this->db = $db;
      $this->classJWT = new JWT;
    }

    /**
     * get элемент для id
     *
     * @return int
     */
    public function getId() {
      return $this->id;
    }

    /**
     * get элемент для idGAS
     *
     * @return int
     */
    public function getIdGAS() {
      return $this->idGAS;
    }

    /**
     * get элемент для username
     *
     * @return int
     */
    public function getUsername() {
      return $this->username;
    }

    /**
     * get элемент для sudo
     *
     * @return int
     */
    public function getSudo() {
      return $this->sudo;
    }

    /**
     * get элемент для sidebar
     *
     * @return int
     */
    public function getSidebar() {
      return $this->sidebar;
    }

    /**
     * get элемент для theme
     *
     * @return int
     */
    public function getTheme() {
      return $this->theme;
    }

    /**
     * get элемент для profession
     *
     * @return int
     */
    public function getProfession() {
      return $this->profession;
    }

    /**
     * get элемент для membership
     *
     * @return int
     */
    public function getMembership() {
      return $this->membership;
    }

    /**
     * set элемент для id
     *
     * @return int
     */
    public function setId($id) {
      $this->id = (int)$id;
    }

    /**
     * set элемент для sudo
     *
     * @return int
     */
    public function setSudo($sudo) {
      $this->sudo = (int)$sudo;
    }

        public function secureJWT ($jwt, $key) {
            $decoded = $this->classJWT::decode($jwt, $key, array('HS256'));
            $this->id = (int)$decoded->data->id;
            $this->sudo = (int)$decoded->data->sudo;
            $this->membership = $decoded->data->membership;
            return $decoded;
        }

    /**
     *
     * Присваиваем значения свойствам объекта
     *  
     */
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
                    UserAttributes.profession,
                    sdc_vocation.parent_id AS membership
                  FROM sdc_users
                  LEFT JOIN sdc_user_attributes AS UserAttributes ON UserAttributes.internalKey=sdc_users.id
                  LEFT JOIN sdc_vocation ON sdc_vocation.id = UserAttributes.profession
                  LEFT JOIN sdc_user_attributes AS AffiliationJudge ON UserAttributes.affiliation = AffiliationJudge.id
                  WHERE sdc_users.id = :id AND sdc_users.sudo = :sudo AND sdc_users.active = 1";
      // получаем значения
      $row = $this->db->run($sqlUser,['id' => $this->id, 'sudo' => $this->sudo])->fetch(\PDO::FETCH_LAZY);
      if ($row) {
        // присвоим значения свойствам объекта
        $this->idGAS = $row['idGAS'];
        $this->username = $row['username'];
        $this->fullname = $row['fullname'];
        $this->password = $row['password'];
        $this->sidebar = $row['sidebar'];
        $this->theme = $row['theme'];
        $this->profession = $row['profession'];
        $this->membership = $row['membership'];
      }
      return $row;
    }

    /**
     *
     * Запишем пароль пользователя
     * 
     */
    public function setUserPassword($password) {
      $params = [
          "username" => $this->username,
          "password" => password_hash($password, PASSWORD_DEFAULT)
      ];
      $sql = "UPDATE
                  sdc_users
              SET `password`=:password
              WHERE `username` = :username";
      return $this->db->run($sql, $params);
    }

  }
