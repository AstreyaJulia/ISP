import React from "react";
import {Controller, useFormContext} from "react-hook-form";
import {RadioGroup} from "@headlessui/react";
import {Tooltip} from "react-tooltip";
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from "prop-types";
import {classNames} from "../../utils/classNames";


export default function RHFRadioGroupWithIcons({name, label, options, defaultValue, direction, ...other}) {

    const {control} = useFormContext();

    return (<Controller
        name={name}
        control={control}
        defaultValue={defaultValue}
        render={({field, fieldState: {error}}) => (
            <div
                className={classNames('relative flex',
                    error
                        ? 'border-red-500 dark:border-red-600'
                        : 'border-transparent',
                    direction === 'row' ? 'items-center justify-end' : 'flex-col', label ? 'gap-4' : '')}>

                {label ? (
                    <label htmlFor={name}
                           className={classNames('flex flex-col shrink-0 text-base font-medium text-gray-700 dark:text-gray-200', direction === 'row' ? 'text-right w-52' : 'w-full')}>
                        {label}
                    </label>) : ('')}
                <div id={name} className='relative'>
                    <RadioGroup {...other} value={field.value} onChange={field.onChange} {...field}>
                        <RadioGroup.Label className='sr-only'>Выберите</RadioGroup.Label>
                        <div className={classNames('flex shadow-sm items-center justify-center bg-gray-100 dark:bg-gray-800 border border-gray-300 dark:border-gray-600 hover:border-gray-400 dark:hover:border-gray-500 rounded-lg', options.length > 12 ? 'h-40' : '')}>
                          <PerfectScrollbar className="ps__show pl-3"  options={{ wheelPropagation: false }}>
                          <div className='p-3 grid grid-cols-12 gap-2'>
                                {options.map((option) => (<RadioGroup.Option
                                    key={`${name}-${option.value}`}
                                    value={option.value}
                                    className={({
                                                    active,
                                                    checked,
                                                }) => classNames(active && checked ? 'ring' : '', !active && checked ? 'ring-2' : '', '-m-0.5 relative p-0.5 rounded-full flex items-center justify-center cursor-pointer focus:outline-none ring-indigo-500')}
                                >
                                    <RadioGroup.Label as='p' className='sr-only'>
                                        {option.label}
                                    </RadioGroup.Label>
                                    <span
                                        aria-hidden='true'
                                        title={option.label}
                                        className={classNames('h-7 w-7 rounded-full flex items-center justify-center')}
                                    >
                                    <img src={option.icon} alt={option.icon}
                                         className='h-4 w-4'/>

                                </span>
                                </RadioGroup.Option>))}
                            </div>
                          </PerfectScrollbar>
                        </div>

                    </RadioGroup>
                </div>
                {error ? (
                    <div className='absolute inset-y-0 right-2 flex items-center pointer-events-none'>

                        <Tooltip anchorId={name} content={error?.message} place='top'/>

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

RHFRadioGroupWithIcons.propTypes = {
  name: PropTypes.string,
  label: PropTypes.string,
  options: PropTypes.array,
  defaultValue: PropTypes.object,
  direction: PropTypes.string
}