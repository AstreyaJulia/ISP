/** Возвращает числительное
 * @returns {string}
 * @param col - число
 * @param single - числительное для числа 1
 * @param multi - числительное для чисел от 2 до 4 включительно
 * @param count - числительное для чисел 0 и от 5 до 20 включительно
 * например: {single: "год", multi: "года", count: "лет"}
 */
export const getAmount = (col, { single, multi, count }) => {
  while (col > 20) {
    col = col.toString().slice(-1);
    col = parseInt(col, 10);
  }

  if (col === 1) {
    return single;
  }
  if (col > 1 && col <= 4) {
    return multi;
  }
  if (col >= 5 && col <= 20) {
    return count;
  }

  return count; // если col === 0
};