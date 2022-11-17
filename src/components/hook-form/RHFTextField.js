import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import { classNames } from '../../utils/classNames';

export default function RHFTextField({ name, label, placeholder, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          {label ? (
            <label htmlFor={name} className="flex flex-col">
              <span className="sr-only" />
              {label}
            </label>
          ) : (
            ''
          )}
          <div className="mt-1 relative rounded-md shadow-sm">
            <input
              {...field}
              type="text"
              name={name}
              id={name}
              className={classNames(
                'block bg-gray-50 dark:bg-gray-800 w-full pr-10 focus:outline-none sm:text-sm rounded-md',
                error
                  ? 'border-red-500 text-red-900 placeholder-red-400 focus:ring-red-500 focus:border-red-500'
                  : 'border-slate-300 text-gray-900 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500'
              )}
              placeholder={placeholder}
              aria-invalid={!!error}
              aria-describedby={`${name}-error`}
              {...other}
            />
            {error ? (
              <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="h-5 w-5 text-red-500"
                >
                  <path
                    fillRule="evenodd"
                    d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            ) : (
              ''
            )}
          </div>
          <p className="mt-1 text-sm text-red-600 h-5 mb-2" id={`${name}-error`}>
            {error?.message || ''}
          </p>
        </div>
      )}
    />
  );
}

RHFTextField.propTypes = {
  name: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.string,
};
