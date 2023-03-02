import React, {useEffect, useState} from 'react';
import {Menu} from '@headlessui/react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {classNames} from '../../utils/classNames';
import ContentLayoutWithSidebar from '../pagesLayouts/ContentLayoutWithSidebar';
import buildingAdd from '../../assets/images/icons/building_add.png';
import floorAdd from '../../assets/images/icons/floor_add.png';
import doorAdd from '../../assets/images/icons/door_add.png';
import desktopAdd from '../../assets/images/icons/desktop_add.png';

import useAuth from '../../hooks/useAuth';
import axios from '../../utils/axios';
import apiErrorHelper from '../../utils/apiErrorHelper';
import TreeView from '../../components/TreeView';
import {devicesTree} from "../../@mock/SampleData";

const Workplaces = () => {

    /** Состояние пользователя */
    const {initialize} = useAuth();
    const [selectedTab, setSelectedTab] = useState('devices');
    const [courtTree, setCourtTree] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        initialize();
        getWorkplaceRoot();
        // eslint-disable-next-line
    }, []);

    const getWorkplaceRoot = async () => {
        setIsLoading(true)
        await axios
            .get('/buildingstructure')
            .then((res) => {
                setCourtTree(res.data.data)
                setIsLoading(false)
            })
            .catch((error) => {
                apiErrorHelper(error)
                setError(error)
            })
    }

    const getWorkplaceNode = async (node) => {
        setIsLoading(true)
        await axios
            .get(`/buildingstructure/${node.id}`)
            // eslint-disable-next-line
            .then((res) => {
                node.children = res.data.data
                setIsLoading(false)
            })
            .catch((error) => {
                apiErrorHelper(error)
                setError(error)
            })
    }

    return (
        <ContentLayoutWithSidebar
            boxed='true'
            title='Управление рабочими местами'
            header='Управление рабочими местами'
            sidebarSize='large'
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

                                            <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24'
                                                 width='24px'
                                                 fill='currentColor'
                                                 className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                                                <path d='M0 0h24v24H0V0z' fill='none'/>
                                                <path
                                                    d='M13 7h-2v4H7v2h4v4h2v-4h4v-2h-4V7zm-1-5C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z'/>
                                            </svg>

                                            <span>Добавить</span>
                                        </div>
                                    </div>
                                </Menu.Button>
                                <Menu.Items
                                    className='absolute right-0 z-50 mt-2 w-40 origin-top-right divide-y divide-gray-100 dark:divide-gray-700 rounded-md bg-white dark:bg-gray-900 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
                                    <div className='px-1 py-1 '>
                                        <Menu.Item>
                                            {({active}) => (
                                                <button
                                                    type='button'
                                                    className={`${
                                                        active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                    } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                                                >
                                                    <img src={buildingAdd} alt='Значок' className='h-4 w-4 mr-2'/>
                                                    Здание
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className='px-1 py-1'>
                                        <Menu.Item>
                                            {({active}) => (
                                                <button
                                                    type='button'
                                                    className={`${
                                                        active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                    } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                                                >
                                                    <img src={floorAdd} alt='Значок' className='h-4 w-4 mr-2'/>
                                                    Этаж
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>

                                    <div className='px-1 py-1'>
                                        <Menu.Item>
                                            {({active}) => (
                                                <button
                                                    type='button'
                                                    className={`${
                                                        active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                    } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                                                >
                                                    <img src={doorAdd} alt='Значок' className='h-4 w-4 mr-2'/>
                                                    Помещение
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                    <div className='px-1 py-1'>
                                        <Menu.Item>
                                            {({active}) => (
                                                <button
                                                    type='button'
                                                    className={`${
                                                        active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                    } group flex w-full items-center rounded-md p-2 py-2 text-sm`}
                                                >
                                                    <img src={desktopAdd} alt='Значок' className='h-4 w-4 mr-1'/>
                                                    Рабочее место
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Menu>
                        </div>
                        <div
                            className='p-1 h-full flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600 rounded-lg gap-2 py-3 px-2'>
                            <PerfectScrollbar options={{wheelPropagation: false}}>
                                <TreeView data={courtTree} handleOpen={(id) => getWorkplaceNode(id)} count={0}
                                          isLoading={isLoading}/>
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
                            <PerfectScrollbar options={{wheelPropagation: false}}>
                                <TreeView data={devicesTree} handleOpen={(id) => id} count={0} error={error}/>
                            </PerfectScrollbar>
                        </div>
                    </div>
                </div>
            </ContentLayoutWithSidebar.Body>
        </ContentLayoutWithSidebar>
    );
};

export default Workplaces;
