<?php

namespace Api\Objects;

class GasAPI
{

    protected Helpers $helpers;

    public function __construct(
        Helpers $helpers = new \Api\Objects\Helpers()
    ) {
        $this->helpers = $helpers;
    }

    /**
     * 
     * 
     * 
     */
    public function responseGasAPI()
    {
        try {
            if (empty($this->helpers->getUrlData()["1"])) {
                throw new \Exception("Не задан маршрут до ресурса");
            }
            match ($this->helpers->getUrlData()["1"]) {
                'deadlines' => $this->helpers->getJsonEncode($this->deadlines())
            };
        } catch (\UnhandledMatchError | \Exception $e) {
            $this->helpers->isErrorInfo(400, "Ошибка в переданных данных", $e);
        }
    }

    /**
     * Нарушение сроков рассмотения
     * Судья, помощник, секретарь судебного заседания
     * видят только свои дела за текущий год при их наличии.
     * Председатель, заместитель председателя,
     * администраторы ресурса имеют доступ
     * к просмотру дел всех судей
     * 
     */
    private function deadlines():array|string
    {
        try {
            if (empty($this->helpers->idGAS or $this->helpers->getSudo() === 1)) {
                throw new \Exception("Недостаточно прав");
            }

            if (isset($this->helpers->getUrlData()["2"])
                and
                $this->helpers->getUrlData()["2"] === "all"
                and
                (in_array($this->helpers->profession, [1,2]) or $this->helpers->getSudo() === 1)) {
                    $idGAS = $this->helpers->db->run("SELECT UserAttributes.idGAS 
                                            FROM sdc_users
                                            LEFT JOIN sdc_user_attributes AS UserAttributes ON UserAttributes.internalKey=sdc_users.id
                                            WHERE UserAttributes.idGAS IS NOT NULL AND sdc_users.active = 1")->fetchAll(\PDO::FETCH_COLUMN);
                $deadlines = $this->helpers::sendGET(["idJudge" => implode(",", $idGAS)], 'http://192.168.2.253:8079/api_GAS/v1/'.$this->helpers->getUrlData()["1"].'.php?');
            } elseif(!empty($this->helpers->idGAS) and empty($this->helpers->getUrlData()["2"]) ) {
                $deadlines = $this->helpers::sendGET(["idJudge" => $this->helpers->idGAS], 'http://192.168.2.253:8079/api_GAS/v1/'.$this->helpers->getUrlData()["1"].'.php?');
            } else {
                throw new \Exception("Недостаточно прав");
            }
            return $this->helpers::wrap($deadlines, "data");
        } catch (\UnhandledMatchError | \Exception $e) {
            $this->helpers->isErrorInfo(401, "Доступ закрыт.", $e);
        }
        
    }
}
