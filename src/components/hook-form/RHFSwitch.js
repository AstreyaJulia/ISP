import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import React, { useState } from 'react';
import { Switch } from '@headlessui/react'
import ValidationError from './ValidationError';
import Typography from '../Typography';

export default function RHFSwitch({ name, label, color, defaultValue, enabledLabel, disabledLabel, checkedValue }) {
  const { control } = useFormContext();

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
          input: 'bg-orange-600 dark:bg-orange-500',
        },
      },
      yellow: {
        classNames: {
          input: 'bg-yellow-600 dark:bg-yellow-500',
        },
      },
      lime: {
        classNames: {
          input: 'bg-lime-600 dark:bg-lime-500',
        },
      },
      emerald: {
        classNames: {
          input: 'bg-emerald-600 dark:bg-emerald-500',
        },
      },
      teal: {
        classNames: {
          input: 'bg-teal-600 dark:bg-teal-500',
        },
      },
      cyan: {
        classNames: {
          input: 'bg-cyan-600 dark:bg-cyan-500',
        },
      },
      blue: {
        classNames: {
          input: 'bg-blue-600 dark:bg-blue-500',
        },
      },
      indigo: {
        classNames: {
          input: 'bg-indigo-600 dark:bg-indigo-500',
        },
      },
      pink: {
        classNames: {
          input: 'bg-pink-600 dark:bg-pink-500',
        },
      },
    },
  };

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field, fieldState: { error } }) => {
// eslint-disable-next-line
        const onSelected = (evt) => (evt ? field.value = 1 : field.value = 0);
        return (
          <div>
            {label ? (
              <label htmlFor={name} className="flex flex-col">
                <span className="sr-only" />
                {label}
              </label>
            ) : (
              ''
            )}
            <div className="mt-1">
              <div className='flex items-center gap-3'>
                <Switch
                  {...field}
                  checked={field.value.toString() === checkedValue.toString()}
                  onChange={(evt) => field.onChange(onSelected(evt))}
                  className={`${
                    field.value.toString() === checkedValue.toString() ? inputOptions.colors[color].classNames.input : 'bg-gray-200 dark:bg-gray-700'
                  } relative inline-flex h-6 w-11 items-center rounded-full shadow-sm`}
                >
                <span
                  className={`${
                    field.value.toString() === checkedValue.toString() ? 'translate-x-6' : 'translate-x-1'
                  } inline-block h-4 w-4 transform rounded-full bg-white transition`}
                />
                </Switch>
                <Typography variant='caption'>{field.value.toString() === checkedValue.toString() ? enabledLabel : disabledLabel}</Typography>
              </div>

              {error ? (
                <div className="absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none">
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

        );
      }}
    />
  );
}

RHFSwitch.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
  defaultValue: PropTypes.string,
  size: PropTypes.oneOf(['3', '4', '5', '6']),
  color: PropTypes.oneOf(['orange', 'yellow', 'lime', 'emerald', 'teal', 'cyan', 'blue', 'indigo', 'pink']),
};
