import React, {useEffect} from 'react';
import { Disclosure, Menu } from '@headlessui/react';
import { classNames } from '../../utils/classNames';
import ContentLayoutWithSidebar from '../pagesLayouts/ContentLayoutWithSidebar';
import { courtTree } from '../../@mock/SampleData';
import building from '../../assets/images/icons/building.png';
import floor from '../../assets/images/icons/floor.png';
import door from '../../assets/images/icons/door.png';
import desktop from '../../assets/images/icons/desktop.png';
import useAuth from "../../hooks/useAuth";

const Faq = () => {
  const breadcrumbs = [{ name: 'Инвентаризация', href: '', current: true }];

  /** Состояние пользователя */
  const { initialize, user } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const icons = {
    building,
    floor,
    door,
    desktop,
  };

  const sidebarLink = (item, key, count) => {
    count += 1;

    return item.children?.length > 0 ? (
      <Disclosure key={key}>
        {({ open }) => (
          <>
            <div className="flex items-center w-full justify-between">
              <Disclosure.Button
                className={classNames(
                  'pl-2 flex items-center shrink-0 my-1 grow',
                  open ? 'text-indigo-800 dark:text-indigo-200 ' : 'text-slate-800 dark:text-slate-200'
                )}
              >
                <div className="rounded-l-md flex grow items-center">
                  <div className="flex flex-col items-start grow">
                    <div className="text-sm flex items-center justify-start text-left mb-1 w-full">
                      {open ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-4 h-4 text-gray-400"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                      )}
                      <div
                        className={classNames(
                          open ? 'border-indigo-300' : 'border-slate-300',
                          'border rounded-md flex grow items-center p-2 gap-2'
                        )}
                      >
                        <img src={icons[item.icon]} alt="Значок" className="h-4 w-4" />
                        <span className="flex flex-wrap items-center">{item.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Button>
              <Menu as="div" className="relative">
                <Menu.Button>
                  <div className="flex-shrink-0">
                    <div className="w-6 h-6 bg-white dark:bg-gray-800 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                      <span className="sr-only">Открыть меню</span>
                      <svg
                        className="w-4 h-4"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                      </svg>
                    </div>
                  </div>
                </Menu.Button>
                <Menu.Items className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                  <div className="px-1 py-1 ">
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={`/info/proxy-list/group/${item.id}/edit`}
                          className={`${
                            active ? 'bg-indigo-500 text-white' : 'text-gray-900 dark:text-gray-100'
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
                          className={`${
                            active ? 'bg-indigo-500 text-white' : 'text-gray-900 dark:text-gray-100'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          Удалить
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>

            <Disclosure.Panel className={classNames(`ml-${count + 1}`, 'text-gray-500 my-1')}>
              {item.children?.length > 0 ? (
                item.children.map((item, key) => sidebarLink(item, key, count))
              ) : (
                <p className="border rounded-md flex grow items-center p-2 border-slate-300 text-sm w-full rounded-md shrink-0 gap-2">
                  <img src={icons[item.icon]} alt="Значок" className="h-4 w-4 mt-1" />
                  <span>{item.title}</span>
                </p>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ) : (
      <div className={classNames(`pl-${count + 3}`, 'flex items-center w-full justify-between')}>
        <p
          title={item.subtitle !== '' ? `${item.title} ${item.subtitle}` : item.title}
          key={key}
          className="border rounded-md flex grow items-center p-2 border-slate-300 text-sm justify-start text-left mb-1 text-slate-800 dark:text-slate-200 gap-2"
        >
          <img src={icons[item.icon]} alt="Значок" className="h-4 w-4 mt-1" />
          <span>
            {item.title} {item.subtitle}
          </span>
        </p>
        <Menu as="div" className="relative">
          <Menu.Button>
            <div className="flex-shrink-0">
              <div className="w-6 h-6 bg-white dark:bg-gray-800 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                <span className="sr-only">Открыть меню</span>
                <svg
                  className="w-4 h-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z" />
                </svg>
              </div>
            </div>
          </Menu.Button>
          <Menu.Items className="absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <a
                    href={`/info/proxy-list/group/${item.id}/edit`}
                    className={`${
                      active ? 'bg-indigo-500 text-white' : 'text-gray-900 dark:text-gray-100'
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
                    className={`${
                      active ? 'bg-indigo-500 text-white' : 'text-gray-900 dark:text-gray-100'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                  >
                    Удалить
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Menu>
      </div>
    );
  };

  return (
    <ContentLayoutWithSidebar
      boxed="true"
      title="База знаний"
      breadcrumbs={breadcrumbs}
      header="База знаний"
      sidebarSize="medium"
      fullHeight="true"
    >
      <ContentLayoutWithSidebar.Sidebar>
        <div className="p-3">{courtTree.map((item, key) => sidebarLink(item, key, 0))}</div>
      </ContentLayoutWithSidebar.Sidebar>
      <ContentLayoutWithSidebar.Body color="white" />
    </ContentLayoutWithSidebar>
  );
};

export default Faq;
