<?php
	$title = "FAQ";
	$content = '<header class="main-content-header">
    <h3 class="main-content-title">База знаний</h3>
    <div class="main-content-subheader">
        <div class="breadcrumbs">
            <a href="/" class="breadcrumbs-home">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16">
                    <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z"/>
                </svg>
            </a>
            <a class="breadcrumbs-item active">База знаний</a>
        </div>
    </div>
</header>
<ul class="faq-cards-wrapper">';
	$dir = scandir("components/faq/");
	foreach($dir as $value) {
		if (strpos($value, ".") !== 0 and strpos($value, "index") !== 0) {
			//разбиваем строку по нижнему подчеркиванию
			$keywords = preg_split("/[_]+/", $value);
			//$keywords["0"] для сортировки
			$itemmenu = replaceBash($keywords["1"]);//$keywords["1"] Наименование пункта меню.
			//проверяем существование описания (иначе при отсутсвии выдает ошибки)
			if (isset($keywords["2"])) {
				$description = replaceBash($keywords["2"]);//$keywords["2"] описание
				//$content .= '</br><a class="" href="?faq='.$value.'">'.$itemmenu.'</a><p>'.$description.'</p>';
				$content .= '<li class="faq-card">
        <a class="faq-card-link" href="?faq='.$value.'">
            <h3 class="faq-card-header">'.$itemmenu.'</h3>
            <p class="faq-card-subheader">'.$description.'</p>
            <img class="faq-card-img" src="https://via.placeholder.com/800x800.png" width="800" height="800" alt="'.$itemmenu.'">
            <p>Нажмите чтобы открыть</p>
        </a>
    </li>';
			} else {
				$content .= '<li class="faq-card">
        <a class="faq-card-link" href="?faq='.$value.'">
            <h3 class="faq-card-header">'.$itemmenu.'</h3>
            <p class="faq-card-subheader">&nbsp;</p>
            <img class="faq-card-img" src="https://via.placeholder.com/800x800.png" width="800" height="800" alt="'.$itemmenu.'">
            <p>Нажмите чтобы открыть</p>
        </a>
    </li>';
			}
		}
	}
	$content .= '</ul>';
//меняет '-' на ' '
	function replaceBash($string) {
		if (isset($string)) {
			return str_replace("-", " ", $string);
		} else {
			echo "false";
		}
	}


