<?php
	$content = "<form action=\"\" method=\"post\">
			<div class=\"form-group\">
				<label for=\"name_href\" class=\"col control-label\">Наименование ссылки</label>
				<div class=\"col\">
					<input type=\"text\" value=\"$row->name_href\" class=\"form-control\" placeholder=\"Наименование ссылки\" name=\"name_href\" autocomplete=\"off\" />
				</div>
			</div>";
	$content .= "<div class=\"form-group\">
				<label for=\"menuindex\" class=\"col control-label\">Положение в меню</label>
				<div class=\"col\">
					<input type=\"text\" value=\"$row->menuindex\" class=\"form-control\" placeholder=\"Положение в меню\" name=\"menuindex\" autocomplete=\"off\" />
				</div>
			</div>
			<div class=\"form-group\">
				<label for=\"proxy_href\" class=\"col control-label\">Запись для CCProxy</label>
				<div class=\"col\">
					<textarea class=\"form-control\" placeholder=\"Запись для CCProxy\" name=\"proxy_href\"  rows=\"3\">$row->proxy_href</textarea>
				</div>
			</div>
			<div class=\"modal-footer\">
				<button type=\"button\" class=\"btn btn-primary\" onclick=\"javascript:history.back(); return false;\">Закрыть</button>
				<button type=\"submit\" class=\"btn btn-secondary\">Сохранить изменения</button>
			</div>
		</form>";