// ГЛОБАЛЬНЫЕ ФУНКЦИИ

// Выбранные чекбоксы в группе, возвращает массив
// Принимает группу элементов - allInputs
function selectedCheckboxes(allInputs, mode) {
  const filterInput = allInputs;
  const checkboxes = [];
  switch (mode) {
    case "selected":
      for (let j = 0; j < filterInput.length; j++) {
        if (filterInput[j].checked) {
          checkboxes.push(filterInput[j].value.toLowerCase());
        }
      }
      return checkboxes;
    case "all":
      for (let j = 0; j < filterInput.length; j++) {
        checkboxes.push(filterInput[j].value.toLowerCase());
      }
      return checkboxes;
  }

}

// Toast. Большие всплывашки с заголовком и временем
// Всплывашка. Принимает заголовок header, текст text, время time в виде строки
function showToast(header, text, time) {
  const toastcontainer = document.querySelector('.toasts-container');
  // Удаляем скрытые всплывашки
  const hiddentoasts = toastcontainer.querySelectorAll('.hide');
  if (hiddentoasts) {
    hiddentoasts.forEach((hiddentoast) => {
      toastcontainer.removeChild(hiddentoast);
    });
  }

  const toastElement = '<div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><i class="mdi mdi-message-alert-outline"></i><strong class="me-auto">' + header + '</strong><small class="text-muted">' + time + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button></div><div class="toast-body">' + text + '</div></div>';
  toastcontainer.insertAdjacentHTML('beforeend', toastElement);
  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  const toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
  });
  toastList.forEach(toast => toast.show());
}

// Ошибки Toast. Большие всплывашки с заголовком и временем
// Всплывашка. Принимает заголовок header, текст text, время time в виде строки
function showErrorToast(header, text, time) {
  const toastcontainer = document.querySelector('.toasts-container');
  // Удаляем скрытые всплывашки
  const hiddentoasts = toastcontainer.querySelectorAll('.hide');
  if (hiddentoasts) {
    hiddentoasts.forEach((hiddentoast) => {
      toastcontainer.removeChild(hiddentoast);
    });
  }

  const toastElement = '<div class="toast fade" role="alert" aria-live="assertive" aria-atomic="true"><div class="toast-header"><i class="mdi mdi-alert text-danger"></i><strong class="me-auto text-danger">' + header + '</strong><small class="text-muted">' + time + '</small><button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Закрыть"></button></div><div class="toast-body">' + text + '</div></div>';
  toastcontainer.insertAdjacentHTML('beforeend', toastElement);
  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  const toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl, {
      autohide: false
    })
  });
  toastList.forEach(toast => toast.show());
}

// Toast mini. Маленькие цветные всплывашки без заголовка и времени
function showMiniToast(text, color) {
  const toastcontainer = document.querySelector('.toasts-container');
  // Удаляем скрытые всплывашки
  const hiddentoasts = toastcontainer.querySelectorAll('.hide');
  if (hiddentoasts) {
    hiddentoasts.forEach((hiddentoast) => {
      toastcontainer.removeChild(hiddentoast);
    });
  }

  const toastElement = '<div class="toast align-items-center bg-' + color + '-lighter" role="alert" aria-live="assertive" aria-atomic="true"><div class="d-flex"><div class="toast-body">' + text + '</div><button type="button" class="btn-close me-2 m-auto" data-bs-dismiss="toast" aria-label="Закрыть"></button></div></div>';
  toastcontainer.insertAdjacentHTML('beforeend', toastElement);

  const toastElList = [].slice.call(document.querySelectorAll('.toast'));
  const toastList = toastElList.map(function (toastEl) {
    return new bootstrap.Toast(toastEl)
  });
  toastList.forEach(toast => toast.show());
}

// Получение Cookie
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

// ID пользователя
const cookieID = getCookie('aut[id]');

// Ajax. Передача GET и POST запросов
//method - POST или GET, url - адрес, parameters - параметры get запроса или отсылаемое тело POST, callback - в какую
// функцию передать результат
const ajax_send = (method, url, parameters, datatype, callback) => {
  //Создаём новый XMLHttpRequest-объект
  let xhr = new XMLHttpRequest();

  switch (method) {
    // Настраиваем его: GET или POST, URL
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
            //result = xhr.response;
            showErrorToast("Ошибка", xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
          }
        } else if (datatype === "text") {
          callback(xhr.responseText);
        }
      }
      if (method === "POST") {
        if (!xhr.response) {
          callback('null');
        } else {
          showErrorToast("Ошибка", xhr.response, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
        }
      }

    } else if (xhr.status === 0) {
      header = "Не подключено. Проверьте сеть";
      showErrorToast(header, xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
    } else if (xhr.status === 404) {
      header = "404. Not Found. Запрашиваемая страница не найдена ";
      showErrorToast(header, xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
    } else if (xhr.status === 500) {
      header = "Внутренняя ошибка сервера [500]";
      showErrorToast(header, xhr.responseText, moment().tz('Europe/Moscow').format('YYYY-MM-DD'))
    }
  }

}

export {selectedCheckboxes, showToast, showErrorToast, showMiniToast, getCookie, cookieID, ajax_send}
