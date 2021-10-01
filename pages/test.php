<?php
$title = "title Тестовой страницы";
$info = "Блок info для тестовой страницы";

// Сообщение для угаданной буквы
$letterExist = "";
// Крутим барабан, получаем очки
$mark = 400;
// Текущий игрок
$ng = 1;

// Массив с игроками
$gamers = [
    ["gamer" => "Игрок 1", "points" => 1],
    ["gamer" => "Игрок 2", "points" => 2]
];

$drum = [100, 150, 200, 250, 300, 350, 400, 450, 500, 550, 600, 650, 700, 750, 800];
// Выбираем случайное значение из массивы
$drumRund = array_rand($drum, 1);

$word = "СКИЛБОКС";

$wordArr = preg_split('//u', $word, -1, PREG_SPLIT_NO_EMPTY);

$openLatter = ["А", "Б", "Л", "О"];

$latters = ["А", "Б", "В", "Г", "Д", "Е", "Ё", "Ж", "З", "И", "Й", "К", "Л", "М", "Н", "О", "П", "Р", "С", "Т", "У", "Ф", "Х", "Ц", "Ч", "Ш", "Щ", "Ъ", "Ы", "Ь", "Э", "Ю","Я"];

if (!empty($_POST)){
    if (isset($_POST['letter'])) {
        // проверяем наличие буквы
        if (in_array($_POST['letter'], $wordArr)) {
            // Если буква есть выводим уведомление
            $letterExist = '<div class="d-flex justify-content-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-green-700 bg-green-100 border border-green-300 ">
                    <div class="text-xl font-normal max-w-full flex-initial">Такая буква есть</div>
                </div>';

                $gamers[$ng]['points'] = $gamers[$ng]['points'] + $mark;
                
        } else {
            // Если буквы нет выводим уведомление
            $letterExist = '<div class="d-flex justify-content-center items-center m-1 font-medium py-1 px-2 bg-white rounded-md text-success bg-red-100 border border-red-300 ">
                    <div class="text-xl font-normal max-w-full flex-initial">Нет такой буквы</div>
                </div>';
            if (count($gamers) > $ng) {
                $ng = 0;
            } else {
                $ng = $ng + 1;
            }
            
            //$gamers[$ng]['points'] = $gamers[$ng]['points'];
        }
        // Добавляем букву в список выбранных
        array_push($openLatter, $_POST['letter']);
    } elseif (isset($_POST['help'])) {
        // Выводим подсказку

    } elseif (isset($_POST['restart'])) {
        // Начать заново

    } elseif (isset($_POST['spin'])) {
        $drumRund = array_rand($drum, 1);
        $mark = ($drum[$drumRund]);
    }
}



console_log($ng);








ob_start();
    include "components/test/template/tpl.test.php";
    $content = ob_get_contents();
ob_end_clean();




function console_log($data){ // сама функция
    if(is_array($data) || is_object($data)){
        echo("<script>console.log('php_array: ".json_encode($data)."');</script>");
    } else {
        echo("<script>console.log('php_string: ".$data."');</script>");
    }
}



/*$latters = [
   ["type" => "free", "latter" => "А"],
   ["type" => "free", "latter" => "Б"],
   ["type" => "free", "latter" => "В"],
   ["type" => "free", "latter" => "Г"],
   ["type" => "free", "latter" => "Д"],
   ["type" => "free", "latter" => "Е"],
   ["type" => "free", "latter" => "Ё"],
   ["type" => "free", "latter" => "Ж"],
   ["type" => "free", "latter" => "З"],
   ["type" => "select", "latter" => "И"],
   ["type" => "free", "latter" => "Й"],
   ["type" => "select", "latter" => "К"],
   ["type" => "free", "latter" => "Л"],
   ["type" => "free", "latter" => "М"],
   ["type" => "free", "latter" => "Н"],
   ["type" => "select", "latter" => "О"],
   ["type" => "free", "latter" => "П"],
   ["type" => "free", "latter" => "Р"],
   ["type" => "select", "latter" => "С"],
   ["type" => "free", "latter" => "Т"],
   ["type" => "free", "latter" => "У"],
   ["type" => "free", "latter" => "Ф"],
   ["type" => "free", "latter" => "Х"],
   ["type" => "free", "latter" => "Ц"],
   ["type" => "free", "latter" => "Ч"],
   ["type" => "free", "latter" => "Ш"],
   ["type" => "free", "latter" => "Щ"],
   ["type" => "free", "latter" => "Ъ"],
   ["type" => "free", "latter" => "Ы"],
   ["type" => "free", "latter" => "Ь"],
   ["type" => "free", "latter" => "Э"],
   ["type" => "free", "latter" => "Ю"],
   ["type" => "free", "latter" => "Я"]
];*/




