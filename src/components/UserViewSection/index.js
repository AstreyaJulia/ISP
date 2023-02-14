import {format, formatISO, parseISO} from "date-fns";
import ru from "date-fns/locale/ru";
import {Avatar} from '../Avatar';
import {getInitials, getInitialsOnly} from '../../utils/getInitials';
import {getAvatarColor} from '../../utils/getAvatarColor';
import Badge from '../Badge';
import Card from '../Card';
import BasicButton from '../BasicButton';
import Alert from '../Alert';
import useAuth from '../../hooks/useAuth';
import {formatDate} from "../../utils/formatTime";




export default function UserViewSection({currentUser}) {

    const {user} = useAuth();

    return (
        <Card classname='max-w-3xl mx-auto p-6 mt-6'>
            <div className='flex items-center space-x-5 mb-6'>
                <div className='flex-shrink-0'>
                    <div className='relative'>
                        <Avatar
                            size='20'
                            name={currentUser?.fullname ? getInitialsOnly(currentUser?.fullname ? currentUser?.fullname : currentUser?.username) : 'Пользователь'}
                            color={currentUser?.fullname ? getAvatarColor(currentUser?.fullname) : 'indigo'}
                            shape='circle'
                        />
                        <span className='absolute inset-0 shadow-inner rounded-full' aria-hidden='true'/>
                    </div>
                </div>
                <div className='flex flex-col gap-1'>
                    <h1 className='text-2xl font-medium text-gray-900'>{currentUser?.fullname}</h1>
                    <p className='text-base font-medium text-gray-500'>
                        {currentUser?.professionName}{' '}
                        {currentUser?.affiliationJudgeName ?
                            <span
                                className='text-gray-900'>: {getInitials(currentUser?.affiliationJudgeName)}</span> : ''}
                    </p>
                </div>
            </div>
            <div className='flex gap-5 items-center mb-8'>
                <h2 id='applicant-information-title' className='text-lg leading-6 font-medium text-gray-900'>
                    {currentUser?.username}
                </h2>
                {user?.sudo === 1 ?
                    <Badge item={currentUser?.active?.toString() === '0' ? 'Заблокирован' : 'Активен'} size='small'
                           color={currentUser?.active?.toString() === '0' ? 'red' : 'green'} shape='rounded'/> : ''}
                <Badge item={currentUser?.sudo?.toString() === '0' ? 'Пользователь' : 'Администратор'} size='small'
                       color={currentUser?.sudo?.toString() === '0' ? 'indigo' : 'cyan'} shape='rounded'/>

                {user?.sudo === 1 ? <Badge size='small' color={currentUser?.setPass === 1 ? 'green' : 'yellow'}
                                           item={currentUser?.setPass === 1 ? <>
                                               <svg
                                                   xmlns='http://www.w3.org/2000/svg'
                                                   viewBox='0 0 24 24'
                                                   fill='currentColor'
                                                   className='h-3 w-3 text-green-600 mr-1'
                                               >
                                                   <path
                                                       d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z'/>
                                               </svg>
                                               <span className='flex'>Пароль установлен</span></> : <>
                                               <svg
                                                   xmlns='http://www.w3.org/2000/svg'
                                                   viewBox='0 0 24 24'
                                                   fill='currentColor'
                                                   className='h-3 w-3 text-yellow-600 mr-1'
                                               >
                                                   <path
                                                       d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z'/>
                                               </svg>
                                               <span className='flex'>Пароль не установлен</span></>}
                                           shape='rounded'/> : ''}
            </div>

            <dl className='grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2 mb-6'>
                <div className='flex items-center gap-3'>
                    <dt className='text-sm font-medium text-gray-500'>
                        <svg
                            xmlns='http://www.w3.org/2000/svg'
                            viewBox='0 0 24 24'
                            fill='currentColor'
                            className='h-5 w-5 text-gray-500'
                        >
                            <path d='M0 0h24v24H0z' fill='none'/>
                            <path
                                d='M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z'/>
                        </svg>
                    </dt>
                    <dd className='text-sm text-gray-900'>{formatDate(parseISO(currentUser?.dob ?? formatISO(new Date())))}</dd>
                </div>
                <div className='flex items-center gap-3'/>

                <div className='flex items-center gap-3 '>
                    <dt className='text-sm font-medium text-gray-500'>
                        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' className='w-5 h-5 text-slate-500'>
                            <path fill='currentColor'
                                  d='M11 3V0H2v14H0v1h7v-5h2V8h5V3h-3zm-5 7H4V8h2v2zm0-3H4V5h2v2zm0-3H4V2h2v2zm3 3H7V5h2v2zm0-3H7V2h2v2zm4 3h-2V5h2v2zm1 4h2v5H8v-5h2V9h4v2z'/>
                        </svg>
                    </dt>
                    <dd className='text-sm text-gray-900'>
                        {currentUser?.workplace !== 'Нет здания, нет кабинета, нет рабочего места' ? <p
                            className='text-sm text-slate-800 dark:text-slate-200 flex items-center'>

                            {currentUser?.workplace}
                        </p> : <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true'
                                    viewBox='0 0 24 24' className='w-4 h-4 text-slate-400'>
                            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                               strokeWidth='2'>
                                <path
                                    d='M5 12H3l4.497-4.497m1.999-1.999L12 3l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4v-3'/>
                                <path d='M9 21v-6a2 2 0 0 1 2-2h2m2 2v6M3 3l18 18'/>
                            </g>
                        </svg>}</dd>
                </div>
            </dl>

            <dl className='grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2 mb-6'>

                {currentUser?.mobilephone ? <div className='flex items-center gap-3'>
                    <dt className='text-sm font-medium text-gray-500'>
                        <svg xmlns='http://www.w3.org/2000/svg'
                             viewBox='0 0 24 24'
                             fill='currentColor'
                             className='h-5 w-5 text-gray-500'
                        >
                            <path d='M0 0h24v24H0z' fill='none'/>
                            <path
                                d='M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM8 6h8v2H8z'/>
                        </svg>
                    </dt>
                    <dd className='text-sm text-gray-900'>{currentUser?.mobilephone}</dd>
                </div> : ''}

                {currentUser?.email ? <div className='flex items-center gap-3'>
                    <dt className='text-sm font-medium text-gray-500'>
                        <svg xmlns='http://www.w3.org/2000/svg'
                             viewBox='0 0 24 24'
                             fill='currentColor'
                             className='h-5 w-5 text-gray-500'
                        >
                            <path d='M0 0h24v24H0z' fill='none'/>
                            <path
                                d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z'/>
                        </svg>
                    </dt>
                    <dd className='text-sm text-gray-900'>{currentUser?.email}</dd>
                </div> : ''}

                {currentUser?.address ? <div className='flex items-center gap-3'>
                    <dt className='text-sm font-medium text-gray-500'>
                        <svg xmlns='http://www.w3.org/2000/svg'
                             viewBox='0 0 24 24'
                             fill='currentColor'
                             className='h-5 w-5 text-gray-500'
                        >
                            <path d='M0 0h24v24H0z' fill='none'/>
                            <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z'/>
                        </svg>
                    </dt>
                    <dd className='text-sm text-gray-900'>{currentUser?.address}</dd>
                </div> : ''}

            </dl>

            {currentUser?.comment ? <div className='sm:col-span-2 mb-6'>
                <dt className='text-sm font-medium text-gray-500'>Комментарий</dt>
                <dd className='text-sm text-gray-900'>
                    {currentUser?.comment}
                </dd>
            </div> : ''}

            {currentUser?.website ? <div className='sm:col-span-2 mb-6'>
                <dt className='text-sm font-medium text-gray-500'>Ссылки на соц. сети</dt>
                <dd className='text-sm text-gray-900'>
                    {currentUser?.website}
                </dd>
            </div> : ''}
            {user?.sudo === 0 ? <Alert alertType='info'
                                       title='Пожалуйста, не передавайте данные пользователей третьим лицам без их разрешения.'
                                       containerClassName='my-5'/> : ''}

            <div className='flex items-center justify-end gap-5 mt-5'>

                {currentUser?.setPass === 1 && user?.sudo === 1 ? <>
                    <BasicButton size='medium' className='w-44' variant='basic'>Сбросить пароль</BasicButton>
                </> : ''}

            </div>


        </Card>
    );
};