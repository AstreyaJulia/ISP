<?php
  namespace Api\Objects;

  class Registration {

    protected $helpers;

    private $login;
    private $password;

    public function __construct(
      Helpers $helpers = new \Api\Objects\Helpers()
    ) {
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
        if (!empty($this->helpers->formData["login"])) {
          $this->login = $this->helpers->formData["login"];
        } else {
          throw new \Exception("Ожидаю login в методе POST");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(400, "Не передан логин", $e);
      }
      // password
      try {
        if (empty($this->helpers->formData["password"])) {
          throw new \Exception("Ожидаю password в методе POST");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(400, "Не передан пароль", $e);
      }
      // passrep
      try {
        if (empty($this->helpers->formData["passrep"])) {
          throw new \Exception("Ожидаю passrep в методе POST");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(400, "Не передано подтверждение пароля", $e);
      }
      // passrep = password
      try {
        if ($this->helpers->formData["passrep"] === $this->helpers->formData["password"]) {
          $this->password = $this->helpers->formData["password"];
        } else {
          throw new \Exception("Пароли не совпали");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(400, "Ошибка в переданных параметрах", $e);
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
        $this->helpers::isErrorInfo(401, "Логин не найден", $e);
      }

      try {
        if (count($this->helpers->getUser($this->login)) === 1 and $this->helpers->getUser($this->login)["0"]->active === 0) {
          throw new \Exception("Обратитесь к системному администратору");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(401, "Логин заблокирован", $e);
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
        if (count($this->helpers->getUser($this->login)) === 1 and empty($this->helpers->getUser($this->login)["0"]->password)) {
          $this->helpers->setId($this->helpers->getUser($this->login)["0"]->id);
          $this->helpers->setSudo($this->helpers->getUser($this->login)["0"]->sudo);
          $this->helpers->setMembership($this->helpers->getUser($this->login)["0"]->membership);

          $this->helpers->assignValues();

        } else {
          throw new \Exception("Пользователь $this->login зарегистрирован");
        }
      } catch (\Exception $e) {
        $this->helpers::isErrorInfo(401, "Ошибка регистрации", $e);
      }
    }

    

    public function routRegistration() {
      $this->assignValuesRegistration();
      $this->verifyLogin();
      $this->verifyPassword();
      $this->helpers->setUserPassword($this->password);
    }

  }