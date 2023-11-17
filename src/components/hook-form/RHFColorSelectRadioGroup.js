import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import React from 'react';
import { RadioGroup } from '@headlessui/react';
import { Tooltip } from 'react-tooltip';
import { classNames } from '../../utils/classNames';

export default function RHFColorSelectRadioGroup({ name, label, options, defaultValue, direction, size, ...other }) {
  const { control } = useFormContext();

  const sizes = {
    3: 'h-3 w-3',
    4: 'h-4 w-4',
    5: 'h-5 w-5',
    6: 'h-6 w-6',
  };

  const colorOptions = {
    indigo: {
      ring: 'ring-indigo-600 dark:bg-indigo-500',
      bg: 'bg-indigo-500 dark:bg-indigo-600'
    },
    green: {
      ring: 'ring-green-600 dark:bg-green-500',
      bg: 'bg-green-500 dark:bg-green-600'
    },
    cyan: {
      ring: 'ring-cyan-600 dark:bg-cyan-500',
      bg: 'bg-cyan-500 dark:bg-cyan-600'
    },
    yellow: {
      ring: 'ring-yellow-600 dark:bg-yellow-500',
      bg: 'bg-yellow-500 dark:bg-yellow-600'
    },
    red: {
      ring: 'ring-red-600 dark:bg-red-500',
      bg: 'bg-red-500 dark:bg-red-600'
    },
    pink: {
      ring: 'ring-pink-600 dark:bg-pink-500',
      bg: 'bg-pink-500 dark:bg-pink-600'
    },
    blue: {
      ring: 'ring-blue-600 dark:bg-blue-500',
      bg: 'bg-blue-500 dark:bg-blue-600'
    },
    orange: {
      ring: 'ring-orange-600 dark:bg-orange-500',
      bg: 'bg-orange-500 dark:bg-orange-600'
    },
    teal: {
      ring: 'ring-teal-600 dark:bg-teal-500',
      bg: 'bg-teal-500 dark:bg-teal-600'
    }
  }

  return (<Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field, fieldState: { error } }) => (
      <div
        className={classNames('relative flex w-full pr-10 rounded-lg',
          direction === 'row' ? 'items-center justify-end' : 'flex-col', label ? 'gap-3' : '')}>

        {label ? (
          <label htmlFor={name} className={classNames('flex flex-col shrink-0', direction === 'row' ? 'text-right w-52' : 'w-full')} >
            {label}
          </label>) : ('')}
        <div id={name} className='relative'>
          <RadioGroup {...other} value={field.value} onChange={field.onChange} {...field}>
            <RadioGroup.Label className='sr-only'>Выберите</RadioGroup.Label>
            <div className='flex items-center gap-3 flex-wrap justify-start'>
              {options.map((option) => (<RadioGroup.Option
                key={`${name}-${option.value}`}
                value={option.value}
                title={option.label}
                className={({
                              active,
                              checked,
                            }) => classNames(colorOptions[option.value.toString()].ring, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none')}
              >
                <RadioGroup.Label as='p' className='sr-only'>
                  {option.label}
                </RadioGroup.Label>
                <span
                  aria-hidden='true'
                  className={classNames(colorOptions[option.value.toString()].bg, sizes[size], 'border border-black border-opacity-10 rounded-full flex items-center justify-center shadow-sm')}
                />
              </RadioGroup.Option>))}
            </div>
          </RadioGroup>
        </div>
        {error ? (
          <div className='absolute inset-y-0 right-2 flex items-center pointer-events-none'>

            <Tooltip anchorId={name} content={error?.message} place='top' />

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

      </div>)}
  />);
}

RHFColorSelectRadioGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.node,
  defaultValue: PropTypes.number,
  size: PropTypes.oneOf(['3', '4', '5', '6']),
  direction: PropTypes.oneOf(['row', 'column']),
};

RHFColorSelectRadioGroup.defaultProps = {
  label: null,
  direction: 'row',
};
