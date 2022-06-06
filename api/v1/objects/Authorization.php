<?php
  namespace Api\Objects;

  class Authorization {

    protected $db;
    protected $helpers;

    private $login;
    private $password;

    public function __construct(DB $db, helpers $helpers) {
        $this->db = $db;
        $this->helpers = $helpers;
    }

    /**
     * 
     * Присваиваем значения свойствам объекта
     * 
     */
    public function assignValuesAuthorization() {
      // login
      try {
        if (!empty($this->helpers->getFormData()["login"])) {
          $this->login = $this->helpers->getFormData()["login"];
        } else {
          throw new \Exception("Ожидаю login в методе POST");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(400, "Не передан логин", $e);
      }
      // password
      try {
        if (!empty($this->helpers->getFormData()["password"])) {
          $this->password = $this->helpers->getFormData()["password"];
        } else {
          throw new \Exception("Ожидаю password в методе POST");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(400, "Не передан пароль", $e);
      }
    }

    /**
     * 
     * Проверяем логин пользователя
     * Если логин проверку не проходит выбрасываем Exception
     * 
     */
    public function verifyLogin() {
      try {
        if (count($this->helpers->getUser($this->login)) === 0) {
          throw new \Exception("Введите действующий логин");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(200, "Логин не найден", $e);
      }

      try {
        if (count($this->helpers->getUser($this->login)) === 1 and $this->helpers->getUser($this->login)["0"]->active === 0) {
          throw new \Exception("Обратитесь к системному администратору");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(200, "Логин заблокирован", $e);
      }
    }

    /**
     * 
     * Проверяем пароль пользователя,
     * присваиваем значения свойствам объекта.
     * Если пароль проверку не проходит выбрасываем Exception
     * 
     */
    public function verifyPassword() {
      try {
        if (count($this->helpers->getUser($this->login)) === 1 and password_verify($this->password, $this->helpers->getUser($this->login)["0"]->password)) {
          $this->helpers->setId($this->helpers->getUser($this->login)["0"]->id);
          $this->helpers->setSudo($this->helpers->getUser($this->login)["0"]->sudo);
          $this->helpers->setMembership($this->helpers->getUser($this->login)["0"]->membership);

          $this->helpers->assignValues();

        } else {
          throw new \Exception("Не верный пароль");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(200, "Ошибка авторизации", $e);
      }
    }

    

    public function routAuthorization() {
      $this->assignValuesAuthorization();
      $this->verifyLogin();
      $this->verifyPassword();

    }

  }