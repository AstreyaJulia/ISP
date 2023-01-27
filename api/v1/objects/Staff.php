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
                    IF(ISNULL(ChildUserAttributesType.fullname),'',ChildUserAttributesType.fullname) AS affiliationJudge,
                    CONCAT
                    (
                        COALESCE(ParentUserType.name, 'нет кабинета'), ', ', 
                        COALESCE(ChildUserType.name, 'нет рабочего места')
                    ) AS workplace,
                    IF(ISNULL(ChildUserType.ip),'',ChildUserType.ip) AS ip,
                    sdc_users.active,
                    sdc_users.sudo
                FROM sdc_users
                LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
                LEFT JOIN sdc_user_attributes AS ChildUserAttributesType ON ChildUserAttributesType.id = sdc_user_attributes.affiliation
                LEFT JOIN sdc_room AS ChildUserType ON ChildUserType.id=sdc_user_attributes.room
                LEFT JOIN sdc_room AS ParentUserType ON ParentUserType.id=ChildUserType.affiliation 
                LEFT JOIN sdc_vocation ON sdc_vocation.id = sdc_user_attributes.profession
                WHERE sdc_users.id != 1
                ORDER BY sdc_user_attributes.fullname ASC";
        return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * Свойства сотрудника
     * 
     * @param int $params id сотрудника
     * 
     * @return array
     */
    public function staffProperty(int $params): array
    {
        $sql = "SELECT
                    sdc_users.id,
                    sdc_users.username,
                    IF(sdc_users.password = '',0, 1) AS setPass,
                    sdc_users.active,
                    sdc_users.sudo,
                    IF(ISNULL(sdc_user_attributes.idGAS),'', sdc_user_attributes.idGAS) AS idGAS,
                    sdc_user_attributes.fullname,
                    sdc_user_attributes.gender,
                    sdc_vocation.name AS profession,
                    IF(ISNULL(ChildUserAttributesType.fullname),'',ChildUserAttributesType.fullname) AS affiliationJudge,
                    DATE_FORMAT(sdc_user_attributes.dob, '%d.%m.%Y') AS dob,
                    sdc_user_attributes.email,
                    IF(ISNULL(ChildUserType.phone_worck),'', ChildUserType.phone_worck) AS phoneWorck,
                    sdc_user_attributes.mobilephone,
                    sdc_user_attributes.address,
                    sdc_user_attributes.website,
                    sdc_user_attributes.comment,
                    IF(ISNULL(ChildUserType.ip),'',ChildUserType.ip) AS ip,
                    IF(ISNULL(ChildUserType.id),'',ChildUserType.id) AS workplaceID,
                    IF(ISNULL(ChildUserType.name),'',ChildUserType.name) AS workplace,
                    IF(ISNULL(ParentUserType.name),'',ParentUserType.name) AS room,
                    IF(ISNULL(ParentUserType.alarm_button),'',ParentUserType.alarm_button) AS alarmButton
                FROM sdc_users
                LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
                LEFT JOIN sdc_user_attributes AS ChildUserAttributesType ON ChildUserAttributesType.id = sdc_user_attributes.affiliation
                LEFT JOIN sdc_room AS ChildUserType ON ChildUserType.id=sdc_user_attributes.room
                LEFT JOIN sdc_room AS ParentUserType ON ParentUserType.id=ChildUserType.affiliation 
                LEFT JOIN sdc_vocation ON sdc_vocation.id = sdc_user_attributes.profession
                WHERE sdc_users.id != 1 AND sdc_users.id = ?
                ORDER BY sdc_user_attributes.fullname ASC";
        return $this->helpers->db->run($sql, [$params])->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * 
     * Свободные рабочие места
     * 
     * @return array
     */
    private function freeDesktop():array
    {
        $sql = "SELECT
                    ChildUserType.id,
                    CONCAT (ParentUserType.name, ' / ', ChildUserType.name) AS label 
                FROM `sdc_room` AS ChildUserType
                LEFT JOIN `sdc_room` AS ParentUserType ON ChildUserType.affiliation = ParentUserType.id
                LEFT JOIN sdc_user_attributes ON sdc_user_attributes.room=ChildUserType.id
                WHERE ChildUserType.icon ='desktop' AND sdc_user_attributes.room IS NULL
                ORDER BY ParentUserType.name ASC";
        return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * 
     * Проверяем вторую часть запроса
     * 
     * @return array
     * 
     */
    private function requestReview(): array
    {
        return match ($this->helpers->urlData[0]) {
            "workplace" => $this->freeDesktop(),
            $this->helpers->urlData[0] => $this->staffProperty($this->helpers->urlData[0])
        };
    }

    /**
     * Обрабатываем приходящие GET-запросы. 
     */
    private function metodGET(): array
    {
        try {
            return $this->helpers->wrap(
                match (count($this->helpers->urlData)) {
                    0 => $this->staffList(),
                    1 => $this->requestReview()
                }, "data"
            );
        } catch (\Error | \Exception | \UnhandledMatchError $e) {
            $this->helpers->isErrorInfo(400, "Ошибка в переданных параметрах", $e->getMessage());
        }
    }

    /**
     * Добавление нового пользователя
     */
    private function addUser() {

    }

    /**
     * Проверяем переданный код профессии
     */
    private function validateProfession() {
        

    }

    /**
     * Обрабатываем приходящие POST-запросы. 
     */
    private function metodPOST()
    {
        $this->helpers::headlinesPOST();
        //получаем id вставленной записи. Если запрос не выполнен вернёт 0. Используется после запроса INSERT
        //$LAST_ID = $db->pdo->lastInsertId();

        return $this->helpers->wrap($this->helpers->formData["profession"], "data");
    }

    public function responseStaff(): void
    {
        match ($this->helpers->getMethod()) {
            "GET" => $this->helpers->getJsonEncode($this->metodGET()),
            "POST" => $this->helpers->getJsonEncode($this->metodPOST())
        };
    }
}
