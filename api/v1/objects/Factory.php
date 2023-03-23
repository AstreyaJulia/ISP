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
  public static function createRoute($route, $helpers)
  {
    if (class_exists('Api\Objects' . $route)) {
      var_dump($route);
      $createdСlass = new $route($helpers);
      return $createdСlass->response();
    } else {
      var_dump($route);
      throw new Exception("Не удается найти маршрут");
    }
  }
  /*
    $route = Factory::createRoute("/Users", $helpers);
    var_dump($route); 
   */
}
