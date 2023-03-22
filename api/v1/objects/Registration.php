<?php

namespace Api\Objects;

class Registration
{

  use RegistrationValidate, Objects {
    RegistrationValidate::__construct insteadof Objects;
  }

  private function metodPOST()
  {
    $this->verifyLogin();
    $this->verifyPassword();
    $this->helpers->setUserPassword($this->password);

    $iat = time() - (60 * 60);
    $ndf = $iat + (60 * 60);
    $token = array(
      "iss" => "http://any-site.org",
      "aud" => "http://any-site.com",
      "iat" => $iat,
      "nbf" => $ndf,
      "data" => array(
        "id" => $this->helpers->id,
        "sudo" => $this->helpers->sudo,
        "professionID" => $this->helpers->professionID
      )
    );

    http_response_code(200);

    $jwt["data"] = ["jwt" => \Firebase\JWT\JWT::encode($token, "your_secret_key")];

    return $jwt;
  }
}
