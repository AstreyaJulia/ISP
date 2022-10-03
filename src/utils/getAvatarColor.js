import { getSecondCharacter } from "./getInitials";

const RED_NAME = ['0', '5', 'W', 'M', 'В', 'М', 'Ш', 'Х', 'У', 'Ц', 'Ё' ];
const ORANGE_NAME = ['1', '6', 'V', 'X', 'Z', 'Q', 'З', 'Ч', 'Щ'];
const YELLOW_NAME = ['2', '7', 'P', 'R', 'S', 'C', 'U', 'Е', 'П', 'С'];
const GREEN_NAME = ['3', '8', 'K', 'Y', 'B', 'O', 'Д', 'К', 'О', 'Я'];
const CYAN_NAME = ['4', '9', 'G', 'D', 'I', 'Ж', 'Й', 'Ф', 'Э', 'Б'];
const BLUE_NAME = ['F', 'E', 'T', 'J', 'Г', 'И', 'Р', 'Т'];
const INDIGO_NAME = ['A', 'N', 'H', 'L', 'А', 'Л', 'Н', 'Ю'];
const PINK_NAME = ['Ы', 'Ь', 'Ъ', 'Ь'];

/** Генерирует цвет по первой букве имени
 * @param name - имя
 * @returns {string} - цвет, строка
 */
export const getAvatarColor = name => {
  if (INDIGO_NAME.includes(getSecondCharacter(name))) return 'indigo';
  if (CYAN_NAME.includes(getSecondCharacter(name))) return 'cyan';
  if (GREEN_NAME.includes(getSecondCharacter(name))) return 'green';
  if (YELLOW_NAME.includes(getSecondCharacter(name))) return 'yellow';
  if (RED_NAME.includes(getSecondCharacter(name))) return 'red';
  if (ORANGE_NAME.includes(getSecondCharacter(name))) return 'orange';
  if (BLUE_NAME.includes(getSecondCharacter(name))) return 'blue';
  if (PINK_NAME.includes(getSecondCharacter(name))) return 'pink';
  return 'default';
}