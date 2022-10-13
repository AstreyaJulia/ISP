<?php

namespace Api\Objects;
/**
 * Ноги растут из этой статьи: https://phpdelusions.net/pdo/pdo_wrapper
 * Пример запроса:
 * $data = $db->run("SELECT * FROM sdc_users WHERE id=?",[$id])->fetchAll();
 * 
 */
class DB
{
  public $pdo;

  public function __construct($db, $username, $password, $host, $options = [])
  {
    $default_options = [
      \PDO::ATTR_DEFAULT_FETCH_MODE => \PDO::FETCH_ASSOC,
      \PDO::ATTR_EMULATE_PREPARES => false,
      \PDO::ATTR_ERRMODE => \PDO::ERRMODE_EXCEPTION,
    ];
    $options = array_replace($default_options, $options);
    $dsn = "mysql:host=$host;dbname=$db;charset=utf8mb4";

    try {
      $this->pdo = new \PDO($dsn, $username, $password, $options);
    } catch (\PDOException $e) {
      echo json_encode(array(
        "data" =>[],
        "error" => array(
          "message" => (int)$e->getCode(),
          "info" => $e->getMessage()
        )), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        die();
    }
  }

  public function run($sql, $args = NULL)
  {
    try {
      if (!$args) {
        return $this->pdo->query($sql);
      }
      $stmt = $this->pdo->prepare($sql);
      $stmt->execute($args);
      return $stmt;
    } catch (\PDOException $e) {
      echo json_encode(array(
        "data" =>[],
        "error" => array(
          "message" => (int)$e->getCode(),
          "info" => $e->getMessage()
        )), JSON_UNESCAPED_UNICODE | JSON_PRETTY_PRINT);
        die();
    }
  }

  /* Выполнение запроса на добавление нескольких записей
      приводим запрос к виду:
      $sql = "INSERT INTO users (name, surname, age) VALUES (?,?,?)";

      приводим массив значений к виду:
      $arg = [
        ['John','Doe', 22],
        ['Jane','Roe', 19],
      ];*/
  public function insertMultiple($sql, $args) {
    $stmt = $this->pdo->prepare($sql);
    try {
      $this->pdo->beginTransaction();
        foreach ($args as $row) {
          $stmt->execute($row);
        }
        return $this->pdo->commit();
    } catch (\PDOException $e){
        $this->pdo->rollback();
        throw $e;
    }
  }

}
