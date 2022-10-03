/** Получает из полного ФИО, фамилию + инициалы
 * @param name - фамилия имя отчество
 * @returns {string}
 */
export const getInitials = name => name && `${name.split(" ").slice(0, 1)  } ${  name.split(" ").slice(1).map((n) => n[0]).join(". ").toUpperCase()}`;

/** Получает из полного ФИО инициалы, начиная с 2 элемента (только имя и отчество)
 * @param name - фамилия имя отчество
 * @returns {string}
 */
export const getInitialsOnly = name => name && name.split(" ").slice(1).map((n) => n[0]).join("").toUpperCase();

/** Получает первую букву имени из Фамилии Имени
 * @param name - фамилия имя отчество
 * @returns {*}
 */
export const getSecondCharacter = name => name && name.split(" ").slice(1,-1).map((n) => n[0]).join("");