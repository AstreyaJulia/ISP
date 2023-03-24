<?php

namespace Api\Objects;

use Exception;

/**
 * Паттерн Фабрика
 */
class Factory
{

  public function __construct(
    protected Helpers $helpers = new \Api\Objects\Helpers()
  ) {
    $this->helpers = $helpers;
  }
  /**
   * 
   */
  public static function createRouteClass($route, $helpers)
  {
    if (class_exists($route)) {
      $createdСlass = new $route($helpers);
      return $createdСlass->response();
    } else {
      throw new Exception("Не удается найти необходимый класс");
    }
  }
}
