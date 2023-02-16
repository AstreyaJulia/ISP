<?php

namespace Api\Objects;

/**
 * Здания, кабинеты рабочие места
 */
class BuildingStructure
{

  protected Helpers $helpers;

  public function __construct(
    Helpers $helpers = new \Api\Objects\Helpers()
  ) {
    $this->helpers = $helpers;
  }

  /**
   * 
   * Структура здания
   * 
   * @return array
   * 
   */
  public function cabinetList(): array
  {
    $param = count($this->helpers->urlData) ? "=" . $this->helpers->urlData[0] : " IS NULL";

    try {
      $param = match (count($this->helpers->urlData)) {
        0 => " IS NULL",
        1 => "=" . $this->helpers->urlData[0]
      };
    } catch (\Error | \Exception | \UnhandledMatchError $e) {
      $this->helpers->isErrorInfo(400, "Ошибка в переданных параметрах", $e->getMessage());
    }

    $sql = "SELECT
              mother.id,
              mother.name,
              IF(ISNULL(children.id),'false', 'true') AS childNodes
            FROM sdc_room AS mother
            LEFT JOIN sdc_room AS children ON children.affiliation = mother.id
            WHERE mother.affiliation $param GROUP BY mother.id";
    return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
  }

  /**
   * Обрабатываем приходящие GET-запросы. 
   */
  private function metodGET(): array
  {
      return $this->helpers->wrap($this->cabinetList(), "data");
  }

  public function response(): void
    {
        match ($this->helpers->getMethod()) {
            "GET" => $this->helpers->getJsonEncode($this->metodGET()),
            default => $this->helpers->isErrorInfo(401, "Ошибка в запросе", "Метод не реализован")
        };
    }
}
