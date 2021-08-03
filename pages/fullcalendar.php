<?php

$title = "Ежедневник";
$content = "";

$content .= '
  <header class="main-content-header">
    <div class="header-left">
      <p class="h5 main-content-title">Календарь</p>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                                         title="Главная страница"><i class="mdi mdi-home-outline"></i></a></li>
        </ol>
      </nav>
    </div>
    <div class="header-right">
      <button class="btn btn-primary" type="button" id="contentmenu" data-bs-toggle="dropdown" data-bs-placement="top"
              title="Меню">
        <i class="mdi mdi-cog-outline"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
      <a href="#" class="dropdown-item btn-print">Печать</a>
      </ul>
    </div>
  </header>
    <div class="card mb-3">
    <div class="card-body">
      <div class="row">
        <div class="col">
          <div class="form-group p-0 m-0">
            <form class="form-row">
              <input id="eventssearsh" class="form-control m-0" type="search" placeholder="Поиск событий">
              <button type="submit" class="btn btn-primary">
                <i class="mdi mdi-calendar-search"></i>
              </button>
            </form>
          </div>
        </div>
        <div class="col d-flex justify-content-end">
          <button type="button" class="btn btn-primary me-3">
            <i class="mdi mdi-filter"></i>
          </button>
          <button type="button" class="btn btn-primary" id="myBtn">Добавить
            событие
          </button>

          <!-- Модал добавления/редактирования события -->
          <div id="addEventsModal" class="modal animated fadeIn" style="display: none;">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content">
                <div class="modal-body">
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
                  <div class="add-edit-event-box">
                    <div class="add-edit-event-content">
                      <h5 class="add-event-title modal-title" style="display: block;">Добавить событие</h5>
                      <h5 class="edit-event-title modal-title" style="/* display: none; */">Редактировать событие</h5>
                      <form class="">
                        <div class="row">
                          <div class="col-md-12">
                            <label for="start-date" class="">Название события:</label>
                            <div class="d-flex event-title">
                              <input id="write-e" type="text" placeholder="Введите название" class="form-control" name="task">
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="form-group start-date">
                              <label for="start-date" class="">От:</label>
                              <div class="d-flex">
                                <input id="start-date" placeholder="Дата начала" class="form-control flatpickr-input" type="text" readonly="readonly">
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="form-group end-date">
                              <label for="end-date" class="">До:</label>
                              <div class="d-flex">
                                <input id="end-date" placeholder="Дата окончания" type="text" class="form-control flatpickr-input" readonly="readonly">
                              </div>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <label for="start-date" class="">Описание события:</label>
                            <div class="d-flex event-description">
                              <textarea id="taskdescription" placeholder="Введите описание" rows="3" class="form-control" name="taskdescription"></textarea>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="col-md-12">
                            <div class="event-badge">
                              <p class="">Категория:</p>

                              <div class="d-sm-flex d-block">
                                <div class="n-chk">
                                  <label class="new-control new-radio radio-primary">
                                    <input type="radio" class="new-control-input" name="marker" value="bg-primary">
                                    <span class="new-control-indicator"></span>1
                                  </label>
                                </div>

                                <div class="n-chk">
                                  <label class="new-control new-radio radio-warning">
                                    <input type="radio" class="new-control-input" name="marker" value="bg-warning">
                                    <span class="new-control-indicator"></span>2
                                  </label>
                                </div>

                                <div class="n-chk">
                                  <label class="new-control new-radio radio-success">
                                    <input type="radio" class="new-control-input" name="marker" value="bg-success">
                                    <span class="new-control-indicator"></span>3
                                  </label>
                                </div>

                                <div class="n-chk">
                                  <label class="new-control new-radio radio-danger">
                                    <input type="radio" class="new-control-input" name="marker" value="bg-danger">
                                    <span class="new-control-indicator"></span>4
                                  </label>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button id="discard" class="btn btn-danger" data-dismiss="modal">Отмена</button>
                  <button id="add-e" class="btn btn-primary" style="display: block;">Добавить событие</button>
                  <button id="edit-event" class="btn btn-primary" style="display: none;">Сохранить</button>
                </div>

              </div>

            </div>

          </div>

        </div>
      </div>
    </div>
  </div>


  <div class="calendar-module card">
    <div class="card-body">
      <div id="calendar" class="calendar"></div>
    </div>
  </div>

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
