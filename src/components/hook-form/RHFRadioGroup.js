import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import React from 'react';

RHFRadioGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default function RHFRadioGroup({ name, options, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <fieldset {...field} {...other} className="space-y-4 mt-4" name={name} >
            {options.map((option, index) => (
              <div key={`${name}-${option.value}`} className="flex items-center">
                <input className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400'
                       type='radio' id={`${name}-${option.value}`}
                       name={`${name}`} value={option.value} />
                <label className="ml-3 block text-sm font-medium text-gray-700" htmlFor={`${name}-${option.value}`}>{option.label}</label>
              </div>
            ))}
          </fieldset>

          {!!error && (
            <div className='text-sm text-red-600 mt-2'>
              {error.message}
            </div>
          )}
        </div>
      )}
    />
  );
}
