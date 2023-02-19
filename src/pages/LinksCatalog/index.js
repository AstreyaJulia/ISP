import React, { useEffect, useState } from 'react';
import { Menu } from '@headlessui/react';
import { Link, useNavigate } from 'react-router-dom';
import { makeArrayFromObj } from '../../utils/makeArrayFromObj';
import ContentLayoutWithSidebar from '../pagesLayouts/ContentLayoutWithSidebar';
import useAuth from '../../hooks/useAuth';
import DeleteModal from './DeleteModal';
import { useDispatch, useSelector } from '../../store';
import { getGroups, getLinks, resetGroups, resetLinks } from '../../store/slices/linkscatalog';
import BasicButton from '../../components/BasicButton';
import ElementsDropdown from '../../components/ElementsDropdown';

const breadcrumbs = [{ name: 'Каталог ссылок', href: '#', current: true }];

const LinksCatalog = () => {
  /** Состояние пользователя */
  const { initialize, user } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  /** Стейты */
  const [selectedGroup, setSelectedGroup] = useState(null); // Выбранная группа
  const [openDialog, setOpenDialog] = useState(false); // модал удаления

  const dispatch = useDispatch();
  const { isGroupLoading, isLinkLoading, errorGroups, errorLinks, groups, links } = useSelector(
    (state) => state.linkscatalog,
  );

  /** Нажатие на группу
   * @param event
   * @param key
   */
  const groupClick = (event, key) => {
    event.preventDefault();
    dispatch(getLinks(key));
    setSelectedGroup(key - 1);
  };

  useEffect(() => {
    dispatch(getGroups());
    return () => {
      setSelectedGroup(null);
      dispatch(resetLinks());
      dispatch(resetGroups());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  const groupsMenuItems = [
    {title: 'Редактировать', icon: null, func: (id) => navigate(`/info/proxy-list/group/${id}/edit`), divider: false},
    {title: '', icon: null, func: () => null, divider: true},
    {title: 'Удалить', icon: null, func: () => openModalHandle(), divider: false}
  ]

  const handleKeyDown = (evt) => {
    if (evt.keyCode === 13) {
      focus();
    }
  };

  const focus = (evt) => evt.target.focus;

  const openModalHandle = () => setOpenDialog(true);

  return (
    <ContentLayoutWithSidebar
      boxed='true'
      title='Каталог ссылок'
      breadcrumbs={breadcrumbs}
      header='Каталог ссылок'
      sidebarSize='large'
      fullHeight='true'
    >
      <ContentLayoutWithSidebar.Sidebar>
        <DeleteModal open={openDialog} setOpen={setOpenDialog} />
        <div className='p-4 h-full flex flex-col'>
          <div className='mb-4'>
            {user.sudo === 1 ? (
              <BasicButton size='medium' type='button' onClick={() => navigate('group/new')} variant='primary'>Добавить
                группу</BasicButton>
            ) : null}
          </div>
          <div className='flex flex-col gap-2 grow'>
            {isGroupLoading === 'false' && groups.length === 0 && !errorGroups ? (
              <div className='flex flex-col grow justify-center'>
                <div
                  className='w-full h-full border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md px-6 pt-5 pb-6 flex flex-col items-center justify-center'>
                  <svg
                    className='mx-auto h-12 w-12 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      vectorEffect='non-scaling-stroke'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
                    />
                  </svg>
                  <h3 className='mt-2 text-sm font-medium text-gray-900 dark:text-gray-100'>Нет элементов</h3>
                  <p className='mt-1 text-sm text-gray-500'>Создайте группу.</p>
                </div>
              </div>
            ) : (
              ''
            )}
            {isGroupLoading === 'false' && errorGroups ? (
              <div className='flex flex-col grow justify-center'>
                <div
                  className='w-full h-full border-2 border-red-300 dark:border-red-700 border-dashed rounded-md px-6 pt-5 pb-6 flex flex-col items-center justify-center'>
                  <h3 className='mt-2 text-sm font-medium text-red-900 dark:text-red-100'>
                    Ошибка получения списка групп.
                  </h3>
                </div>
              </div>
            ) : (
              ''
            )}
            {isGroupLoading === 'true' ? (
              <div className='flex flex-col grow justify-center'>
                <div className='w-full h-full px-6 pt-5 pb-6 flex flex-col items-center justify-center'>
                  <svg
                    className='w-12 h-12 animate-spin fill-indigo-600 dark:fill-indigo-300 '
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.2'
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                    />
                    <path d='M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z' />
                  </svg>
                </div>
              </div>
            ) : (
              ''
            )}
            {groups.map((group) =>
              (group.name_href !== 'blacklist' && user) || (group.name_href === 'blacklist' && user.sudo === 1) ? (
                <div key={group.id} className='flex items-center w-full flex-shrink-0'>
                  <div
                    onClick={(event) => groupClick(event, group.id)}
                    onKeyDown={handleKeyDown}
                    role='link'
                    tabIndex={group.id}
                    className={[
                      'flex-grow rounded-lg border border-gray-300 dark:border-gray-700 bg-white hover:cursor-pointer dark:bg-gray-900 p-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 dark:hover:border-gray-600',
                      group.id - 1 === selectedGroup ? 'ring-2 ring-indigo-500 bg-indigo-100 border-gray-400' : '',
                    ].join(' ')}
                  >
                    <div className='flex-shrink-0'>
                      <span className='inline-flex items-center justify-center rounded-full h-8 w-8 bg-indigo-500/30'>
                        <span className='font-medium leading-none text-sm text-indigo-700 dark:text-indigo-300'>
                          {group.menuindex}
                        </span>
                      </span>
                    </div>
                    <div className='flex min-w-0'>
                      <a href='/' className='focus:outline-none'>
                        <span className='text-sm font-medium text-gray-800 dark:text-gray-200'>{group.name_href}</span>
                      </a>
                    </div>
                  </div>
                  {user.sudo === 1 ?
                    <ElementsDropdown menuItems={groupsMenuItems} />
                   : null}
                </div>
              ) : (
                ''
              ),
            )}
          </div>
        </div>
      </ContentLayoutWithSidebar.Sidebar>
      <ContentLayoutWithSidebar.Body color='white'>
        <div className='p-4 h-full flex flex-col'>
          <div className='mb-4'>
            {user.sudo === 1 ? (
              <BasicButton size='medium' type='button' onClick={() => navigate('link/new')} variant='primary'>Добавить
                ссылку</BasicButton>
            ) : null}
          </div>
          <div className={[selectedGroup != null ? '' : 'h-full', 'flex flex-col gap-2 grow'].join(' ')}>
            {links.length > 0 && !errorLinks ? (
              makeArrayFromObj(links ?? []).map((link) => (
                <div key={link.id} className='w-full flex flex-shrink-0 items-center'>
                  <a href={link.href} target='_blank' rel='noreferrer' className='flex items-center flex-grow'>
                    <div
                      className={[
                        'rounded-lg flex-grow border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 p-3 shadow-sm flex items-center space-x-3 hover:border-gray-400 dark:hover:border-gray-600',
                      ].join(' ')}
                    >
                      <div className='flex-shrink-0'>
                        <span className='inline-flex items-center justify-center rounded-full h-8 w-8 bg-indigo-500/30'>
                          <span className='font-medium leading-none text-sm text-indigo-700 dark:text-indigo-300'>
                            {link.menuindex}
                          </span>
                        </span>
                      </div>
                      <div className='flex-1 min-w-0'>
                        <p className='focus:outline-none'>
                          <span className='text-sm font-medium text-gray-800 dark:text-gray-200'>{link.name_href}</span>
                        </p>
                      </div>
                    </div>
                  </a>
                  {user.sudo === 1 ? (
                    <Menu as='div' className='relative'>
                      <Menu.Button>
                        <div className='flex-shrink-0 px-2'>
                          <div
                            className='w-8 h-8 bg-white dark:bg-gray-900 inline-flex items-center justify-center text-gray-400 rounded-full bg-transparent hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
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
                        className='absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                        <div className='px-1 py-1 '>
                          <Menu.Item>
                            {({ active }) => (
                              <a
                                href={`/info/proxy-list/group/${link.id}/edit`}
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
                                onClick={openModalHandle}
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
                  ) : null}
                </div>
              ))
            ) : (
              <div className='text-center flex grow flex-col items-center justify-center'>
                <div
                  className='w-full h-full border-2 border-gray-300 dark:border-gray-700 border-dashed rounded-md px-6 pt-5 pb-6 flex flex-col items-center justify-center'>
                  <svg
                    className='mx-auto h-12 w-12 text-gray-400'
                    fill='none'
                    viewBox='0 0 24 24'
                    stroke='currentColor'
                    aria-hidden='true'
                  >
                    <path
                      vectorEffect='non-scaling-stroke'
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      strokeWidth='2'
                      d='M9 13h6m-3-3v6m-9 1V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z'
                    />
                  </svg>
                  <h3 className='mt-2 text-sm font-medium text-gray-900 dark:text-gray-100'>Нет элементов</h3>
                  <p className='mt-1 text-sm text-gray-500'>Выберите группу в списке слева.</p>
                </div>
              </div>
            )}
            {isLinkLoading === 'false' && errorLinks ? (
              <div className='flex flex-col grow justify-center'>
                <div
                  className='w-full h-full border-2 border-red-300 dark:border-red-700 border-dashed rounded-md px-6 pt-5 pb-6 flex flex-col items-center justify-center'>
                  <h3 className='mt-2 text-sm font-medium text-red-900 dark:text-red-100'>
                    Ошибка получения списка ссылок.
                  </h3>
                </div>
              </div>
            ) : (
              ''
            )}
            {isLinkLoading === 'true' ? (
              <div className='flex flex-col grow justify-center'>
                <div className='w-full h-full px-6 pt-5 pb-6 flex flex-col items-center justify-center'>
                  <svg
                    className='w-12 h-12 animate-spin fill-indigo-600 dark:fill-indigo-300 '
                    viewBox='0 0 24 24'
                    xmlns='http://www.w3.org/2000/svg'
                  >
                    <path
                      opacity='0.2'
                      fillRule='evenodd'
                      clipRule='evenodd'
                      d='M12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19ZM12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
                    />
                    <path d='M2 12C2 6.47715 6.47715 2 12 2V5C8.13401 5 5 8.13401 5 12H2Z' />
                  </svg>
                </div>
              </div>
            ) : (
              ''
            )}
          </div>
        </div>
      </ContentLayoutWithSidebar.Body>
    </ContentLayoutWithSidebar>
  );
};

export default LinksCatalog;
