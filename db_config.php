<?php
	$host = "";
	$user = "";
	$password = "";
	$dbName = "";
	$link = mysqli_connect($host, $user, $password, $dbName);
	mysqli_query($link, "SET NAMES 'utf8'");