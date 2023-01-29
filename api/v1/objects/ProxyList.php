<?php

namespace Api\Objects;

class ProxyList
{

    protected Helpers $helpers;

    protected $id;
    protected $menuindex;
    public readonly int $idGroup;
    protected $href;
    protected $name_href;
    protected $proxy_href;

    public function __construct(
        Helpers $helpers = new \Api\Objects\Helpers(),
        //protected DB $db = new \Api\Objects\DB(DB_NAME, DB_USER, DB_PASS, DB_HOST)
    ) {
        $this->helpers = $helpers;
    }

    /**
     * Группы ссылок
     * Группа id = 1 - blacklist(НЕ УДАЛЯТЬ)
     * 
     * @return array
     */
    public function proxyGroup(): array
    {
        $where = $this->helpers->sudo == 1 ? "" : " and id != 1 AND id_group != 1";
        $sql = "SELECT
                        id,
                        id_group AS parent_id,
                        menuindex,
                        name_href,
                        href
                    FROM sdc_proxy_list WHERE id_group = 0 $where
                    ORDER BY menuindex + 0 ASC";
        return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
    }

    /**
     * Ссылки
     * 
     * @return array
     */
    public function proxyLink(): array
    {
        try {
            $this->idGroup = $this->helpers->urlData["1"] ?? "";
        } catch (\Error $e) {
            $this->helpers->isErrorInfo(400, "Ошибка в переданных данных", $e);
        }

        if ($this->helpers->sudo !== 1 and $this->idGroup === 1) {
            throw new \Exception("Недостаточно прав для просмотра ресурса");
        }

        $sql = "SELECT
                        id,
                        id_group AS parent_id,
                        menuindex,
                        name_href,
                        href
                    FROM sdc_proxy_list WHERE id_group = {$this->idGroup}
                    ORDER BY menuindex + 0 ASC";
        return $this->helpers->db->run($sql)->fetchAll(\PDO::FETCH_ASSOC);
    }

    public function responseProxyList()
    {
        try {
            if (empty($this->helpers->urlData["0"])) {
                throw new \Exception("Не задан маршрут до ресурса");
            }
            match ($this->helpers->urlData["0"]) {
                'group',  => $this->helpers->getJsonEncode($this->helpers->wrap($this->proxyGroup(), "data")),
                'group-link', => $this->helpers->getJsonEncode($this->helpers->wrap($this->proxyLink(), "data"))
            };
        } catch (\UnhandledMatchError | \Exception $e) {
            $this->helpers->isErrorInfo(400, "Ошибка в переданных данных", $e);
        }
    }
}
