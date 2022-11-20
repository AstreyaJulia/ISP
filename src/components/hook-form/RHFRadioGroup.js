import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import { classNames } from '../../utils/classNames';
import { mdOptions } from './inputsMdSettings';

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
        input: 'focus:ring-orange-500 text-orange-600 dark:text-orange-400',
      },
    },
    yellow: {
      classNames: {
        input: 'focus:ring-yellow-500 text-yellow-600 dark:text-yellow-400',
      },
    },
    lime: {
      classNames: {
        input: 'focus:ring-lime-500 text-lime-600 dark:text-lime-400',
      },
    },
    emerald: {
      classNames: {
        input: 'focus:ring-emerald-500 text-emerald-600 dark:text-emerald-400',
      },
    },
    teal: {
      classNames: {
        input: 'focus:ring-teal-500 text-teal-600 dark:text-teal-400',
      },
    },
    cyan: {
      classNames: {
        input: 'focus:ring-cyan-500 text-cyan-600 dark:text-cyan-400',
      },
    },
    blue: {
      classNames: {
        input: 'focus:ring-blue-500 text-blue-600 dark:text-blue-400',
      },
    },
    indigo: {
      classNames: {
        input: 'focus:ring-indigo-500 text-indigo-600 dark:text-indigo-400',
      },
    },
    pink: {
      classNames: {
        input: 'focus:ring-pink-500 text-pink-600 dark:text-pink-400',
      },
    },
  },
};

export default function RHFRadioGroup({ name, options, defaultValue, size, color, ...other }) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
        // eslint-disable-next-line
        const onSelected = (evt, option) => (field.value = option.value);

        return (
          <div>
            <fieldset {...other} className={inputOptions.sizes[size].classNames.container} name={name}>
              {options.map((option) => (
                <div key={`${name}-${option.value}`} className="flex items-center">
                  <input
                    {...field}
                    className={classNames(
                      inputOptions.sizes[size].classNames.input,
                      error
                        ? 'focus:ring-red-500 text-red-600 border-red-400 dark:border-red-600'
                        : inputOptions.colors[color].classNames.input,
                      'border-gray-400 dark:border-gray-600 disabled:border-gray-200 disabled:checked:border-0'
                    )}
                    onChange={(evt) => field.onChange(onSelected(evt, option))}
                    type="radio"
                    id={`${name}-${option.value}`}
                    checked={field.value === option.value}
                    name={`${name}`}
                    value={option.value}
                  />
                  <label className={inputOptions.sizes[size].classNames.label} htmlFor={`${name}-${option.value}`}>
                    <Markdown options={{ ...mdOptions }}>{option.label}</Markdown>
                  </label>
                </div>
              ))}
            </fieldset>

            {!!error && <div className="text-sm text-red-600 dark:text-red-400 mt-2">{error.message}</div>}
          </div>
        );
      }}
    />
  );
}

RHFRadioGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.string,
  size: PropTypes.oneOf(['3', '4', '5', '6']),
  color: PropTypes.oneOf(['orange', 'yellow', 'lime', 'emerald', 'teal', 'cyan', 'blue', 'indigo', 'pink']),
};
