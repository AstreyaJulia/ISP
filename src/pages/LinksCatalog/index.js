import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { makeArrayFromObj } from '../../utils/makeArrayFromObj';
import ContentLayoutWithSidebar from '../pagesLayouts/ContentLayoutWithSidebar';
import useAuth from '../../hooks/useAuth';
import DeleteModal from '../../components/Modal/DeleteModal';
import { useDispatch, useSelector } from '../../store';
import { getGroups, getLinks, resetGroups, resetLinks } from '../../store/slices/linkscatalog';
import BasicButton from '../../components/BasicButton';
import ElementsDropdown from '../../components/ElementsDropdown';
import { PATH_INFO } from '../../routes/paths';
import LoadingContentSpinner from '../../components/LoadingContentSpinner';

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
    {title: 'Редактировать', disabled: false, icon: null, func: (id) => navigate(PATH_INFO.proxyList.group.client.edit(id)), divider: false},
    {title: '', disabled: false, icon: null, func: () => null, divider: true},
    {title: 'Удалить', disabled: false, icon: null, func: () => openModalHandle(), divider: false}
  ]

  const linksMenuItems = [
    {title: 'Редактировать', disabled: false, icon: null, func: (id) => navigate(PATH_INFO.proxyList.link.client.edit(id)), divider: false},
    {title: '', disabled: false, icon: null, func: () => null, divider: true},
    {title: 'Удалить', disabled: false, icon: null, func: () => openModalHandle(), divider: false}
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
        <DeleteModal open={openDialog} setOpen={setOpenDialog} deleteOnClick={null} />
        <div className='p-4 h-full flex flex-col'>
          <div className='mb-4'>
            {user.sudo === 1 ? (
              <BasicButton size='medium' type='button' onClick={() => navigate(PATH_INFO.proxyList.group.client.new)} variant='primary'>Добавить
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
            {isGroupLoading === 'true' ? <LoadingContentSpinner classname='w-full h-full px-6 pt-5 pb-6 flex flex-col items-center justify-center' /> : (
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
              <BasicButton size='medium' type='button' onClick={() => navigate(PATH_INFO.proxyList.link.client.new)} variant='primary'>Добавить
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
                  {user.sudo === 1 ?
                      <ElementsDropdown menuItems={linksMenuItems} />
                   : null}
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
            {isLinkLoading === 'true' ? <LoadingContentSpinner classname='w-full h-full px-6 pt-5 pb-6 flex flex-col items-center justify-center' /> : (
              ''
            )}
          </div>
        </div>
      </ContentLayoutWithSidebar.Body>
    </ContentLayoutWithSidebar>
  );
};

export default LinksCatalog;
