<?php

namespace Api\Objects;

class Authorization
{

  protected Helpers $helpers;

  private string $login;
  private string $password;
  private object|bool $userAttributes;

  public function __construct(
    Helpers $helpers = new \Api\Objects\Helpers()
  )
  {
    $this->helpers = $helpers;

    try {
      !empty($this->helpers->formData["login"]) ? $this->login = $this->helpers->formData["login"] : throw new \Exception("Ожидаю login в методе POST");
    } catch (\Exception $e) {
      $this->helpers::isErrorInfo(400, "Не передан логин", $e);
    }

    try {
      !empty($this->helpers->formData["password"]) ? $this->password = $this->helpers->formData["password"] : throw new \Exception("Ожидаю password в методе POST");
    } catch (\Exception $e) {
      $this->helpers::isErrorInfo(400, "Не передан пароль", $e);
    }

    $this->userAttributes = $this->helpers->getUser($this->login);
  }

  /**
   * 
   * Проверяем логин пользователя
   * Если логин проверку не проходит выбрасываем Exception
   * 
   */
  public function verifyLogin()
  {
    try {
      if ($this->login !== $this->userAttributes->username) {
        throw new \Exception("Введите действующий логин");
      }
    } catch (\Exception $e) {
      $this->helpers::isErrorInfo(401, "Логин не найден", $e);
    }

    try {
      if ($this->userAttributes->active === 0) {
        throw new \Exception("Обратитесь к системному администратору");
      }
    } catch (\Exception $e) {
      $this->helpers::isErrorInfo(401, "Логин заблокирован", $e);
    }
  }

  /**
   * 
   * Проверяем пароль пользователя,
   * присваиваем значения свойствам объекта.
   * Если пароль проверку не проходит выбрасываем Exception
   * 
   */
  public function verifyPassword()
  {
    try {
      if (password_verify($this->password, $this->userAttributes->password)) {
        $this->helpers->setId($this->userAttributes->id);
        $this->helpers->setSudo($this->userAttributes->sudo);
        $this->helpers->setProfessionID($this->userAttributes->professionID);
        $this->helpers->assignValues();
      } else {
        throw new \Exception("Не верный пароль");
      }
    } catch (\Exception $e) {
      $this->helpers::isErrorInfo(401, "Ошибка авторизации", $e);
    }
  }

  public function routAuthorization()
  {
    $this->verifyLogin();
    $this->verifyPassword();
  }
}
