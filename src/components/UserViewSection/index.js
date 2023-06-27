import { formatISO, intervalToDuration, parseISO } from 'date-fns';
import React from 'react';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import PropTypes from "prop-types";
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
import LoadingSkeleton from '../LoadingSkeleton';
import apiErrorHelper from '../../utils/apiErrorHelper';
import { formatMobileNumber } from '../../utils/formatMobileNumber';
import { PATH_ADMIN } from '../../routes/paths';
import { classNames } from '../../utils/classNames';
import Typography from '../Typography';


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
            title={currentUser?.fullname}
            color={currentUser?.fullname ? getAvatarColor(currentUser?.fullname) : 'indigo'}
            shape='circle'
            isLoading={isLoading === 'true'}
          />
          <span className='absolute inset-0 shadow-inner rounded-full' aria-hidden='true' />
        </div>
      </div>
      <div className='flex flex-col gap-2 w-full'>
        {isLoading === 'true' ? <><LoadingSkeleton classnames='h-8' />
          <LoadingSkeleton /></> : <><Typography variant='h4'>{currentUser?.fullname}</Typography>
          <div
            className='text-sm text-gray-500 dark:text-gray-400 flex flex-wrap'>
            <Typography variant='subtitle1'>{currentUser?.professionName}</Typography>
            {currentUser?.affiliationJudgeName ?
              <>
                <Typography variant='subtitle2'>:</Typography>
                <Typography variant='caption'
                            classname='ml-2'>{getInitials(currentUser?.affiliationJudgeName)}</Typography>
              </>
              : ''}
          </div>
        </>}
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
          <div className='flex gap-3 items-center'>
            {user?.sudo === 1 ?
              <span
                className={classNames('w-3 h-3 rounded-full', currentUser?.active?.toString() === '0' ? 'bg-red-400 dark:bg-red-600' : 'bg-green-400 dark:bg-green-600')} />
              : ''}
            <Typography variant='h6'>{currentUser?.username}</Typography>
          </div>

          {user?.sudo === 1 ? <p className='flex items-center gap-5'>
            <Badge item={currentUser?.sudo?.toString() === '0' ? 'Пользователь' : 'Администратор'}
                   size='small'
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
      <dl className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
        <div className='flex items-center gap-3'>
          <dt className='text-gray-400' title='Дата рождения'>
            <svg xmlns='http://www.w3.org/2000/svg'
                 viewBox='0 0 24 24'
                 fill='currentColor'
                 className='h-6 w-6'
            >
              <path
                d='M12 6c1.11 0 2-.9 2-2 0-.38-.1-.73-.29-1.03L12 0l-1.71 2.97c-.19.3-.29.65-.29 1.03 0 1.1.9 2 2 2zm6 3h-5V7h-2v2H6c-1.66 0-3 1.34-3 3v9c0 .55.45 1 1 1h16c.55 0 1-.45 1-1v-9c0-1.66-1.34-3-3-3zm1 11H5v-3c.9-.01 1.76-.37 2.4-1.01l1.09-1.07 1.07 1.07c1.31 1.31 3.59 1.3 4.89 0l1.08-1.07 1.07 1.07c.64.64 1.5 1 2.4 1.01v3zm0-4.5c-.51-.01-.99-.2-1.35-.57l-2.13-2.13-2.14 2.13c-.74.74-2.03.74-2.77 0L8.48 12.8l-2.14 2.13c-.35.36-.83.56-1.34.57V12c0-.55.45-1 1-1h12c.55 0 1 .45 1 1v3.5z' />
            </svg>
          </dt>
          <dd>
            <Typography
              variant='body1'>{fDate(parseISO(currentUser?.dob ?? formatISO(new Date())))} ({getAge(currentUser?.dob ?? formatISO(new Date()))})</Typography>
          </dd>
        </div>
        <div className='flex items-center gap-3' />
      </dl>

      {currentUser?.workplace !== ' /  / ' ?
        <dl className='grid grid-cols-1 gap-3 sm:grid-cols-2'>
          <div className='flex items-center gap-3 '>
            <dt className='text-gray-400' title='Рабочее место'>
              <svg xmlns='http://www.w3.org/2000/svg'
                   viewBox='0 0 24 24'
                   fill='currentColor'
                   className='h-6 w-6'
              >
                <g>
                  <rect fill='none' height='24' width='24' />
                </g>
                <g>
                  <path d='M2,6v12h2V8h10v10h2v-2h4v2h2V6H2z M20,8v2h-4V8H20z M16,14v-2h4v2H16z' />
                </g>
              </svg>
            </dt>
            <dd>
              <Typography variant='body1'>{currentUser?.workplace}</Typography>
            </dd>
          </div>
        </dl>
        : ''}

      {currentUser?.mobilephone !== '' || currentUser?.email !== '' || currentUser?.address !== '' ?
        <dl className='grid grid-cols-1 gap-3 sm:grid-cols-2 mb-6'>

          {currentUser?.mobilephone ? <div className='flex items-center gap-3'>
            <dt className='text-gray-400' title='Номер мобильного телефона'>
              <svg xmlns='http://www.w3.org/2000/svg'
                   viewBox='0 0 24 24'
                   fill='currentColor'
                   className='h-6 w-6'
              >
                <path
                  d='M6.54 5c.06.89.21 1.76.45 2.59l-1.2 1.2c-.41-1.2-.67-2.47-.76-3.79h1.51m9.86 12.02c.85.24 1.72.39 2.6.45v1.49c-1.32-.09-2.59-.35-3.8-.75l1.2-1.19M7.5 3H4c-.55 0-1 .45-1 1 0 9.39 7.61 17 17 17 .55 0 1-.45 1-1v-3.49c0-.55-.45-1-1-1-1.24 0-2.45-.2-3.57-.57-.1-.04-.21-.05-.31-.05-.26 0-.51.1-.71.29l-2.2 2.2c-2.83-1.45-5.15-3.76-6.59-6.59l2.2-2.2c.28-.28.36-.67.25-1.02C8.7 6.45 8.5 5.25 8.5 4c0-.55-.45-1-1-1z' />
              </svg>
            </dt>
            <dd>
              <Typography variant='body1'>{formatMobileNumber(currentUser?.mobilephone ?? '0000000000')}</Typography>
            </dd>
          </div> : ''}

          {currentUser?.email ? <div className='flex items-center gap-3'>
            <dt className='text-gray-400' title='Адрес электронной почты'>
              <svg xmlns='http://www.w3.org/2000/svg'
                   viewBox='0 0 24 24'
                   fill='currentColor'
                   className='h-6 w-6'
              >
                <path d='M0 0h24v24H0z' fill='none' />
                <path
                  d='M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z' />
              </svg>
            </dt>
            <dd>
              <Typography variant='body1'>{currentUser?.email}</Typography>
            </dd>
          </div> : ''}

          {currentUser?.address ? <div className='flex items-center gap-3'>
            <dt className='text-gray-400'title='Домашний адрес'>
              <svg xmlns='http://www.w3.org/2000/svg'
                   viewBox='0 0 24 24'
                   fill='currentColor'
                   className='h-6 w-6'
              >
                <path d='M12 5.69l5 4.5V18h-2v-6H9v6H7v-7.81l5-4.5M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z' />
              </svg>
            </dt>
            <dd>
              <Typography variant='body1'>{currentUser?.address}</Typography>
            </dd>
          </div> : ''}

        </dl>
        : ''}

      {currentUser?.comment ? <div className='sm:col-span-2'>
        <dt className='text-sm font-medium text-gray-500'>Комментарий</dt>
        <dd>
          <Typography variant='body2'>{currentUser?.comment}</Typography>
        </dd>
      </div> : ''}
      {currentUser?.website ? <div className='sm:col-span-2'>
        <dt className='text-sm font-medium text-gray-500'>Ссылки на соц. сети</dt>
        <dd>
          <Typography variant='body2'>{currentUser?.website}</Typography>
        </dd>
      </div> : ''}
      {user?.sudo === 0 ? <Alert alertType='info'
                                 title='Пожалуйста, не передавайте данные пользователей третьим лицам без их разрешения.'
                                 containerClassName='mt-3' /> : ''}
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
          <BasicButton size='medium' className='w-44' variant='danger' disabled={isLoading === 'true'}
                       onClick={() => blockUser(currentUser?.id)}>Заблокировать</BasicButton>
        </> : ''}

      </div>
    </div>}
  </Card> : <Alert alertType='error' title={error} />);
};

UserViewSection.propTypes = {
  currentUser: PropTypes.object,
  getFunc: PropTypes.func,
  isLoading: PropTypes.string,
  error: PropTypes.string
}