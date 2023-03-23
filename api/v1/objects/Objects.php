<?php

namespace Api\Objects;

trait Objects
{

    public function __construct(
        protected Helpers $helpers = new \Api\Objects\Helpers()
    ) {
      $this->helpers = $helpers;
    }

    /**
     * Обрабатываем приходящие GET-запросы.
     * 
     * @return string
     */
    private function metodGET(): string
    {
        return $this->helpers->isErrorInfo(401, "Ошибка в запросе", "Метод не реализован");
    }

    /**
     * Обрабатываем приходящие POST-запросы. 
     * 
     * @return string
     */
    private function metodPOST(): string
    {
        return $this->helpers->isErrorInfo(401, "Ошибка в запросе", "Метод не реализован");
    }

    /**
     * Обрабатываем приходящие PATCH-запросы.
     * 
     * @return string
     */
    private function metodPATCH(): string
    {
        return $this->helpers->isErrorInfo(401, "Ошибка в запросе", "Метод не реализован");
    }

    public function response(): void
    {
        match ($this->helpers->method) {
            "GET" => $this->helpers->getJsonEncode($this->metodGET()),
            "POST" => $this->helpers->getJsonEncode($this->metodPOST()),
            "PATCH" => $this->helpers->getJsonEncode($this->metodPATCH()),
            default => $this->helpers->isErrorInfo(401, "Ошибка в запросе", "Метод не реализован")
        };
    }

}
