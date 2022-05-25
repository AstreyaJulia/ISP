<?php
  namespace Api\Objects;

  class Registration {

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
     * Присваиваем значения свойствам объекта,
     * предварительно проверив их существование
     * 
     */
    public function assignValuesRegistration() {
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
        if (empty($this->helpers->getFormData()["password"])) {
          throw new \Exception("Ожидаю password в методе POST");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(400, "Не передан пароль", $e);
      }
      // passrep
      try {
        if (empty($this->helpers->getFormData()["passrep"])) {
          throw new \Exception("Ожидаю passrep в методе POST");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(400, "Не передано подтверждение пароля", $e);
      }
      // passrep = password
      try {
        if ($this->helpers->getFormData()["passrep"] === $this->helpers->getFormData()["password"]) {
          $this->password = $this->helpers->getFormData()["password"];
        } else {
          throw new \Exception("Пароли не совпали");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(400, "Ошибка в переданных параметрах", $e);
      }
    }

    /**
     * 
     * Гетер для пользователя
     * 
     * @return array
     * 
     */
    private function getUser() {
      $sql = "SELECT
                id,
                username,
                password,
                active,
                sudo
              FROM sdc_users
              WHERE username = ?";

      return $this->db->run($sql,[$this->login])->fetchAll(\PDO::FETCH_CLASS);
    }

    /**
     * 
     * Проверяем логин пользователя
     * Если логин проверку не проходит выбрасываем Exception
     * 
     */
    public function verifyLogin() {
      try {
        if (count($this->getUser()) === 0) {
          throw new \Exception("Введите действующий логин");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(200, "Логин не найден", $e);
      }

      try {
        if (count($this->getUser()) === 1 and $this->getUser()["0"]->active === 0) {
          throw new \Exception("Обратитесь к системному администратору");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(200, "Логин заблокирован", $e);
      }
    }

    /**
     * 
     * Проверяем пароль пользователя,
     * Если пароль задан выбрасываем Exception
     * 
     */
    public function verifyPassword() {
      try {
        if (count($this->getUser()) === 1 and empty($this->getUser()["0"]->password)) {
          $this->helpers->setId($this->getUser()["0"]->id);
          $this->helpers->setSudo($this->getUser()["0"]->sudo);

          $this->helpers->assignValues();
          
        } else {
          throw new \Exception("Пользователь $this->login зарегистрирован");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(200, "Ошибка регистрации", $e);
      }
    }

    

    public function routRegistration() {
      $this->assignValuesRegistration();
      $this->verifyLogin();
      $this->verifyPassword();
      $this->helpers->setUserPassword($this->password);
    }

  }