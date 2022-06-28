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
    // eslint-disable-next-line
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

/** Транслитератор
 * @param string - транслитерируемая строка
 * @returns {string}
 */
export const transliterate = (string) => {
    const rusTable = ['а', 'А', 'б', 'Б', 'в', 'В', 'г', 'Г', 'д', 'Д', 'е', 'Е', 'ё', 'Ё', 'ж', 'Ж', 'з', 'З', 'и', 'И', 'й', 'Й', 'к', 'К', 'л', 'Л', 'м', 'М', 'н', 'Н', 'о', 'О', 'п', 'П', 'р', 'Р', 'с', 'С', 'т', 'Т', 'у', 'У', 'ф', 'Ф', 'х', 'Х', 'ц', 'Ц', 'ч', 'Ч', 'ш', 'Ш', 'щ', 'Щ', 'ь', 'Ь', 'ы', 'Ы', 'ъ', 'Ъ', 'э', 'Э', 'ю', 'Ю', 'я', 'Я'];
    const transTable = ['a', 'A', 'b', 'B', 'v', 'V', 'g', 'G', 'd', 'D', 'e', 'E', 'ye', 'Ye', 'zh', 'Zh', 'z', 'Z', 'i', 'I', 'y', 'Y', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'f', 'F', 'h', 'H', 'ts', 'Ts', 'ch', 'Ch', 'sh', 'Sh', 'shch', 'Shch', '', '', 'y', 'Y', '', '', 'e', 'E', 'yu', 'Yu', 'ya', 'Ya'];

    const convert = [];
    Array.from(string).map((letter) => {
        const index = rusTable.indexOf(letter);
        convert.push(transTable[index] || letter);
    })
    return convert.join('');
}

/** Из полного имени позвращает логин
 * в формате Фамилия_ИО, и транслитерирует его
 * @param fullname
 * @returns {string}
 */
export const getLoginFromName = (fullname) => {
    return transliterate(fullname.split(" ").slice(0, 1) + "_" + fullname.split(" ").slice(1).map((n) => n[0]).join("").toUpperCase());
}
