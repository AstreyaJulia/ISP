/** Делает из значений объекта с разным кол-вом ключей
 * массив вида {ключ: значение}
 * @param object - объект
 * @param key1 - ключ 1 объекта, значение которого станет ключом создаваемого массива
 * @param key2 - ключ 2 объекта, значение которого станет значением создаваемого массива
 * @returns object
 */
export const makeArrayKeyValue = (object, key1, key2) => {
  const array = new Map();
  for (let i = 0; i < object.length; i+1) {
    array.set(object[i][key1], object[i][key2]);
  }
  return (Object.fromEntries(array));
}