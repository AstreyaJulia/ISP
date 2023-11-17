import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { Tooltip } from 'react-tooltip';
import { classNames } from '../../utils/classNames';


export default function RHFPasswordHideShow({ name, label, placeholder, direction, ...other }) {
  const { control } = useFormContext();

  /** Стейт */
  const [inputVisibility, setInputVisibility] = useState(false);

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={classNames('flex w-full', direction === 'row' ? 'items-center justify-end' : 'flex-col', label ? 'gap-3' : '')}>
          {label ? (
            <label htmlFor={name} className={classNames('flex flex-col shrink-0', direction === 'row' ? 'text-right w-52' : 'w-full text-left ')} >
              {label}
            </label>
          ) : (
            ''
          )}

          <div className="flex relative rounded-lg shadow-sm">
            <div className="relative flex items-stretch flex-grow focus-within:z-10">
              <input
                {...field}
                type={inputVisibility === false ? 'password' : 'text'}
                name={name}
                id={name}
                className={classNames(
                  'shadow-sm block bg-gray-100 dark:bg-gray-800 w-full py-2 px-3 focus:outline-none text-base rounded-l-lg',
                  error
                    ? 'pr-10 border-red-500 dark:border-red-600 text-red-900 dark:text-red-50 placeholder-red-400 dark:placeholder-red-500 focus:ring-red-500 focus:border-red-500'
                    : 'border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500',
                )}
                placeholder={placeholder}
                aria-invalid={!!error}
                aria-describedby={`${name}-error`}
                {...other}
              />
            </div>
            <button
              type="button"
              onClick={() => setInputVisibility(!inputVisibility)}
              className={classNames(
                '-ml-px relative inline-flex items-center space-x-2 px-4 py-2 border text-sm font-medium rounded-r-md bg-gray-50 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500',
                error
                  ? 'text-red-500 focus:ring-red-500 hover:bg-red-100 dark:text-red-700 border-red-500'
                  : 'text-gray-400 hover:bg-gray-100 dark:text-gray-700 border-gray-300'
              )}
            >
              {inputVisibility === false ? (
                <svg
                  className={classNames('h-4 w-4', error ? 'text-red-500' : 'text-gray-400')}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className={classNames('h-4 w-4', error ? 'text-red-500' : 'text-gray-400')}
                >
                  <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19m-6.72-1.07a3 3 0 1 1-4.24-4.24" />
                  <line x1="1" y1="1" x2="23" y2="23" />
                </svg>
              )}
            </button>

            {error ? (
              <div className='absolute inset-y-0 right-16 flex items-center pointer-events-none'>

                <Tooltip anchorId={name} content={error?.message} place="top" />

                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  viewBox='0 0 24 24'
                  fill='currentColor'
                  className='h-5 w-5 text-red-500'
                >
                  <path
                    fillRule='evenodd'
                    d='M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
            ) : (
              ''
            )}
          </div>

        </div>
      )}
    />
  );
}

RHFPasswordHideShow.propTypes = {
  name: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.string,
  direction: PropTypes.oneOf(['row', 'column']),
};

RHFPasswordHideShow.defaultProps = {
  label: null,
  direction: 'row',
};
