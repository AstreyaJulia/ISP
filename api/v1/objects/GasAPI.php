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

    public function responseGasAPI()
    {


        try {
            if (empty($this->helpers->getUrlData()["1"])) {
                throw new \Exception("Не задан маршрут до ресурса");
            }
            match ($this->helpers->getUrlData()["1"]) {
                'deadlines' => $this->helpers->getJsonEncode($this->publicationActs())
            };
        } catch (\UnhandledMatchError | \Exception $e) {
            $this->helpers->isErrorInfo(500, "Ошибка в переданных данных", $e);
        }
    }

    private function publicationActs()
    {
        $publicationActs = $this->helpers::sendGET(["idJudge" => $this->helpers->getIdGAS()], 'http://192.168.2.253:8079/api_GAS/v1/'.$this->helpers->getUrlData()["1"].'.php?');
        return $this->helpers::wrap($publicationActs, "data");
    }
}
