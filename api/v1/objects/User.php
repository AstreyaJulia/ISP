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
     * get элемент для fullname
     *
     * @return int
     */
    public function getFullname() {
      return $this->fullname;
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

    /**
     * set элемент для membership
     *
     * @return int
     */
    public function setMembership($membership) {
      $this->membership = (int)$membership;
    }

        public function secureJWT ($jwt, $key) {
            $decoded = $this->classJWT::decode($jwt, $key, array('HS256'));
            $this->id = (int)$decoded->data->id;
            $this->sudo = (int)$decoded->data->sudo;
            $this->membership = (int)$decoded->data->membership;
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
                  WHERE sdc_users.id = :id AND sdc_users.sudo = :sudo AND (sdc_vocation.parent_id = :membership or ISNULL(sdc_vocation.parent_id)) AND sdc_users.active = 1";
      // получаем значения
      $row = $this->db->run($sqlUser,['id' => $this->id, 'sudo' => $this->sudo, 'membership' => $this->membership])->fetch(\PDO::FETCH_LAZY);
      if ($row) {
        // присвоим значения свойствам объекта
        $this->idGAS = $row['idGAS'];
        $this->username = $row['username'];
        $this->fullname = $row['fullname'];
        $this->password = $row['password'];
        $this->sidebar = $row['sidebar'];
        $this->theme = $row['theme'];
        $this->profession = $row['profession'];
      }
      return $row;
    }

    /**
     * 
     * Гетер для пользователя
     * 
     * @return array
     * 
     */
    public function getUser($login) {
      $sql = "SELECT
                sdc_users.id,
                sdc_users.username,
                sdc_users.password,
                sdc_users.active,
                sdc_users.sudo,
                sdc_vocation.parent_id AS membership
              FROM sdc_users
              LEFT JOIN sdc_user_attributes AS UserAttributes ON UserAttributes.internalKey=sdc_users.id
              LEFT JOIN sdc_vocation ON sdc_vocation.id = UserAttributes.profession
              LEFT JOIN sdc_user_attributes AS AffiliationJudge ON UserAttributes.affiliation = AffiliationJudge.id
              WHERE sdc_users.username = ?";

      return $this->db->run($sql,[$login])->fetchAll(\PDO::FETCH_CLASS);
    }

    /**
     * 
     * Дни рождения пользователей
     * на текущую дату
     * 
     * @return object
     * 
     */
    public function getBirthday() {
      $sql = "SELECT
                sdc_user_attributes.fullname,
                (YEAR(CURRENT_DATE()) - YEAR(sdc_user_attributes.dob)) AS age
              FROM sdc_users
              LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
              WHERE sdc_users.active = 1 AND sdc_user_attributes.profession != '' AND
                    DAY(CURRENT_DATE()) = DAY(sdc_user_attributes.dob) AND
                    MONTH(CURRENT_DATE()) = MONTH(sdc_user_attributes.dob)";
      return $this->db->run($sql)->fetchAll(\PDO::FETCH_CLASS);
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