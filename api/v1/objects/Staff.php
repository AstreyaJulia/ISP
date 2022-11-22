<?php

namespace Api\Objects;

class Staff
{

    protected Helpers $helpers;

    public function __construct(
        Helpers $helpers = new \Api\Objects\Helpers()
    ) {
        $this->helpers = $helpers;
    }

    /**
     * Список сотрудников
     */
    public function staffList(): array
    {
        $sql = "SELECT
                    sdc_users.id,
                    sdc_users.username,
                    sdc_user_attributes.fullname,
                    DATE_FORMAT(sdc_user_attributes.dob, '%d.%m.%Y') AS dob,
                    sdc_vocation.name AS profession,
                    CONCAT
                    (
                        COALESCE(ParentUserType.name, 'нет кабинета'), ', ', 
                        COALESCE(ChildUserType.name, 'нет рабочего места')
                    ) AS workplace,
                    ChildUserType.ip,
                    sdc_users.active,
                    sdc_users.sudo
                FROM sdc_users
                LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
                LEFT JOIN sdc_room AS ChildUserType ON ChildUserType.id=sdc_user_attributes.room
                LEFT JOIN sdc_room AS ParentUserType ON ParentUserType.id=ChildUserType.affiliation 
                LEFT JOIN sdc_vocation ON sdc_vocation.id = sdc_user_attributes.profession
                WHERE sdc_users.id != 1
                ORDER BY sdc_user_attributes.fullname ASC";
        return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * Список сотрудников
     */
    public function staffProperty(int $params): array
    {
        $sql = "SELECT *,
                    sdc_users.id,
                    sdc_users.username,
                    sdc_user_attributes.fullname,
                    DATE_FORMAT(sdc_user_attributes.dob, '%d.%m.%Y') AS dob,
                    sdc_vocation.name AS profession,
                    ChildUserType.ip,
                    sdc_users.active,
                    sdc_users.sudo
                FROM sdc_users
                LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
                LEFT JOIN sdc_room AS ChildUserType ON ChildUserType.id=sdc_user_attributes.room
                LEFT JOIN sdc_room AS ParentUserType ON ParentUserType.id=ChildUserType.affiliation 
                LEFT JOIN sdc_vocation ON sdc_vocation.id = sdc_user_attributes.profession
                WHERE sdc_users.id != 1 AND sdc_users.id = ?
                ORDER BY sdc_user_attributes.fullname ASC";
        return $this->helpers->db->run($sql, [$params])->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * Обрабатываем приходящие GET-запросы. 
     */
    private function metodGET()
    {
        try {
            return $this->helpers->wrap(
                match (count($this->helpers->urlData)) {
                    1 => $this->staffList(),
                    2 => $this->staffProperty($this->helpers->urlData[1])
                }, "data"
            );
        } catch (\Error | \Exception | \UnhandledMatchError $e) {
            $this->helpers->isErrorInfo(400, "Ошибка в переданных параметрах", $e->getMessage());
        }
        
    }

    /**
     * Обрабатываем приходящие POST-запросы. 
     */
    private function metodPOST()
    {
        $this->helpers::headlinesPOST();
    }

    public function responseStaff()
    {
        match ($this->helpers->getMethod()) {
            "GET" => $this->helpers->getJsonEncode($this->metodGET()),
            "POST" => $this->metodPOST()
        };
    }
}
