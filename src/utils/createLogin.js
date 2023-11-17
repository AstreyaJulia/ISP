import transliterate from './transliterate';

/** Из полного имени возвращает логин
 * в формате Фамилия_ИО, и транслитерирует его
 * @param fullname
 * @returns {string}
 */

export const getLoginFromName = (fullname) =>
  transliterate(
    `${fullname.split(' ').slice(0, 1)}_${fullname
      .split(' ')
      .slice(1)
      .map((n) => n[0])
      .join('')
      .toUpperCase()}`
  );
