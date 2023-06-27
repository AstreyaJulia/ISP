import React, {useState} from "react";
import PropTypes from 'prop-types';
import {CopyToClipboard} from "react-copy-to-clipboard";
import {useNavigate} from "react-router-dom";
import {PATH_ADMIN} from "../../../routes/paths";
import Card from "../../Card";
import {Avatar} from "../../Avatar";
import {getInitials, getInitialsOnly} from "../../../utils/getInitials";
import {getAvatarColor} from "../../../utils/getAvatarColor";
import {classNames} from "../../../utils/classNames";
import {getHighlightedText} from "../../../utils/getHighlightedText";
import ElementsDropdown from "../../ElementsDropdown";

const MenuItem = ({item, query, blockUser}) => {
    const [copied, setIsCopied] = useState('false');
    const navigate = useNavigate();

    const handleInfoCopy = () => {
        setIsCopied('true');
        setTimeout(() => {
            setIsCopied('false');
        }, 1500);
    };

    const userMenuItems = [
        {
            title: 'Редактировать',
            icon: <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                       fill='currentColor' className='h-4 w-4 mr-2'>
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path
                    d='M3 17.25V21h3.75L17.81 9.94l-3.75-3.75L3 17.25zM5.92 19H5v-.92l9.06-9.06.92.92L5.92 19zM20.71 5.63l-2.34-2.34c-.2-.2-.45-.29-.71-.29s-.51.1-.7.29l-1.83 1.83 3.75 3.75 1.83-1.83c.39-.39.39-1.02 0-1.41z' />
            </svg>,
            func: () => navigate(PATH_ADMIN.users.client.edit(item?.id)),
            disabled: false,
            divider: false,
        },
        {
            title: '',
            icon: null,
            func: () => null,
            disabled: false,
            divider: true,
        },
        {
            title: 'Заблокировать',
            icon: <svg xmlns='http://www.w3.org/2000/svg' height='24px' viewBox='0 0 24 24' width='24px'
                       fill='currentColor' className='h-4 w-4 mr-2'>
                <path d='M0 0h24v24H0V0z' fill='none' />
                <path
                    d='M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z' />
            </svg>,
            func: () => blockUser(item?.id),
            disabled: item?.active === 0,
            divider: false,
        },
    ];

    return (<Card classname='p-4 flex justify-between items-center' key={item?.id}>
        <div className='flex gap-5 items-center'>
            <a href={PATH_ADMIN.users.client.view(item?.id)}>
                <Avatar
                    size='8'
                    name={getInitialsOnly(item?.fullname ? item?.fullname : item?.username)}
                    color={item?.fullname ? getAvatarColor(item?.fullname) : 'indigo'}
                    shape='circle'
                    classname={classNames('mr-1 hover:ring-2', `hover:ring-indigo-500/30`)}
                />
            </a>

            <div className='flex flex-col'>
                <a href={PATH_ADMIN.users.client.view(item?.id)}
                   className='text-sm font-medium text-gray-700 dark:text-gray-200 flex flex-wrap w-48 items-center hover:underline hover:underline-offset-2'>
                    <span>{getHighlightedText(item?.username, query)}</span>
                </a>
                <p className='flex items-center'>
            <span
                className={classNames('mr-2 w-3 h-3 rounded-full', item?.active.toString() === '0' ? 'bg-red-400 dark:bg-red-600' : 'bg-green-400 dark:bg-green-600')} />
                    <span
                        className={classNames(item?.sudo.toString() === '1' ? 'text-red-600 dark:text-red-500/30' : 'text-gray-600 dark:text-gray-500', 'text-sm')}>{item?.sudo.toString() === '1' ? 'Администратор' : 'Пользователь'}</span>
                </p>

            </div>

            <div className='flex flex-col items-start'>
                <p
                    className='text-sm text-gray-900 dark:text-gray-50 flex flex-wrap w-96'>
                    {item?.fullname ? getHighlightedText(item?.fullname, query) : null}
                </p>
                <p
                    className='text-sm text-gray-500 dark:text-gray-400 flex flex-wrap'>
                    <span>{item?.profession}</span>
                    {item?.affiliationJudge ?
                        <span className='text-gray-900 dark:text-gray-50'>: {getInitials(item?.affiliationJudge)}</span> : ''}
                </p>
            </div>

            <div className='flex flex-col items-start justify-center h-11'>
                {item?.workplace !== 'Нет здания, нет кабинета, нет рабочего места' ? <p
                    className='text-sm text-gray-800 dark:text-gray-200 flex items-center'>
                    <svg xmlns='http://www.w3.org/2000/svg'
                         viewBox='0 0 24 24'
                         fill='currentColor'
                         className='text-gray-400 h-5 w-5 mr-3'
                    ><g><rect fill="none" height="24" width="24"/></g><g><path d="M2,6v12h2V8h10v10h2v-2h4v2h2V6H2z M20,8v2h-4V8H20z M16,14v-2h4v2H16z"/></g></svg>

                    {getHighlightedText(item?.workplace, query)}
                </p> : <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true'
                            viewBox='0 0 24 24' className='w-4 h-4 text-gray-400'>
                    <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
                        <path d='M5 12H3l4.497-4.497m1.999-1.999L12 3l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4v-3' />
                        <path d='M9 21v-6a2 2 0 0 1 2-2h2m2 2v6M3 3l18 18' />
                    </g>
                </svg>}
                {item?.ip ? <p
                    className='mt-1 text-sm text-gray-800 dark:text-gray-200 flex items-center'>
                    <CopyToClipboard
                        text={item?.ip}
                        onCopy={() => handleInfoCopy()}
                    >
                        <button
                            className='relative bg-transparent border-0 mr-3 shrink-0'
                            type='button'
                            title={copied === 'false' ? 'Скопировать IP' : 'Скопировано!'}
                        >
                            {copied === 'false' ? (
                                <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' className='w-5 h-5 fill-gray-400'>
                                    <path
                                        d='M4.26,12A8.24293,8.24293,0,0,1,4,10a8.24293,8.24293,0,0,1,.26-2H7.64a16.513,16.513,0,0,0-.14,2,16.51385,16.51385,0,0,0,.14,2H9.66a14.7101,14.7101,0,0,1-.16-2,14.58144,14.58144,0,0,1,.16-2h4.68a14.59092,14.59092,0,0,1,.16,2,14.71971,14.71971,0,0,1-.16,2H16.36a16.51182,16.51182,0,0,0,.14-2,16.511,16.511,0,0,0-.14-2h3.38A8.24047,8.24047,0,0,1,20,10a8.24047,8.24047,0,0,1-.26,2h2.0589A9.99979,9.99979,0,1,0,2.20067,12ZM18.92,6H15.97a15.65077,15.65077,0,0,0-1.38-3.56A8.02951,8.02951,0,0,1,18.92,6ZM12,2.04A14.08639,14.08639,0,0,1,13.91,6H10.09A14.08623,14.08623,0,0,1,12,2.04Zm-2.59.4A15.64752,15.64752,0,0,0,8.03,6H5.08A7.98674,7.98674,0,0,1,9.41,2.44Z' />
                                    <rect x='12.74854' y='17.49463' width='2' height='1' />
                                    <path
                                        d='M20.998,14H3.002A2.002,2.002,0,0,0,1,16.002v5.996A2.002,2.002,0,0,0,3.002,24H20.998A2.002,2.002,0,0,0,23,21.998V16.002A2.002,2.002,0,0,0,20.998,14ZM9.25146,22.00537h-1.5v-6h1.5Zm6.99708-3.51074a1.47326,1.47326,0,0,1-1.5,1.5h-2v2h-1.5v-6h3.5a1.47326,1.47326,0,0,1,1.5,1.5Z' />
                                </svg>) : (<svg
                                xmlns='http://www.w3.org/2000/svg'
                                fill='none'
                                viewBox='0 0 24 24'
                                strokeWidth={1.5}
                                stroke='currentColor'
                                className='w-5 h-5 text-green-500'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                                />
                            </svg>)}
                        </button>
                    </CopyToClipboard>
                    <span>{item?.ip}</span>
                </p> : ''}
            </div>
        </div>
        <ElementsDropdown menuItems={userMenuItems} />
    </Card>);
}

export default MenuItem

MenuItem.propTypes = {
    item: PropTypes.object,
    query: PropTypes.string,
    blockUser: PropTypes.func
}