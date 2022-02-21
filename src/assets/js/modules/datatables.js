/** Datatables */
const datatablesHandler = () => {
  const colspan = $('td[colspan]').not('[colspan=1]');
  /** colspan.prop("colSpan")  получает кол-во colspan */
  colspan.after('<td style="display: none;"></td>');
  /** Для таблиц с сортировкой */
  $('.dataTable.sort').DataTable({
    "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Все"]],
    "language": {
      "processing": "Подождите...",
      "search": "Поиск:",
      "lengthMenu": "Показать _MENU_ записей",
      "info": "Записи _START_ - _END_ из _TOTAL_",
      "infoEmpty": "Записи с 0 по 0 из 0 записей",
      "infoFiltered": "(отфильтровано из _MAX_ записей)",
      "loadingRecords": "Загрузка записей...",
      "zeroRecords": "Записи отсутствуют.",
      "emptyTable": "В таблице отсутствуют данные",
      "paginate": {
        "first": "Первая",
        "previous": "‹",
        "next": "›",
        "last": "Последняя"
      },
      "aria": {
        "sortAscending": ": активировать для сортировки столбца по возрастанию",
        "sortDescending": ": активировать для сортировки столбца по убыванию"
      },
      "select": {
        "rows": {
          "_": "Выбрано записей: %d",
          "0": "Кликните по записи для выбора",
          "1": "Выбрана одна запись"
        },
        "1": "%d ряд выбран",
        "_": "%d ряда(-ов) выбрано",
        "cells": {
          "1": "1 ячейка выбрана",
          "_": "Выбрано %d ячеек"
        },
        "columns": {
          "1": "1 столбец выбран",
          "_": "%d столбцов выбрано"
        }
      },
      "searchBuilder": {
        "conditions": {
          "string": {
            "startsWith": "Начинается с",
            "contains": "Содержит",
            "empty": "Пусто",
            "endsWith": "Заканчивается на",
            "equals": "Равно",
            "not": "Не",
            "notEmpty": "Не пусто"
          },
          "date": {
            "after": "После",
            "before": "До",
            "between": "Между",
            "empty": "Пусто",
            "equals": "Равно",
            "not": "Не",
            "notBetween": "Не между",
            "notEmpty": "Не пусто"
          },
          "number": {
            "empty": "Пусто",
            "equals": "Равно",
            "gt": "Больше чем",
            "gte": "Больше, чем равно",
            "lt": "Меньше чем",
            "lte": "Меньше, чем равно",
            "not": "Не",
            "notEmpty": "Не пусто",
            "between": "Между",
            "notBetween": "Не между ними"
          },
          "array": {
            "equals": "Равно",
            "empty": "Пусто",
            "contains": "Содержит",
            "not": "Не равно",
            "notEmpty": "Не пусто",
            "without": "Без"
          }
        },
        "data": "Данные",
        "deleteTitle": "Удалить условие фильтрации",
        "logicAnd": "И",
        "logicOr": "Или",
        "title": {
          "0": "Конструктор поиска",
          "_": "Конструктор поиска (%d)"
        },
        "value": "Значение",
        "add": "Добавить условие",
        "button": {
          "0": "Конструктор поиска",
          "_": "Конструктор поиска (%d)"
        },
        "clearAll": "Очистить всё",
        "condition": "Условие"
      },
      "searchPanes": {
        "clearMessage": "Очистить всё",
        "collapse": {
          "0": "Панели поиска",
          "_": "Панели поиска (%d)"
        },
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Нет панелей поиска",
        "loadMessage": "Загрузка панелей поиска",
        "title": "Фильтры активны - %d"
      },
      "thousands": ",",
      "buttons": {
        "pageLength": {
          "_": "Показать 10 строк",
          "-1": "Показать все ряды",
          "1": "Показать 1 ряд"
        },
        "pdf": "PDF",
        "print": "Печать",
        "collection": "Коллекция <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Видимость столбцов",
        "colvisRestore": "Восстановить видимость",
        "copy": "Копировать",
        "copyKeys": "Нажмите ctrl or u2318 + C, чтобы скопировать данные таблицы в буфер обмена.  Для отмены, щелкните по сообщению или нажмите escape.",
        "copySuccess": {
          "1": "Скопирована 1 ряд в буфер обмена",
          "_": "Скопировано %ds рядов в буфер обмена"
        },
        "copyTitle": "Скопировать в буфер обмена",
        "csv": "CSV",
        "excel": "Excel"
      },
      "decimal": ".",
      "infoThousands": ",",
      "autoFill": {
        "cancel": "Отменить",
        "fill": "Заполнить все ячейки <i>%d<i><\/i><\/i>",
        "fillHorizontal": "Заполнить ячейки по горизонтали",
        "fillVertical": "Заполнить ячейки по вертикали",
        "info": "Пример автозаполнения"
      },
      "datetime": {
        "previous": "Предыдущий",
        "next": "Следующий",
        "hours": "Часы",
        "minutes": "Минуты",
        "seconds": "Секунды",
        "unknown": "Неизвестный",
        "amPm": [
          "AM",
          "PM"
        ]
      },
      "editor": {
        "close": "Закрыть",
        "create": {
          "button": "Новый",
          "title": "Создать новую запись",
          "submit": "Создать"
        },
        "edit": {
          "button": "Изменить",
          "title": "Изменить запись",
          "submit": "Изменить"
        },
        "remove": {
          "button": "Удалить",
          "title": "Удалить",
          "submit": "Удалить",
          "confirm": {
            "_": "Вы точно хотите удалить %d строк?",
            "1": "Вы точно хотите удалить 1 строку?"
          }
        },
        "multi": {
          "restore": "Отменить изменения"
        }
      }
    }
  });
  /** Для таблиц без сортировки */
  $('.dataTable.nosort').DataTable({
    "ordering": false,
    "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Все"]],
    "language": {
      "processing": "Подождите...",
      "search": "Поиск:",
      "lengthMenu": "Показать _MENU_ записей",
      "info": "Записи _START_ - _END_ из _TOTAL_",
      "infoEmpty": "Записи с 0 по 0 из 0 записей",
      "infoFiltered": "(отфильтровано из _MAX_ записей)",
      "loadingRecords": "Загрузка записей...",
      "zeroRecords": "Записи отсутствуют.",
      "emptyTable": "В таблице отсутствуют данные",
      "paginate": {
        "first": "Первая",
        "previous": "‹",
        "next": "›",
        "last": "Последняя"
      },
      "aria": {
        "sortAscending": ": активировать для сортировки столбца по возрастанию",
        "sortDescending": ": активировать для сортировки столбца по убыванию"
      },
      "select": {
        "rows": {
          "_": "Выбрано записей: %d",
          "0": "Кликните по записи для выбора",
          "1": "Выбрана одна запись"
        },
        "1": "%d ряд выбран",
        "_": "%d ряда(-ов) выбрано",
        "cells": {
          "1": "1 ячейка выбрана",
          "_": "Выбрано %d ячеек"
        },
        "columns": {
          "1": "1 столбец выбран",
          "_": "%d столбцов выбрано"
        }
      },
      "searchBuilder": {
        "conditions": {
          "string": {
            "startsWith": "Начинается с",
            "contains": "Содержит",
            "empty": "Пусто",
            "endsWith": "Заканчивается на",
            "equals": "Равно",
            "not": "Не",
            "notEmpty": "Не пусто"
          },
          "date": {
            "after": "После",
            "before": "До",
            "between": "Между",
            "empty": "Пусто",
            "equals": "Равно",
            "not": "Не",
            "notBetween": "Не между",
            "notEmpty": "Не пусто"
          },
          "number": {
            "empty": "Пусто",
            "equals": "Равно",
            "gt": "Больше чем",
            "gte": "Больше, чем равно",
            "lt": "Меньше чем",
            "lte": "Меньше, чем равно",
            "not": "Не",
            "notEmpty": "Не пусто",
            "between": "Между",
            "notBetween": "Не между ними"
          },
          "array": {
            "equals": "Равно",
            "empty": "Пусто",
            "contains": "Содержит",
            "not": "Не равно",
            "notEmpty": "Не пусто",
            "without": "Без"
          }
        },
        "data": "Данные",
        "deleteTitle": "Удалить условие фильтрации",
        "logicAnd": "И",
        "logicOr": "Или",
        "title": {
          "0": "Конструктор поиска",
          "_": "Конструктор поиска (%d)"
        },
        "value": "Значение",
        "add": "Добавить условие",
        "button": {
          "0": "Конструктор поиска",
          "_": "Конструктор поиска (%d)"
        },
        "clearAll": "Очистить всё",
        "condition": "Условие"
      },
      "searchPanes": {
        "clearMessage": "Очистить всё",
        "collapse": {
          "0": "Панели поиска",
          "_": "Панели поиска (%d)"
        },
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Нет панелей поиска",
        "loadMessage": "Загрузка панелей поиска",
        "title": "Фильтры активны - %d"
      },
      "thousands": ",",
      "buttons": {
        "pageLength": {
          "_": "Показать 10 строк",
          "-1": "Показать все ряды",
          "1": "Показать 1 ряд"
        },
        "pdf": "PDF",
        "print": "Печать",
        "collection": "Коллекция <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Видимость столбцов",
        "colvisRestore": "Восстановить видимость",
        "copy": "Копировать",
        "copyKeys": "Нажмите ctrl or u2318 + C, чтобы скопировать данные таблицы в буфер обмена.  Для отмены, щелкните по сообщению или нажмите escape.",
        "copySuccess": {
          "1": "Скопирована 1 ряд в буфер обмена",
          "_": "Скопировано %ds рядов в буфер обмена"
        },
        "copyTitle": "Скопировать в буфер обмена",
        "csv": "CSV",
        "excel": "Excel"
      },
      "decimal": ".",
      "infoThousands": ",",
      "autoFill": {
        "cancel": "Отменить",
        "fill": "Заполнить все ячейки <i>%d<i><\/i><\/i>",
        "fillHorizontal": "Заполнить ячейки по горизонтали",
        "fillVertical": "Заполнить ячейки по вертикали",
        "info": "Пример автозаполнения"
      },
      "datetime": {
        "previous": "Предыдущий",
        "next": "Следующий",
        "hours": "Часы",
        "minutes": "Минуты",
        "seconds": "Секунды",
        "unknown": "Неизвестный",
        "amPm": [
          "AM",
          "PM"
        ]
      },
      "editor": {
        "close": "Закрыть",
        "create": {
          "button": "Новый",
          "title": "Создать новую запись",
          "submit": "Создать"
        },
        "edit": {
          "button": "Изменить",
          "title": "Изменить запись",
          "submit": "Изменить"
        },
        "remove": {
          "button": "Удалить",
          "title": "Удалить",
          "submit": "Удалить",
          "confirm": {
            "_": "Вы точно хотите удалить %d строк?",
            "1": "Вы точно хотите удалить 1 строку?"
          }
        },
        "multi": {
          "restore": "Отменить изменения"
        }
      }
    }
  });
  $('.dataTable.userstable').DataTable({
    "ajax": "api/phonebook/getphonebook.php",
    "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "Все"]],
    "language": {
      "processing": "Подождите...",
      "search": "Поиск:",
      "lengthMenu": "Показать _MENU_ записей",
      "info": "Записи _START_ - _END_ из _TOTAL_",
      "infoEmpty": "Записи с 0 по 0 из 0 записей",
      "infoFiltered": "(отфильтровано из _MAX_ записей)",
      "loadingRecords": "Загрузка записей...",
      "zeroRecords": "Записи отсутствуют.",
      "emptyTable": "В таблице отсутствуют данные",
      "paginate": {
        "first": "Первая",
        "previous": "‹",
        "next": "›",
        "last": "Последняя"
      },
      "aria": {
        "sortAscending": ": активировать для сортировки столбца по возрастанию",
        "sortDescending": ": активировать для сортировки столбца по убыванию"
      },
      "select": {
        "rows": {
          "_": "Выбрано записей: %d",
          "0": "Кликните по записи для выбора",
          "1": "Выбрана одна запись"
        },
        "1": "%d ряд выбран",
        "_": "%d ряда(-ов) выбрано",
        "cells": {
          "1": "1 ячейка выбрана",
          "_": "Выбрано %d ячеек"
        },
        "columns": {
          "1": "1 столбец выбран",
          "_": "%d столбцов выбрано"
        }
      },
      "searchBuilder": {
        "conditions": {
          "string": {
            "startsWith": "Начинается с",
            "contains": "Содержит",
            "empty": "Пусто",
            "endsWith": "Заканчивается на",
            "equals": "Равно",
            "not": "Не",
            "notEmpty": "Не пусто"
          },
          "date": {
            "after": "После",
            "before": "До",
            "between": "Между",
            "empty": "Пусто",
            "equals": "Равно",
            "not": "Не",
            "notBetween": "Не между",
            "notEmpty": "Не пусто"
          },
          "number": {
            "empty": "Пусто",
            "equals": "Равно",
            "gt": "Больше чем",
            "gte": "Больше, чем равно",
            "lt": "Меньше чем",
            "lte": "Меньше, чем равно",
            "not": "Не",
            "notEmpty": "Не пусто",
            "between": "Между",
            "notBetween": "Не между ними"
          },
          "array": {
            "equals": "Равно",
            "empty": "Пусто",
            "contains": "Содержит",
            "not": "Не равно",
            "notEmpty": "Не пусто",
            "without": "Без"
          }
        },
        "data": "Данные",
        "deleteTitle": "Удалить условие фильтрации",
        "logicAnd": "И",
        "logicOr": "Или",
        "title": {
          "0": "Конструктор поиска",
          "_": "Конструктор поиска (%d)"
        },
        "value": "Значение",
        "add": "Добавить условие",
        "button": {
          "0": "Конструктор поиска",
          "_": "Конструктор поиска (%d)"
        },
        "clearAll": "Очистить всё",
        "condition": "Условие"
      },
      "searchPanes": {
        "clearMessage": "Очистить всё",
        "collapse": {
          "0": "Панели поиска",
          "_": "Панели поиска (%d)"
        },
        "count": "{total}",
        "countFiltered": "{shown} ({total})",
        "emptyPanes": "Нет панелей поиска",
        "loadMessage": "Загрузка панелей поиска",
        "title": "Фильтры активны - %d"
      },
      "thousands": ",",
      "buttons": {
        "pageLength": {
          "_": "Показать 10 строк",
          "-1": "Показать все ряды",
          "1": "Показать 1 ряд"
        },
        "pdf": "PDF",
        "print": "Печать",
        "collection": "Коллекция <span class=\"ui-button-icon-primary ui-icon ui-icon-triangle-1-s\"><\/span>",
        "colvis": "Видимость столбцов",
        "colvisRestore": "Восстановить видимость",
        "copy": "Копировать",
        "copyKeys": "Нажмите ctrl or u2318 + C, чтобы скопировать данные таблицы в буфер обмена.  Для отмены, щелкните по сообщению или нажмите escape.",
        "copySuccess": {
          "1": "Скопирована 1 ряд в буфер обмена",
          "_": "Скопировано %ds рядов в буфер обмена"
        },
        "copyTitle": "Скопировать в буфер обмена",
        "csv": "CSV",
        "excel": "Excel"
      },
      "decimal": ".",
      "infoThousands": ",",
      "autoFill": {
        "cancel": "Отменить",
        "fill": "Заполнить все ячейки <i>%d<i><\/i><\/i>",
        "fillHorizontal": "Заполнить ячейки по горизонтали",
        "fillVertical": "Заполнить ячейки по вертикали",
        "info": "Пример автозаполнения"
      },
      "datetime": {
        "previous": "Предыдущий",
        "next": "Следующий",
        "hours": "Часы",
        "minutes": "Минуты",
        "seconds": "Секунды",
        "unknown": "Неизвестный",
        "amPm": [
          "AM",
          "PM"
        ]
      },
      "editor": {
        "close": "Закрыть",
        "create": {
          "button": "Новый",
          "title": "Создать новую запись",
          "submit": "Создать"
        },
        "edit": {
          "button": "Изменить",
          "title": "Изменить запись",
          "submit": "Изменить"
        },
        "remove": {
          "button": "Удалить",
          "title": "Удалить",
          "submit": "Удалить",
          "confirm": {
            "_": "Вы точно хотите удалить %d строк?",
            "1": "Вы точно хотите удалить 1 строку?"
          }
        },
        "multi": {
          "restore": "Отменить изменения"
        }
      }
    }
  });
}

/** Ждем полной загрузки дерева */
document.addEventListener("DOMContentLoaded",datatablesHandler);

export {datatablesHandler}
