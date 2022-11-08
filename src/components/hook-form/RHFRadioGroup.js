import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import React from 'react';

RHFRadioGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  getOptionLabel: PropTypes.arrayOf(PropTypes.string),
};

export default function RHFRadioGroup({ name, options, getOptionLabel, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <fieldset {...field} {...other} className="space-y-4 mt-4" key={name} >
            {options.map((option, index) => (
              <div key={option} className="flex items-center">
                <input className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400'
                       type='radio' id={`${option}${name}`}
                       name={`${option}${name}`} value={option} />
                <label className="ml-3 block text-sm font-medium text-gray-700" htmlFor={`${option}${name}`}>{getOptionLabel?.length ? getOptionLabel[index] : option}</label>
              </div>
            ))}
          </fieldset>

          {!!error && (
            <div>
              {error.message}
            </div>
          )}
        </div>
      )}
    />
  );
}
