<?php
	$title = "Глвная страница";
	$content = "<div class=\"row\">
					<div class=\"col-12 col-lg-12 notification-dashboard\">
						<div class=\"alert alert-danger alert-dismissible\" role=\"alert\">
							<button type=\"button\" class=\"btn-close\" data-bs-dismiss=\"alert\" aria-label=\"Close\"></button>
							<div class=\"alert-message\">
								<span><strong>Внимание!</strong> Обновление через 1 час!</span>
							</div>
						</div>
					</div>
				</div>
				<div class=\"row\">
					<div class=\"col-lg-6\">
						Первая страница о сайте на собственном движке
					</div>
					<div class=\"col-lg-3\">
						<div class=\"card\">
							<div class=\"card-header\">Погода</div>
							<div class=\"card-body text-center\">
								<a href=\"https://clck.yandex.ru/redir/dtype=stred/pid=7/cid=1228/*https://yandex.ru/pogoda/10794\"
								   target=\"_blank\"><img src=\"https://info.weather.yandex.net/10794/1_white.ru.png?domain=ru\"
														border=\"0\" alt=\"Яндекс.Погода\"/><img width=\"1\" height=\"1\"
																							 src=\"https://clck.yandex.ru/click/dtype=stred/pid=7/cid=1227/*https://img.yandex.ru/i/pix.gif\"
																							 alt=\"\" border=\"0\"/></a>
							</div>
						</div>
					</div>
					<div class=\"col-lg-3\">
						<div class=\"card\">
							<div class=\"card-header\">Быстрое отслеживание</div>
							<div class=\"card-body\">

								<div class=\"input-group mb-3\">
									<input type=\"text\" id=\"track_txt\" class=\"form-control\" placeholder=\"введите номер\">
									<button type=\"button\" class=\"btn btn-primary\" id=\"track_btn\"><i class=\"icon-magnifier\"></i></button>
								</div>
								<small><sup>*</sup> Если поиск не выдает результата, проверьте правильность заполнения номера.</small>
							</div>
						</div>
					</div>
				</div>
			";