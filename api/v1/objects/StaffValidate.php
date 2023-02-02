<?php

namespace Api\Objects;
use DateTime;
/**
 * Проверки для класса Staff
 */
trait StaffValidate
{
    protected Helpers $helpers;
    protected VocationGroup $vocationGroup;

    public function __construct(
        Helpers $helpers = new \Api\Objects\Helpers(),
        VocationGroup $vocationGroup = new \Api\Objects\VocationGroup()
    ) {
        $this->helpers = $helpers;
        $this->vocationGroup = $vocationGroup;
    }


    /**
     * проверяем sudo
     */
    private function sudo($param){
        $this->helpers->validateExist($param, "sudo");
        $this->helpers->validateINT($param, "sudo");
    }

    /**
     * Проверка должности
     */
    private function addUserValidateVocation()
    {
        $profession = $this->helpers->formData["professionID"] ?? "";
        $this->helpers->validateINT($profession, "professionID");

        if (!$this->helpers->isExistsById("sdc_vocation", $profession)) {
            $this->helpers::isErrorInfo(400, "Неверные параметры", "Должности с id: $profession не существует");
        }
    }

    /**
     * Проверка рабочего метса
     */
    private function addUserValidateWorkplace()
    {
        $param = $this->helpers->formData["workplaceID"] ?? "";
        $this->helpers->validateINT($param, "workplaceID");

        if($this->helpers->searchAssociativeArray($param, $this->freeDesktop(), "id") === false){
            $this->helpers::isErrorInfo(400, "Неверные параметры", "Рабочее место с id: $param не существует либо занято");
        };
    }

    /**
     * Проверка гендорной принадлежности
     */
    private function addUserValidateGender()
    {
        $param = $this->helpers->formData["gender"] ?? "";
        if ( filter_var($param, FILTER_VALIDATE_INT) === false ) {
            $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю в gender целое число. Получаю: $param");
        }
    }

    /**
     * Проверка даты рождения
     */
    private function addUserValidateDob()
    {

        $param = $this->helpers->formData["dob" ?? ""];
        $format = "Y-m-d\TH:i:s.000\Z";
        
        $d = DateTime::createFromFormat($format, $param);

        if (!($d && $d->format($format) === $param)) {
            $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю в dob в формате Y-m-d\TH:i:s.000\Z Получаю: $param");
        }
    }

    /**
     * Проверка принадлежности к судье
     * секрктари с.з. id = 9,
     * помошник судьи id = 7,
     * помошник председателя = 6
     */
    private function addUserValidateAffiliation()
    {
        $profession = $this->helpers->formData["professionID"] ?? "";
        $affiliation = $this->helpers->formData["affiliationJudgeID"] ?? "";
        if(in_array($profession, [6,7,9])){
            if ( filter_var($affiliation, FILTER_VALIDATE_INT) === false ) {
                $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю в affiliation целое число. Получаю: $affiliation");
            }
            if ($this->helpers->searchAssociativeArray($affiliation, $this->vocationGroup->usersGroup(24), "id") === false) {
                $this->helpers::isErrorInfo(400, "Неверные параметры", "Судьи с id: $affiliation не существует");
            }
        }
    }

}
