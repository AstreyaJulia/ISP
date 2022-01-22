<?php

// подключение файлов jwt
include_once $_SERVER['DOCUMENT_ROOT'] . '/api/libs/firebase/jwt/BeforeValidException.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/api/libs/firebase/jwt/ExpiredException.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/api/libs/firebase/jwt/SignatureInvalidException.php';
include_once $_SERVER['DOCUMENT_ROOT'] . '/api/libs/firebase/jwt/JWT.php';

// переменные, используемые для JWT
$key = "your_secret_key";
$iss = "http://any-site.org";
$aud = "http://any-site.com";
$iat = time() - (60 * 60);
$nbf = $iat + (60 * 60); // valid for 1 hour