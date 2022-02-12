import {ajax_send} from "../globalfunc"

// Рабочие места. Древья
const workPlaceTree = document.getElementById('workplace-tree');
const placeitemsTree = document.getElementById('placeitems-tree');

let zTreeObj;

const zTreeHandler = () => {

  function myOnClick(event, treeId, treeNode) {
    alert(treeNode.id + ", " + treeNode.name);
  }

  // zTree конфигурация, изучите API документацию (детали настройки)
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

// zTree data attributes, refer to the API documentation (treeNode data details)

  /*const workPlaceStructure = [
    {
      id: "01_00",
      name: "Сафоново",
      open: true,
      icon: "../../assets/img/icons/building.png",
      children: [
        {
          id: "01_01",
          name: "1 этаж",
          icon: "../../assets/img/icons/floor.png",
          children: [
            {
              id: "01_03",
              name: "Каб. №8",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
              children: [
                {
                  id: "02_01",
                  name: "Проход каб. 8",
                  icon: "../../assets/img/icons/door.png",
                  isParent: true,
                  children: [
                    {
                      id: "02_01",
                      name: "АРМ 1",
                      icon: "../../assets/img/icons/desktop.png",
                      isParent: false,
                    },
                    {
                      id: "02_01",
                      name: "АРМ 2",
                      icon: "../../assets/img/icons/desktop.png",
                      isParent: false,
                    }
                  ]
                },
                {
                  id: "02_01",
                  name: "АРМ 1",
                  icon: "../../assets/img/icons/desktop.png",
                  isParent: false,
                },
                {
                  id: "02_01",
                  name: "АРМ 1",
                  icon: "../../assets/img/icons/desktop.png",
                  isParent: false,
                }
              ]
            },
            {
              id: "01_04",
              name: "Каб. №9",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_05",
              name: "Каб. №10",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_06",
              name: "Каб. №11",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_07",
              name: "Каб. №12",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_08",
              name: "Каб. №13",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_09",
              name: "Каб. №14",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_10",
              name: "Каб. №15",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_11",
              name: "Каб. №16",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "01_12",
              name: "Зал с/з. №4",
              icon: "../../assets/img/icons/balance.png",
              isParent: true,
              children: [
                {
                  id: "01_14",
                  name: "Совещ. комн. зала № 4",
                  icon: "../../assets/img/icons/door.png",
                  isParent: true,
                }
              ]
            },
            {
              id: "01_13",
              name: "Зал с/з. №5",
              icon: "../../assets/img/icons/balance.png",
              isParent: true,
              children: [
                {
                  id: "01_15",
                  name: "Совещ. комн. зала № 5",
                  icon: "../../assets/img/icons/door.png",
                  isParent: true,
                }
              ]
            },
            {
              id: "01_17",
              name: "Серверная",
              icon: "../../assets/img/icons/servers.png",
              isParent: true,
            },
            {
              id: "01_18",
              name: "Коридор 1 этаж",
              icon: "../../assets/img/icons/node.png",
              isParent: true,
            }
          ]
        },
        {
          id: "01_02",
          name: "2 этаж",
          icon: "../../assets/img/icons/floor.png",
          isParent: true,
          children: [
            {
              id: "02_03",
              name: "Каб. №1",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_04",
              name: "Каб. №2",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_05",
              name: "Каб. №3",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_06",
              name: "Каб. №4",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_07",
              name: "Каб. №5",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_08",
              name: "Каб. №6",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_09",
              name: "Каб. №7",
              icon: "../../assets/img/icons/door.png",
              isParent: true,
            },
            {
              id: "02_10",
              name: "Зал с/з. №1",
              icon: "../../assets/img/icons/balance.png",
              isParent: true,
            },
            {
              id: "02_11",
              name: "Зал с/з. №2",
              icon: "../../assets/img/icons/balance.png",
              isParent: true,
              children: [
                {
                  id: "02_15",
                  name: "Совещ. комн. зала № 2",
                  icon: "../../assets/img/icons/door.png",
                  isParent: true,
                }
              ]
            },
            {
              id: "02_12",
              name: "Зал с/з. №3",
              icon: "../../assets/img/icons/balance.png",
              isParent: true,
              children: [
                {
                  id: "02_15",
                  name: "Совещ. комн. зала № 3",
                  icon: "../../assets/img/icons/door.png",
                  isParent: true,
                }
              ]
            },
            {
              id: "02_18",
              name: "Коридор 2 этаж",
              icon: "../../assets/img/icons/node.png",
              isParent: true,
            },
            {
              id: "02_19",
              name: "Лестничная площадка 2 этаж",
              icon: "../../assets/img/icons/node.png",
              isParent: true,
            }
          ]

        },
        {
          id: "01_03",
          name: "Подвал",
          icon: "../../assets/img/icons/floor.png",
          isParent: true,
        }
      ]
    },
    {
      id: "02_00",
      name: "Холм-Жирки",
      open: true,
      icon: "../../assets/img/icons/building-small.png",
      isParent: true,
      children: [
        {
          id: "02_01",
          name: "1 этаж",
          icon: "../../assets/img/icons/floor.png",
          isParent: true,
        },
        {
          id: "02_02",
          name: "2 этаж",
          icon: "../../assets/img/icons/floor.png",
          isParent: true,
        }
      ]
    }
  ];*/

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
    });
  }

  workPlaceStructure();

  //zTreeObj = $.fn.zTree.init($("#workplace-tree"), setting, workPlaceStructure);
  zTreeObj = $.fn.zTree.init($("#placeitems-tree"), settingPlaceitems, placeitemsStructure);

}

// Ждем полной загрузки дерева
document.addEventListener("DOMContentLoaded", () => {
  if (workPlaceTree) {
    zTreeHandler();
  }
});
