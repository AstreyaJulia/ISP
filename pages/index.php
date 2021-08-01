<?php
$title = "Глвная страница";
$birthday = $link->query("SELECT sdc_user_attributes.fullname, DATE_FORMAT(dob, '%d.%m.%Y') as dob FROM sdc_users
            LEFT JOIN sdc_user_attributes ON sdc_user_attributes.internalKey=sdc_users.id
                LEFT JOIN sdc_room ON sdc_room.id=sdc_user_attributes.room
    WHERE sdc_users.active = 1 and sdc_user_attributes.profession != '' and DAY(CURRENT_DATE()) = DAY(sdc_user_attributes.dob) and MONTH(CURRENT_DATE()) = MONTH(sdc_user_attributes.dob)")->fetchAll(PDO::FETCH_ASSOC);
ob_start();
include "components/index/template/tpl.index.php";
$content = ob_get_contents();
ob_end_clean();
