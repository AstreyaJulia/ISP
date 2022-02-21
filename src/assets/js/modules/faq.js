import {datatablesHandler} from "./datatables"
/** Содержимое страницы FAQ */
const faqcard = document.querySelector('.faq-categories-doc');
const cont = document.querySelector('.faq-body');
/** Индикатор загрузки для страницы FAQ */
const loading = document.querySelector('.loading-spinner-faq');
/** Ссылки FAQ */
const faqlinks = document.querySelectorAll('.faq-category-subitem a');

/** FAQ акордеон в группе */
const faqaccordeon = document.querySelector('.faq-categories-list');

const faqlinkClickHandler = (evt) => {
  const link = evt.target.closest('a');
  if (!link) {
    return;
  }
  const datalink = link.dataset.link;
  /** Отображает тело карточки */
  faqcard.style.display = 'block';
  /** В странице FAQ, показывает индикатор загрузки, пока не прогрузится содержимое страницы */
  loading.style.display = 'inline-block';
  /** создание ajax объекта */
  let Http = new XMLHttpRequest();
  /** Перебираем запросы HTTP */
  if (new XMLHttpRequest()) {
    Http = new XMLHttpRequest();
  } else if (new ActiveXObject('Msxml2.XMLHTTP')) {
    Http = new ActiveXObject('Msxml2.XMLHTTP');
  } else {
    if (new ActiveXObject('Microsoft.XMLHTTP')) {
      Http = new ActiveXObject('Microsoft.XMLHTTP');
    } else return null;
  }
  if (Http) {
    Http.open('GET', datalink, true);
    Http.onreadystatechange = () => {
      if (Http.readyState === 4 && Http.status === 200) {
        cont.innerHTML = "";
        cont.insertAdjacentHTML('beforeend', Http.responseText);
        datatablesHandler();
      }
    }
    Http.send(null);
  } else {
    document.location = datalink;
  }
}

/** FAQ аккродеон в группе */
const faqcategoryClickHandler = (evt) => {
  /** Переключает класс родительского элемента события клик */
  evt.target.parentElement.classList.toggle("active");
}

/** FAQ */
if (faqcard && cont && loading && faqlinks) {
  faqlinks.forEach((faqlink) => {
    faqlink.addEventListener('click', (evt) => {
      faqlinkClickHandler(evt);
    });
  });
}

if (faqaccordeon) {
  const faqcategorys = faqaccordeon.querySelectorAll('.faq-category');
  faqcategorys.forEach((faqcategory) => {
    faqcategory.addEventListener('click', (evt) => {
      faqcategoryClickHandler(evt);
    });
  });
}
