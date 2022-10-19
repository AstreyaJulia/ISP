import React, { useEffect, useState } from "react";
import { Menu } from "@headlessui/react";
import { Link } from "react-router-dom";

import { proxyListGroups, proxyListLinks } from "../../@mock/SampleData";
import { makeArrayFromObj } from "../../utils/makeArrayFromObj";
import ContentLayoutWithSidebar from "../pagesLayouts/ContentLayoutWithSidebar";
import useAuth from "../../hooks/useAuth";
import DeleteModal from "./DeleteModal";

const breadcrumbs = [{ name: "Каталог ссылок", href: "#", current: true }];

const LinksCatalog = () => {
  const { user } = useAuth();

  /** Стейты */
  const [selectedGroup, setSelectedGroup] = useState(null); // Выбранная группа
  const [groupsList, setGroupsList] = useState({}); // Список групп
  const [openDialog, setOpenDialog] = useState(false); // модал удаления

  /** Нажатие на группу
   * @param event
   * @param key
   */
  const groupClick = (event, key) => {
    event.preventDefault();
    setSelectedGroup(key);
  };

  useEffect(() => {
    setGroupsList(proxyListGroups);
  }, []);

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      focus();
    }
  };
  const focus = (evt) => evt.target.focus;

  const openModalHandle = () => setOpenDialog(true);

  return (
    <ContentLayoutWithSidebar
      boxed="true"
      title="Каталог ссылок"
      breadcrumbs={breadcrumbs}
      header="Каталог ссылок"
      sidebarSize="large"
      fullHeight="true"
    >
      <ContentLayoutWithSidebar.Sidebar>
        <DeleteModal open={openDialog} setOpen={setOpenDialog} />
        <div className="p-4">
          <div className="grid grid-cols-1 gap-2 mt-12">
            {makeArrayFromObj(groupsList).map((group, key) => (
              <div key={group.id} className="flex items-center w-full flex-shrink-0">
                <div onClick={event => groupClick(event, key)} onKeyDown={handleKeyDown} role="link" tabIndex={group.id}
                     className={["flex-grow rounded-lg border border-gray-300 dark:border-gray-700 bg-white hover:cursor-pointer dark:bg-gray-900 p-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 dark:hover:border-gray-600", key === selectedGroup ? "ring-2 ring-indigo-500 bg-indigo-100 border-gray-400" : ""].join(" ")}>
                  <div className="flex-shrink-0">
                      <span
                        className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-indigo-500/30">
                        <span
                          className="font-medium leading-none text-sm text-indigo-700 dark:text-indigo-300">
                          {group.id}
                        </span>
                      </span>
                  </div>
                  <div className="flex min-w-0">
                    <a href="/"
                       className="focus:outline-none"
                    >
                        <span className="text-sm font-medium text-gray-800 dark:text-gray-200">
                          {group.name}
                        </span>
                    </a>

                  </div>
                </div>
                {user.sudo === 1
                  ? <Menu as="div" className="relative">
                    <Menu.Button>
                      <div className="flex-shrink-0 px-2">
                        <div
                          className="w-8 h-8 bg-white dark:bg-gray-800 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                          <span className="sr-only">Открыть меню</span>
                          <svg className="w-5 h-5"
                               xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                               fill="currentColor" aria-hidden="true">
                            <path
                              d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                          </svg>
                        </div>
                      </div>
                    </Menu.Button>
                    <Menu.Items
                      className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      <div className="px-1 py-1 ">
                        <Menu.Item>
                          {({ active }) => (
                            <a href={`/info/proxy-list/group/${group.id}/edit`}
                               className={`${
                                 active ? "bg-indigo-500 text-white" : "text-gray-900 dark:text-gray-100"
                               } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Редактировать
                            </a>
                          )}
                        </Menu.Item>
                      </div>
                      <div className="px-1 py-1">
                        <Menu.Item>
                          {({ active }) => (
                            <button
                              type="button"
                              onClick={openModalHandle}
                              className={`${
                                active ? "bg-indigo-500 text-white" : "text-gray-900 dark:text-gray-100"
                              } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                            >
                              Удалить
                            </button>
                          )}
                        </Menu.Item>
                      </div>
                    </Menu.Items>
                  </Menu>
                  : null}
              </div>
            ))}
          </div>
        </div>
      </ContentLayoutWithSidebar.Sidebar>
      <ContentLayoutWithSidebar.Body color="white">
        <div className="p-4 h-full">
          <div className="mb-4 h-8">
            {user.sudo === 1
              ? <>
                <Link to="group/new"
                      className="inline-flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-300 rounded-md shadow-sm leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:hover:bg-gray-700 px-4 py-2 text-sm mr-3">Добавить
                  группу</Link>
                <Link to="link/new"
                      className="inline-flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-300 rounded-md shadow-sm leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:hover:bg-gray-700 px-4 py-2 text-sm">Добавить
                  ссылку</Link>
              </>
              : null}
          </div>
          <div className={[selectedGroup != null ? "" : "h-full", "grid grid-cols-1 gap-2"].join(" ")}>
            {selectedGroup != null
              ? makeArrayFromObj(proxyListLinks[selectedGroup].children).map((link) => (
                <div key={link.id} className="w-full flex flex-shrink-0 items-center">
                  <a
                    href={link.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center flex-grow">
                    <div
                      className={["rounded-lg flex-grow border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 dark:hover:border-gray-600"].join(" ")}>
                      <div className="flex-shrink-0">
                                        <span
                                          className="inline-flex items-center justify-center rounded-full h-8 w-8 bg-indigo-500/30">
                                            <span
                                              className="font-medium leading-none text-sm text-indigo-700 dark:text-indigo-300">
                                                {link.id}
                                            </span>
                                        </span>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p
                          className="focus:outline-none"
                        >
                                                    <span
                                                      className="text-sm font-medium text-gray-800 dark:text-gray-200">
                                                        {link.name}
                                                    </span>
                        </p>
                      </div>
                    </div>
                  </a>
                  {user.sudo === 1
                    ? <Menu as="div" className="relative">
                      <Menu.Button>
                        <div className="flex-shrink-0 px-2">
                          <div
                            className="w-8 h-8 bg-white dark:bg-gray-900 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                            <span className="sr-only">Открыть меню</span>
                            <svg className="w-5 h-5"
                                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"
                                 fill="currentColor" aria-hidden="true">
                              <path
                                d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                            </svg>
                          </div>
                        </div>
                      </Menu.Button>
                      <Menu.Items
                        className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                          <Menu.Item>
                            {({ active }) => (
                              <a href={`/info/proxy-list/group/${link.id}/edit`}
                                 className={`${
                                   active ? "bg-indigo-500 text-white" : "text-gray-900 dark:text-gray-100"
                                 } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Редактировать
                              </a>
                            )}
                          </Menu.Item>
                        </div>
                        <div className="px-1 py-1">
                          <Menu.Item>
                            {({ active }) => (
                              <button
                                type="button"
                                onClick={openModalHandle}
                                className={`${
                                  active ? "bg-indigo-500 text-white" : "text-gray-900 dark:text-gray-100"
                                } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                              >
                                Удалить
                              </button>
                            )}
                          </Menu.Item>
                        </div>
                      </Menu.Items>
                    </Menu>
                    : null}
                </div>
              ))
              : (
                <div className="text-center flex flex-col items-center justify-center">
                  <div
                    className="mt-1 border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md px-6 pt-5 pb-6 flex flex-col items-center justify-center">
                    <svg className="mx-auto h-12 w-12 text-gray-400" fill="none" viewBox="0 0 24 24"
                         stroke="currentColor" aria-hidden="true">
                      <path vectorEffect="non-scaling-stroke" strokeLinecap="round"
                            strokeLinejoin="round" strokeWidth="2"
                            d="M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
                    </svg>
                    <h3 className="mt-2 text-sm font-medium text-gray-900 dark:text-gray-100">Нет элементов</h3>
                    <p className="mt-1 text-sm text-gray-500">
                      Выберите группу в списке слева.
                    </p>
                  </div>
                </div>
              )
            }
          </div>
        </div>
      </ContentLayoutWithSidebar.Body>
    </ContentLayoutWithSidebar>
  );
};

export default LinksCatalog;
