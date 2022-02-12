import {showToast} from "../globalfunc"

// Tasks list
// Tasks задачи. Контейнер
const todowrapper = document.querySelector('.todo-wrapper');

// Поля: id, title, duedate (дата),
const tasksHandler = () => {
  // Заголовок задачи
  let taskTitle;
  // Кнопка Добавить задачу
  const addTaskBtn = document.querySelector('.add-task');

  // Модал
  const newTaskModal = document.getElementById('new-task-modal');
  // Форма в модале
  const newTaskForm = document.getElementById('task-form');
  // Заголовок модала статус задачи
  const modalTitle = document.querySelector('.task-title-status');
  // Заголовок модала Добавить
  const addmodalTitle = document.querySelector('.add-task-title');
  // Заголовок модала Редактировать
  const editmodalTitle = document.querySelector('.edit-task-title');
  // Кнопка закрыть на модале
  const span = document.querySelector('.btn-close');

  // Кнопка Добавить на модале
  const addBtn = document.querySelector('.add-task-btn');
  // Кнопка Сохранить на модале
  const updateTodoItem = document.querySelector('.edit-task');
  // Кнопка Удалить на модале
  const updateBtns = document.querySelector('.btn-delete-task');
  // Кнопка Отмена на модале
  const cancelBtn = document.querySelector('.btn-dismiss');

  // Сайдбар с фильтрами и метками
  const sidebarLeft = document.querySelector('.sidebar-left');
  // Меню сайдбара
  const sidebarMenuList = document.querySelector('.sidebar-menu-list');
  // Меню фильтров в сайдбаре
  const listItemFilter = document.querySelector('.list-group-filters');
  // Меню меток в сайдбаре
  const listItemLabel = document.querySelector('.list-group-labels');

  // Поле поиска по задачам
  const todoFilter = document.getElementById('todo-search');
  // Надпись Ничего не найдено в поиске
  const noResults = document.querySelector('.no-results');

  // Сортировка А - Я
  const sortAsc = document.querySelector('.sort-asc');
  // Сортировка Я - А
  const sortDesc = document.querySelector('.sort-desc');

  // Список задач
  const todoTaskList = document.querySelector('.todo-task-list');
  // Обертка списка задач
  const todoTaskListWrapper = document.querySelector('.todo-task-list-wrapper');

  // Поля модала
  // Поле ввода срока исполнения
  const flatPickr = document.querySelector('.due-date');
  // Описание события
  const taskDesc = document.getElementById('ask-description');
  // Метки
  const taskTag = document.getElementById('cat-select');
  // Переключатель Вижу только я (приватное событие)
  const privateSwitch = document.querySelector(".private-switch");
  const checkboxId = 100;

  //Массив задач. Заменить на обращение к базе
  let tasksList = [
    {
      id: 1,
      title: 'Задача',
      created: "2021-08-13 09:00:00",
      deadline: "2021-08-31 09:00:00",
      tag: 'primary',
      user_id: '1',
      completed: 'false',
      deleted: 'false',
      description: 'описание'
    },
    {
      id: 2,
      title: 'Задача 2',
      created: "2021-08-12 09:00:00",
      deadline: "2021-08-18 09:00:00",
      tag: 'danger',
      user_id: '1',
      completed: 'true',
      deleted: 'true',
      description: ''
    },
    {
      id: 3,
      title: 'Задача с большим описанием, которое надо обрезать в ращметке, чтобы не разывало контейнер',
      created: "2021-08-12 09:00:00",
      deadline: "2021-08-10 09:00:00",
      tag: 'warning',
      user_id: '1',
      completed: 'false',
      deleted: 'false',
      description: ''
    },
    {
      id: 4,
      title: 'Просто задача без названия',
      created: "2021-08-14 09:00:00",
      deadline: "2021-08-23 09:00:00",
      tag: 'success',
      user_id: '1',
      completed: 'false',
      deleted: 'false',
      description: ''
    },
    {
      id: 5,
      title: 'Задача с "кавычками"',
      created: "2021-08-01 09:00:00",
      deadline: "2021-09-18 09:00:00",
      tag: 'info',
      user_id: '1',
      completed: 'true',
      deleted: 'true',
      description: ''
    },
    {
      id: 6,
      title: 'Задача 2',
      created: "2021-08-12 09:00:00",
      deadline: "2021-08-18 09:00:00",
      tag: 'primary',
      user_id: '1',
      completed: 'true',
      deleted: 'true',
      description: ''
    }
  ];


  // Функции

  const createTaskItemString = ({id, deadline, tag, title}) =>
    `<li class="todo-item">
              <div class="todo-title-wrapper">
                <div class="todo-title-area">
                  <div class="title-wrapper">
                    <div class="custom-control custom-checkbox">
                      <input type="checkbox" class="form-check-input" id="task-${id}">
                      <label class="custom-control-label" for="task-${id}"></label>
                    </div>
                    <span class="todo-title">${title}</span>
                  </div>
                </div>
                <div class="todo-item-action">
                <div class="tag-container">
                <span class="bullet bullet-sm bullet-${tag} me-2" id="tag-${id}"></span>
</div>
                  <small class="text-nowrap text-muted me-1">${moment(deadline).tz('Europe/Moscow').format('LLL')}</small>
                </div>
              </div>
            </li>`;


  // Рендеринг задач
  const tasksRender = () => {
    todoTaskList.innerHTML = '';
    const taskElementsString = tasksList.map((title) => createTaskItemString(title)).join('');
    todoTaskList.insertAdjacentHTML('beforeend', taskElementsString);

    /*
    // Множественный массив
    контейнер тегов
    const tagscontainers = todoTaskList.querySelectorAll('.tag-container');
    tagscontainers.forEach((tagscontainer) => {
      tagscontainer.innerHTML = '';
      for (let key in tasksList) {
        // если products[key]['category'] не равно 'vegetable', то тогда переходим к следующей итерации
        if (tasksList[key]['tags']) {
          console.log(tasksList[key]['tags']);
        }
        continue;
      }
      // тут нужен сброщик тегов
    });*/
  }

  // Скрыть модал
  function hideModal() {
    newTaskModal.style.display = "none";
    newTaskModal.classList.remove('show');
    const btn = document.querySelector('.modal-backdrop');
    if (btn) {
      document.body.removeChild(btn);
    }
  }

  // Показать модал
  function showModal() {
    newTaskModal.classList.add('show');
    newTaskModal.style.display = "block";
    const btn = document.createElement("div");
    btn.setAttribute('class', 'modal-backdrop fade show')
    document.body.appendChild(btn);
  }

  // Кнопка закрыть
  $(span).on('click', function () {
    hideModal();
    // сбросить модал
    resetValues()
  });

  // Кнопка отмены
  $(cancelBtn).on('click', function () {
    hideModal();
    // сбросить модал
    resetValues()
  });

  // Добавляет класс active при клике на список фильтров сайдбара
  if (listItemFilter) {
    $(listItemFilter).find('a').on('click', function () {
      if ($(listItemFilter).find('a').hasClass('active')) {
        $(listItemFilter).find('a').removeClass('active');
      }
      $(this).addClass('active');
    });
  }

  // Добавляет класс active при клике на список меток сайдбара
  if (listItemLabel) {
    $(listItemLabel).find('a').on('click', function () {
      if ($(listItemLabel).find('a').hasClass('active')) {
        $(listItemLabel).find('a').removeClass('active');
      }
      $(this).addClass('active');
    });
  }

  // Метки задач
  if (taskTag) {
    $(taskTag).wrap('<div class="position-relative"></div>');
    $(taskTag).select2({
      placeholder: 'Выберите метку'
    });
  }

  // Датапикер даты исполнения
  if (flatPickr) {
    $(flatPickr).flatpickr({
      locale: "ru",
      enableTime: true,
      dateFormat: 'Y-m-d H:i',
      defaultDate: 'today'
    });
  }

  // Добавление новой задачи в список

  // To add new task form
  if (newTaskForm) {
    $(newTaskForm).validate({
      rules: {
        todoTitleAdd: {
          required: true
        },
        'task-due-date': {
          required: true
        }
      }
    });

    $(newTaskForm).on('submit', function (e) {
      e.preventDefault();
      const isValid = $(newTaskForm).valid();
      if (isValid) {
        //let checkboxId++;
        const todoTitle = $('.sidebar-todo-modal .new-todo-item-title').val();
        const date = $('.sidebar-todo-modal .task-due-date').val(),
          selectedDate = new Date(date),
          month = new Intl.DateTimeFormat('en', {month: 'short'}).format(selectedDate),
          day = new Intl.DateTimeFormat('en', {day: '2-digit'}).format(selectedDate),
          todoDate = month + ' ' + day;

        // Badge calculation loop
        const selected = $('.task-tag').val();
        const badgeColor = {
          Team: 'primary',
          Low: 'success',
          Medium: 'warning',
          High: 'danger',
          Update: 'info'
        };
        $.each(selected, function (index, value) {
          let todoBadge = '<div class="badge badge-pill badge-light-' + badgeColor[value] + ' mr-50">' + value + '</div>';
        });

        // HTML Вывод
        if (todoTitle !== '') {
          $(todoTaskList).prepend(
            '<li class="todo-item">' +
            '<div class="todo-title-wrapper">' +
            '<div class="todo-title-area">' +
            '<i class="mdi mdi-dots-vertical"></i>' +
            '<div class="title-wrapper">' +
            '<div class="custom-control custom-checkbox">' +
            '<input type="checkbox" class="custom-control-input" id="customCheck' +
            checkboxId +
            '" />' +
            '<label class="custom-control-label" for="customCheck' +
            checkboxId +
            '"></label>' +
            '</div>' +
            '<span class="todo-title">' +
            todoTitle +
            '</span>' +
            '</div>' +
            '</div>' +
            '<div class="todo-item-action">' +
            '<div class="badge-wrapper mr-1">' +
            todoBadge +
            '</div>' +
            '<small class="text-nowrap text-muted mr-1">' +
            todoDate +
            '</small>' +
            '</div>' +
            '</div>' +
            '</li>'
          );
        }
        showToast('Задача сохранена', 'Сохранено 💾', "Сейчас");
        hideModal();
      }
    });
  }

  // Чекбокс завершения задачи
  $(todoTaskListWrapper).on('change', '.custom-checkbox', function () {
    const $this = $(this).find('input');
    if ($this.prop('checked')) {
      $this.closest('.todo-item').addClass('completed');
      showToast('Задача завершена', 'Поздравляем 🎉', "Сейчас");
    } else {
      $this.closest('.todo-item').removeClass('completed');
    }
  });
  $(todoTaskListWrapper).on('click', '.custom-checkbox', function (event) {
    event.stopPropagation();
  });

  // To open todo list item modal on click of item
  $(document).on('click', '.todo-task-list-wrapper .todo-item', function () {
    showModal();
    addBtn.style.display = "none";
    cancelBtn.style.display = "none";
    updateTodoItem.style.display = "block";
    updateBtns.style.display = "block";
    addmodalTitle.style.display = "none";
    editmodalTitle.style.display = "block";
    if ($(this).hasClass('completed')) {
      $(modalTitle).html(
        '<button type="button" class="btn btn-sm btn-outline-success complete-todo-item waves-effect waves-float waves-light" data-dismiss="modal">Завершена</button>'
      );
    } else {
      $(modalTitle).html(
        '<button type="button" class="btn btn-sm btn-outline-secondary complete-todo-item waves-effect waves-float waves-light" data-dismiss="modal">Не завершена</button>'
      );
    }
    $(taskTag).val('').trigger('change');
    taskTitle = $(this).find('.todo-title');
    const title = $(this).find('.todo-title').html();

    // apply all variable values to fields
    $(newTaskForm).find('.new-todo-item-title').val(title);
  });

  // Updating Data Values to Fields
  if (updateTodoItem) {
    $(updateTodoItem).on('click', function (e) {
      const isValid = $(newTaskForm).valid();
      e.preventDefault();
      if (isValid) {
        const $edit_title = newTaskForm.find('.new-todo-item-title').val();
        $(taskTitle).text($edit_title);
        showToast('Задача сохранена', 'Сохранено 💾', "Сейчас");
        hideModal();
      }
    });
  }

  // Сортировка по возрастанию А-Я. Работает
  if (sortAsc) {
    $(sortAsc).on('click', function () {
      $(todoTaskListWrapper)
        .find('li')
        .sort(function (a, b) {
          return $(b).find('.todo-title').text().toUpperCase() < $(a).find('.todo-title').text().toUpperCase() ? 1 : -1;
        })
        .appendTo(todoTaskList);
    });
  }
  // Сортировка по убыванию Я-А. Работает
  if (sortDesc) {
    $(sortDesc).on('click', function () {
      $(todoTaskListWrapper)
        .find('li')
        .sort(function (a, b) {
          return $(b).find('.todo-title').text().toUpperCase() > $(a).find('.todo-title').text().toUpperCase() ? 1 : -1;
        })
        .appendTo(todoTaskList);
    });
  }

  // Фильтр задач. Поиск. Работает
  if (todoFilter) {
    $(todoFilter).on('keyup', function () {
      const value = $(this).val().toLowerCase();
      if (value !== '') {
        $('.todo-item').filter(function () {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1);
        });
        const tbl_row = $('.todo-item:visible').length; // тут tbl_test название таблицы

        //Проверка имеет ли таблица строку или нет
        if (tbl_row === 0) {
          if (!$(noResults).hasClass('show')) {
            $(noResults).addClass('show');
          }
        } else {
          $(noResults).removeClass('show');
        }
      } else {
        // Если поле поиска пустое
        $('.todo-item').show();
        if ($(noResults).hasClass('show')) {
          $(noResults).removeClass('show');
        }
      }
    });
  }

  $(addTaskBtn).on('click', function () {
    showModal(newTaskModal);
    $(addBtn).style.display = "block";
    $(cancelBtn).style.display = "none";
    $(updateTodoItem).style.display = "block";
    $(updateBtns).style.display = "none";
    $(addmodalTitle).style.display = "block";
    $(editmodalTitle).style.display = "none";

  });

  // Сброс значений модала
  function resetValues() {
    $(flatPickr).val('');
    $(taskDesc).val('');
    $(taskTag).val('');
    $(privateSwitch).prop('checked', false);
  }

  tasksRender();
}

// Ждем полной загрузки дерева
document.addEventListener("DOMContentLoaded", () => {
  // Задачи
  if (todowrapper) {
    tasksHandler()
  }

});
