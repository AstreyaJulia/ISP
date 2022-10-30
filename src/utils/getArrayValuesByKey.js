/** Получает значения массива по ключу
 * @param array
 * @param key - имя ключа
 * @returns {*[]}
 */
export const getArrayValuesByKey = (array, key) => array.map((item) => item[key]);

/** Получает уникальные значения массива по ключу
 * @param array
 * @param key - имя ключа
 * @returns {*[]}
 */
export const getUniqueArrayValuesByKey = (array, key) =>
  array.map((item) => item[key]).filter((value, index, self) => self.indexOf(value) === index);
