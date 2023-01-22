import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import React from 'react';
import { RadioGroup } from '@headlessui/react';
import { classNames } from '../../utils/classNames';
import ValidationError from './ValidationError';

export default function RHFGenderRadioGroup({ name, label, options, defaultValue, ...other }) {
  const { control } = useFormContext();

  return (<Controller
    name={name}
    control={control}
    defaultValue={defaultValue}
    render={({ field, fieldState: { error } }) => {

      return (<div>
        {label ? (<label htmlFor={name} className='flex flex-col'>
          <span className='sr-only' />
          {label}
        </label>) : ('')}
        <div className='mt-1 relative'>
          <RadioGroup {...other} value={field.value} onChange={field.onChange} className='mt-2' {...field}>
            <RadioGroup.Label className='sr-only'>Выберите</RadioGroup.Label>
            <div className='flex items-center space-x-3'>
              {options.map((option) => (<RadioGroup.Option
                key={`${name}-${option.value}`}
                value={option.value}
                className={({
                              active,
                              checked,
                            }) => classNames(option.value === '0' ? 'ring-pink-500/30' : 'ring-cyan-500/30', active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none')}
              >
                <RadioGroup.Label as='p' className='sr-only'>
                  {option.label}
                </RadioGroup.Label>
                <span
                  aria-hidden='true'
                  className={classNames(option.value === '0' ? 'bg-pink-400' : 'bg-cyan-400', 'h-8 w-8 border border-black border-opacity-10 rounded-full flex items-center justify-center shadow-sm')}
                >{option.value === '0' ?
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

        <ValidationError error={error} name={name} />

      </div>);
    }}
  />);
}

RHFGenderRadioGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.string,
  size: PropTypes.oneOf(['3', '4', '5', '6']),
};
