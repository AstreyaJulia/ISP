import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import React from 'react';

RHFCheckbox.propTypes = {
  name: PropTypes.string,
};

export function RHFCheckbox({ name, option, ...other }) {
  const { control } = useFormContext();

  return (
        <Controller
          name={name}
          control={control}
          render={({ field }) =>
            <div className="flex items-center" {...other}>
              <input {...field} className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400 rounded'
                     type='checkbox' id={name}
                     name={name} checked={field.value} />
              <label className="ml-3 block text-sm font-medium text-gray-700" htmlFor={name}>{option}</label>
            </div>}
        />
  );
}

RHFMultiCheckbox.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

export function RHFMultiCheckbox({ name, options, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field }) => {

        const onSelected = (option) =>
          field.value.includes(option.value) ? field.value.filter((value) => value !== option.value) : [...field.value, option.value];

        return (
          <fieldset className="space-y-4 mt-4" name={name}>
            {options.map((option) => (
              <div key={option.value} className="flex items-center" {...other}>
                <input onChange={() => field.onChange(onSelected(option.value))} {...field} className='focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-400 rounded'
                       type='checkbox' id={`${name}${option.value}`}
                       name={`${name}${option.value}`} checked={field.value.includes(option.value)} value={option.value} />
                <label className="ml-3 block text-sm font-medium text-gray-700" htmlFor={`${name}${option.value}`}>{option.label}</label>
              </div>
            ))}
          </fieldset>
        );
      }}
    />
  );
}
