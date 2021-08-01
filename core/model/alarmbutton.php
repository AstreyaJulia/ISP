<?php
	namespace Core\Model;
	class Alarmbutton extends User {
		
		//Группируем судей со своими помощниками и секретарями
		public function getChildren($id_group, $alarmList) {
		    $children = [];
			foreach ($alarmList as $p => $pp) {
					if (!empty($pp->affiliation) && $pp->affiliation == $id_group->id) {
						$children[] = $pp;
					}
				}
			    return $children;
		}

	}