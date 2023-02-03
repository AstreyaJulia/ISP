<?php

namespace Api\Objects;
use DateTime;
/**
 * Работающие, уволенные сотрудники. Создание,
 * редактирование пофиля сотрудника 
 */
class Staff
{
    use StaffValidate;

    protected Helpers $helpers;

    public function __construct(
        Helpers $helpers = new \Api\Objects\Helpers(),
    ) {
        $this->helpers = $helpers;
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
                    DesktopType.id,
                    CONCAT (BildingType.name, ' / ', DoorType.name, ' / ', DesktopType.name) AS label
                FROM `sdc_room` AS DesktopType
                    LEFT JOIN `sdc_room` AS DoorType ON DesktopType.affiliation = DoorType.id
                    LEFT JOIN `sdc_room` AS FloorType ON DoorType.affiliation = FloorType.id
                    LEFT JOIN `sdc_room` AS BildingType ON FloorType.affiliation = BildingType.id
                    LEFT JOIN sdc_user_attributes ON sdc_user_attributes.room=DesktopType.id
                WHERE DesktopType.icon ='desktop' AND sdc_user_attributes.room IS NULL
                ORDER BY BildingType.name ASC";
        return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
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
                        COALESCE(BildingType.name, 'Нет здания'), ', ',
                        COALESCE(DoorType.name, 'нет кабинета'), ', ',
                        COALESCE(DesktopType.name, 'нет рабочего места')
                    ) AS workplace,
                    IF(ISNULL(DesktopType.ip),'',DesktopType.ip) AS ip,
                    sdc_users.active,
                    sdc_users.sudo
                FROM sdc_users
                LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
                LEFT JOIN sdc_user_attributes AS ChildUserAttributesType ON ChildUserAttributesType.id = sdc_user_attributes.affiliation
                LEFT JOIN sdc_room AS DesktopType ON DesktopType.id=sdc_user_attributes.room
                LEFT JOIN sdc_room AS DoorType ON DoorType.id=DesktopType.affiliation
                LEFT JOIN sdc_room AS FloorType ON DoorType.affiliation = FloorType.id
                LEFT JOIN sdc_room AS BildingType ON FloorType.affiliation = BildingType.id
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
                    sdc_vocation.id AS professionID,
                    IF(ISNULL(ChildUserAttributesType.id),'',ChildUserAttributesType.id) AS affiliationJudgeID,
                    DATE_FORMAT(sdc_user_attributes.dob, '%d.%m.%Y') AS dob,
                    sdc_user_attributes.email,
                    sdc_user_attributes.mobilephone,
                    sdc_user_attributes.address,
                    sdc_user_attributes.website,
                    sdc_user_attributes.comment,
                    IF(ISNULL(DesktopType.id),'',DesktopType.id) AS workplaceID,
                    CONCAT (
                        IF(ISNULL(BildingType.name),'',BildingType.name), ' / ',
                        IF(ISNULL(DoorType.name),'',DoorType.name), ' / ',
                        IF(ISNULL(DesktopType.name),'',DesktopType.name)
                    ) AS workplace
                FROM sdc_users
                LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
                LEFT JOIN sdc_user_attributes AS ChildUserAttributesType ON ChildUserAttributesType.id = sdc_user_attributes.affiliation
                LEFT JOIN sdc_room AS DesktopType ON DesktopType.id=sdc_user_attributes.room
                LEFT JOIN sdc_room AS DoorType ON DoorType.id=DesktopType.affiliation
                LEFT JOIN sdc_room AS FloorType ON DoorType.affiliation = FloorType.id
                LEFT JOIN sdc_room AS BildingType ON FloorType.affiliation = BildingType.id
                LEFT JOIN sdc_vocation ON sdc_vocation.id = sdc_user_attributes.profession
                WHERE sdc_users.id != 1 AND sdc_users.id = ?
                ORDER BY sdc_user_attributes.fullname ASC";
        return $this->helpers->db->run($sql, [$params])->fetchAll(\PDO::FETCH_ASSOC);
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
                }, "data");
        } catch (\Error | \Exception | \UnhandledMatchError $e) {
            $this->helpers->isErrorInfo(400, "Ошибка в переданных параметрах", $e->getMessage());
        }
    }


    /**
     * Добавление нового пользователя
     */
    private function addUser()
    {
        //Добавляем запись в таблицу sdc_users
        $paramUser = [
            "username" => $this->helpers->formData["username"],
            "active" => $this->helpers->formData["active"],
            "sudo" => $this->helpers->formData["sudo"],
        ];

        $sqlUser = "INSERT INTO `sdc_users` (`username`, `active`, `sudo`) VALUES (:username, :active, :sudo)";
        $this->helpers->db->run($sqlUser, $paramUser);

        $LAST_ID = $this->helpers->db->pdo->lastInsertId() ?? $this->helpers::isErrorInfo(400, "Произошла ошибка", "Запись не добавлена");

        //Добавляем запись в таблицу sdc_user_attributes
        $paramAttr = [
            "internalKey" => $LAST_ID,
            "idGAS" => $this->helpers->formData["idGAS"] ?? null,
            "fullname" => $this->helpers->formData["fullname"],
            "gender" => $this->helpers->formData["gender"],
            "dob" => date("Y-m-d", strtotime($this->helpers->formData["dob"])),
            "email" => $this->helpers->formData["email"],
            "mobilephone" => $this->helpers->formData["mobilephone"],
            "address" => $this->helpers->formData["address"],
            "comment" => $this->helpers->formData["comment"],
            "website" => $this->helpers->formData["website"],
            "profession" => $this->helpers->formData["professionID"],
            "affiliation" => (int)$this->helpers->formData["affiliationJudgeID"],
            "room" => $this->helpers->formData["workplaceID"]
        ];
        
	    $sqlAttr = "INSERT INTO `sdc_user_attributes` (`internalKey`, `idGAS`, `fullname`, `gender`, `dob`, `email`, `mobilephone`, `address`, `comment`, `website`, `profession`, `affiliation`, `room`) VALUES (:internalKey, :idGAS, :fullname, :gender, :dob, :email, :mobilephone, :address, :comment, :website, :profession, :affiliation, :room)";
	    $this->helpers->db->run($sqlAttr, $paramAttr);
    }

    

    /**
     * Обрабатываем приходящие POST-запросы. 
     */
    private function metodPOST()
    {
        $this->helpers::headlinesPOST();
        $this->helpers->validateExist($this->helpers->formData["username"] ?? "", "username");
        $this->sudo($this->helpers->formData["sudo"] ?? "");
        $this->addUserValidateGender();
        $this->addUserValidateDob();
        $this->addUserValidateVocation();
        $this->addUserValidateAffiliation();
        $this->addUserValidateWorkplace();

        $this->addUser();

        return $this->helpers->wrap("разрешаю и добавляю запись", "data");

    }

    public function responseStaff(): void
    {
        match ($this->helpers->getMethod()) {
            "GET" => $this->helpers->getJsonEncode($this->metodGET()),
            "POST" => $this->helpers->getJsonEncode($this->metodPOST())
        };
    }
}
