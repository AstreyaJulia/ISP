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
<div class="col d-flex justify-content-end">
          <button type="button" class="btn btn-primary" id="myBtn">Добавить
            событие
          </button>

          <!-- Модал добавления/редактирования события -->
          <div id="addEventsModal" class="modal animated fadeIn" style="display: none;">
            <div class="modal-dialog modal-dialog-centered">
              <div class="modal-content add-edit-event-content">
                      <div class="modal-header">
                      <h5 class="add-event-title modal-title" style="display: block;">Добавить событие</h5>
                      <h5 class="edit-event-title modal-title" style="display: none;">Редактировать событие</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
        </div>
                <div class="modal-body">
                  <div class="add-edit-event-box">
                    <div class="add-edit-event-content">
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

   ';
