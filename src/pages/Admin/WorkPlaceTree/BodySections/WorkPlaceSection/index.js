import React, {useState} from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import {Menu} from '@headlessui/react';
import PropTypes from "prop-types";
import BodySection from '../BodySection';
import TreeView from '../../../../../components/TreeView';
import BasicButton from '../../../../../components/BasicButton';
import Typography from '../../../../../components/Typography';
import {softwareTree} from '../../../../../@mock/SampleData';


const WorkPlaceSection = ({selectedNode, devicesTree, error}) => {

    const [selectedTab, setSelectedTab] = useState('workplaceInfo');
    const [selectedDeviceNode, setSelectedDeviceNode] = useState(null);
    const [selectedSoftwareNode, setSelectedSoftwareNode] = useState(null);

    const sectionsTabs = [
        {name: 'Информация', value: 'workplaceInfo', onClick: null},
        {name: 'Устройства', value: 'workplaceHardware', onClick: null},
        {name: 'ПО', value: 'workplaceSoftware', onClick: null},
        {name: 'Сеть', value: 'workplaceNetwork', onClick: null},
    ];

    return (
        <BodySection tabs={sectionsTabs} selectedTab={selectedTab} setSelectedTab={setSelectedTab}>
            {  /* eslint-disable-next-line */}
            {selectedTab === 'workplaceInfo' ?

                <>
                    {  /* eslint-disable-next-line */}
                    <div className='pb-3 mb-2 flex items-center gap-2 border-b border-gray-300 dark:border-gray-600'>
                        <BasicButton size='small' type='button' variant='primary'>
                            Редактировать информацию
                        </BasicButton>
                    </div>
                    <PerfectScrollbar options={{wheelPropagation: false}}>
                        <div className='flex flex-col gap-3 items-start p-3'>
                            {selectedNode ?
                                <Typography variant='h5' classname='mb-2'>{selectedNode.name}</Typography> : ""}
                            <Typography variant='caption' classname='mb-2'>Пользователь рабочего места: Иванов
                                И.И.</Typography>
                            {selectedNode.phone_worck && <Typography variant='caption' classname='mb-2'>
                                <span>Номер телефона:</span>
                                <span className='ml-1'>{selectedNode.phone_worck}</span></Typography>}
                            {selectedNode.alarm_button && <Typography variant='caption' classname='mb-2'>
                                <span>Номер тревожной кнопки:</span>
                                <span className='ml-1'>{selectedNode.alarm_button}</span></Typography>}
                            <Typography variant='h6' classname='mb-2'>Примечание</Typography>
                            <Typography variant='caption' classname='mb-2'>Первое рабочее место от входа в кабинет, по
                                часовой стрелке</Typography>
                        </div>
                    </PerfectScrollbar></>

                /* eslint-disable-next-line */
                : selectedTab === 'workplaceHardware' ?
                    <>
                        <div
                            className='pb-3 mb-2 flex items-center gap-2 border-b border-gray-300 dark:border-gray-600'>
                            <BasicButton size='small' type='button' variant='basic'>
                                <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24'
                                     width='24px'
                                     fill='currentColor'
                                     className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                                    <path d='M0 0h24v24H0z' fill='none'/>
                                    <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/>
                                </svg>
                                Добавить
                            </BasicButton>
                            <BasicButton size='small' type='button' variant='basic'>Свойства
                            </BasicButton>
                            <BasicButton size='small' type='button' variant='basic'>Переместить
                            </BasicButton>
                            <Menu as='div' className='relative'>
                                <Menu.Button>
                                    <div className='inline-flex rounded-lg items-center justify-center border focus:outline-none focus:ring-2 py-1 px-2 text-sm shadow-sm bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-indigo-500 disabled:border-gray-200 dark:disabled:border-gray-700 disabled:hover:border-gray-200 dark:disabled:hover:border-gray-700 disabled:text-gray-500 dark:disabled:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:hover:bg-gray-50 dark:disabled:hover:bg-gray-800 disabled:hover:cursor-not-allowed'>
                                        Сортировка
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
                                                    } group flex w-full rounded-md p-2 py-2 text-sm text-left`}
                                                >
                                                    Наименование
                                                </button>
                                            )}
                                        </Menu.Item>
                                        <Menu.Item>
                                            {({active}) => (
                                                <button
                                                    type='button'
                                                    className={`${
                                                        active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                    } group flex w-full rounded-md p-2 py-2 text-sm text-left`}
                                                >
                                                    Инвентарный номер
                                                </button>
                                            )}
                                        </Menu.Item>
                                    </div>
                                </Menu.Items>
                            </Menu>
                        </div>
                        <PerfectScrollbar options={{wheelPropagation: false}}>
                            <TreeView data={devicesTree} handleOpen={(id) => id} count={0} error={error}
                                      selectedNode={selectedDeviceNode}
                                      setSelectedNode={(node) => setSelectedDeviceNode(node)}
                                      handleNameClick={(node) => node}/>
                        </PerfectScrollbar></>

                    /* eslint-disable-next-line */
                    : selectedTab === 'workplaceSoftware' ?
                        <>
                            <div
                                className='pb-3 mb-2 flex items-center gap-2 border-b border-gray-300 dark:border-gray-600'>
                                <BasicButton size='small' type='button' variant='basic'>
                                    <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24'
                                         width='24px'
                                         fill='currentColor'
                                         className='h-4 w-4 text-gray-500 dark:text-gray-600 mr-2'>
                                        <path d='M0 0h24v24H0z' fill='none'/>
                                        <path d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z'/>
                                    </svg>
                                    Добавить
                                </BasicButton>
                                <BasicButton size='small' type='button' variant='basic'>Свойства
                                </BasicButton>
                                <BasicButton size='small' type='button' variant='basic'>Переместить
                                </BasicButton>
                                <Menu as='div' className='relative'>
                                    <Menu.Button>
                                        <div className='inline-flex rounded-lg items-center justify-center border focus:outline-none focus:ring-2 py-1 px-2 text-sm shadow-sm bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-indigo-500 disabled:border-gray-200 dark:disabled:border-gray-700 disabled:hover:border-gray-200 dark:disabled:hover:border-gray-700 disabled:text-gray-500 dark:disabled:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:hover:bg-gray-50 dark:disabled:hover:bg-gray-800 disabled:hover:cursor-not-allowed'>
                                            Сортировка
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
                                                        } group flex w-full rounded-md p-2 py-2 text-sm text-left`}
                                                    >
                                                        Наименование
                                                    </button>
                                                )}
                                            </Menu.Item>
                                            <Menu.Item>
                                                {({active}) => (
                                                    <button
                                                        type='button'
                                                        className={`${
                                                            active ? 'bg-gray-100 text-gray-900 dark:text-gray-100' : 'text-gray-900 dark:text-gray-100'
                                                        } group flex w-full rounded-md p-2 py-2 text-sm text-left`}
                                                    >
                                                        Серийный номер
                                                    </button>
                                                )}
                                            </Menu.Item>
                                        </div>
                                    </Menu.Items>
                                </Menu>
                            </div>
                            <PerfectScrollbar options={{wheelPropagation: false}}>
                                <div className='p-2'>
                                    <Typography variant='label' classname='mb-2'>Kraftway Credo KC-51 инв. №:
                                        013607012</Typography>
                                    <TreeView data={softwareTree} handleOpen={(id) => id} count={0} error={error}
                                              selectedNode={selectedSoftwareNode}
                                              setSelectedNode={(node) => setSelectedSoftwareNode(node)}
                                              handleNameClick={(node) => node}/>
                                </div>

                            </PerfectScrollbar></>

                        /* eslint-disable-next-line */
                        : selectedTab === 'workplaceNetwork' ?
                            <>
                                <div
                                    className='pb-3 mb-2 flex items-center gap-2 border-b border-gray-300 dark:border-gray-600'>
                                    <BasicButton size='small' type='button' variant='primary'>
                                        Редактировать сеть
                                    </BasicButton>
                                </div>
                                <PerfectScrollbar options={{wheelPropagation: false}}>
                                    <div className='flex flex-col gap-1 items-start p-3'>
                                        <Typography variant='caption' classname='mb-2'>Номер сетевой розетки:
                                            111</Typography>
                                        <Typography variant='caption' classname='mb-2'>Сетевое имя компьютера:
                                            Computer</Typography>
                                        <div className='grid grid-cols-2 gap-3'>
                                            <Typography variant='caption' classname='mb-2'><span>IP в локальной сети:</span>
                                                <span className='ml-1'>{selectedNode.ip}</span></Typography>
                                        </div>
                                        <Typography variant='caption' classname='mb-2'>Прочее: </Typography>
                                    </div>
                                </PerfectScrollbar></>

                            : ''}
        </BodySection>
    );
};

export default WorkPlaceSection;

WorkPlaceSection.propTypes = {
    selectedNode: PropTypes.object,
    devicesTree: PropTypes.array,
    error: PropTypes.string
}