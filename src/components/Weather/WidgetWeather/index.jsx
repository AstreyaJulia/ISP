import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import ru from 'date-fns/locale/ru';
import { CITY_NAME } from '../../../config';
import { weatherStates } from '../weatherSettings';
import LoadingSkeleton from '../../LoadingSkeleton';
import { classNames } from '../../../utils/classNames';


/*
  const { currentWeather, currentIsLoading, currentError } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(getCurrentWeather());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    setInterval(() => {
      dispatch(getCurrentWeather());
    }, 3000000);
    // eslint-disable-next-line
  }, []);

              <WidgetWeather
              currentWeather={currentWeather}
              currentIsLoading={currentIsLoading}
              currentError={currentError}
            />

 */

export const WidgetWeather = ({ currentWeather, currentIsLoading, currentError }) => {

  return (
    <div className='flex flex-col bg-gray-500 dark:bg-gray-900 rounded-md shadow-sm'>
      {!currentError ? (
        <>
          <p
            className='text-gray-100 font-medium pt-4 px-4 pb-1 text-lg'>{format(new Date(), 'd LLLL yyyy, EEEE', { locale: ru })}</p>
          <div className='flex items-center justify-between relative border-b border-white/50 pb-2'>
            {currentIsLoading === 'true' ? <div className='flex flex-col gap-3 p-3'>
                <LoadingSkeleton classnames='bg-gray-400/25' />
                <LoadingSkeleton classnames='bg-gray-400/25' />
            </div> :
              <div className='flex flex-col gap-3 px-4'>
                <p className='flex items-center gap-2 text-gray-100'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    fill='none'
                    viewBox='0 0 24 24'
                    strokeWidth={1.5}
                    stroke='currentColor'
                    className='w-4 h-4'
                  >
                    <path strokeLinecap='round' strokeLinejoin='round' d='M15 10.5a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path
                      strokeLinecap='round'
                      strokeLinejoin='round'
                      d='M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z'
                    />
                  </svg>
                  <span className='font-medium text-sm'>{CITY_NAME}</span>
                </p>
                <p className='font-bold text-2xl text-gray-100 ml-6'>
                  {Math.ceil(currentWeather?.current?.temp) > 0
                    ? `+ ${Math.ceil(currentWeather?.current?.temp)}`
                    : Math.ceil(currentWeather?.current?.temp)}
                  <sup className='font-medium text-sm'>
                <span>
                  <sup className='ml-1'>o</sup>C
                </span>
                  </sup>
                </p>
              </div>}

            {currentIsLoading === 'true' ? <LoadingSkeleton classnames='bg-gray-400/25 w-20 h-20 z-100' /> :
              <div className='flex flex-col items-end justify-end h-full'>
                <img
                  title={weatherStates[currentWeather?.current?.weather[0]?.id ?? 600].desc}
                  src={weatherStates[currentWeather?.current?.weather[0]?.id ?? 600].icon}
                  alt={weatherStates[currentWeather?.current?.weather[0]?.id ?? 600].desc}
                  className='w-20 h-20 shrink-0 z-100'
                />
              </div>}

            {currentIsLoading === 'true' ?
              <div className={classNames('flex flex-col justify-strength h-full px-3 gap-4', currentIsLoading === 'true' ? '' : 'border-l border-white/50')}>
                <LoadingSkeleton classnames='bg-gray-400/25' /><LoadingSkeleton classnames='bg-gray-400/25' /></div> :
              <div className='flex flex-col justify-strength h-full border-l border-white/50 px-3 gap-4'>
                <p className='text-white flex items-center text-sm' title='Влажность'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-4 h-4 text-white shrink-0 mr-2'
                  >
                    <path d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z' />
                  </svg>
                  {currentWeather?.current?.humidity} <small className='ml-1'>%</small>
                </p>
                <p className='text-white flex items-center text-sm' title='Скорость ветра'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-4 h-4 text-white shrink-0 mr-2'
                  >
                    <path
                      d='M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2' />
                  </svg>
                  {Math.ceil(currentWeather?.current?.wind_speed)} <small className='ml-1'>м/с</small>
                </p>
              </div>}
          </div>

          {currentIsLoading === 'true' ?
            <div className='w-full flex flex-col px-5 py-2 gap-2'><LoadingSkeleton classnames='bg-gray-400/25' /><LoadingSkeleton classnames='bg-gray-400/25' /><LoadingSkeleton classnames='bg-gray-400/25' />
            </div> : <div className='w-full flex flex-col px-5 py-2'>
              {currentWeather?.daily ? currentWeather?.daily.slice(0, 3).map((item, key) =>
                <p key={key} className='flex items-center gap-5'>
                <span
                  className='text-sm text-white w-14'>{format(new Date(item?.dt * 1000), 'd LLL', { locale: ru })}</span>
                  <img
                    title={weatherStates[item?.weather[0]?.id ?? 600].desc}
                    src={weatherStates[item?.weather[0]?.id ?? 600].icon}
                    alt={weatherStates[item?.weather[0]?.id ?? 600].desc}
                    className='w-12 h-12 shrink-0 z-100'
                  />
                  <span className='text-sm text-white w-16'>{Math.ceil(item?.temp?.day) > 0
                    ? `+ ${Math.ceil(item?.temp?.day)}`
                    : Math.ceil(item?.temp?.day)} / {Math.ceil(item?.temp?.night) > 0
                    ? `+ ${Math.ceil(item?.temp?.night)}`
                    : Math.ceil(item?.temp?.night)}</span>
                  <span className='text-white flex items-center text-sm w-14' title='Влажность'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-4 h-4 text-white shrink-0 mr-2'
                  >
                    <path d='M12 2.69l5.66 5.66a8 8 0 1 1-11.31 0z' />
                  </svg>
                    {item?.humidity} <small className='ml-1'>%</small>
                </span>
                  <span className='text-white flex items-center text-sm' title='Скорость ветра'>
                  <svg
                    xmlns='http://www.w3.org/2000/svg'
                    width='24'
                    height='24'
                    viewBox='0 0 24 24'
                    fill='none'
                    stroke='currentColor'
                    strokeWidth='2'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    className='w-4 h-4 text-white shrink-0 mr-2'
                  >
                    <path
                      d='M9.59 4.59A2 2 0 1 1 11 8H2m10.59 11.41A2 2 0 1 0 14 16H2m15.73-8.27A2.5 2.5 0 1 1 19.5 12H2' />
                  </svg>
                    {Math.ceil(item?.wind_speed)} <small className='ml-1'>м/с</small>
                </span>
                </p>,
              ) : ''
              }
            </div>}
        </>
      ) : <p className='text-base font-medium text-gray-100 flex items-center gap-3 px-5 py-3'>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          className='w-6 h-6'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
          />
        </svg>
        Ошибка обновления погоды
      </p>}
    </div>
  );
};

WidgetWeather.propTypes = {
  currentWeather: PropTypes.object,
  currentIsLoading: PropTypes.string,
  currentError: PropTypes.string,
};
