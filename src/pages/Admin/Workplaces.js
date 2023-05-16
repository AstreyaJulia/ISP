import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import PerfectScrollbar from "react-perfect-scrollbar";
import ContentLayoutWithSidebar from "../pagesLayouts/ContentLayoutWithSidebar";
import buildingAdd from "../../assets/images/icons/building_add.png";
import floorAdd from "../../assets/images/icons/floor_add.png";
import doorAdd from "../../assets/images/icons/door_add.png";
import desktopAdd from "../../assets/images/icons/desktop_add.png";

import useAuth from "../../hooks/useAuth";
import axios from "../../utils/axios";
import apiErrorHelper from "../../utils/apiErrorHelper";
import TreeView from "../../components/TreeView";
import { devicesTree } from "../../@mock/SampleData";
import NewNodeForm from "./WorkPlaceTree/NewNodeForm";
import Modal from "../../components/Modal";
import BasicButton from "../../components/BasicButton";
import BuildingSection from "./WorkPlaceTree/BodySections/BuildingSection";
import FloorSection from "./WorkPlaceTree/BodySections/FloorSection";
import WorkPlaceSection from "./WorkPlaceTree/BodySections/WorkPlaceSection";
import DoorSection from "./WorkPlaceTree/BodySections/DoorSection";
import DeleteModal from "../../components/Modal/DeleteModal";

const Workplaces = () => {

  /** Состояние пользователя */
  const { initialize } = useAuth();

  const [courtTree, setCourtTree] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const [selectedNode, setSelectedNode] = useState(null); // выделенный в дереве элемент
  const [editedNode, setEditedNode] = useState(null); // редактируемый/удаляемый в дереве элемент
  const [selectedNodeInfo, setSelectedNodeInfo] = useState({});

  const [modalNewNodeOpened, setModalNewNodeOpened] = useState(false);
  const [openDialog, setOpenDialog] = useState(false); // модал удаления
  const [modalNewNodeTitle, setModalNewNodeTitle] = useState("");
  const [modalNewNodeIconValue, setModalNewNodeIconValue] = useState("na");

  const nodeMenu = [
    {
      title: "Редактировать",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                 viewBox="0 0 24 24" width="24px"
                 fill="currentColor"
                 className="h-4 w-4 text-gray-500 dark:text-gray-600 mr-2">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z" />
      </svg>,
      onClick: (node) => {
        setEditedNode(node);
        setModalNewNodeIconValue(node.icon);
        setModalNewNodeTitle("Редактирование узла");
        setModalNewNodeOpened(true);
      },
      href: null
    },
    {
      title: "Выше",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                 viewBox="0 0 24 24" width="24px"
                 fill="currentColor"
                 className="h-4 w-4 text-gray-500 dark:text-gray-600 mr-2">
        <rect fill="none" height="24" width="24" />
        <path
          d="M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z" />
      </svg>,
      onClick: (node) => console.log(node),
      href: null
    },
    {
      title: "Ниже",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                 viewBox="0 0 24 24" width="24px"
                 fill="currentColor"
                 className="h-4 w-4 text-gray-500 dark:text-gray-600 mr-2">
        <rect fill="none" height="24" width="24" />
        <path
          d="M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z" />
      </svg>,
      onClick: (node) => console.log(node),
      href: null
    },
    {
      title: "Удалить",
      icon: <svg xmlns="http://www.w3.org/2000/svg" height="24px"
                 viewBox="0 0 24 24" width="24px"
                 fill="currentColor"
                 className="h-4 w-4 text-gray-500 dark:text-gray-600 mr-2">
        <path d="M0 0h24v24H0V0z" fill="none" />
        <path
          d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
      </svg>,
      onClick: (node) => {
        setEditedNode(node);
        setOpenDialog(true);
      },
      href: null
    }
  ];

  useEffect(() => {
    initialize();
    setSelectedNode(null);
    setSelectedNodeInfo({});
    getWorkplaceRoot();
    // eslint-disable-next-line
  }, []);

  const getWorkplaceRoot = async () => {
    setIsLoading(true);
    await axios
      .get("/buildingstructure")
      .then((res) => {
        setCourtTree(res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        apiErrorHelper(error);
        setError(error);
      });
  };

  const getWorkplaceNode = async (node) => {
    setIsLoading(true);
    await axios
      .get(`/buildingstructure/${node.id}`)
      // eslint-disable-next-line
      .then((res) => {
        node.children = res.data.data;
        setIsLoading(false);
      })
      .catch((error) => {
        apiErrorHelper(error);
        setError(error);
      });
  };

  const getWorkplaceNodeInfo = async (node) => {
    setIsLoading(true);
    await axios
      .get(`/buildingstructure/${node.id}/info`)
      // eslint-disable-next-line
      .then((res) => {
        setSelectedNodeInfo(res.data.data);
        console.log(res.data.data);
        setIsLoading(false);
      })
      .catch((error) => {
        apiErrorHelper(error);
        setError(error);
      });
  };

  const handleModalClosed = () => {
    setModalNewNodeOpened(false);
    setSelectedNode(null);
    setEditedNode(null);
  };

  const handleDeleteNode = async (node) => {
    await axios.delete(`/buildingstructure`, { data: { "id": node.id } });
    getWorkplaceRoot();
  };

  return (
    <ContentLayoutWithSidebar
      boxed="true"
      title="Управление рабочими местами"
      header="Управление рабочими местами"
      sidebarSize="large"
      fullHeight="true"
    >
      <ContentLayoutWithSidebar.Sidebar>
        <div className="p-2 h-full">
          <div className="p-1 h-full flex flex-col">
            <div className="flex gap-2 items-center pb-2 mb-2 border-b border-b-transparent">
              <Menu as="div" className="relative">
                <Menu.Button>
                  <BasicButton size="small" type="button" variant="basic">
                    <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24"
                         width="24px"
                         fill="currentColor"
                         className="h-4 w-4 text-gray-500 dark:text-gray-600 mr-2">
                      <path d="M0 0h24v24H0z" fill="none" />
                      <path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z" />
                    </svg>
                    Добавить</BasicButton>
                </Menu.Button>
                <Menu.Items
                  className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить здание");
                            setModalNewNodeIconValue("building");
                            setModalNewNodeOpened(true);
                          }}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={buildingAdd} alt="Значок" className="h-4 w-4 mr-2" />
                          Здание
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                  {selectedNode && selectedNode.icon === "building" ? <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить этаж");
                            setModalNewNodeIconValue("floor");
                            setModalNewNodeOpened(true);
                          }}
                          disabled={!selectedNode || selectedNode.icon !== "building"}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={floorAdd} alt="Значок" className="h-4 w-4 mr-2" />
                          Этаж
                        </button>
                      )}
                    </Menu.Item>
                  </div> : ""}

                  {selectedNode && selectedNode.icon === "floor" ? <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить помещение");
                            setModalNewNodeIconValue("door");
                            setModalNewNodeOpened(true);
                          }}
                          disabled={!selectedNode || selectedNode.icon !== "floor"}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={doorAdd} alt="Значок" className="h-4 w-4 mr-2" />
                          Помещение
                        </button>
                      )}
                    </Menu.Item>
                  </div> : ""}

                  {selectedNode && selectedNode.icon === "door" ? <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить рабочее место");
                            setModalNewNodeIconValue("desktop");
                            setModalNewNodeOpened(true);
                          }}
                          disabled={!selectedNode || selectedNode.icon !== "door"}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={desktopAdd} alt="Значок" className="h-4 w-4 mr-1" />
                          Рабочее место
                        </button>
                      )}
                    </Menu.Item>
                  </div> : ""}

                </Menu.Items>
              </Menu>

              <Menu as="div" className="relative">
                <Menu.Button>
                  <BasicButton size="small" type="button" variant="basic">
                    Отчеты</BasicButton>
                </Menu.Button>
                <Menu.Items
                  className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить здание");
                            setModalNewNodeIconValue("building");
                            setModalNewNodeOpened(true);
                          }}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={buildingAdd} alt="Значок" className="h-4 w-4 mr-2" />
                          Здание
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                  {selectedNode && selectedNode.icon === "building" ? <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить этаж");
                            setModalNewNodeIconValue("floor");
                            setModalNewNodeOpened(true);
                          }}
                          disabled={!selectedNode || selectedNode.icon !== "building"}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={floorAdd} alt="Значок" className="h-4 w-4 mr-2" />
                          Этаж
                        </button>
                      )}
                    </Menu.Item>
                  </div> : ""}

                  {selectedNode && selectedNode.icon === "floor" ? <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить помещение");
                            setModalNewNodeIconValue("door");
                            setModalNewNodeOpened(true);
                          }}
                          disabled={!selectedNode || selectedNode.icon !== "floor"}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={doorAdd} alt="Значок" className="h-4 w-4 mr-2" />
                          Помещение
                        </button>
                      )}
                    </Menu.Item>
                  </div> : ""}

                  {selectedNode && selectedNode.icon === "door" ? <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить рабочее место");
                            setModalNewNodeIconValue("desktop");
                            setModalNewNodeOpened(true);
                          }}
                          disabled={!selectedNode || selectedNode.icon !== "door"}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={desktopAdd} alt="Значок" className="h-4 w-4 mr-1" />
                          Рабочее место
                        </button>
                      )}
                    </Menu.Item>
                  </div> : ""}

                </Menu.Items>
              </Menu>

              <Menu as="div" className="relative">
                <Menu.Button>
                  <BasicButton size="small" type="button" variant="basic">
                    Справочники</BasicButton>
                </Menu.Button>
                <Menu.Items
                  className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          Устройства
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                  {selectedNode && selectedNode.icon === "building" ? <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить этаж");
                            setModalNewNodeIconValue("floor");
                            setModalNewNodeOpened(true);
                          }}
                          disabled={!selectedNode || selectedNode.icon !== "building"}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={floorAdd} alt="Значок" className="h-4 w-4 mr-2" />
                          Этаж
                        </button>
                      )}
                    </Menu.Item>
                  </div> : ""}

                  {selectedNode && selectedNode.icon === "floor" ? <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить помещение");
                            setModalNewNodeIconValue("door");
                            setModalNewNodeOpened(true);
                          }}
                          disabled={!selectedNode || selectedNode.icon !== "floor"}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={doorAdd} alt="Значок" className="h-4 w-4 mr-2" />
                          Помещение
                        </button>
                      )}
                    </Menu.Item>
                  </div> : ""}

                  {selectedNode && selectedNode.icon === "door" ? <div className="px-1 py-1">
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type="button"
                          onClick={() => {
                            setModalNewNodeTitle("Добавить рабочее место");
                            setModalNewNodeIconValue("desktop");
                            setModalNewNodeOpened(true);
                          }}
                          disabled={!selectedNode || selectedNode.icon !== "door"}
                          className={`${
                            active ? "bg-gray-100 text-gray-900 dark:text-gray-100" : "text-gray-900 dark:text-gray-100"
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={desktopAdd} alt="Значок" className="h-4 w-4 mr-1" />
                          Рабочее место
                        </button>
                      )}
                    </Menu.Item>
                  </div> : ""}

                </Menu.Items>
              </Menu>
            </div>
            <div
              className="full-h-sidebar h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg py-3 px-2">
              <PerfectScrollbar className="pr-3" options={{ wheelPropagation: false }}>
                <TreeView data={courtTree}
                          handleOpen={(id) => getWorkplaceNode(id)}
                          count={0}
                          isLoading={isLoading}
                          error={error}
                          selectedNode={selectedNode}
                          setSelectedNode={(node) => setSelectedNode(node)}
                          handleNameClick={(node) => getWorkplaceNodeInfo(node)}
                          nodeMenu={nodeMenu}
                />
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </ContentLayoutWithSidebar.Sidebar>
      <ContentLayoutWithSidebar.Body color="gray">
        <div className="p-2 h-full">

          { /* eslint-disable-next-line */}
          {selectedNode && selectedNode.icon === "building" ?
            /* eslint-disable-next-line */
            <BuildingSection selectedNode={selectedNodeInfo} /> : selectedNode && selectedNode.icon === "floor" ?
              /* eslint-disable-next-line */
              <FloorSection selectedNode={selectedNodeInfo} /> : selectedNode && selectedNode.icon === "door" ?
                <DoorSection
                  selectedNode={selectedNodeInfo} /> : selectedNode && selectedNode.icon === "desktop" ?
                  <WorkPlaceSection selectedNode={selectedNodeInfo} error={error}
                                    devicesTree={devicesTree} /> : ""}

        </div>
      </ContentLayoutWithSidebar.Body>

      <Modal size="lg" open={modalNewNodeOpened} setOpen={setModalNewNodeOpened} onModalClose={handleModalClosed}
      >
        <Modal.Toolbar title={modalNewNodeTitle} />
        <Modal.Body>
          <NewNodeForm parentNode={selectedNode} currentNode={editedNode} IconValue={modalNewNodeIconValue}
                       onModalClose={handleModalClosed} isEdit={editedNode !== null}
                       getFunc={() => selectedNode?.icon === "building" || !selectedNode ? getWorkplaceRoot() : getWorkplaceNode(selectedNode)} />
        </Modal.Body>
      </Modal>
      <DeleteModal open={openDialog} setOpen={setOpenDialog} deleteOnClick={(node) => handleDeleteNode(node)}
                   deletedNode={editedNode}
                   setDeletedNode={setEditedNode} />
    </ContentLayoutWithSidebar>

  );
};

export default Workplaces;
