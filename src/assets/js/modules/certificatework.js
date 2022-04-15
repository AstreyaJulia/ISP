import {ajax_send} from "../globalfunc"

/** Справка по судьям */
/** @type {HTMLButtonElement} Кнопка Сформировать */
const certBtn = document.querySelector('.cert-get');

/** Получить квартал и год из селекта */
function certBtnHandler() {
  const value = document.querySelector('.cert-select');
  const year = $(value).find(':selected').parent().attr('label');
  let data = {
    quarter: value.value,
    year: year,
  };

  /** Вставить данные справки по судьям в таблицу */
  function createTable(data) {
    const createRowString = ({
                               col_3,
                               col_4,
                               col_5,
                               col_6,
                               col_7,
                               col_8,
                               col_9,
                               col_10,
                               col_11,
                               col_12,
                               col_13,
                               col_14,
                               col_15,
                               col_16,
                               col_17,
                               fullname,
                               row_num
                             }) =>
      `<tr>
<td>${row_num}</td>
<td>${fullname}</td>
<td>${col_3}</td>
<td>${col_4}</td>
<td>${col_5}</td>
<td>${col_6}</td>
<td>${col_7}</td>
<td>${col_8}</td>
<td>${col_9}</td>
<td>${col_10}</td>
<td>${col_11}</td>
<td>${col_12}</td>
<td>${col_13}</td>
<td>${col_14}</td>
<td>${col_15}</td>
<td>${col_16}</td>
<td>${col_17}</td>
</tr>`;
    document.querySelector('.cert-table').innerHTML = '';
    const taskElementsString = data.data.map((col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11, col_12, col_13, col_14, col_15, col_16, col_17, fullname, row_num) => createRowString(col_3, col_4, col_5, col_6, col_7, col_8, col_9, col_10, col_11, col_12, col_13, col_14, col_15, col_16, col_17, fullname, row_num)).join('');
    document.querySelector('.cert-table').insertAdjacentHTML('beforeend', taskElementsString);
  }

  /** Отправить запрос с параметрами и вставить в таблицу справки по судьям */
  ajax_send("GET", "api/certificatework/getCertificateWork.php", data, "json", response => {
    createTable(response);
  }, true);

}

/** Прослушиватель нажатия кнопки Сформировать справки по судьям */
if (certBtn) {
  certBtn.addEventListener('click', function () {
    certBtnHandler()
  })
}
