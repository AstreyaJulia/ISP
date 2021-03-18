<?php
	$content = "<form action=\"\" method=\"post\">
			<div class=\"form-group\">
				<label for=\"name_href\" class=\"col control-label\">Наименование ссылки</label>
				<div class=\"col\">
					<input type=\"text\" value=\"$row->name_href\" class=\"form-control\" placeholder=\"Наименование ссылки\" name=\"name_href\" autocomplete=\"off\" />
				</div>
			</div>
			<div class=\"form-group\">
				<label for=\"id_group\" class=\"col control-label\">Категория</label>";
	$content .= "<div><select class=\"form-control\" name=\"id_group\">
					<option value=\"$row->id_group\">{$group[$row->id_group-1]['name_href']}</option>";
				foreach ($group as $group_key => $group_value) {
				//выводим все группы
					if (!empty($group_value) and $group_value["id"] !== $group[$row->id_group-1]["id"]){
					$content .= "<option value=\"{$group_value['id']}\">{$group_value['name_href']}</option>";
					}
				}
	$content .= "</select></div></div>
			<div class=\"form-group\">
				<label for=\"menuindex\" class=\"col control-label\">Положение в меню</label>
				<div class=\"col\">
					<input type=\"text\" value=\"$row->menuindex\" class=\"form-control\" placeholder=\"Положение в меню\" name=\"menuindex\" autocomplete=\"off\" />
				</div>
			</div>
			<div class=\"form-group\">
				<label for=\"href\" class=\"col control-label\">Ссылка</label>
				<div class=\"col\">
					<input type=\"text\" value=\"$row->href\" class=\"form-control\" placeholder=\"Ссылка\" name=\"href\" autocomplete=\"off\" />
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