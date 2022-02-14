function showInputError(input) {
  input.classList.add('is-invalid');
  input.classList.remove('is-valid');
  if (input.classList.contains('flatpickr-input')) {
    input.nextSibling.classList.add('is-invalid');
    input.nextSibling.classList.remove('is-valid');
  }
}

function hideInputError(input) {
  input.classList.add('is-valid');
  input.classList.remove('is-invalid');
  if (input.classList.contains('flatpickr-input')) {
    input.nextSibling.classList.add('is-valid');
    input.nextSibling.classList.remove('is-invalid');
  }
}

function validateInput(form, input) {
  !input.validity.valid ? showInputError(input) : hideInputError(input);
}

function validateForm(form, submitButton) {
  const inputArray = form.querySelectorAll('input:not(.input), textarea, select');

  form.classList.add('was-validated');
  if (Array.from(inputArray).filter(input => !input.validity.valid).length === 0) {
    submitButton.disabled = false;
    return true;
  } else {
    submitButton.disabled = true;
    return false;
  }
}

function setValidationListeners(form, submit) {
  const inputs = form.querySelectorAll('input:not(.input), textarea');
  const selects = form.querySelectorAll('select:not(.select2)');
  selects.forEach((select) => {
    select.addEventListener('change', () => validateForm(form, submit));
    validateInput(form, select);
  })
  $('select.select2').on('select2:select', function (e) {
    validateForm(form, submit);
    validateInput(form, this);
  });
  inputs.forEach((input) => {
    input.addEventListener('input', () => validateForm(form, submit));
    validateInput(form, input);
  })
}

export {validateForm, setValidationListeners}
