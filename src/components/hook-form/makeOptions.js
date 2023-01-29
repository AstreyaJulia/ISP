/** Из массива текстовых значений делает массив для селекта react-select
 * @param optionsArray - массив value
 * @param labelsArray - массив label или [], для генерации меток из массива value
 * @param selectName - name селекта
 * @param iconsArray - массив значков
 */
export const makeOptionsFromArray = (optionsArray, labelsArray, selectName, iconsArray) => {

  return optionsArray.map((item, key) => {
    return {
      'id': key,
      'value': item,
      'label': labelsArray.length > 0 ? labelsArray[key] : item.charAt(0).toUpperCase() + item.slice(1),
      'selectID': selectName || null,
      'icon': iconsArray[key] || null
    }
  });

};