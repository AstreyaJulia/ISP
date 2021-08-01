<?php
	namespace Core\Model;
	class Phonebook extends User {
		
		//Номера комнат для телефонного справочника
		public function getPositionPhonebook(){
			//Получаем номер комнаты
			$num_room = mb_substr($this->position, 1, strpos($this->position, '_') -2);
			//Кабинеты
			if (mb_substr($this->position, - strlen($this->position), 1) == "к") {
				return "Каб.$num_room";
			}
			//Проход в кабинеты
			if (mb_substr($this->position, - strlen($this->position), 1) == "п") {
				return "Каб.$num_room";
			}
			//Серверная
			if (mb_substr($this->position, - strlen($this->position), 2) == "се") {
				return "Серверная";
			}
			//Совещательные комнаты
			if (mb_substr($this->position, - strlen($this->position), 1) == "с") {
				return "Сов. ком.$num_room";
			}
		}
		public function getProfessionPhonebook() {
			foreach (prof_array() as $key => $value) {
	            if ($key == $this->profession){
	               return $value;
	            }
	        }
		}

	}