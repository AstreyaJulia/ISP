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
    private function sudo(){
        $param = $this->helpers->formData["sudo"] ?? "";
        if(!in_array($param, [0,1])){
            $this->helpers->isErrorInfo(400, "Неверные параметы", "Ожидаю в sudo 0 или 1");
        } 
    }

    /**
     * проверяем active
     */
    private function active(){
        $param = $this->helpers->formData["active"] ?? "";
        if(!in_array($param, [0,1])){
            $this->helpers->isErrorInfo(400, "Неверные параметы", "Ожидаю в active 0 или 1");
        }
        return $param;
    }

    /**
     * Проверяем idGAS. Запролняется только для
     * председателя - 1, заместителя председателя - 2, судьи - 3
     */
    private function idGAS(){
        $param = $this->helpers->formData["idGAS"] ?? "";
        if(in_array($this->helpers->formData["professionID"], [1,2,3])){
            $this->helpers->validateINT($param, "idGAS");
        }elseif (strlen($param) !== 0) {
            $this->helpers->isErrorInfo(400, "Неверные параметы", "idGAS должен быть пустым");
        }
    }

    /**
     * проверяем принадлежность к полу
     * 0 - Ж или 1 - М
     */
    private function gender(){
        $param = $this->helpers->formData["gender"] ?? "";
        if(!in_array($param, [0,1])){
            $this->helpers->isErrorInfo(400, "Неверные параметы", "Ожидаю в gender целое число. 0 - Ж или 1 - М");
        } 
    }

    /**
     * Проверка должности
     */
    private function vocation()
    {
        $profession = $this->helpers->formData["professionID"] ?? "";
        $this->helpers->validateINT($profession, "professionID");

        $sql = "SELECT COUNT(id) FROM sdc_vocation WHERE id = ? AND parent_id IS NOT NULL";
        $row = $this->helpers->db->run($sql, [$profession])->fetchColumn();

        if ($row !== 1) {
            $this->helpers::isErrorInfo(400, "Неверные параметры", "Должности с id: $profession не существует");
        }
    }

    /**
     * Проверка принадлежности к судье
     * секрктари с.з. id = 9,
     * помошник судьи id = 7,
     * помошник председателя = 6
     * В противном случае affiliationJudgeID не заполняется
     */
    private function affiliation():void
    {
        $profession = $this->helpers->formData["professionID"] ?? "";
        $affiliation = $this->helpers->formData["affiliationJudgeID"] ?? "";
        if(in_array($profession, [6,7,9])){
            $this->helpers->validateINT($affiliation, "affiliationJudgeID");
            if ($this->helpers->searchAssociativeArray($affiliation, $this->vocationGroup->usersGroup(24), "id") === false) {
                $this->helpers::isErrorInfo(400, "Неверные параметры", "Судьи с id: $affiliation не существует");
            }
        } elseif(strlen($affiliation) !== 0) {
            $this->helpers->isErrorInfo(400, "Неверные параметы", "affiliationJudgeID должен быть пустым");
        }
    }

    /**
     * Проверка даты рождения
     */
    private function dob()
    {
        $param = $this->helpers->formData["dob"] ?? "";
        $format = "Y-m-d\TH:i:s.000\Z";
        
        $d = DateTime::createFromFormat($format, $param);

        if (!($d && $d->format($format) === $param)) {
            $this->helpers::isErrorInfo(400, "Неверные параметры", "Ожидаю dob в формате Y-m-d\TH:i:s.000\Z Получаю: $param");
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



    

}
