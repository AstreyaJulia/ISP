<?php
	namespace Core\Model;
	class User
	{
		public $id; // id AUTO_INCREMENT
		public $username; // varchar(100)
		public $password; // varchar(255)
		public $active; // принимает значения 1 либо 0
		public $primary_group; // справочник prof_array
		public $sudo; // принимает значения 1 либо 0
		public $internalKey;
		public $fullname;
		public $gender;
		public $dob;
		public $email;
		public $mobilephone;
		public $zip;
		public $state;
		public $city;
		public $address;
		public $photo;
		public $comment;
		public $website;
		public $profession;
		public $affiliation;
		public $room;
		public $jupiter_tab_num;
		public $ip;
		public $position;
		public $alarm_button;
		public $phone_worck;
		public $building_number;
		//public $new_dob;
		public function __set($name, $value) {
			$this->$property = $value; // устанавливаем значение
		}
		

	}