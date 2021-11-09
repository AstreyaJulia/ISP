<main class="main-content scroll-y">
  <div class="ps-3 pe-3">
    <header class="main-content-header d-flex align-items-center justify-content-between flex-wrap">
      <div class="header-left d-flex align-items-center justify-content-between p-2">
        <a class="btn-back me-3" role="button" data-bs-toggle="tooltip" data-bs-placement="top" title="Назад"><i
            class="mdi mdi-24px mdi-arrow-left"></i></a>
        <p class="h5 main-content-title mb-0">Календарь</p>
      </div>
      <div class="header-right d-flex align-items-center justify-content-between p-2">
        <nav aria-label="breadcrumb" class="align-items-center d-xxl-flex d-xl-flex d-md-flex d-sm-none d-none">
          <ol class="breadcrumb d-flex align-items-center mb-0">
            <li class="breadcrumb-item p-2">
              <a class="p-2 me-2" href="/" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="Главная страница">
                <i class="mdi mdi-home-outline"></i>
              </a>
            </li>
            <li class="breadcrumb-item p-2">
              <a class="p-2" data-bs-toggle="tooltip" data-bs-placement="top"
                 title="Календарь">Календарь
              </a>
            </li>
          </ol>
        </nav>
      </div>
    </header>
    <div class="boxed-content container align-items-center justify-content-end d-flex mb-3">
      <button class="btn btn-primary" type="button" id="contentmenu" data-bs-toggle="dropdown" data-bs-placement="top"
              title="Меню">
        <i class="mdi mdi-cog-outline"></i>
      </button>
      <ul class="dropdown-menu dropdown-menu-lg-end" aria-labelledby="contentmenu">
        <li><a href="#" class="dropdown-item btn-print">Печать</a></li>
      </ul>
    </div>
    <div class="calendar-wrapper boxed-content">
      <!-- Модал добавления/редактирования события -->
      <div id="addEventsModal" class="modal" aria-labelledby="addEventsModal" style="display: none;">
        <div class="modal-dialog modal-dialog-centered">
          <div class="modal-content add-edit-event-content">
            <div class="modal-header">
              <h5 class="add-event-title modal-title" style="display: none;">Добавить событие</h5>
              <h5 class="edit-event-title modal-title" style="display: none;">Редактировать событие</h5>
              <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Закрыть"></button>
            </div>
            <div class="modal-body">
              <div class="add-edit-event-box">
                <div class="add-edit-event-content">
                  <form class="event-form">

                    <nav>
                      <div class="nav nav-tabs mb-3" id="nav-tab" role="tablist">
                        <button class="nav-link active" id="nav-main-tab" data-bs-toggle="tab" data-bs-target="#nav-main"
                                type="button" role="tab" aria-controls="nav-main" aria-selected="true">Основное
                        </button>
                        <button class="nav-link" id="nav-rep-tab" data-bs-toggle="tab" data-bs-target="#nav-rep"
                                type="button" role="tab" aria-controls="nav-rep" aria-selected="false">Повторение
                        </button>
                      </div>
                    </nav>

                    <div class="tab-content" id="nav-tabContent">
                      <div class="tab-pane fade show active" id="nav-main" role="tabpanel" aria-labelledby="nav-main-tab">
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
                              <input type="checkbox" class="form-check-input private-switch" id="customSwitch1">
                              <label class="form-check-label" for="customSwitch1">Вижу только я (приватное событие)</label>
                            </div>
                          </div>
                          <div class="form-group">
                            <label for="select-label" class="">Категория события:</label>
                            <div class="cat-select position-relative" id="cat-select">
                              <select class="select2 select-label form-control w-100" id="select-label" name="select-label">
                                <option data-label="primary" value="Primary" selected>События
                                </option>
                                <option data-label="danger" value="Danger">Праздники</option>
                                <option data-label="warning" value="Warning">Важно</option>
                                <option data-label="success" value="Success">Отпуск</option>
                                <option data-label="info" value="Info">Дежурство</option>
                              </select>

                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="form-group start-date ">
                              <label for="start-date" class="">Начало события:</label>
                              <div>
                                <input id="start-date" placeholder="Дата начала"
                                       class="form-control flatpickr-input position-relative"
                                       type="text" required>
                              </div>
                            </div>
                          </div>
                          <div class="col-md-6 col-sm-6 col-12">
                            <div class="form-group end-date ">
                              <label for="end-date" class="">Конец события:</label>
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
                          <div class="form-group">
                            <label for="event-url">URL</label>
                            <div class="input-group">
                              <input type="url" class="form-control" id="event-url"
                                     placeholder="Введите ссылку в формате http://google.com">
                              <button type="button" class="btn btn-primary" id="urlopen"><i class="mdi mdi-web"></i>
                              </button>
                            </div>
                          </div>
                          <div class="col-md-12">
                            <label for="start-date" class="">Описание события:</label>
                            <div class="event-description">
                          <textarea id="event-description-editor" placeholder="Введите описание" rows="3"
                                    class="form-control" name="event-description-editor"></textarea>
                            </div>
                          </div>
                          <p class="text-danger mt-3 mb-0 p-0 ms-3 me-3">Внимание. Удаляя повторяющееся событие, вы удаляете
                            ВСЕ повторения.</p>
                        </div>
                      </div>
                      <div class="tab-pane fade" id="nav-rep" role="tabpanel" aria-labelledby="nav-rep-tab">
                        <div class="row mt-3">
                          <div class="form-group">
                            <div class="form-check form-switch">
                              <input type="checkbox" class="form-check-input repeat-switch" id="customSwitch2">
                              <label class="form-check-label" for="customSwitch2">Это событие повторяется</label>
                            </div>
                          </div>
                          <div class="col repeat-col" style="display: none">
                            <p class="mb-1">Шаблон повторения:</p>
                            <div class="daily" style="display: block">
                              <div class="form-group">
                                <select class="form-control" id="dayrepopt">
                                  <option value="none" selected>Выберите</option>
                                  <option value="daily-section">Ежедневно</option>
                                  <option value="weekly-section">Еженедельно</option>
                                  <option value="monthly-section">Ежемесячно</option>
                                  <option value="yearly-section">Ежегодно</option>
                                </select>
                              </div>
                              <div id="interval-section" style="display: none">
                                <div class="form-group d-flex align-items-center position-relative">
                                  <p class="mb-0 me-2" id="intervallabel1">Каждый</p>
                                  <input type="number" id="daynum" class="form-control me-2"
                                         style="width: 75px;" max="365" min="1" value="1">
                                  <label for="daynum" class="form-label mb-0" id="daynum-label">день</label>
                                </div>
                              </div>

                              <div id="weekly-section" style="display: none">

                                <div class="d-week-check d-flex">
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="monday">
                                    <label class="form-check-label" for="monday">Пн</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="tuesday">
                                    <label class="form-check-label" for="tuesday">Вт</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="wednesday">
                                    <label class="form-check-label" for="wednesday">Ср</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="thursday">
                                    <label class="form-check-label" for="thursday">Чт</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="friday">
                                    <label class="form-check-label" for="friday">Пт</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="saturday">
                                    <label class="form-check-label text-danger" for="saturday">Сб</label>
                                  </div>
                                  <div class="mb-3 form-check me-2">
                                    <input type="checkbox" class="form-check-input wdays-check" id="sunday">
                                    <label class="form-check-label text-danger" for="sunday">Вс</label>
                                  </div>

                                </div>

                              </div>

                              <div id="monthly-section" style="display: none">
                                <div class="form-check mb-3">
                                  <div class="form-group d-flex align-items-end position-relative mb-0">
                                    <input type="radio" name="radios" class="form-check-input me-2" id="Radio1">
                                    <label class="form-check-label me-2" for="Radio1">Каждое</label>
                                    <input class="form-control me-2" type="number" max="31" min="1" id="dayofmonth"
                                           style="width: 75px">
                                    <label for="dayofmonth">число месяца</label>
                                  </div>
                                </div>
                                <div class="form-check mb-3">
                                  <input type="radio" name="radios" class="form-check-input me-2" id="month3">
                                  <label class="form-check-label me-2" for="month3">Первый день месяца</label>
                                </div>
                                <div class="form-check mb-3">
                                  <input type="radio" name="radios" class="form-check-input me-2" id="month1">
                                  <label class="form-check-label me-2" for="month1">Последний день месяца</label>
                                </div>
                                <div class="form-check mb-3">
                                  <input type="radio" name="radios" class="form-check-input me-2" id="month4">
                                  <label class="form-check-label me-2" for="month4">Первый рабочий день месяца</label>
                                </div>
                                <div class="form-check mb-3">
                                  <input type="radio" name="radios" class="form-check-input me-2" id="month5">
                                  <label class="form-check-label me-2" for="month5">Последний рабочий день месяца</label>
                                </div>
                              </div>

                              <div id="repdiap">
                                <p>Диапазон повторения:</p>
                                <div class="form-group startrep-date ">
                                  <label for="startrep-date" class="">Начало повторения:</label>
                                  <div>
                                    <input id="startrep-date" placeholder="Дата начала"
                                           class="form-control flatpickr-input position-relative"
                                           type="text">
                                  </div>
                                  <p class="mt-3">Конец повторения (если не выбрано - бесконечно):</p>

                                  <div class="form-check mt-3">
                                    <div class="form-group d-flex align-items-end position-relative">
                                      <input type="checkbox" name="radios" class="form-check-input me-2" id="Radio5">
                                      <label class="form-check-label me-2" for="Radio5">Закончить после</label>
                                      <input id="endrep-date" placeholder="Дата окончания"
                                             class="form-control flatpickr-input position-relative"
                                             type="text" style="width: 200px" disabled>
                                      <label for="endrep-date"></label>
                                    </div>

                                    <div class="form-group d-flex align-items-end position-relative">
                                      <input type="checkbox" name="radios" class="form-check-input me-2" id="Radio6">
                                      <label class="form-check-label me-2" for="Radio6">Закончить после</label>
                                      <input class="form-control me-2" type="number" id="repcount" style="width: 75px"
                                             value="1" disabled>
                                      <label for="repcount">повторений</label>
                                    </div>
                                  </div>
                                </div>
                              </div
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div class="modal-footer mt-3">
              <button id="add-event-btn" class="btn btn-primary add-event-btn" style="display: none;">Добавить
                событие
              </button>
              <button id="edit-event" class="btn btn-primary edit-event" style="display: none;">Сохранить</button>
              <button id="discard" class="btn btn-outline-danger" style="display: none;">Отмена
              </button>
              <button id="delete" class="btn btn-outline-danger btn-delete-event"
                      style="display: none;">Удалить
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="row" style="flex-wrap: nowrap">
        <div class="col-xxl-2 col-xl-2 col-lg-2 col-md-2 col-sm-12 col-12 pe-0">
          <div class="p-3">
            <button type="button" class="btn btn-primary ms-auto mt-1 mb-1 btn-block" id="myBtn"><i class="mdi mdi-plus me-2"></i>Событие
            </button>
          </div>

          <div class="card-body">
            <div class="filter-group calendar-private-filter flex-column align-items-start">
              <p class="group-title mb-2">События:</p>
              <div class="form-check d-flex align-items-center mb-2">
                <input class="form-check-input bg-primary me-2" type="checkbox" id="Private" name="Private">
                <label class="form-check-label" for="Private">Только мои</label>
              </div>

            </div>
            <div class="filter-group calendar-events-filter flex-column align-items-start">
              <p class="group-title mb-2">Календарь:</p>
              <div class="form-check d-flex align-items-center mb-2">
                <input class="form-check-input input-filter bg-dark select-all me-2" type="checkbox" id="select-all"
                       name="select-all" checked>
                <label class="form-check-label" for="select-all">Все</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2">
                <input class="form-check-input input-filter bg-primary me-2" type="checkbox" id="Primary" name="Primary"
                       data-value="Primary" checked>
                <label class="form-check-label" for="Primary">События</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2">
                <input class="form-check-input input-filter bg-danger me-2" type="checkbox" id="Danger" name="Danger"
                       data-value="Danger" checked>
                <label class="form-check-label" for="Danger">Праздники</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2">
                <input class="form-check-input input-filter bg-warning me-2" type="checkbox" id="Warning" name="Warning"
                       data-value="Warning" checked>
                <label class="form-check-label" for="Warning">Важно</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2">
                <input class="form-check-input input-filter bg-success me-2" type="checkbox" id="Success" name="Success"
                       data-value="Success" checked>
                <label class="form-check-label" for="Success">Отпуск</label>
              </div>
              <div class="form-check d-flex align-items-center mb-2">
                <input class="form-check-input input-filter bg-info me-2" type="checkbox" id="Info" name="Info" data-value="Info"
                       checked>
                <label class="form-check-label" for="Info">Дежурство</label>
              </div>
            </div>

          </div>
        </div>
        <div class="col-xxl-10 col-xl-10 col-lg-10 col-md-10 col-sm-12 col-12 ps-0">
          <div class="card-body">
            <div class="calendar-module">
              <div id="calendar" class="calendar""></div>
          </div>
        </div>
      </div>

    </div>


  </div>
</main>
