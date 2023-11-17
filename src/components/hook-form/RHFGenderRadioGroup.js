import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import React from 'react';
import { RadioGroup } from '@headlessui/react';
import { Tooltip } from 'react-tooltip';
import { classNames } from '../../utils/classNames';

export default function RHFGenderRadioGroup({ name, label, options, defaultValue, direction, ...other }) {
  const { control } = useFormContext();

  return (<Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field, fieldState: { error } }) => (
      <div
        className={classNames('relative flex w-full pr-10 py-1 pl-3 rounded-lg border',
            error
                ? 'border-red-500 dark:border-red-600'
                : 'border-transparent',
            direction === 'row' ? 'items-center justify-end' : 'flex-col', label ? 'gap-3' : '')}>

        {label ? (
          <label htmlFor={name} className={classNames('flex flex-col shrink-0', direction === 'row' ? 'text-right w-52' : 'w-full')} >
            {label}
          </label>) : ('')}
        <div id={name} className='relative'>
          <RadioGroup {...other} value={field.value} onChange={field.onChange} {...field}>
            <RadioGroup.Label className='sr-only'>Выберите</RadioGroup.Label>
            <div className='flex items-center space-x-3'>
              {options.map((option) => (<RadioGroup.Option
                key={`${name}-${option.value}`}
                value={option.value}
                title={option.label}
                className={({
                              active,
                              checked,
                            }) => classNames(option.value.toString() === '0' ? 'ring-pink-500' : 'ring-cyan-500', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none')}
              >
                <RadioGroup.Label as='p' className='sr-only'>
                  {option.label}
                </RadioGroup.Label>
                <span
                  aria-hidden='true'
                  className={classNames(option.value.toString() === '0' ? 'bg-pink-400' : 'bg-cyan-400', 'h-8 w-8 border border-black border-opacity-10 rounded-full flex items-center justify-center shadow-sm')}
                >{option.value.toString() === '0' ?
                  <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-pink-800'>
                    <path fill='currentColor'
                          d='M11 21v-2H9v-2h2v-2.1q-1.975-.35-3.237-1.888Q6.5 11.475 6.5 9.45q0-2.275 1.613-3.862Q9.725 4 12 4t3.887 1.588Q17.5 7.175 17.5 9.45q0 2.025-1.262 3.562Q14.975 14.55 13 14.9V17h2v2h-2v2Zm1-8q1.45 0 2.475-1.025Q15.5 10.95 15.5 9.5q0-1.45-1.025-2.475Q13.45 6 12 6q-1.45 0-2.475 1.025Q8.5 8.05 8.5 9.5q0 1.45 1.025 2.475Q10.55 13 12 13Z' />
                  </svg> : <svg xmlns='http://www.w3.org/2000/svg' className='w-6 h-6 text-cyan-800'
                                preserveAspectRatio='xMidYMid meet' viewBox='0 0 24 24'>
                    <path fill='currentColor'
                          d='M20 4v6h-2V7.425l-3.975 3.95q.475.7.725 1.487q.25.788.25 1.638q0 2.3-1.6 3.9T9.5 20q-2.3 0-3.9-1.6T4 14.5q0-2.3 1.6-3.9T9.5 9q.825 0 1.625.238q.8.237 1.475.737L16.575 6H14V4ZM9.5 11q-1.45 0-2.475 1.025Q6 13.05 6 14.5q0 1.45 1.025 2.475Q8.05 18 9.5 18q1.45 0 2.475-1.025Q13 15.95 13 14.5q0-1.45-1.025-2.475Q10.95 11 9.5 11Z' />
                  </svg>}</span>
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

RHFGenderRadioGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  label: PropTypes.node,
  defaultValue: PropTypes.number,
  size: PropTypes.oneOf(['3', '4', '5', '6']),
  direction: PropTypes.oneOf(['row', 'column']),
};

RHFGenderRadioGroup.defaultProps = {
  label: null,
  direction: 'row',
};
