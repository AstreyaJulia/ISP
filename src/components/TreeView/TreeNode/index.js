import React, { useState } from 'react';
import { Menu } from '@headlessui/react';
import TreeView from '../index';
import { classNames } from '../../../utils/classNames';
import workplacesTreeIcons from "../workplacesTreeIcons";

const TreeNode = ({ node, handleOpen, handleNameClick, count, isLoading, error }) => {

  const { id, children, name, icon, childNodes, brand, model } = node;
  const [open, setOpen] = useState(false);

  const handleClick = (id) => {
    setOpen(!open);
    if (handleOpen) handleOpen(id);
  };

  return (
    <>
      <div className={classNames(count !== 0 ? `pl-${count}` : '', 'flex flex-col')}>

        <div className='flex items-center justify-between p-1'>
          <div className='flex items-center'>
            {childNodes === 'true' ? <button type='button' onClick={() => handleClick(node)} className='p-2'>
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
            </button> : ''}
            <button type='button' className={classNames(childNodes === 'false' ? 'ml-8' : '', 'flex items-center p-2')}>
              <img src={workplacesTreeIcons(icon) } alt='Значок'
                   className='h-4 w-4' />
              {name ? <span className='text-sm text-gray-700 dark:text-gray-300 ml-2'>{name}</span> : ''}
              {brand || model ? <span className='text-sm text-gray-700 dark:text-gray-300 ml-2'>{brand} {model}</span> : ''}
            </button>
          </div>

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
                      href={`/info/proxy-list/group/${id}/edit`}
                      className={`${
                        active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                      } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    >
                      <svg xmlns='http://www.w3.org/2000/svg' height='24px'
                           viewBox='0 0 24 24' width='24px'
                           fill='currentColor'
                           className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
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
                        href={`/info/proxy-list/group/${id}/edit`}
                        className={`${
                          active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' height='24px'
                             viewBox='0 0 24 24' width='24px'
                             fill='currentColor'
                             className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                          <rect fill='none' height='24' width='24' />
                          <path
                            d='M5,9l1.41,1.41L11,5.83V22H13V5.83l4.59,4.59L19,9l-7-7L5,9z' />
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
                        href={`/info/proxy-list/group/${id}/edit`}
                        className={`${
                          active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                        } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                      >
                        <svg xmlns='http://www.w3.org/2000/svg' height='24px'
                             viewBox='0 0 24 24' width='24px'
                             fill='currentColor'
                             className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                          <rect fill='none' height='24' width='24' />
                          <path
                            d='M19,15l-1.41-1.41L13,18.17V2H11v16.17l-4.59-4.59L5,15l7,7L19,15z' />
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
                      <svg xmlns='http://www.w3.org/2000/svg' height='24px'
                           viewBox='0 0 24 24' width='24px'
                           fill='currentColor'
                           className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
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

        {open ? <TreeView data={children} count={count + 1} handleOpen={handleOpen} /> : ''}
      </div>

    </>
  );
};

export default TreeNode;