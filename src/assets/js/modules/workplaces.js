import {ajax_send} from "../globalfunc"

/** Рабочие места. Древья */
const workPlaceTree = document.getElementById('workplace-tree');
const placeitemsTree = document.getElementById('placeitems-tree');

let zTreeObj;

const zTreeHandler = () => {

  function myOnClick(event, treeId, treeNode) {
    alert(treeNode.id + ", " + treeNode.name);
  }

  /** zTree конфигурация, изучите API документацию (детали настройки) */
  const settingWorktree = {
    callback: {
      onClick: myOnClick
    },
    data: {
      key: {
        title: "id"
      },
      render: function (title, treeNode) {
        return title + treeNode.id;
      }
    }
  };

  const settingPlaceitems = {};

  let workplacesdata = {
    module: "workplaces",
    tree: "workplaces"
  };

  let placeitemsdata = {
    module: "workplaces",
    tree: "placeitems"
  };

  let test = {module: "workplaces"};

  const placeitemsStructure = [
    {
      id: "01",
      name: "Устройства",
      open: true,
      icon: "../../assets/img/icons/computer.png",
      isParent: true,
      children: [
        {
          id: "01_01",
          name: "Комплект рабочей станции",
          icon: "../../assets/img/icons/computer.png",
          open: true,
          isParent: true,
          children: [
            {
              id: "01_01",
              name: "Системный блок OLDI",
              icon: "../../assets/img/icons/compcase.png",
              isParent: true,
              children: [
                {
                  id: "01_01",
                  name: "Корпус InWin",
                  icon: "../../assets/img/icons/compcase.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Блок питания InWin",
                  icon: "../../assets/img/icons/computer.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Материнская плата Gigbyte",
                  icon: "../../assets/img/icons/motherboard.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Процессор Intel Core2Duo 2800",
                  icon: "../../assets/img/icons/processor.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Кулер для процессора Cooler Master",
                  icon: "../../assets/img/icons/computer.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Модуль памяти Kingston DDR2 1Gb",
                  icon: "../../assets/img/icons/memory.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Модуль памяти Kingston DDR2 1Gb",
                  icon: "../../assets/img/icons/memory.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "Жесткий диск Western Digital 160Gb",
                  icon: "../../assets/img/icons/hdd.png",
                  isParent: false,
                },
                {
                  id: "01_01",
                  name: "DVD-RAM Pioneer DRW-2200 BK",
                  icon: "../../assets/img/icons/drive-disc.png",
                  isParent: false,
                },
              ]
            },
            {
              id: "01_01",
              name: "Монитор Acer L1620",
              icon: "../../assets/img/icons/monitor.png",
              isParent: false,
            },
            {
              id: "01_01",
              name: "Звуковые колонки Genius G-200",
              icon: "../../assets/img/icons/speaker.png",
              isParent: false,
            },
            {
              id: "01_01",
              name: "Клавиатура Genius BX-200",
              icon: "../../assets/img/icons/keyboard-full.png",
              isParent: false,
            },
            {
              id: "01_01",
              name: "Мышь Genius N-100",
              icon: "../../assets/img/icons/mouse.png",
              isParent: false,
            },
            {
              id: "01_01",
              name: "Принтер Samsung ML-2160",
              icon: "../../assets/img/icons/printer.png",
              isParent: true,
              children: [
                {
                  id: "01_01",
                  name: "Картридж DT-101",
                  icon: "../../assets/img/icons/computer.png",
                  isParent: false,
                },
              ]
            },
          ]
        },
      ]
    },
    {
      id: "02",
      name: "Программное обеспечение",
      open: true,
      icon: "../../assets/img/icons/windows.png",
      isParent: true,
      children: [
        {
          id: "01_01",
          name: "ОС Windows 10 Professional x64",
          icon: "../../assets/img/icons/windows.png",
          isParent: false,
        },
      ]
    },
  ];

  const workPlaceStructure = () => {
    ajax_send("GET", "pages/admin/ajax.php", test, "json", result => {
      $.fn.zTree.init($("#workplace-tree"), settingWorktree, result);
    }, true);
  }

  workPlaceStructure();

  zTreeObj = $.fn.zTree.init($("#placeitems-tree"), settingPlaceitems, placeitemsStructure);

}

/** Ждем полной загрузки дерева */
document.addEventListener("DOMContentLoaded", () => {
  if (workPlaceTree) {
    zTreeHandler();
  }
});
