import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker, { registerLocale } from "react-datepicker";
import ru from "date-fns/locale/ru";
import { classNames } from '../../utils/classNames';
import ValidationError from './ValidationError';

registerLocale("ru",ru);

export default function RHFDatePicker({ name, label, placeholder, ...other }) {
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
          <div className='mt-1 relative'>
            <DatePicker
              selected={field.value}
              dateFormat="dd.MM.yyyy"
              onChange={field.onChange}
              locale="ru"
              className={classNames(
                'relative bg-gray-50 dark:bg-gray-800 pr-10 focus:outline-none sm:text-sm rounded-md shadow-sm',
                error
                  ? 'border-red-500 dark:border-red-600 text-red-900 dark:text-red-50 placeholder-red-400 dark:placeholder-red-400 focus:ring-red-500 focus:border-red-500'
                  : 'border-slate-300 dark:border-slate-600 text-gray-900 dark:text-gray-400 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500'
              )}
              placeholderText={placeholder}
              todayButton="Сегодня"
              {...field}
              {...other}
            />
            {error ? (
              <div className="absolute inset-y-0 right-8 flex items-center pointer-events-none">
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

          <ValidationError error={error} name={name} />

        </div>
      )}
    />
  );
}

RHFDatePicker.propTypes = {
  name: PropTypes.string,
  label: PropTypes.node,
  placeholder: PropTypes.string,
};
