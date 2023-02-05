import React, { useEffect, useState } from 'react';
import { Disclosure, Menu, Tab } from '@headlessui/react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { classNames } from '../../utils/classNames';
import ContentLayoutWithSidebar from '../pagesLayouts/ContentLayoutWithSidebar';
import { courtTree, devicesTree } from '../../@mock/SampleData';
import building from '../../assets/images/icons/building.png';
import buildingAdd from '../../assets/images/icons/building_add.png';
import floor from '../../assets/images/icons/floor.png';
import floorAdd from '../../assets/images/icons/floor_add.png';
import door from '../../assets/images/icons/door.png';
import doorAdd from '../../assets/images/icons/door_add.png';
import desktop from '../../assets/images/icons/desktop.png';
import desktopAdd from '../../assets/images/icons/desktop_add.png';
import powersupply from '../../assets/images/icons/power-supply.png';
import drive from '../../assets/images/icons/drive.png';
import memory from '../../assets/images/icons/memory.png';
import processor from '../../assets/images/icons/processor.png';
import motherboard from '../../assets/images/icons/motherboard.png';
import computercase from '../../assets/images/icons/computer_case.png';
import cooler from '../../assets/images/icons/cooler.png';

import useAuth from '../../hooks/useAuth';

const Workplaces = () => {
  const breadcrumbs = [{ name: 'Управление рабочими местами', href: '', current: true }];

  /** Состояние пользователя */
  const { initialize } = useAuth();
  const [selectedTab, setSelectedTab] = useState('devices');
  const [selectedWorkplace, setSelectedWorkplace] = useState();
  const [selectedDevice, setSelectedDevice] = useState();
  const [selectedSoftware, setSelectedSoftware] = useState();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const icons = {
    building,
    floor,
    door,
    desktop,
    powersupply,
    drive,
    memory,
    processor,
    motherboard,
    computercase,
    cooler,
  };

  const sidebarLink = (item, key, count) => {
    count += 1;

    return item.children?.length > 0 ? (
      <Disclosure key={key}>
        {({ open }) => (
          <>
            <div className='flex items-center w-full justify-between'>
              <Disclosure.Button
                className='pl-2 flex items-center shrink-0 my-1 grow text-slate-800 dark:text-slate-200'
              >
                <div className='rounded-l-md flex grow items-center'>
                  <div className='flex flex-col items-start grow'>
                    <div className='text-sm flex items-center justify-start text-left w-full'>
                      {open ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-4 h-4 text-gray-400'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-4 h-4 text-gray-400'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      )}
                      <div
                        className='flex grow items-center p-1 gap-2'
                      >
                        <img src={icons[item.icon]} alt='Значок' className='h-4 w-4' />
                        <span className='flex flex-wrap items-center'>{item.title}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Button>
              <Menu as='div' className='relative'>
                <Menu.Button>
                  <div className='flex-shrink-0'>
                    <div
                      className='w-6 h-6 bg-white dark:bg-gray-800 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Открыть меню</span>
                      <svg
                        className='w-4 h-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                      </svg>
                    </div>
                  </div>
                </Menu.Button>
                <Menu.Items
                  className='absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='px-1 py-1 '>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={`/info/proxy-list/group/${item.id}/edit`}
                          className={`${
                            active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                               fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                            <path d='M0 0h24v24H0V0z' fill='none' />
                            <path
                              d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z' />
                          </svg>
                          Редактировать
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div>
                    <div className='px-1 py-1 '>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={`/info/proxy-list/group/${item.id}/edit`}
                            className={`${
                              active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                                 fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                              <rect fill='none' height='24' width='24' />
                              <path d='M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z' />
                            </svg>
                            Выше
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className='px-1 py-1 '>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={`/info/proxy-list/group/${item.id}/edit`}
                            className={`${
                              active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                                 fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                              <rect fill='none' height='24' width='24' />
                              <path d='M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z' />
                            </svg>
                            Ниже
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </div>

                  <div className='px-1 py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type='button'
                          className={`${
                            active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                               fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                            <path d='M0 0h24v24H0V0z' fill='none' />
                            <path
                              d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z' />
                          </svg>
                          Удалить
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>

            <Disclosure.Panel className={classNames(`ml-${count + 1}`, 'text-gray-500')}>
              {item.children?.length > 0 ? (
                item.children.map((item, key) => sidebarLink(item, key, count))
              ) : (
                <p className='flex grow items-center p-1 text-sm w-full shrink-0 gap-2 cursor-pointer'>
                  <img src={icons[item.icon]} alt='Значок' className='h-4 w-4 mt-1' />
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
          className='flex grow items-center p-2 text-sm justify-start text-left mb-1 text-slate-800 dark:text-slate-200 gap-2'
        >
          <img src={icons[item.icon]} alt='Значок' className='h-4 w-4' />
          <span>
            {item.title} {item.subtitle}
          </span>
        </p>
        <Menu as='div' className='relative'>
          <Menu.Button>
            <div className='flex-shrink-0'>
              <div
                className='w-6 h-6 bg-white dark:bg-gray-800 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <span className='sr-only'>Открыть меню</span>
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                </svg>
              </div>
            </div>
          </Menu.Button>
          <Menu.Items
            className='absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
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
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type='button'
                    className={`${
                      active ? 'bg-red-500 text-white' : 'text-gray-900 dark:text-gray-100'
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

  const deviceLink = (item, key, count) => {
    count += 1;

    return item.children?.length > 0 ? (
      <Disclosure key={key}>
        {({ open }) => (
          <>
            <div className='flex items-center w-full justify-between'>
              <Disclosure.Button
                className='pl-2 flex items-center shrink-0 my-1 grow text-slate-800 dark:text-slate-200'
              >
                <div className='rounded-l-md flex grow items-center'>
                  <div className='flex flex-col items-start grow'>
                    <div className='text-sm flex items-center justify-start text-left w-full'>
                      {open ? (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-4 h-4 text-gray-400'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M15 12H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      ) : (
                        <svg
                          xmlns='http://www.w3.org/2000/svg'
                          fill='none'
                          viewBox='0 0 24 24'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          className='w-4 h-4 text-gray-400'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z'
                          />
                        </svg>
                      )}
                      <div
                        className='flex grow items-center p-1 gap-2'
                      >
                        <img src={icons[item.icon]} alt='Значок' className='h-4 w-4' />
                        <span className='flex flex-wrap items-center'>{item.brand} {item.model}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </Disclosure.Button>
              <Menu as='div' className='relative'>
                <Menu.Button>
                  <div className='flex-shrink-0'>
                    <div
                      className='w-6 h-6 bg-white dark:bg-gray-800 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                      <span className='sr-only'>Открыть меню</span>
                      <svg
                        className='w-4 h-4'
                        xmlns='http://www.w3.org/2000/svg'
                        viewBox='0 0 20 20'
                        fill='currentColor'
                        aria-hidden='true'
                      >
                        <path
                          d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                      </svg>
                    </div>
                  </div>
                </Menu.Button>
                <Menu.Items
                  className='absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='px-1 py-1 '>
                    <Menu.Item>
                      {({ active }) => (
                        <a
                          href={`/info/proxy-list/group/${item.id}/edit`}
                          className={`${
                            active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                          } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                               fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                            <path d='M0 0h24v24H0V0z' fill='none' />
                            <path
                              d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z' />
                          </svg>
                          Редактировать
                        </a>
                      )}
                    </Menu.Item>
                  </div>
                  <div>
                    <div className='px-1 py-1 '>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={`/info/proxy-list/group/${item.id}/edit`}
                            className={`${
                              active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                                 fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                              <rect fill='none' height='24' width='24' />
                              <path d='M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z' />
                            </svg>
                            Выше
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                    <div className='px-1 py-1 '>
                      <Menu.Item>
                        {({ active }) => (
                          <a
                            href={`/info/proxy-list/group/${item.id}/edit`}
                            className={`${
                              active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                            } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                          >
                            <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                                 fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                              <rect fill='none' height='24' width='24' />
                              <path d='M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z' />
                            </svg>
                            Ниже
                          </a>
                        )}
                      </Menu.Item>
                    </div>
                  </div>

                  <div className='px-1 py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type='button'
                          className={`${
                            active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                               fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                            <path d='M0 0h24v24H0V0z' fill='none' />
                            <path
                              d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z' />
                          </svg>
                          Удалить
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>

            <Disclosure.Panel className={classNames(`ml-${count + 1}`, 'text-gray-500')}>
              {item.children?.length > 0 ? (
                item.children.map((item, key) => deviceLink(item, key, count))
              ) : (
                <p className='flex grow items-center p-1 text-sm w-full shrink-0 gap-2 cursor-pointer'>
                  <img src={icons[item.icon]} alt='Значок' className='h-4 w-4 mt-1' />
                  <span>{item.brand} {item.model}</span>
                </p>
              )}
            </Disclosure.Panel>
          </>
        )}
      </Disclosure>
    ) : (
      <div className={classNames(`pl-${count + 3}`, 'flex items-center w-full justify-between')}>
        <p
          key={key}
          className='flex grow items-center p-2 text-sm justify-start text-left mb-1 text-slate-800 dark:text-slate-200 gap-2'
        >
          <img src={icons[item.icon]} alt='Значок' className='h-4 w-4' />
          <span>
            {item.brand} {item.model}
          </span>
        </p>
        <Menu as='div' className='relative'>
          <Menu.Button>
            <div className='flex-shrink-0'>
              <div
                className='w-6 h-6 bg-white dark:bg-gray-800 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                <span className='sr-only'>Открыть меню</span>
                <svg
                  className='w-4 h-4'
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                  aria-hidden='true'
                >
                  <path
                    d='M10 6a2 2 0 110-4 2 2 0 010 4zM10 12a2 2 0 110-4 2 2 0 010 4zM10 18a2 2 0 110-4 2 2 0 010 4z' />
                </svg>
              </div>
            </div>
          </Menu.Button>
          <Menu.Items
            className='absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
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
            <div className='px-1 py-1'>
              <Menu.Item>
                {({ active }) => (
                  <button
                    type='button'
                    className={`${
                      active ? 'bg-red-500 text-white' : 'text-gray-900 dark:text-gray-100'
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
      boxed='true'
      title='Управление рабочими местами'
      breadcrumbs={breadcrumbs}
      header='Управление рабочими местами'
      sidebarSize='medium'
      fullHeight='true'
    >
      <ContentLayoutWithSidebar.Sidebar>
        <div className='p-2 h-full'>
          <div className='p-1 h-full flex flex-col'>
            <div className='flex gap-2 items-center pb-2 mb-2 border-b border-b-transparent'>
              <Menu as='div' className='relative'>
                <Menu.Button>
                  <div className='flex-shrink-0'>
                    <div
                      className='p-2 text-sm inline-flex items-center justify-center bg-white dark:bg-gray-900 border border-gray-300 rounded-md shadow-sm leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:border-gray-600 dark:hover:bg-gray-700'>

                      <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                           fill='currentColor' className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                        <path d='M0 0h24v24H0V0z' fill='none' />
                        <path
                          d='M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z' />
                      </svg>

                      <span>Добавить</span>
                    </div>
                  </div>
                </Menu.Button>
                <Menu.Items
                  className='absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                  <div className='px-1 py-1 '>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type='button'
                          className={`${
                            active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={buildingAdd} alt='Значок' className='h-4 w-4 mr-1' />
                          Здание
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className='px-1 py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type='button'
                          className={`${
                            active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={floorAdd} alt='Значок' className='h-4 w-4 mr-1' />
                          Этаж
                        </button>
                      )}
                    </Menu.Item>
                  </div>

                  <div className='px-1 py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type='button'
                          className={`${
                            active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={doorAdd} alt='Значок' className='h-4 w-4 mr-1' />
                          Помещение
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                  <div className='px-1 py-1'>
                    <Menu.Item>
                      {({ active }) => (
                        <button
                          type='button'
                          className={`${
                            active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                          } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                        >
                          <img src={desktopAdd} alt='Значок' className='h-4 w-4 mr-1' />
                          Рабочее место
                        </button>
                      )}
                    </Menu.Item>
                  </div>
                </Menu.Items>
              </Menu>
            </div>
            <div
              className='p-1 h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg'>
              <PerfectScrollbar options={{ wheelPropagation: false }}>
                {courtTree.map((item, key) => sidebarLink(item, key, 0))}
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </ContentLayoutWithSidebar.Sidebar>
      <ContentLayoutWithSidebar.Body color='gray'>
        <div className='p-2 h-full'>
          <div className='p-1 h-full flex flex-col'>
            <div className='flex items-center pb-2 mb-2 border-b border-b-transparent'>
              <button
                /* eslint-disable-next-line */
                type='button'
                onClick={() => setSelectedTab('devices')}
                className={classNames('w-32 p-2 text-sm inline-flex items-center justify-center leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 focus:outline-none dark:border-gray-600 dark:hover:bg-gray-700', selectedTab === 'devices' ? 'bg-gray-200 rounded-lg' : '')}
              >
                Устройства
              </button>
              <button
                /* eslint-disable-next-line */
                type='button'
                onClick={() => setSelectedTab('software')}
                className={classNames('w-32 p-2 text-sm inline-flex items-center justify-center leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 focus:outline-none dark:border-gray-600 dark:hover:bg-gray-700', selectedTab === 'software' ? 'bg-gray-200 rounded-lg' : '')}
              >
                ПО
              </button>
              <button
                /* eslint-disable-next-line */
                type='button'
                onClick={() => setSelectedTab('network')}
                className={classNames('w-32 p-2 text-sm inline-flex items-center justify-center leading-4 font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 focus:outline-none dark:border-gray-600 dark:hover:bg-gray-700', selectedTab === 'network' ? 'bg-gray-200 rounded-lg' : '')}
              >
                Сеть
              </button>
            </div>
            <div
              className='p-1 h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg'>
              <PerfectScrollbar options={{ wheelPropagation: false }}>
                {devicesTree.map((item, key) => deviceLink(item, key, 0))}
              </PerfectScrollbar>
            </div>
          </div>
        </div>
      </ContentLayoutWithSidebar.Body>
    </ContentLayoutWithSidebar>
  );
};

export default Workplaces;
