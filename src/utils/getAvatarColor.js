import { getSecondCharacter } from './getInitials';

const RED_NAME = ['0', '5', 'W', 'M', 'М', 'Ш', 'Х', 'У', 'Ц', 'Ё', 'Я'];
const ORANGE_NAME = ['1', '6', 'V', 'X', 'Z', 'Q', 'З', 'Ч', 'C', 'С'];
const YELLOW_NAME = ['2', '7', 'P', 'R', 'S', 'U', 'Е', 'П', 'Щ', 'Ь'];
const GREEN_NAME = ['3', '8', 'K', 'Y', 'B', 'O', 'Д', 'К', 'О', 'В'];
const CYAN_NAME = ['4', '9', 'G', 'D', 'I', 'Ж', 'Й', 'Ф', 'Б', 'Н'];
const BLUE_NAME = ['F', 'E', 'T', 'J', 'Г', 'И', 'Р', 'Т', 'Ь', 'Ъ'];
const INDIGO_NAME = ['A', 'N', 'H', 'L', 'А', 'Л', 'Ю', 'Ы', 'Э'];

/** Генерирует цвет по первой букве имени
 * @param name - имя
 * @returns {string} - цвет, строка
 */
export const getAvatarColor = (name) => {
  if (INDIGO_NAME.includes(getSecondCharacter(name.toUpperCase()))) return 'indigo';
  if (CYAN_NAME.includes(getSecondCharacter(name.toUpperCase()))) return 'cyan';
  if (GREEN_NAME.includes(getSecondCharacter(name.toUpperCase()))) return 'green';
  if (YELLOW_NAME.includes(getSecondCharacter(name.toUpperCase()))) return 'yellow';
  if (RED_NAME.includes(getSecondCharacter(name.toUpperCase()))) return 'red';
  if (ORANGE_NAME.includes(getSecondCharacter(name.toUpperCase()))) return 'orange';
  if (BLUE_NAME.includes(getSecondCharacter(name.toUpperCase()))) return 'blue';
  return 'default';
};
