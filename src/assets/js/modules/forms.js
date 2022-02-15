/** Селект Профессия */
const profselect = document.getElementById('profession');

/** Селект Принадлежность */
const affselect = document.getElementById('affiliation');

/** Ищет в форме селект с id profession, проверяет, если судья или председатель, то отображает принадлежность судье, если нет, то блокирует и сбрасывает значение */
const profselectHandler = () => {
  if (
    profselect.options[profselect.selectedIndex].value === '6' || profselect.options[profselect.selectedIndex].value === '7' || profselect.options[profselect.selectedIndex].value === '9') {
    affselect.disabled = false;
  } else {
    affselect.disabled = true;
    affselect.selectedIndex = 0;
  }
}

/** Селект В штате */
const activeselect = document.getElementById('active');

/** Селект Кабинет */
const roomselect = document.getElementById('room');

/** Если не в штате, то блокирует и сбрасывает кабинет */
const activeselectHandler = () => {
  if (
    activeselect.options[activeselect.selectedIndex].value === '1') {
    roomselect.disabled = false;
  } else {
    roomselect.disabled = true;
    roomselect.selectedIndex = 0;
  }
}

/** Ждем полной загрузки дерева */
document.addEventListener("DOMContentLoaded", () => {

  /** Форма добавления сотрудника. Профессия и активность*/
  profselect && affselect ? profselectHandler() : false;

  activeselect && roomselect ? activeselectHandler() : false;

  /** Принадлежность судье */
  profselect && affselect ? profselect.addEventListener('change', profselectHandler) : false;

  /** В штате */
  activeselect && roomselect ? activeselect.addEventListener('change', activeselectHandler) : false;

});
