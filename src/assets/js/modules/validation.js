/** */

/**
 * Настройки валидации
 * @param {string} formSelector - класс формы
 * @param {string} inputSelector - класс инпута
 * @param {string} submitButtonSelector - класс кнопки отправки формы
 * @param {string} inactiveButtonClass - класс, к-рый делает кнопку отправки формы заблокированной
 * @param {string} inputErrorClass - класс, подсвечивающий поле с ошибками
 * @param {string} errorClass - класс, делающий ошибку видимой
 */
/** @type {Object} */
const validationSettings = {
  formSelector: '.form-validate',
  inputSelector: '.form-control:not(div)',
  submitButtonSelector: '.btn-submit',
  inactiveButtonClass: 'disabled',
  inputErrorClass: 'border-danger',
  errorClass: 'd-flex'
};


/**
 * Включение ошибки валидации инпута
 * @param {HTMLInputElement} input - валидируемый инпут
 * @param {HTMLFormElement} form - элемент формы
 * @param {string} message - сообщение об ошибке
 */
function showInputError(input, form, message) {

  /** @type {HTMLElement} */
  const error = form.querySelector(`#${input.id}-error`);

  /** @type {string} */
  error.textContent = message;

  input.classList.add(validationSettings.inputErrorClass);
}


/**
 * Выключение ошибки валидации инпута
 * @param {HTMLInputElement} input - валидируемый инпут
 * @param {HTMLFormElement} form - элемент формы
 */
function hideInputError(input, form) {

  /** @type {HTMLElement} */
  const error = form.querySelector(`#${input.id}-error`);

  /** @type {string} */
  error.textContent = "";

  input.classList.remove(validationSettings.inputErrorClass);
}


/**
 * Валидация инпута
 * @param {HTMLInputElement} input - валидируемый инпут
 * @param {HTMLFormElement} form - элемент формы
 */
function validateInput(form, input) {

  /** Если инпут не прошел валидацию (?) показывает ошибку, иначе (:) убирает ошибку */
  !input.validity.valid ? showInputError(input, form, input.validationMessage) : hideInputError(input, form);
}


/**
 * Переключатель состояния кнопки отправки формы
 * @param {HTMLCollection} inputArray - коллекция валидируемых инпутов
 * @param {HTMLButtonElement} submitButton - кнопка отправки формы
 */
function switchSubmitButton(inputArray, submitButton) {
  if (Array.from(inputArray).filter(input => !input.validity.valid).length === 0) {
    submitButton.disabled = false;
    submitButton.classList.remove(validationSettings.inactiveButtonClass);
  } else {
    submitButton.disabled = true;
    submitButton.classList.add(validationSettings.inactiveButtonClass);
  }
}


/**
 * Создание прослушивателей
 * @param {Element} form - элемент формы, на которую вешаем прослушиватели
 */
function setInputEvtListeners(form) {
  /** @type {HTMLCollection} */
  const inputArray = form.querySelectorAll(validationSettings.inputSelector);
  /** @type {HTMLButtonElement} */
  const submitButton = form.querySelector(validationSettings.submitButtonSelector);
  /** Валидация при открытии формы */
  switchSubmitButton(inputArray, submitButton)
  /** Вешаем прослушиватель input каждому инпуту */
  Array.from(inputArray).forEach((input) => {
    input.addEventListener('input', () => {
      /** Валидация инпута, включает/выключает ошибки */
      validateInput(form, input);
      /** Переключалка состояния кнопки отправки формы */
      switchSubmitButton(inputArray, submitButton);
    });
  });
}

/**
 * Функция включения валидации
 */
function enableValidation() {
  /** @type {HTMLCollection} */
  const formsArray = document.querySelectorAll(validationSettings.formSelector);
  Array.from(formsArray).forEach((form) => {
    form.addEventListener('submit', (evt) => {
      evt.preventDefault();
    });
    setInputEvtListeners(form);
  });
}


/** ждем загрузки DOM */
/*document.addEventListener('DOMContentLoaded', function () {
  enableValidation();
});*/
