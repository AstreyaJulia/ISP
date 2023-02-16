import { format, formatDistanceToNow, getYear, parse } from 'date-fns';
import ru from 'date-fns/locale/ru';

const today = new Date();

/** Форматирует в формат 'д месяц гггг' (день без нуля)
 * @param date
 * @returns {string}
 */
export function fDate(date) {
  return format(new Date(date), 'd MMMM yyyy', { locale: ru });
}

/** Форматирует в формат 'дд мм гггг'
 * @param date
 * @returns {string}
 */
export function formatDate(date) {
  return format(new Date(date), 'dd.MM.yyyy', { locale: ru });
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), { addSuffix: true, locale: ru });
}

export function monthYear(date) {
  return format(new Date(date), 'LLLL yyyy', { locale: ru });
}

/** Возвращает текущий год
 * @returns {number}
 */
export function getCurrentYear() {
  return getYear(today);
}

/** Возвращает дату начала / конца квартала
 * @param year {number} - год, число, либо getCurrentYear()
 * @param quarter {number} - квартал, число, (1, 2, 3, 4)
 * @param point {string} - начало / конец квартала, строка ()
 * @returns {dateFns} - дата в ISO формате, до милисекунд
 */
export function getQuarter(year, quarter, point) {
  const quarterDates = {
    1: {
      start: new Date(year, 0, 1, 0, 0, 0, 0),
      end: new Date(year, 2, 31, 23, 59, 59, 999),
    },
    2: {
      start: new Date(year, 3, 1, 0, 0, 0, 0),
      end: new Date(year, 5, 30, 23, 59, 59, 999),
    },
    3: {
      start: new Date(year, 6, 1, 0, 0, 0, 0),
      end: new Date(year, 8, 30, 23, 59, 59, 999),
    },
    4: {
      start: new Date(year, 9, 1, 0, 0, 0, 0),
      end: new Date(year, 11, 31, 23, 59, 59, 999),
    },
  };

  return quarterDates[quarter][point];
}

export function formatDdMmYyyyDate(date) {
  return parse(date, 'dd.MM.yyyy', new Date(), { locale: ru });
}

export function formatYyyyMmDdDate(date) {
  return format(date, 'yyyy-MM-dd', { locale: ru });
}
