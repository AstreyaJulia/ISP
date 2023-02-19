import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getAmount } from '../../utils/getAmount';
import { Avatar } from '../Avatar';
import Card from '../Card';

const WidgetRowCounter = ({ rows, isLoading, error, title, color, link, counter: { ...counter } }) => (
  link && error === null ?
    <Link to={link}>
      <Card variant='default' classname='relative group'>
        <div className='w-full focus:outline-none min-w-0'>
          <div className='flex items-center p-3'>
            {
              // eslint-disable-next-line
              error === null ? (
                isLoading === 'true' ? (
                  <>
                    <Avatar
                      name=''
                      size='14'
                      color={color}
                      icon={
                        <svg
                          className='w-12 h-12 animate-spin animate-pulse fill-slate-600 dark:fill-slate-500 '
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
                      }
                      shape='rounded'
                      classname='flex-shrink-0'
                    />
                    <div
                      className='min-w-0 flex flex-col ml-4 text-sm h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse w-full' />
                  </>
                ) : (
                  <>
                    <Avatar
                      name={rows?.length.toString()}
                      size='14'
                      color={color}
                      shape='rounded'
                      classname='flex-shrink-0'
                    />
                    <div className='min-w-0 flex flex-col ml-4 text-base text-gray-900 dark:text-gray-100 font-medium'>
                <span className='line-clamp-3'>
                  {`${getAmount(rows?.length, { ...counter })}`} {title}
                </span>
                    </div>
                  </>
                )
              ) : error === 'ГАС недоступен' ? (
                <>
                  <Avatar
                    name={''}
                    size='14'
                    color={color}
                    icon={
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        className='w-12 h-12'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                        />
                      </svg>
                    }
                    shape='rounded'
                    classname='flex-shrink-0'
                  />
                  <div className='min-w-0 flex flex-col ml-4 text-sm'>
                    <span className='line-clamp-3'>{error}</span>
                  </div>
                </>
              ) : (
                ''
              )
            }
          </div>
        </div>
      </Card>
    </Link> :  <Card variant='default' classname='relative group'>
      <div className='w-full focus:outline-none min-w-0'>
        <div className='flex items-center p-3'>
          {
            // eslint-disable-next-line
            error === null ? (
              isLoading === 'true' ? (
                <>
                  <Avatar
                    name=''
                    size='14'
                    color={color}
                    icon={
                      <svg
                        className='w-12 h-12 animate-spin animate-pulse fill-slate-600 dark:fill-slate-500 '
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
                    }
                    shape='rounded'
                    classname='flex-shrink-0'
                  />
                  <div
                    className='min-w-0 flex flex-col ml-4 text-sm h-6 w-10 bg-gray-200 dark:bg-gray-700 rounded-md animate-pulse w-full' />
                </>
              ) : (
                <>
                  <Avatar
                    name={rows?.length.toString()}
                    size='14'
                    color={color}
                    shape='rounded'
                    classname='flex-shrink-0'
                  />
                  <div className='min-w-0 flex flex-col ml-4 text-base text-gray-900 dark:text-gray-100 font-medium'>
                <span className='line-clamp-3'>
                  {`${getAmount(rows?.length, { ...counter })}`} {title}
                </span>
                  </div>
                </>
              )
            ) : error === 'ГАС недоступен' ? (
              <>
                <Avatar
                  name={''}
                  size='14'
                  color={color}
                  icon={
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth={1.5}
                      stroke='currentColor'
                      className='w-12 h-12'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z'
                      />
                    </svg>
                  }
                  shape='rounded'
                  classname='flex-shrink-0'
                />
                <div className='min-w-0 flex flex-col ml-4 text-sm'>
                  <span className='line-clamp-3'>{error}</span>
                </div>
              </>
            ) : (
              ''
            )
          }
        </div>
      </div>
    </Card>
);

WidgetRowCounter.propTypes = {
  rows: PropTypes.array.isRequired,
  isLoading: PropTypes.string.isRequired,
  error: PropTypes.string,
  title: PropTypes.string.isRequired,
  counter: PropTypes.object.isRequired,
  color: PropTypes.oneOf(['red', 'orange', 'yellow', 'green', 'cyan', 'blue', 'indigo', 'pink']),
  link: PropTypes.string.isRequired,
};

export default WidgetRowCounter;
