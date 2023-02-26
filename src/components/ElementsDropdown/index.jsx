import React from 'react';
import PropTypes from 'prop-types';
import { Menu } from '@headlessui/react';
import { classNames } from '../../utils/classNames';

const ElementsDropdown = ({ menuItems }) => (<Menu as='div' className='relative'>
    <Menu.Button>
      <div className='flex-shrink-0 px-2'>
        <div
          className='w-8 h-8 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
          <span className='sr-only'>Открыть меню</span>
          <svg
            className='w-5 h-5'
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
      className='absolute right-0 z-50 mt-2 w-48 origin-top-right rounded-md bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
      {menuItems.map((menuItem, key) =>
        <div key={key} className={menuItem.divider === false ? 'p-1' : ''}>
        <Menu.Item>
        {({ active }) => (
          menuItem.divider === false ?
            <button
              disabled={menuItem.disabled}
              type='button'
              onClick={menuItem.func}
              className={classNames(active ? 'bg-gray-200 dark:bg-gray-700' : '', menuItem.disabled ? 'text-gray-300 dark:text-gray-700' : 'text-gray-900 dark:text-gray-100',  'group flex w-full items-center rounded-md px-2 py-2 text-sm')}>
            {menuItem.icon ? menuItem.icon : ''}{menuItem.title}
          </button> : <span className='p-0 m-0 flex items-center border-t border-gray-200 dark:border-gray-700'/>
        )}
      </Menu.Item>
        </div>)}
    </Menu.Items>
  </Menu>);

export default ElementsDropdown;
