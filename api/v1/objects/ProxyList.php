<?php
    namespace Api\Objects;

    class ProxyList  {


        // подключение к БД
        protected $db;

        // свойства объекта
        protected $id;
        protected $menuindex;
        protected $id_group;
        protected $href;
        protected $name_href;
        protected $proxy_href;

        public function __construct(DB $db) {
                    $this->db = $db;
                }


        //Удаляем запись
        public function delRecord($params) {
            // запрещаем удалять группу blacklist
            if ($params == 6) {
                return false;
            } else {
                $params = array('id' => $params, 'id_group' => $params);
                $sql = "DELETE FROM `sdc_proxy_list`
                        WHERE `id` = :id or `id_group` = :id_group";
                }
                $this->db->run($sql, $params);
                return true;
            }

        //Редактируем  ссылку
        public function updateLink($params) {
            $sql = "UPDATE
                        sdc_proxy_list
                    SET `menuindex`=:menuindex, `id_group`=:id_group, `href`=:href, `name_href`=:name_href, `proxy_href`=:proxy_href
                    WHERE `id` = :editLink";
            // выполняем запрос
            if ($this->db->run($sql, $params)) {
                return true;
            }
            return false;
        }

        //Добавляем ссылку
        public function insertLink($params) {
            $sql = "INSERT INTO `sdc_proxy_list` 
                        (`menuindex`, `id_group`, `href`, `name_href`, `proxy_href`) 
                    VALUES 
                        (:menuindex, :id_group, :href, :name_href, :proxy_href)";
            // выполняем запрос
            if ($this->db->run($sql, $params)) {
                return true;
            }
            return false;
        }

        //Редактируем  группу
        public function updateGroup($params) {
            $sql = "UPDATE
                        sdc_proxy_list
                    SET `menuindex`=:menuindex, `name_href`=:name_href, `proxy_href`=:proxy_href
                    WHERE `id` = :editGroup";
            // выполняем запрос
            if ($this->db->run($sql, $params)) {
                return true;
            }
            return false;
        }

        //Добавляем группу
        public function insertGroup($params) {
            $sql = "INSERT INTO `sdc_proxy_list` 
                        (`menuindex`, `name_href`, `proxy_href`) 
                    VALUES 
                        (:menuindex, :name_href, :proxy_href)";
            // выполняем запрос
            if ($this->db->run($sql, $params)) {
                return true;
            }
            return false;
        }
        
        //Получаем записи категорий
        public function getСategory() {
            $sql = "SELECT
                        id,
                        name_href
                    FROM sdc_proxy_list
                    WHERE id_group = 0
                    ORDER BY menuindex + 0 ASC";
            return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
        }

        //Получаем одну запись
        public function getReadOne($id) {
            $sql = "SELECT
                        id,
                        id_group AS parent_id,
                        menuindex,
                        name_href,
                        href,
                        proxy_href
                    FROM sdc_proxy_list
                    WHERE id = ?";
            return $this->db->run($sql,[$id])->fetchAll(\PDO::FETCH_ASSOC);
        }

        //Получаем все записи
        public function getProxyList() {
            $where = $this->sudo == 1 ? "" : "WHERE id != 6 AND id_group != 6";
            $sql = "SELECT
                        id,
                        id_group AS parent_id,
                        menuindex,
                        name_href,
                        href
                    FROM sdc_proxy_list $where
                    ORDER BY menuindex + 0 ASC";
            return $this->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
        }

        // Собираем список с ссылками
        public function multipleChildren($parent_id = 0) {
            $children = [];
            foreach ($this->getProxyList() as $key => $value) {
                if  ($parent_id != $value["parent_id"]) {
                    $children[$value["parent_id"]][] = $value;
                }
            }
            return $children;
        }

        // Собираем список с группами
        public function multipleFather($parent_id = 0) {
            $father = [];
            foreach ($this->getProxyList() as $key => $value) {
                if  ($parent_id == $value["parent_id"]) {
                    unset ($value["href"]);
                    $father[] = $value;
                }
            }
            return $father;
        }
    }
