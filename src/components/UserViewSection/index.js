import { formatISO, intervalToDuration, parseISO } from 'date-fns';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { Avatar } from '../Avatar';
import { getInitials, getInitialsOnly } from '../../utils/getInitials';
import { getAvatarColor } from '../../utils/getAvatarColor';
import Badge from '../Badge';
import Card from '../Card';
import BasicButton from '../BasicButton';
import Alert from '../Alert';
import useAuth from '../../hooks/useAuth';
import { fDate } from '../../utils/formatTime';
import { getAmount } from '../../utils/getAmount';
import axios from '../../utils/axios';
import Toast, { toastStyles } from '../Toast';
import { setSession } from '../../utils/jwt';
import LoadingSkeleton from '../LoadingSkeleton';
import apiErrorHelper from '../../utils/apiErrorHelper';
import { formatMobileNumber } from '../../utils/formatMobileNumber';
import { PATH_ADMIN } from '../../routes/paths';
import { classNames } from '../../utils/classNames';


export default function UserViewSection({ currentUser, getFunc, isLoading, error }) {

  const { user } = useAuth();
  const navigate = useNavigate();

  const resetUserPass = async (userId) => {
    await axios
      .patch('/staff/resetpass', { 'id': userId })
      .then((res) => {
        const message = res.data.data.info;
        toast((t) => <Toast t={t} message={message} type='success' />, { className: toastStyles });
        getFunc();
      })
      .catch((err) => apiErrorHelper(err));
  };

  const blockUser = async (userId) => {
    await axios
      .patch('/staff/blockuser', { 'id': userId })
      .then((res) => {
        const message = res.data.data.info;
        toast((t) => <Toast t={t} message={message} type='success' />, { className: toastStyles });
        getFunc();
      })
      .catch((err) => apiErrorHelper(err));
  };

  const getAge = (date) => {
    const { years } = intervalToDuration({
      start: parseISO(date), end: new Date(),
    });
    return `${years} ${getAmount(parseInt(years, 10), { single: 'год', multi: 'года', count: 'лет' })}`;
  };

  return (!error ? <Card classname='max-w-3xl mx-auto p-6 mt-6'>
    <div className='flex items-center space-x-5 mb-6'>
      <div className='flex-shrink-0'>
        <div className='relative'>
          <Avatar
            size='20'
            name={currentUser?.fullname ? getInitialsOnly(currentUser?.fullname ? currentUser?.fullname : currentUser?.username) : 'Пользователь'}
            color={currentUser?.fullname ? getAvatarColor(currentUser?.fullname) : 'indigo'}
            shape='circle'
            isLoading={isLoading === 'true'}
          />
          <span className='absolute inset-0 shadow-inner rounded-full' aria-hidden='true' />
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        {isLoading === 'true' ? <><LoadingSkeleton classnames='h-8' />
          <LoadingSkeleton /></> : <><h1 className='text-2xl font-medium text-gray-900'>{currentUser?.fullname}</h1>
          <p
              className='text-sm text-gray-500 dark:text-gray-400 flex flex-wrap'>
            <span>{currentUser?.profession}</span>
            {currentUser?.affiliationJudge ?
                <span className='text-gray-900 dark:text-gray-50'>: {getInitials(currentUser?.affiliationJudge)}</span> : ''}
          </p></>}
      </div>
    </div>

    {isLoading === 'true' ? <div className='flex flex-col w-full gap-2'>
      <LoadingSkeleton />
      <LoadingSkeleton />
      <LoadingSkeleton />
    </div> : <div className='flex flex-col w-full gap-3'>
      <div className='flex gap-3 flex-col mb-5'>
        {isLoading === 'true' ? <>
          <LoadingSkeleton classnames='h-8' />
        </> : <>
          <h2 id='applicant-information-title' className='text-lg leading-6 font-medium text-gray-900 flex gap-3 items-center'>
            {user?.sudo === 1 ?
              <span
                className={classNames('w-3 h-3 rounded-full', currentUser?.active?.toString() === '0' ? 'bg-red-400 dark:bg-red-600' : 'bg-green-400 dark:bg-green-600')} />
              : ''}
            {currentUser?.username}
          </h2>
          {user?.sudo === 1 ? <p className='flex items-center gap-5'>
            <Badge item={currentUser?.sudo?.toString() === '0' ? 'Пользователь' : 'Администратор'} size='small'
                   color={currentUser?.sudo?.toString() === '0' ? 'indigo' : 'red'} shape='rounded' />
            <Badge size='small' color={currentUser?.setPass === 1 ? 'green' : 'yellow'}
                   item={currentUser?.setPass === 1 ? <>
                     <svg
                       xmlns='http://www.w3.org/2000/svg'
                       viewBox='0 0 24 24'
                       fill='currentColor'
                       className='h-3 w-3 text-green-600 mr-1'
                     >
                       <path
                         d='M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z' />
                     </svg>
                     <span className='flex'>Пароль установлен</span></> : <>
                     <svg
                       xmlns='http://www.w3.org/2000/svg'
                       viewBox='0 0 24 24'
                       fill='currentColor'
                       className='h-3 w-3 text-yellow-600 mr-1'
                     >
                       <path
                         d='M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z' />
                     </svg>
                     <span className='flex'>Пароль не установлен</span></>}
                   shape='rounded' />
          </p> : ''}
        </>
        }
      </div>
      <dl className='grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2'>
        <div className='flex items-center gap-3'>
          <dt className='text-sm font-medium text-gray-500'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 24 24'
              fill='currentColor'
              className='h-5 w-5 text-gray-500'
            >
              <path d='M0 0h24v24H0z' fill='none' />
              <path
                d='M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm4.6 9.99l-1.07-1.07-1.08 1.07c-1.3 1.3-3.58 1.31-4.89 0l-1.07-1.07-1.09 1.07C6.75 16.64 5.88 17 4.96 17c-.73 0-1.4-.23-1.96-.61V21c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-4.61c-.56.38-1.23.61-1.96.61-.92 0-1.79-.36-2.44-1.01zM18 9h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v1.54c0 1.08.88 1.96 1.96 1.96.52 0 1.02-.2 1.38-.57l2.14-2.13 2.13 2.13c.74.74 2.03.74 2.77 0l2.14-2.13 2.13 2.13c.37.37.86.57 1.38.57 1.08 0 1.96-.88 1.96-1.96V12C21 10.34 19.66 9 18 9z' />
            </svg>
          </dt>
          <dd
            className='text-sm text-gray-900'>{fDate(parseISO(currentUser?.dob ?? formatISO(new Date())))} ({getAge(currentUser?.dob ?? formatISO(new Date()))})
          </dd>
        </div>
        <div className='flex items-center gap-3' />
      </dl>

      {currentUser?.workplace !== ' /  / ' ?
        <dl className='grid grid-cols-1 gap-x-2 gap-y-2 sm:grid-cols-2'>
          <div className='flex items-center gap-3 '>
            <dt className='text-sm font-medium text-gray-500'>
              <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' className='w-5 h-5 text-slate-500'>
                <path fill='currentColor'
                      d='M11 3V0H2v14H0v1h7v-5h2V8h5V3h-3zm-5 7H4V8h2v2zm0-3H4V5h2v2zm0-3H4V2h2v2zm3 3H7V5h2v2zm0-3H7V2h2v2zm4 3h-2V5h2v2zm1 4h2v5H8v-5h2V9h4v2z' />
              </svg>
            </dt>
            <dd className='text-sm text-gray-900'>
              {currentUser?.workplace}
            </dd>
          </div>
        </dl>
         : ''}

      {currentUser?.mobilephone !== '' && currentUser?.email !== '' && currentUser?.address !== '' ?
        <dl className='grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2'>

          {currentUser?.mobilephone ? <div className='flex items-center gap-3'>
            <dt className='text-sm font-medium text-gray-500'>
              <svg xmlns='http://www.w3.org/2000/svg'
                   viewBox='0 0 24 24'
                   fill='currentColor'
                   className='h-5 w-5 text-gray-500'
              >
                <path d='M0 0h24v24H0z' fill='none' />
                <path
                  d='M17 1H7c-1.1 0-2 .9-2 2v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 18H7V5h10v14zM8 6h8v2H8z' />
              </svg>
            </dt>
            <dd className='text-sm text-gray-900'>{formatMobileNumber(currentUser?.mobilephone ?? '0000000000')}</dd>
          </div> : ''}

          {currentUser?.email ? <div className='flex items-center gap-3'>
            <dt className='text-sm font-medium text-gray-500'>
              <svg xmlns='http://www.w3.org/2000/svg'
                   viewBox='0 0 24 24'
                   fill='currentColor'
                   className='h-5 w-5 text-gray-500'
              >
                <path d='M0 0h24v24H0z' fill='none' />
                <path
                  d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
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
                <path d='M0 0h24v24H0z' fill='none' />
                <path d='M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z' />
              </svg>
            </dt>
            <dd className='text-sm text-gray-900'>{currentUser?.address}</dd>
          </div> : ''}

        </dl>
        : ''}

      {currentUser?.comment ? <div className='sm:col-span-2'>
        <dt className='text-sm font-medium text-gray-500'>Комментарий</dt>
        <dd className='text-sm text-gray-900'>
          {currentUser?.comment}
        </dd>
      </div> : ''}
      {currentUser?.website ? <div className='sm:col-span-2'>
        <dt className='text-sm font-medium text-gray-500'>Ссылки на соц. сети</dt>
        <dd className='text-sm text-gray-900'>
          {currentUser?.website}
        </dd>
      </div> : ''}
      {user?.sudo === 0 ? <Alert alertType='info'
                                 title='Пожалуйста, не передавайте данные пользователей третьим лицам без их разрешения.' containerClassName='mt-3' /> : ''}
      <div className='flex items-center justify-end gap-5'>

        {user?.sudo === 1 ? <>
          <BasicButton size='medium' className='w-44' variant='primary' disabled={isLoading === 'true'}
                       onClick={() => navigate(PATH_ADMIN.users.client.edit(currentUser?.id))}>Редактировать</BasicButton>
        </> : ''}

        {currentUser?.setPass === 1 && user?.sudo === 1 ? <>
          <BasicButton size='medium' className='w-44' variant='basic' disabled={isLoading === 'true'}
                       onClick={() => resetUserPass(currentUser?.id)}>Сбросить
            пароль</BasicButton>
        </> : ''}

        {user?.sudo === 1 && currentUser?.active?.toString() === '1' ? <>
          <BasicButton size='medium' className='w-44' variant='basic' disabled={isLoading === 'true'}
                       onClick={() => blockUser(currentUser?.id)}>Заблокировать</BasicButton>
        </> : ''}

      </div>
    </div>}
  </Card> : <Alert alertType='error' title={error} />);
};