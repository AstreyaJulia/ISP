<?php

// переменные, используемые для JWT
$key = "your_secret_key";
$iss = "http://any-site.org";
$aud = "http://any-site.com";
$iat = time() - (60 * 60);
$nbf = $iat + (60 * 60); // valid for 1 hour