
<?php
    error_reporting(E_ALL);
    ini_set("display_errors", "on");


    $ourData = file_get_contents("../data/categories-material.json");
    $row = json_decode($ourData);
    $F1  = array_column($row, 'F1');
    $NAME  = array_column($row, 'NAME');
    array_multisort($F1, SORT_ASC, $NAME, SORT_ASC, $row);
    
    function objectToArray($d) {
        if (is_object($d)) {
            // Получает свойства данного объекта
            // с функцией get_object_vars
            $d = get_object_vars($d);
        }

        if (is_array($d)) {
            /*
            * Возвращаемый массив, преобразованный в объект
            * Использование __FUNCTION__ (магическая константа)
            * для рекурсивного вызова
            */
            return array_map(__FUNCTION__, $d);
        } else {
            return $d;
        }
    }

    //Выделяем найденные слова
    function getName($name) {
        if (!empty($_POST["searchCivil"])) {
            return preg_replace('(' .str_replace(" ", "|", $_POST["searchCivil"]). ')', '<mark>\0</mark>', $name);
        } else {
            return $name;
        }
    }

    if (!empty($_POST["searchCivil"])) {
        foreach (objectToArray($row) as $key => $value) {

            if (mstrpos($value["NAME"], explode(" ", $_POST["searchCivil"]))) {
                $array[] = $value;
            } else {
                false;
            }


            /*if (strpos($value["NAME"], $_POST["searchCivil"]) !== false) {
                $array[] = $value;
            }*/
        }
    } else {
        $array = objectToArray($row);
    }

    $resultArray = [];

    array_walk($array, function($item, $key) use (&$resultArray) {
        $resultArray[$item['F1']][] = $item;
    });








function strposa($haystack, $needles=array(), $offset=0) {
        $chr = array();
        foreach($needles as $needle) {
                $res = strpos($haystack, $needle, $offset);
                if ($res !== false) $chr[$needle] = $res;
        }
        if(empty($chr)) return false;
        return min($chr);
}

function mstrpos($haystack, $needles, $offset = 0, $last = false)
{
  if(!is_array($needles)) { $needles = array($needles); }
  $found = false;
  foreach($needles as $needle)
  {
    $position = strpos($haystack, (string)$needle, $offset);
    if($position === false) { continue; }
    $exp = $last ? ($found === false || $position > $found) :
      ($found === false || $position < $found);
    if($exp) { $found = $position; }
  }
  return $found;
}

function pstrpos($haystack, $needle, $offset = 0)
{
  $position = strpos($haystack, $needle, $offset);
  if($position !== false) { return $position; }
 
  for($i = strlen($needle); $i > 0; $i--)
  {
    if(substr($needle, 0, $i) == substr($haystack, -$i))
    { return strlen($haystack) - $i; }
  }
  return false;
}

function mpstrpos($haystack, $needles, $offset = 0, $last = false)
{
  if(!is_array($needles)) { $needles = array($needles); }
  $found = false;
  foreach($needles as $needle)
  {
    $position = pstrpos($haystack, (string)$needle, $offset);
    if($position === false) { continue; }
    $exp = $last ? ($found === false || $position > $found) :
      ($found === false || $position < $found);
    if($exp) { $found = $position; }
  }
  return $found;
}




?>
<form class="form userinfo-form" action="" method="post">
    <input type="" id="" name="searchCivil" value="<?= @$_POST["searchCivil"]; ?>">
    <button type="submit" class="btn primary large">Поиск</button>
</form>
<table class="table">
    <thead>
        <tr>
            <th>Индекс</th>
            <th>Предмет ходатайства</th>
        </tr>
    </thead>
    <tbody>
        <?php foreach ($resultArray as $key => $valueF1): ?>
        <tr>
            <td colspan="2"><?= $key; ?></td>
        </tr>
        <?php foreach ($valueF1 as $key => $value): ?>
        <tr>
            <td><?= $value["PREFIX"]; ?></td>
            <td><?= getName($value["NAME"]); ?></td>
        </tr>
        <?php endforeach ?>
        <?php endforeach ?>
    </tbody>
</table>