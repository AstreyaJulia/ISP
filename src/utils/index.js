/** Проверяет, пустой ли объект
 * @param obj - объект
 * @returns {boolean} -boolean
 */
export const isObjEmpty = obj => Object.keys(obj).length === 0

/** Конвертирует kebab case в camelCase
 * @param string - конвертируемая строка
 * @returns {*}
 */
export const kebabToCamel = string => string.replace(/-./g, x => x[1].toUpperCase());

/** Получает из полного ФИО, фамилию + инициалы
 * @param name - фамилия имя отчество
 * @returns {string}
 */
export const getInitials = name => name.split(" ").slice(0, 1) + " " + name.split(" ").slice(1).map((n) => n[0]).join(". ").toUpperCase();

/** Получает из полного ФИО инициалы, начиная с 2 элемента (только имя и отчество)
 * @param name - фамилия имя отчество
 * @returns {string}
 */
export const getInitialsOnly = name => name.split(" ").slice(1).map((n) => n[0]).join("").toUpperCase();

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

/** Делает из значений объекта с разным кол-вом ключей
 * массив вида {ключ: значение}
 * @param object - объект
 * @param key1 - ключ 1 объекта, значение которого станет ключом создаваемого массива
 * @param key2 - ключ 2 объекта, значение которого станет значением создаваемого массива
 * @returns {[p: string]: any}
 */
export const makeArrayKeyValue = (object, key1, key2) => {
    const array = new Map();
    for (let i = 0; i < object.length; i++) {
        array.set(object[i][key1], object[i][key2]);
    }
    return (Object.fromEntries(array));
}

/** Получает значения объекта по ключу
 * @param object - объект
 * @param key - имя ключа
 * @returns {*[]}
 */
export const getObjectValuesByKey = (object, key) => {
    const array = [];
    for (let i = 0; i < object.length; i++) {
        array.push(object[i][key]);
    }
    return array;
}