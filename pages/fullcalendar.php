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
          <div class="filter-group calendar-events-filter">
            <p class="group-title">Фильтр:</p>
            <div class="form-check">
              <input class="form-check-input input-filter bg-dark select-all" type="checkbox" id="select-all"
                     name="select-all">
              <label class="form-check-label" for="select-all">All</label>
            </div>
            <div class="form-check">
              <input class="form-check-input input-filter bg-primary" type="checkbox" id="Business" name="Business">
              <label class="form-check-label" for="Business">Business</label>
            </div>
            <div class="form-check">
              <input class="form-check-input input-filter bg-danger" type="checkbox" id="Personal" name="Personal">
              <label class="form-check-label" for="Personal">Personal</label>
            </div>
            <div class="form-check">
              <input class="form-check-input input-filter bg-warning" type="checkbox" id="Family" name="Family">
              <label class="form-check-label" for="Family">Family</label>
            </div>
            <div class="form-check">
              <input class="form-check-input input-filter bg-success" type="checkbox" id="Holiday" name="Holiday">
              <label class="form-check-label" for="Holiday">Holiday</label>
            </div>
            <div class="form-check">
              <input class="form-check-input input-filter bg-info" type="checkbox" id="ETC" name="ETC">
              <label class="form-check-label" for="ETC">ETC</label>
            </div>
            <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#addEventsModal"
                    id="myBtn">Добавить
              событие
            </button>
          </div>


          <!-- Модал добавления/редактирования события -->
          <div id="addEventsModal" class="modal" aria-labelledby="addEventsModal" style="display: none;">
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
                      <form class="event-form">
                        <div class="row">
                          <div class="form-group">
                            <label for="start-date" class="">Название события:</label>
                            <div class="d-flex event-title">
                              <input id="title" type="text" placeholder="Введите название" class="form-control"
                                     name="task">
                            </div>
                          </div>
                          <div class="form-group">
                          <label for="select-label" class="">Категория события:</label>
                                                      <select class="select2 select-label form-control w-100 select2-hidden-accessible"
                                    id="select-label" name="select-label" data-select2-id="select-label" tabindex="-1"
                                    aria-hidden="true">
                              <option data-label="primary" value="Business" selected="" data-select2-id="2">Business
                              </option>
                              <option data-label="danger" value="Personal" data-select2-id="13">Personal</option>
                              <option data-label="warning" value="Family" data-select2-id="14">Family</option>
                              <option data-label="success" value="Holiday" data-select2-id="15">Holiday</option>
                              <option data-label="info" value="ETC" data-select2-id="16">ETC</option>
                            </select>

</div>
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="form-group start-date position-relative">
                              <label for="start-date" class="">От:</label>
                              <div class="d-flex">
                                <input id="start-date" placeholder="Дата начала" class="form-control flatpickr-input"
                                       type="text">
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="form-group end-date position-relative">
                              <label for="end-date" class="">До:</label>
                              <div class="d-flex">
                                <input id="end-date" placeholder="Дата окончания" type="text"
                                       class="form-control flatpickr-input">
                              </div>
                            </div>
                          </div>
                          <div class="form-group">
                            <div class="form-check form-switch">
                              <input type="checkbox" class="form-check-input allDay-switch" id="customSwitch3">
                              <label class="form-check-label" for="customSwitch3">Весь день</label>
                            </div>
                          </div>
                        </div>

                        <div class="row">
                          <div class="form-group">
                            <label for="event-url" class="form-label">URL (ссылка события)</label>
                            <input type="url" class="form-control" id="event-url" placeholder="">
                          </div>
                          <div class="col-md-12">
                            <label for="start-date" class="">Описание события:</label>
                            <div class="d-flex event-description">
                              <textarea id="event-description-editor" placeholder="Введите описание" rows="3"
                                        class="form-control" name="event-description-editor"></textarea>
                            </div>
                          </div>
                        </div>

                      </form>
                    </div>
                  </div>
                </div>

                <div class="modal-footer">
                  <button id="add-event-btn" class="btn btn-primary add-event-btn" style="display: block;">Добавить
                    событие
                  </button>
                  <button id="edit-event" class="btn btn-primary edit-event" style="display: none;">Сохранить</button>
                  <button id="discard" class="btn btn-danger" data-dismiss="modal" style="display: block;">Отмена
                  </button>
                  <button id="discard" class="btn btn-danger btn-delete-event" data-dismiss="modal"
                          style="display: none;">Удалить
                  </button>

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
