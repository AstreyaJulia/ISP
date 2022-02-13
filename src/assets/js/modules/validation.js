function validateForm(form, submit) {
  form.classList.add('was-validated');

  if (form.checkValidity() === false) {
    form.classList.add('invalid');
    submit.disabled = true;
    return false;
  } else  {
    submit.disabled = false;
    return true;
  }
}

function setValidationListeners(form, submit) {
  const inputs = form.querySelectorAll('input:not(.input), textarea');
  const selects = form.querySelectorAll('select');
  selects.forEach((select) => {
    select.addEventListener('change', () => validateForm(form, submit))
  })
  inputs.forEach((input) => {
    input.addEventListener('input', () => validateForm(form, submit))
  })
}

export {validateForm, setValidationListeners}
