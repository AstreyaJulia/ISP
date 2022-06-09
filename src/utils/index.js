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

/** Возвращает числительное
 * @returns {string}
 * @param col - число
 * @param single - числительное для числа 1
 * @param multi - числительное для чисел от 2 до 4 включительно
 * @param count - числительное для чисел 0 и от 5 до 20 включительно
 * например: {single: "год", multi: "года", count: "лет"}
 */
export const getAmount = (col, {single: single, multi: multi, count: count}) => {
    while (col > 20) {
        col = col.toString().slice(-1)
        col = parseInt(col);
    }
    if (col === 0) {
        return count
    } else if (col === 1) {
        return single
    } else if (col > 1 && col <=4) {
        return multi
    } else if (col >= 5 && col <= 20) {
        return count
    }
}
