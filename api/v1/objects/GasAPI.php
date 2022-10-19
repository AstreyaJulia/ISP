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
                //'deadlines' => $this->helpers->getJsonEncode($this->deadlines()),
                'sudact', 'deadlines' => $this->helpers->getJsonEncode($this->prepareQuery($this->helpers->getUrlData()))
            };
        } catch (\UnhandledMatchError | \Exception $e) {
            $this->helpers->isErrorInfo(400, "Ошибка в переданных данных", $e);
        }
    }

    /* deadlines
    Нарушение сроков рассмотения
    Судья, помощник, секретарь судебного заседания
    видят только свои дела за текущий год при их наличии.
    Председатель, заместитель председателя,
    администраторы ресурса имеют доступ
    к просмотру дел всех судей
    
     */


    /**
     * Подготавливем запрос перед отправкой в API ГАС
     * Проверяет существование маршрута, права доступа
     */
    private function prepareQuery(array $urlData):array|string
    {
        try {
            if (empty($this->helpers->idGAS or $this->helpers->getSudo() === 1)) {
                throw new \Exception("Недостаточно прав");
            }

            if (!empty($urlData["2"])
                and
                $urlData["2"] === "all"
                and
                (in_array($this->helpers->professionID, [1,2]) or $this->helpers->getSudo() === 1)) {
                    $idGAS = $this->helpers->db->run("SELECT UserAttributes.idGAS 
                                            FROM sdc_users
                                            LEFT JOIN sdc_user_attributes AS UserAttributes ON UserAttributes.internalKey=sdc_users.id
                                            WHERE UserAttributes.idGAS IS NOT NULL AND sdc_users.active = 1")->fetchAll(\PDO::FETCH_COLUMN);
                $responseGasAPI = $this->helpers::sendGET(["idJudge" => implode(",", $idGAS)], API_GAS.$urlData["1"].'.php?');
            } elseif(!empty($this->helpers->idGAS) and empty($urlData["2"]) ) {
                $responseGasAPI = $this->helpers::sendGET(["idJudge" => $this->helpers->idGAS], API_GAS.$urlData["1"].'.php?');
            } else {
                throw new \Exception("Недостаточно прав");
            }
            return $this->helpers::wrap($responseGasAPI, "data");
        } catch (\UnhandledMatchError | \Exception $e) {
            $this->helpers->isErrorInfo(401, "Доступ закрыт.", $e);
        }
    }
}
