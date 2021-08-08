<?php

$title = "Календарь";
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
                <div class="filter-group calendar-private-filter">
                      <p class="group-title">События:</p>
            <div class="form-check">
              <input class="form-check-input input-filter bg-primary" type="checkbox" id="Private" name="Private">
              <label class="form-check-label" for="Private">Только мои</label>
            </div>

          </div>

          <div class="filter-group calendar-events-filter">
            <p class="group-title">Календарь:</p>
            <div class="form-check">
              <input class="form-check-input input-filter bg-dark select-all" type="checkbox" id="select-all"
                     name="select-all">
              <label class="form-check-label" for="select-all">Все</label>
            </div>
            <div class="form-check">
              <input class="form-check-input input-filter bg-primary" type="checkbox" id="Primary" name="Primary">
              <label class="form-check-label" for="Primary">События</label>
            </div>
            <div class="form-check">
              <input class="form-check-input input-filter bg-danger" type="checkbox" id="Danger" name="Danger">
              <label class="form-check-label" for="Danger">Праздники</label>
            </div>
            <div class="form-check">
              <input class="form-check-input input-filter bg-warning" type="checkbox" id="Warning" name="Warning">
              <label class="form-check-label" for="Warning">Важно</label>
            </div>
            <div class="form-check">
              <input class="form-check-input input-filter bg-success" type="checkbox" id="Success" name="Success">
              <label class="form-check-label" for="Success">Личное</label>
            </div>
            <div class="form-check">
              <input class="form-check-input input-filter bg-info" type="checkbox" id="Info" name="Info">
              <label class="form-check-label" for="Info">Разное</label>
            </div>
            <button type="button" class="btn btn-primary ms-auto me-3" data-bs-toggle="modal" data-bs-target="#addEventsModal"
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
                            <div class="event-title">
                              <input id="title" type="text" placeholder="Введите название" class="form-control"
                                     name="task" required>
                            </div>
                          </div>
                          <div class="form-group">
                                                                                  <div class="form-check form-switch">
                              <input type="checkbox" class="form-check-input private-switch" id="customSwitch4">
                              <label class="form-check-label" for="customSwitch4">Вижу только я (приватное событие)</label>
                            </div>
</div>
                          <div class="form-group">
                          <label for="select-label" class="">Категория события:</label>
                          <div class="cat-select position-relative ">
                                                                                <select class="select2 select-label form-control w-100" id="select-label" name="select-label">
                              <option data-label="primary" value="Primary" selected>События
                              </option>
                              <option data-label="danger" value="Danger">Праздники</option>
                              <option data-label="warning" value="Warning">Важно</option>
                              <option data-label="success" value="Success">Личное</option>
                              <option data-label="info" value="Info">Разное</option>
                            </select>

</div>

</div>
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="form-group start-date ">
                              <label for="start-date" class="">От:</label>
                              <div>
                                <input id="start-date" placeholder="Дата начала" class="form-control flatpickr-input position-relative"
                                       type="text" required>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="form-group end-date ">
                              <label for="end-date" class="">До:</label>
                              <div>
                                <input id="end-date" placeholder="Дата окончания" type="text"
                                       class="form-control flatpickr-input position-relative" required>
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
                            <label for="event-url" class="form-label">URL (откроется в новом окне при нажатии на событие)</label>
                            <input type="url" class="form-control" id="event-url" placeholder="">
                          </div>
                          <div class="col-md-12">
                            <label for="start-date" class="">Описание события:</label>
                            <div class="event-description">
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
    <div class="calendar-module card">
      <div class="card-body">
        <div id="calendar" class="calendar"></div>
      </div>
    </div>

   ';
