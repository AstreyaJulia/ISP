<?php

$title = "Ежедневник";
$content = "";

$content .= '<div id="calendar" style="max-width: 700px;"></div>

    <!-- Модальное окно -->

    <div class="modal" data-modal="editEvent">
        <!--   Svg иконка для закрытия окна  -->
        <svg class="modal__cross js-modal-close" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M23.954 21.03l-9.184-9.095 9.092-9.174-2.832-2.807-9.09 9.179-9.176-9.088-2.81 2.81 9.186 9.105-9.095 9.184 2.81 2.81 9.112-9.192 9.18 9.1z"/></svg>
        <div class="">
          <div class="">
                <h5 class="">
                    Добавление события в календарь
                </h5>
              </div>
              <div class="">
                <form action="/" method="POST" name="editEvent">
                    <input class="" type="text" name="last-id" value="" autocomplete="off">
                    <input class="" type="text" name="title" title="Введите заготовок" maxlength="40" placeholder="Введите заготовок" value="" autocomplete="off">
                    <div class="">
                        Начало дата
                        <input class="" type="date" name="start-date" title="Дата начала события" value="" autocomplete="off">
                        время
                        <input class="" type="time" name="start-time" title="Время начала события" value="" autocomplete="off">
                    </div>
                    <div class="">
                        Окончание дата
                            <input class="" type="date" name="end-date" title="Дата окончаня события" value="" autocomplete="off">
                    время
                        <input class="" type="time" name="end-time" title="Время окончаня события" value="" autocomplete="off">
                    </div>
                </div>
                <fieldset class="">
                    <div class="">
                        [[- Если выбран ремя становится ReadOnly ]]
                        <input class="" type="checkbox" name="all-day">
                        <label class="" for="all-day">Целый день</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="private" >
                        <label class="form-check-label col-form-label-sm" for="private">Личное</label>
                    </div>
                </fieldset>
                <div class="">
                    <div class="col-12">
                        <label class="col-form-label col-form-label-sm" for="description">Описание</label>
                        <textarea class="" name="description" title="Описание события" rows="5"></textarea>
                    </div>
                </div>
                <div class="">
                    <div class="col-3 col-form-label">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox"   name="repeated">
                            <label class="form-check-label col-form-label-sm" for="repeated">Повторять</label>
                        </div>
                    </div>
                </div>
                <div class="">
                    <div class="col-sm-5 offset-sm-1">
                        <select class="" id="repeat_period" data-selected="">
                            <option id="repeat_dayly" value="dayly">Каждый день</option>
                            <option id="repeat_weekly" value="weekly">Каждую неделю</option>
                            <option id="repeat_monthly" value="monthly">Каждый месяц</option>
                            <option id="repeat_yearly" value="yearly">Каждый год</option>
                        </select>
                    </div>
                    <label for="repeat_until" class="col-sm-1 col-form-label col-form-label-sm">До</label>
                    <div class="col-sm-5">
                        <input class="" type="date" name="repeat_until" value="">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="js-modal-close">Не сохранять</button>
                    <button type="submit" class="js-modal-save js-modal-close"  id="js-modal-save">Сохранить</button>
                </div>
            </form>
          </div>
        </div>
    </div>


    <!-- Подложка под модальным окном -->
    <div class="overlay js-overlay-modal"></div>';
