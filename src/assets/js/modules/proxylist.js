/** Список групп ссылок */
const listgroupmenu = document.querySelector('.list-tab-group .list-group');
//
/** Список ссылок */
const tablistgroupmenu = document.querySelector('.tab-content');

/** Переключает класс .active у ближайшего .list-group-item нажатой ссылки списка ссылок */
if (listgroupmenu && tablistgroupmenu) {
  const listgroup = listgroupmenu.querySelectorAll('.list-group-item');
  const tablistgroup = tablistgroupmenu.querySelectorAll('.tab-list-group');

  const listgroupitemClickHandler = (evt) => {
    const listgroupitem = evt.target.closest('.list-group-item');
    if (listgroupitem != null) {
      for (let i = 0, len = listgroup.length; i < len; i++) {
        listgroup[i].classList.remove("active");
      }
      listgroupitem.classList.add("active");
      for (let a = 0, len = tablistgroup.length; a < len; a++) {
        tablistgroup[a].classList.remove("active");
        if (listgroupitem.id + "-list" === tablistgroup[a].id) {
          tablistgroup[a].classList.add("active");
        }
      }
    }
  };
  /** Устанавливает класс active первой из найденных ссылок и табов */
  if (listgroup[0] && tablistgroup[0]) {
    listgroup[0].classList.add("active");
    tablistgroup[0].classList.add("active");
  }

  /** Прослушивание нажатия нажатия на ссылки списка ссылок .list-group */
  listgroupmenu.addEventListener('click', (evt) => {
    listgroupitemClickHandler(evt);
  });
}

/** Мульти модал для каталога ссылок */
/** Модалы для списка ссылок */
const multimodal = document.querySelector('.modal-multiaction');
const multimodalbtns = document.querySelectorAll('.btnmodal-multiaction');

const multimodalhandler = (evt) => {
  const link = evt.target.closest('a');
  const delbtn = multimodal.querySelector('.btn-del');
  const header1 = multimodal.querySelector('.header-1');
  const header2 = multimodal.querySelector('.header-2');
  const text1 = multimodal.querySelector('.text-1');
  const text2 = multimodal.querySelector('.text-2');
  const cancelBtn = multimodal.querySelector('.btn-discard');
  const span = multimodal.querySelector('.btn-close');

  /** Скрыть модал */
  function hideModal() {
    multimodal.style.display = "none";
    multimodal.classList.remove('show');
    const btn = document.querySelector('.modal-backdrop');
    if (btn) {
      document.body.removeChild(btn);
    }
  }

  /** Показать модал */
  function showModal() {
    multimodal.classList.add('show');
    multimodal.style.display = "block";
    const btn = document.createElement("div");
    btn.setAttribute('class', 'modal-backdrop fade show')
    document.body.appendChild(btn);
  }

  /** Кнопка закрыть */
  $(span).on('click', function () {
    hideModal();
    delbtn.href = '';
  });

  /** Кнопка отмены */
  $(cancelBtn).on('click', function () {
    hideModal();
    delbtn.href = '';
  });

  if (!link) {
    return;
  }

  const datalink = link.dataset.link;
  const dataaction = link.dataset.modaction;

  if (!datalink && !dataaction) {
    return;
  }

  if (dataaction === "1") {
    /** 1 действие. Удалить группу */
    header2.style.display = "none";
    text2.style.display = "none";
    header1.style.display = "block";
    text1.style.display = "block";
  }

  if (dataaction === "2") {
    /** 2 действие. Удалить группу */
    header1.style.display = "none";
    text1.style.display = "none";
    header2.style.display = "block";
    text2.style.display = "block";
  }

  delbtn.href = datalink;
  showModal()
}

if (multimodal && multimodalbtns) {
  multimodalbtns.forEach((multimodalbtn) => {
    multimodalbtn.addEventListener('click', (evt) => {
      multimodalhandler(evt);
    });
  });
}

