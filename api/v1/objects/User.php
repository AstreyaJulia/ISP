<?php

namespace Api\Objects;

use Firebase\JWT\JWT;

abstract class User
{

  public readonly int $id;
  public readonly string $idGAS;
  public readonly string $username;
  private $password;
  public readonly string|NULL $fullname;
  public readonly int $sudo;
  public readonly int $sidebar;
  public readonly int $theme;
  public readonly int|NULL $professionID;
  public readonly string|NULL $professionName;
  public readonly int|NULL $membership;

  public function __construct(
    public readonly DB $db = new \Api\Objects\DB(DB_NAME, DB_USER, DB_PASS, DB_HOST),
    private JWT $classJWT = new JWT
  ) {
  }

  /**
   * set элемент для id
   */
  public function setId(int $id): void
  {
    $this->id = $id;
  }

  /**
   * set элемент для sudo
   */
  public function setSudo(int $sudo): void
  {
    $this->sudo = (int)$sudo;
  }

  /**
   * set элемент для professionID
   */
  public function setProfessionID(int|NULL $professionID): void
  {
    $this->professionID = $professionID;
  }

  public function secureJWT($jwt, $key)
  {
    $decoded = $this->classJWT::decode($jwt, $key, array('HS256'));
    $this->id = $decoded->data->id ?? null;
    $this->sudo = $decoded->data->sudo ?? null;
    $this->professionID = $decoded->data->professionID ?? null;
    return $decoded;
  }

  /**
   *
   * Присваиваем значения свойствам объекта
   *  
   */
  public function assignValues()
  {
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
                    UserAttributes.profession AS professionID,
                    sdc_vocation.name AS professionName,
                    sdc_vocation.parent_id AS membership
                  FROM sdc_users
                  LEFT JOIN sdc_user_attributes AS UserAttributes ON UserAttributes.internalKey=sdc_users.id
                  LEFT JOIN sdc_vocation ON sdc_vocation.id = UserAttributes.profession
                  LEFT JOIN sdc_user_attributes AS AffiliationJudge ON UserAttributes.affiliation = AffiliationJudge.id
                  WHERE sdc_users.id = :id AND sdc_users.sudo = :sudo AND (UserAttributes.profession = :professionID or ISNULL(sdc_vocation.parent_id)) AND sdc_users.active = 1";
    // получаем значения
    $row = $this->db->run($sqlUser, ['id' => $this->id, 'sudo' => $this->sudo, 'professionID' => $this->professionID])->fetch(\PDO::FETCH_LAZY);
    if ($row) {
      // присвоим значения свойствам объекта
      $this->idGAS = $row['idGAS'];
      $this->username = $row['username'];
      $this->fullname = $row['fullname'];
      $this->password = $row['password'];
      $this->sidebar = $row['sidebar'];
      $this->theme = $row['theme'];
      $this->membership = $row['membership'];
      $this->professionName = $row['professionName'];
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
  public function getUser($login)
  {
    $sql = "SELECT
                sdc_users.id,
                sdc_users.username,
                sdc_users.password,
                sdc_users.active,
                sdc_users.sudo,
                UserAttributes.profession AS professionID
              FROM sdc_users
              LEFT JOIN sdc_user_attributes AS UserAttributes ON UserAttributes.internalKey=sdc_users.id
              WHERE sdc_users.username = ?";
    return $this->db->run($sql, [$login])->fetch(\PDO::FETCH_LAZY);
  }

  /**
   * 
   * Дни рождения пользователей
   * на текущую дату
   * 
   * @return object
   * 
   */
  public function getBirthday()
  {
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
  public function setUserPassword($password)
  {
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

  /**
   *
   * Запишем настройки интерфейса
   * пользователя
   * 
   * @param string  $param
   * @param int     $value
   *
   */
  public function setUserSettings($param, $value)
  {
    $sql = "UPDATE
                  sdc_users
              SET $param = ?
              WHERE `id` = $this->id";
    $this->db->run($sql, [$value]);

    $row = $this->db->run(
      "SELECT username, $param FROM sdc_users WHERE `id` = $this->id"
    )->fetch(\PDO::FETCH_OBJ);

    if ($row->$param === $value) {
      try {
        return $row;
      } catch (\PDOException $e) {
        throw new \PDOException($e);
      }
    } else {
      throw new \PDOException("Запись не изменена");
    }
  }
}
