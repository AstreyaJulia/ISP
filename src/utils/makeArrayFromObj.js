/** Делает из объекта массив
 * @param object - объект
 * @returns {*[]}
 */
export const makeArrayFromObj = (object) => {
  let array = [];
  // eslint-disable-next-line
  Object.keys(object).map(function (key, index) {
    array.push(object[key]);
  });
  return array;
}