import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import React from 'react';
import Markdown from 'markdown-to-jsx';
import { classNames } from '../../utils/classNames';

RHFRadioGroup.propTypes = {
  name: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.object),
};

export default function RHFRadioGroup({ name, options, ...other }) {
  const { control } = useFormContext();

  const mdOptions = {
    wrapper: 'article',
    overrides: {
      h1: {
        props: {
          className: 'xl:text-5xl lg:text-4xl sm:text-3xl font-bold',
        },
      },
      h2: {
        props: {
          className: 'xl:text-4xl lg:text-3xl sm:text-2xl font-bold',
        },
      },
      h3: {
        props: {
          className: 'xl:text-3xl lg:text-2xl sm:text-xl font-bold',
        },
      },
      h4: {
        props: {
          className: 'xl:text-2xl lg:text-xl sm:text-lg font-bold',
        },
      },
      h5: {
        props: {
          className: 'xl:text-xl lg:text-lg sm:text-base font-bold',
        },
      },
      h6: {
        props: {
          className: 'xl:text-lg lg:text-base sm:text-base font-bold',
        },
      },
      pre: {
        props: {
          className: 'flex text-base text-white px-4 py-5 bg-slate-800 rounded-md overflow-x-auto',
        },
      },
      code: {
        props: {
          className: 'text-sm px-0.5 text-slate-600 py-0.5 px-1 bg-slate-400/10 rounded-sm border border-slate-300',
        },
      },
      blockquote: {
        props: {
          className:
            'text-base px-5 py-6 border-l-8 border-indigo-500 dark:border-indigo-600 bg-indigo-500/20 rounded-md my-5',
        },
      },
      a: {
        props: {
          className: 'underline font-medium text-indigo-600 dark:text-indigo-500',
        },
      },
      ul: {
        props: {
          className: 'my-5 pl-6 list-disc',
        },
      },
      ol: {
        props: {
          className: 'my-5 pl-6',
        },
      },
      li: {
        props: {
          className: 'my-2',
        },
      },
      details: {
        props: {
          className: 'my-5 p-4 bg-red-600/20 rounded-md',
        },
      },
      summary: {
        props: {
          className: 'text-red-700 hover:cursor-pointer',
        },
      },
      caption: {
        props: {
          className: 'p-2 text-left',
        },
      },
      table: {
        props: {
          className: 'border-2 border-gray-300 dark:border-gray-700',
        },
      },
      td: {
        props: {
          className: 'border border-gray-300 dark:border-gray-700 py-1 px-2',
        },
      },
      th: {
        props: {
          className: 'border border-gray-300 dark:border-gray-700 py-1 px-2',
        },
      },
      form: {
        props: {
          className: 'py-1 px-2',
        },
      },
      label: {
        props: {
          className: 'py-1 px-2',
        },
      },
      legend: {
        props: {
          className: 'py-1',
        },
      },
      hgroup: {
        props: {
          className: 'pl-3 border-l-8 border-cyan-500 dark:border-cyan-600 my-6',
        },
      },
      hr: {
        props: {
          className: 'border-gray-300 dark:border-gray-700 my-3',
        },
      },
      mark: {
        props: {
          className: 'bg-amber-500 dark:bg-amber-600',
        },
      },
      rt: {
        props: {
          className: 'text-xs',
        },
      },
    },
  }

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <div>
          <fieldset {...field} {...other} className='space-y-4 mt-4' name={name}>
            {options.map((option, index) => (
              <div key={`${name}-${option.value}`} className='flex items-center'>
                <input className={classNames('h-4 w-4', error ? 'focus:ring-red-500 text-red-600 border-red-400' : 'focus:ring-indigo-500 text-indigo-600 border-gray-400')}
                       type='radio' id={`${name}-${option.value}`}
                       name={`${name}`} value={option.value} />
                <label className='ml-3 block text-sm font-medium text-gray-700' htmlFor={`${name}-${option.value}`}>
                  <Markdown
                    options={{ ...mdOptions }}
                  >
                    {option.label}
                  </Markdown>
                </label>
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
