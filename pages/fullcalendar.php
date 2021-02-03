<?php
    $title = "Ежедневник";


    $content = '<div id="calendar"></div>

    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
      Launch static backdrop modal
    </button>

    <!-- Modal -->
    <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">
                <div class="form-group">
                    <input class="form-control form-control-sm" type="text" name="title" title="id пользователя" maxlength="40" placeholder="Почему не заполнено???" value="[[+id_user]]">
                </div>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <form method="POST">
                <div class="form-group row">
                    <div class="col-12">
                        <input class="form-control form-control-sm" type="text" name="title" title="Введите заготовок" maxlength="40" placeholder="Введите заготовок" value="[[+title]]">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="start_date" class="col-sm-2 col-form-label col-form-label-sm">Начало</label>
                    <div class="col-sm-5">
                        <input class="form-control form-control-sm" type="date" name="start_date" title="Дата начала события" value="[[+start_date]]">
                    </div>
                    <div class="col-sm-3">
                        <input class="form-control form-control-sm" type="time" name="start_time" title="Время начала события" value="[[+start_time]]">
                    </div>
                </div>
                <div class="form-group row">
                    <label for="end_date" class="col-sm-2 col-form-label col-form-label-sm">Окончание</label>
                    <div class="col-sm-5">
                        <input class="form-control form-control-sm" type="date" name="end_date" title="Дата окончаня события" value="[[+end_date]]">
                    </div>
                    <div class="col-sm-3">
                        <input class="form-control form-control-sm" type="time" name="end_time" title="Время окончаня события" value="[[+end_time]]">
                    </div>
                </div>
                <fieldset class="form-group checkbox-group">
                    <div class="form-check form-check-inline">
                        [[- Если выбран ремя становится ReadOnly ]]
                        <input class="form-check-input" type="checkbox" name="allday">
                        <label class="form-check-label col-form-label-sm" for="allday">Целый день</label>
                    </div>
                    <div class="form-check form-check-inline">
                        <input class="form-check-input" type="checkbox" name="private" >
                        <label class="form-check-label col-form-label-sm" for="private">Личное</label>
                    </div>
                </fieldset>
                <div class="form-group row">
                    <div class="col-12">
                        <label class="col-form-label col-form-label-sm" for="description">Описание</label>
                        <textarea class="form-control form-control-sm" name="description" title="Описание события" rows="5">[[+description]]</textarea>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-3 col-form-label">
                        <div class="form-check form-check-inline">
                            <input class="form-check-input" type="checkbox"   name="repeated">
                            <label class="form-check-label col-form-label-sm" for="repeated">Повторять</label>
                        </div>
                    </div>
                </div>
                <div class="form-group row">
                    <div class="col-sm-5 offset-sm-1">
                        <select class="form-control form-control-sm" id="repeat_period" data-selected="repeat_[[+repeat_freq]]">
                            <option id="repeat_dayly" value="dayly">Каждый день</option>
                            <option id="repeat_weekly" value="weekly">Каждую неделю</option>
                            <option id="repeat_monthly" value="monthly">Каждый месяц</option>
                            <option id="repeat_yearly" value="yearly">Каждый год</option>
                        </select>
                    </div>
                    <label for="repeat_until" class="col-sm-1 col-form-label col-form-label-sm">До</label>
                    <div class="col-sm-5">
                        <input class="form-control form-control-sm" type="date" name="repeat_until" value="[[+repeat_until]]">
                    </div>
                </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Не сохранять</button>
            <button type="button" class="btn btn-primary">Сохранить</button>
          </div>
        </div>
      </div>
    </div>
';
