import { format, formatDistanceToNow, getTime } from 'date-fns';
import ru from "date-fns/locale/ru";

/** Форматирует в формат дд месяц гггг
 * @param date
 * @returns {string}
 */
export function fDate(date) {
  return format(new Date(date), 'dd MMMM yyyy', {locale: ru});
}

/** Форматирует в формат дд мм гггг
 * @param date
 * @returns {string}
 */
export function formatDate(date) {
  return format(new Date(date), 'dd.MM.yyyy', {locale: ru});
}

export function fToNow(date) {
  return formatDistanceToNow(new Date(date), {addSuffix: true, locale: ru});
}

export function monthYear(date) {
  return format(new Date(date), 'LLLL yyyy', {locale: ru});
}