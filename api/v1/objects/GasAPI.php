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

    public function Links(): array
    {
        return match ($this->helpers->urlData["1"]) {
            'deadlines' => array(
                API_GAS . "v1/deadlines/g1.php?",
                API_GAS . "v1/deadlines/u1.php?",
                API_GAS . "v1/deadlines/adm.php?"
            ),
            'sudact' => array(
                API_GAS . "v1/sudact/adm.php?",
                API_GAS . "v1/sudact/adm1.php?",
                API_GAS . "v1/sudact/g1.php?",
                API_GAS . "v1/sudact/u1-ap.php?",
                API_GAS . "v1/sudact/u1-ruling.php?",
                API_GAS . "v1/sudact/u1-sentence.php?"
            ),
            'materials-production' => array(
                API_GAS . "v1/materials-production/g1.php?",
                API_GAS . "v1/materials-production/m.php?",
                API_GAS . "v1/materials-production/adm.php?",
                API_GAS . "v1/materials-production/adm1.php?",
                API_GAS . "v1/materials-production/u1.php?"
            )
        };
    }

    /**
     * @deadlines  нарушение сроков рассмотения
     * @sudact не опубликованные судебные акты
     * @materials-production дела, материалы находящиеся в производстве
     * @no-last-events дела не отмеченные более 1 дня для в производстве, более 5 дней - переданных судье
     * @categories-material - категории материалов
     * @categories-civil-cases - категории гражданских дел
     */
    public function responseGasAPI()
    {
        try {
            if (empty($this->helpers->urlData["1"])) {
                throw new \Exception("Не задан маршрут до ресурса");
            }
            match ($this->helpers->urlData["1"]) {
                'deadlines', 'sudact', 'materials-production', 'no-last-events' => $this->helpers->getJsonEncode($this->prepareQuery($this->helpers->urlData)),
                'categories-civil-cases', 'categories-material' => $this->helpers->getJsonEncode($this->categoriesMaterial())
            };
        } catch (\UnhandledMatchError | \Exception $e) {
            $this->helpers->isErrorInfo(400, "Ошибка в переданных данных", $e);
        }
    }

    /**
     * Подготавливем запрос перед отправкой в API ГАС
     * Проверяет существование маршрута, права доступа.
     * Судья, помощник, секретарь судебного заседания
     * видят только свои дела за текущий год при их наличии.
     * Председатель, заместитель председателя, помощник председателя,
     * администраторы ресурса имеют доступ
     * к просмотру дел всех судей
     */
    private function prepareQuery(array $urlData): array|string
    {
        try {
            if (empty($this->helpers->idGAS or $this->helpers->sudo === 1)) {
                throw new \Exception("Недостаточно прав");
            }

            if (
                !empty($urlData["2"]) and $urlData["2"] === "all" and
                (in_array($this->helpers->professionID, [1, 2, 6]) or $this->helpers->sudo === 1)
            ) {
                $idGAS = $this->helpers->db->run("SELECT UserAttributes.idGAS 
                                            FROM sdc_users
                                            LEFT JOIN sdc_user_attributes AS UserAttributes ON UserAttributes.internalKey=sdc_users.id
                                            WHERE UserAttributes.idGAS IS NOT NULL")->fetchAll(\PDO::FETCH_COLUMN);
                $responseGasAPI = $this->helpers::sendGETmulti(["idJudge" => implode(",", $idGAS)], $this->Links());
            } elseif (!empty($this->helpers->idGAS) and empty($urlData["2"])) {
                $responseGasAPI = $this->helpers::sendGETmulti(["idJudge" => $this->helpers->idGAS], $this->Links());
            } else {
                throw new \Exception("Недостаточно прав");
            }
            return $this->helpers::wrap($responseGasAPI, "data");
        } catch (\UnhandledMatchError | \Exception $e) {
            $this->helpers->isErrorInfo(401, "Доступ закрыт.", $e);
        }
    }

    private function categoriesMaterial(): array
    {
        return $this->helpers::wrap($this->helpers::sendGET(array(), API_GAS . 'v1/' . $this->helpers->urlData["1"] . '.php?'), "data");
    }
}
