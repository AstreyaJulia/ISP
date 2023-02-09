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
     * Проверяем username
     * Недопускаются одинаковые username
     */
    private function id(){

        $param = $this->helpers->formData["id"] ?? "";

        $this->helpers->validateINT($param, "id");

        $sql = "SELECT
                    COUNT(atributes.id)
                FROM sdc_users AS users
                LEFT JOIN sdc_user_attributes AS atributes ON atributes.internalKey = users.id
                WHERE users.id = ?";
        $row = $this->helpers->db->run($sql, [$param])->fetchColumn();
        if($row !== 1){
            $this->helpers->isErrorInfo(400, "Неверные параметы", "Пользователь с id $param отсутствует в базе");
        }
        return $param;
    }

    /**
     * Проверяем username
     * Недопускаются одинаковые username
     */
    private function username(){

        $sqlCondition = $this->helpers->getMethod() === "PATCH" ? "  AND id != ".$this->helpers->formData["id"]: "";
        $param = $this->helpers->formData["username"] ?? "";

        $this->helpers->validateExist($param, "username");
        $sql = "SELECT COUNT(id) FROM sdc_users WHERE username = ?$sqlCondition";
        $row = $this->helpers->db->run($sql, [$param])->fetchColumn();
        if($row === 1){
            $this->helpers->isErrorInfo(400, "Неверные параметы", "Пользователь $param присутствует в базе");
        }

        return $param;
    }

    /**
     * проверяем sudo
     */
    private function sudo(){
        $param = $this->helpers->formData["sudo"] ?? "";
        if(!in_array($param, [0,1])){
            $this->helpers->isErrorInfo(400, "Неверные параметы", "Ожидаю в sudo 0 или 1");
        }
        return $param;
    }

    /**
     * проверяем active
     */
    private function active():int
    {
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
    private function idGAS()
    {
        $param = !empty($this->helpers->formData["idGAS"]) ? $this->helpers->formData["idGAS"]: NULL;
        if(in_array($this->helpers->formData["professionID"], [1,2,3])){
            $this->helpers->validateINT($param, "idGAS");
        }elseif (!empty($param)) {
            $this->helpers->isErrorInfo(400, "Неверные параметы", "idGAS должен быть пустым");
        }
        return $param;
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
        return $param;
    }

    /**
     * Проверка должности
     */
    private function vocation()
    {
        $param = !empty($this->helpers->formData["professionID"]) ? $this->helpers->formData["professionID"]: NULL;
        $this->helpers->validateINT($param, "professionID");

        $sql = "SELECT COUNT(id) FROM sdc_vocation WHERE id = ? AND parent_id IS NOT NULL";
        $row = $this->helpers->db->run($sql, [$param])->fetchColumn();

        if ($row !== 1) {
            $this->helpers::isErrorInfo(400, "Неверные параметры", "Должности с id: $param не существует");
        }
        return $param;
    }

    /**
     * Проверка принадлежности к судье
     * секрктари с.з. id = 9,
     * помошник судьи id = 7,
     * помошник председателя = 6
     * В противном случае affiliationJudgeID не заполняется
     */
    private function affiliation()
    {
        $param = !empty($this->helpers->formData["affiliationJudgeID"]) ? $this->helpers->formData["affiliationJudgeID"]: NULL;
        if(in_array($this->vocation(), [6,7,9])){
            $this->helpers->validateINT($param, "affiliationJudgeID");
            if ($this->helpers->searchAssociativeArray($param, $this->vocationGroup->usersGroup(24), "id") === false) {
                $this->helpers::isErrorInfo(400, "Неверные параметры", "Судьи с id: $param не существует");
            }
        } elseif(!empty($param)) {
            $this->helpers->isErrorInfo(400, "Неверные параметы", "affiliationJudgeID должен быть пустым");
        }
        return $param;
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

        return $d->format("Y-m-d");
    }

    /**
     * Проверка рабочего метса
     */
    private function workplace()
    {
        $param = !empty($this->helpers->formData["workplaceID"]) ? $this->helpers->formData["workplaceID"]: NULL;
        if($this->active() === 1) {
            $this->helpers->validateINT($param, "workplaceID");

            $desktop = $this->freeDesktop();

            if ($this->helpers->getMethod() === "PATCH") {
                $sql = "SELECT
                            room AS id,
                            fullname AS label
                        FROM sdc_user_attributes WHERE id = :id AND room = :room";
                $desktop[] = $this->helpers->db->run($sql, ["id" => $this->id(), "room" => $param])->fetch(\PDO::FETCH_LAZY);
            }

            if($this->helpers->searchAssociativeArray($param, $desktop, "id") === false){
                $this->helpers::isErrorInfo(400, "Неверные параметры", "Рабочее место с id: $param не существует либо занято");
            };
        } elseif (!empty($param)) {
            $this->helpers::isErrorInfo(400, "Неверные параметры", "Рабочее место должно быть путсым");
        }
        return $param;
    }
}
