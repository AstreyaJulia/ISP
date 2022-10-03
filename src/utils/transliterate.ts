/** Транслитератор
 * @param string - транслитерируемая строка
 * @returns {string}
 */
export default function transliterate (string: string) : string | null {
    const rusTable = ['а', 'А', 'б', 'Б', 'в', 'В', 'г', 'Г', 'д', 'Д', 'е', 'Е', 'ё', 'Ё', 'ж', 'Ж', 'з', 'З', 'и', 'И', 'й', 'Й', 'к', 'К', 'л', 'Л', 'м', 'М', 'н', 'Н', 'о', 'О', 'п', 'П', 'р', 'Р', 'с', 'С', 'т', 'Т', 'у', 'У', 'ф', 'Ф', 'х', 'Х', 'ц', 'Ц', 'ч', 'Ч', 'ш', 'Ш', 'щ', 'Щ', 'ь', 'Ь', 'ы', 'Ы', 'ъ', 'Ъ', 'э', 'Э', 'ю', 'Ю', 'я', 'Я'];
    const transTable = ['a', 'A', 'b', 'B', 'v', 'V', 'g', 'G', 'd', 'D', 'e', 'E', 'ye', 'Ye', 'zh', 'Zh', 'z', 'Z', 'i', 'I', 'y', 'Y', 'k', 'K', 'l', 'L', 'm', 'M', 'n', 'N', 'o', 'O', 'p', 'P', 'r', 'R', 's', 'S', 't', 'T', 'u', 'U', 'f', 'F', 'h', 'H', 'ts', 'Ts', 'ch', 'Ch', 'sh', 'Sh', 'shch', 'Shch', '', '', 'y', 'Y', '', '', 'e', 'E', 'yu', 'Yu', 'ya', 'Ya'];
    const symbols = new RegExp(/[$-/:-?@{-~!"^_`\[\]\sg]/);

    return Array.from(string).map((letter) => symbols.test(letter) ? letter : transTable[rusTable.indexOf(letter)]).join('');
}