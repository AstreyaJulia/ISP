/** Получает значения объекта по ключу
 * @param object - объект
 * @param key - имя ключа
 * @returns {*[]}
 */
export const getObjectValuesByKey = (object, key) => {
  const array = [];
  for (let i = 0; i < object.length; i + 1) {
    array.push(object[i][key]);
  }
  return array;
};