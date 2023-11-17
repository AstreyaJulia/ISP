import React from 'react';
import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import DatePicker, { registerLocale } from 'react-datepicker';
import {isDate, parseISO} from 'date-fns';
import ru from 'date-fns/locale/ru';
import { Tooltip } from 'react-tooltip';
import { classNames } from '../../utils/classNames';

registerLocale('ru', ru);

export default function RHFDatePicker({ name, label, placeholder, direction, dateFormat, showTimeSelect, onChange, ...other }) {
  const { control } = useFormContext();

  const getDate = (date) => {
    if (date !== '' && !isDate(date)) {
      return parseISO(date);
    }
    if (date !== '' && isDate(date)) {
      return date;
    }
    return null;
  };

  return (
    <Controller
      name={name}
      control={control}
      render={({ field: { value }, fieldState: { error } }) => (
        <div className={classNames('flex', direction === 'row' ? 'items-center justify-end grow-0' : 'flex-col', label ? 'gap-3' : '')}>
          {label ? (
            <label htmlFor={name} className={classNames('flex flex-col shrink-0', direction === 'row' ? 'text-right w-52' : 'w-full text-left')} >
              {label}
            </label>
          ) : (
            ''
          )}
          <div id={name} className='relative'>
            <DatePicker
              selected={getDate(value)}
              dateFormat={dateFormat}
              showTimeSelect={showTimeSelect}
              onChange={(date) => onChange(date)}
              locale='ru'
              className={classNames(
                'relative bg-gray-100 dark:bg-gray-800 focus:outline-none text-base rounded-lg shadow-sm',
                error
                  ? 'border-red-500 dark:border-red-600 text-red-900 dark:text-red-50 placeholder-red-400 dark:placeholder-red-400 focus:ring-red-500 focus:border-red-500'
                  : 'border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 text-gray-900 dark:text-gray-400 placeholder-gray-400 focus:ring-indigo-500 focus:border-indigo-500',
              )}
              placeholderText={placeholder}
              todayButton='Сегодня'
              {...other}
            />
            {error ? (
              <div className='absolute inset-y-0 right-8 flex items-center pointer-events-none'>

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

RHFDatePicker.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.node,
  placeholder: PropTypes.string.isRequired,
  direction: PropTypes.oneOf(['row', 'column']),
  dateFormat: PropTypes.string,
  showTimeSelect: PropTypes.bool,
  onChange: PropTypes.func
};

RHFDatePicker.defaultProps = {
  label: null,
  direction: 'row',
  dateFormat: 'dd.MM.yyyy',
  showTimeSelect: false,
  onChange: () => null
};
