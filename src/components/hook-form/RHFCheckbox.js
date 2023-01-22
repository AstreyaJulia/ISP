import PropTypes from 'prop-types';
import { Controller, useFormContext } from 'react-hook-form';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import { classNames } from '../../utils/classNames';
import { mdOptions } from './inputsMdSettings';
import ValidationError from './ValidationError';

const inputOptions = {
  sizes: {
    3: {
      classNames: {
        input: 'h-3 w-3 mr-3',
        label: 'text-sm',
        container: 'space-y-3 mt-3',
      },
    },
    4: {
      classNames: {
        input: 'h-4 w-4 mr-3',
        label: 'text-base',
        container: 'space-y-4 mt-4',
      },
    },
    5: {
      classNames: {
        input: 'h-5 w-5 mr-4',
        label: 'text-md',
        container: 'space-y-5 mt-5',
      },
    },
    6: {
      classNames: {
        input: 'h-6 w-6 mr-4',
        label: 'text-xl',
        container: 'space-y-6 mt-6',
      },
    },
  },
  colors: {
    orange: {
      classNames: {
        input: 'focus:ring-orange-500 text-orange-600',
      },
    },
    yellow: {
      classNames: {
        input: 'focus:ring-yellow-500 text-yellow-600',
      },
    },
    lime: {
      classNames: {
        input: 'focus:ring-lime-500 text-lime-600',
      },
    },
    emerald: {
      classNames: {
        input: 'focus:ring-emerald-500 text-emerald-600',
      },
    },
    teal: {
      classNames: {
        input: 'focus:ring-teal-500 text-teal-600',
      },
    },
    cyan: {
      classNames: {
        input: 'focus:ring-cyan-500 text-cyan-600',
      },
    },
    blue: {
      classNames: {
        input: 'focus:ring-blue-500 text-blue-600',
      },
    },
    indigo: {
      classNames: {
        input: 'focus:ring-indigo-500 text-indigo-600',
      },
    },
    pink: {
      classNames: {
        input: 'focus:ring-pink-500 text-pink-600',
      },
    },
  },
};

export function RHFCheckbox({ name, option, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div className='flex items-center' {...other}>
          <input
            {...field}
            className={classNames(
              'h-4 w-4 rounded',
              error
                ? 'focus:ring-red-500 text-red-600 border-red-400 dark:border-red-600'
                : 'focus:ring-indigo-500 text-indigo-600 border-gray-400 dark:border-gray-600',
            )}
            type='checkbox'
            id={name}
            name={name}
            checked={field.value}
          />
          <label className='ml-3 block text-sm font-medium text-gray-700' htmlFor={name}>
            {option}
          </label>
        </div>
      )}
    />
  );
}

RHFCheckbox.propTypes = {
  name: PropTypes.string,
  option: PropTypes.string,
  other: PropTypes.object,
};

export function RHFMultiCheckbox({ name, options, defaultValue, disabled, size, color, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        const onSelected = (evt, option) =>
          // eslint-disable-next-line
          field.value.includes(option.value)
            ? field.value.filter((value) => value !== option.value).sort()
            : [...field.value, option.value].sort();
        return (
          <div>
            <fieldset className={inputOptions.sizes[size].classNames.container} name={name}>
              {options.map((option) => (
                <div key={`${name}-${option.value}`} className='flex items-center' {...other}>
                  <input
                    {...field}
                    onChange={(evt) => field.onChange(onSelected(evt, option))}
                    className={classNames(
                      inputOptions.sizes[size].classNames.input,
                      'rounded',
                      error
                        ? 'focus:ring-red-500 text-red-600 border-red-400 dark:text-red-400 dark:border-red-600'
                        : inputOptions.colors[color].classNames.input,
                      'border-slate-300 dark:border-slate-600 disabled:border-gray-200 disabled:checked:border-0',
                    )}
                    checked={field.value.includes(option.value)}
                    type='checkbox'
                    id={`${name}-${option.value}`}
                    disabled={disabled}
                    name={`${name}`}
                    value={option.value}
                  />
                  <label className={inputOptions.sizes[size].classNames.label} htmlFor={`${name}-${option.value}`}>
                    <Markdown options={{ ...mdOptions }}>{option.label}</Markdown>
                  </label>
                </div>
              ))}
            </fieldset>

            <ValidationError error={error} name={name} />

          </div>
        );
      }}
    />
  );
}

RHFMultiCheckbox.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.array,
  disabled: PropTypes.bool,
  size: PropTypes.oneOf(['3', '4', '5', '6']),
  color: PropTypes.oneOf(['orange', 'yellow', 'lime', 'emerald', 'teal', 'cyan', 'blue', 'indigo', 'pink']),
  other: PropTypes.object,
};
