/** ГЛОБАЛЬНЫЕ ФУНКЦИИ */

const toastContainer = document.querySelector('.toasts-container');

/**
 * Сформировать массив из значений чекбоксов в группе
 * @param allInputs - группа элементов
 * @param mode - режим: "selected" - выбранные, "all" - все
 * @returns {*[]} - массив из value чекбоксов
 */
function selectedCheckboxes(allInputs, mode) {
  switch (mode) {
    case "selected":
      return Array.from(allInputs).filter(input => input.checked).map(c => c.value.toLowerCase());
    case "all":
      return Array.from(allInputs).filter(input => input.checked).map(c => c.value.toLowerCase());
  }
}

/**
 * Добавить всплывашку в разметку, скрыть показанные всплывашки, показать всплывашку
 * @param toast - HTML-разметка всплывашки для вставки в контейнер, если в разметке уже есть, то пустое
 * @param container - контейнер для всплывашек
 * @param toastClass - класс всплывашки, по которому ее будем выводить, в кавычках и с точкой
 * @param toastParams - параметры для всплывашки
 */
function showBsToast(toast, container, toastClass, toastParams) {
  /** Удаляем скрытые всплывашки */
  const hiddenToasts = container.querySelectorAll('.hide');
  if (hiddenToasts) {
    hiddenToasts.forEach((hiddenToast) => {
      container.removeChild(hiddenToast);
    });
  }
  container.insertAdjacentHTML('beforeend', toast);
  const toastElList = [].slice.call(document.querySelectorAll('.toast' + toastClass));
  toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, toastParams).show()
  });
}

/**
 * Всплывашки
 */
class Toast {
  /**
   * @param header - текст заголовка всплывашки
   * @param text - текст
   * @param time - время в виде строки
   * @param type - тип: toast - обычные, errorToast - ошибки, не закрываются автоматически, miniToast - мини, цветные, без заголовка
   * @param color - цвет
   */
  constructor(header, text, time, type, color) {
    this.header = header;
    this.text = text;
    this.time = time;
    this.color = color;
    this.toastParam = {autohide: true};
    switch (type) {
      case "toast":
        this.class = "toast-info"
        this.toastElement = '<div class="toast ' + this.class + ' fade" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><i class="mdi mdi-message-alert-outline"></i><strong class="me-auto">' + this.header + '</strong><small class="text-muted">' + this.time + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button></div><div class="toast-body">' + this.text + '</div></div>';
        break;
      case "errorToast":
        this.class = "toast-error"
        this.toastElement = '<div class="toast ' + this.class + ' fade" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><i class="mdi mdi-alert text-danger"></i><strong class="me-auto text-danger">' + this.header + '</strong><small class="text-muted">' + this.time + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button></div><div class="toast-body">' + this.text + '</div></div>';
        this.toastParam = {autohide: false};
        break;
      case "miniToast":
        this.class = "toast-info"
        this.toastElement = '<div class="toast ' + this.class + ' align-items-center bg-' + this.color + '-lighter" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">' + this.text + '</div><button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button></div></div>';
        break;
    }
  }

  /**
   * Показывает всплывашки
   */
  show() {
    showBsToast(this.toastElement, toastContainer, "." + this.class, this.toastParam)
  }
}

/**
 * Получение Cookie
 * @param name
 * @returns {string|null}
 */
function getCookie(name) {
  const nameEQ = name + "=";
  const ca = document.cookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) === ' ') c = c.substring(1, c.length);
    if (c.indexOf(nameEQ) === 0) return c.substring(nameEQ.length, c.length);
  }
  return null;
}

/**
 * ID пользователя
 * @type {string|null}
 */
const cookieID = getCookie('aut[id]');


/**
 * Ajax. Передача GET и POST запросов
 * @param method - POST или GET
 * @param url - адрес
 * @param parameters - параметры get запроса или отсылаемое тело POST
 * @param datatype
 * @param callback - в какую функцию передать результат
 */
// FIXME переделать на fetch
const ajax_send = (method, url, parameters, datatype, callback) => {
  let xhr = new XMLHttpRequest();

  switch (method) {
    case "GET":
      let queryString;
      if (parameters !== null) {
        if (typeof parameters === 'object' &&
          !Array.isArray(parameters)) {
          queryString = Object.keys(parameters).map(key => key + '=' + parameters[key]).join('&');
        } else {
          queryString = parameters;
        }
      } else {
        queryString = null;
      }
      xhr.open(method, url + "?" + queryString, true);
      xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
      xhr.send(null);
      break;

    case "POST":
      xhr.open(method, url, true);
      xhr.setRequestHeader('Accept', 'application/json, text/plain, */*');
      xhr.send(parameters);
      break;
  }

  xhr.onreadystatechange = () => {
    if (xhr.readyState !== 4) {
      return;
    }

    let header = '';

    if (xhr.status === 200) {
      let result;

      if (method === "GET") {
        if (datatype === "json") {
          result = typeof xhr.response !== "string"
            ? JSON.stringify(xhr.response)
            : xhr.response;
          try {
            JSON.parse(xhr.response);
            result = JSON.parse(xhr.response);
            callback(result);
          } catch (e) {
            new Toast("Ошибка", xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'), "errorToast", "").show();
          }
        } else if (datatype === "text") {
          callback(xhr.responseText);
        }
      }
      if (method === "POST") {
        if (!xhr.response) {
          callback('null');
        } else {
          new Toast("Ошибка", xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'), "errorToast", "").show();
        }
      }

    } else if (xhr.status === 0) {
      header = "Не подключено. Проверьте сеть";
      new Toast(header, xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'), "errorToast", "").show();
    } else if (xhr.status === 404) {
      header = "404. Not Found. Запрашиваемая страница не найдена ";
      new Toast(header, xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'), "errorToast", "").show();
    } else if (xhr.status === 500) {
      header = "Внутренняя ошибка сервера [500]";
      new Toast(header, xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'), "errorToast", "").show();
    }
  }

}

export {selectedCheckboxes, getCookie, cookieID, ajax_send, Toast, showBsToast, toastContainer}
