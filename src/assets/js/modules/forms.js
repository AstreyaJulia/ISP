// Ищет в форме селект с id profession, проверяет, если судья или председатель, то отображает принадлежность судье, если нет, то блокирует и сбрасывает значение
// Селект Профессия
const profselect = document.getElementById('profession');
// Селект Принадлежность
const affselect = document.getElementById('affiliation');

const profselectHandler = () => {
  if (
    profselect.options[profselect.selectedIndex].value === '6' || profselect.options[profselect.selectedIndex].value === '7' || profselect.options[profselect.selectedIndex].value === '9') {
    affselect.disabled = false;
  } else {
    affselect.disabled = true;
    affselect.selectedIndex = 0;
  }
}

// Если не в штате, то блокирует и сбрасывает кабинет
// Селект В штате
const activeselect = document.getElementById('active');
// Селект Кабинет
const roomselect = document.getElementById('room');

const activeselectHandler = () => {
  if (
    activeselect.options[activeselect.selectedIndex].value === '1') {
    roomselect.disabled = false;
  } else {
    roomselect.disabled = true;
    roomselect.selectedIndex = 0;
  }
}

// Ждем полной загрузки дерева
document.addEventListener("DOMContentLoaded", () => {


// Форма добавления сотрудника. Профессия и активность
  if (profselect && affselect) {
    profselectHandler();
  }
  if (activeselect && roomselect) {
    activeselectHandler();
  }

  // Принадлежность судье
  if (profselect && affselect) {
    profselect.addEventListener('change', profselectHandler);
  }

  // В штате
  if (activeselect && roomselect) {
    activeselect.addEventListener('change', activeselectHandler);
  }

});
