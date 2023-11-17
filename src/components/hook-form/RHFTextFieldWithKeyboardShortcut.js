import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { Tooltip } from 'react-tooltip';
import { classNames } from '../../utils/classNames';


export default function RHFTextFieldWithKeyboardShortcut({ name, label, placeholder, direction, buttonText, buttonOnClick, ...other }) {

  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className={classNames('flex w-full', direction === 'row' ? 'items-center justify-end' : 'flex-col', label ? 'gap-3' : '')}>

          {label ? (
            <label htmlFor={name} className={classNames('flex flex-col shrink-0', direction === 'row' ? 'text-right w-52' : 'text-left w-full')} >
              {label}
            </label>
          ) : (
            ''
          )}

          <div className='relative w-full'>
            <input
              {...field}
              type='text'
              name={name}
              id={name}
              className={classNames(
                'shadow-sm block bg-gray-100 dark:bg-gray-800 w-full py-2 pl-3 pr-12 focus:outline-none text-base rounded-lg',
                error
                  ? 'pr-10 border-red-500 dark:border-red-600 text-red-900 dark:text-red-50 placeholder-red-400 dark:placeholder-red-500 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-800 dark:text-gray-100 placeholder-gray-400 dark:placeholder-gray-500 focus:ring-indigo-500 focus:border-indigo-500',
              )}
              placeholder={placeholder}
              aria-invalid={!!error}
              aria-describedby={`${name}-error`}
              {...other}
            />

            <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
              <div className='relative'>
                {error ? (
                  <div className='absolute inset-y-0 right-3 flex items-center pointer-events-none'>

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

              <button className='shadow-sm inline-flex items-center border rounded px-2 text-sm font-sans font-medium bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 focus:ring-indigo-500 disabled:border-gray-200 dark:disabled:border-gray-700 disabled:hover:border-gray-200 dark:disabled:hover:border-gray-700 disabled:text-gray-500 dark:disabled:text-gray-500 disabled:bg-gray-50 dark:disabled:bg-gray-800 disabled:hover:bg-gray-50 dark:disabled:hover:bg-gray-800 disabled:hover:cursor-not-allowed' type='button' onClick={buttonOnClick} >
                {buttonText}
              </button>

            </div>

          </div>

        </div>
      )}
    />
  );
}

RHFTextFieldWithKeyboardShortcut.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  placeholder: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['row', 'column']),
  buttonText: PropTypes.string.isRequired,
  buttonOnClick: PropTypes.func
};

RHFTextFieldWithKeyboardShortcut.defaultProps = {
  label: null,
  direction: 'row',
  buttonOnClick: () => null
};
