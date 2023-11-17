import tailwindColors from 'tailwindcss/colors';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useFormContext, Controller } from 'react-hook-form';
import Select, { components } from 'react-select';
import { Tooltip } from 'react-tooltip';
import useAuth from '../../hooks/useAuth';
import { classNames } from '../../utils/classNames';

export default function RHFSelect({ name, label, options, placeholder, isMulti, onChange, onFocus, noOptionsMessage, direction, disabled, defaultValue }) {
  const { control } = useFormContext();

  const { theme } = useAuth();

  const [tempTheme, setTempTheme] = useState(1)

  useEffect(() => {
    setTempTheme(theme)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [theme]);

  /* Индикатор селекта */
  const DropdownIndicator = (props) => (
      <components.DropdownIndicator {...props}>
        <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='currentColor' className='w-6 h-6'>
          <path d='M24 24H0V0h24v24z' fill='none' opacity='.87' />
          <path d='M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6-1.41-1.41z' />
        </svg>
      </components.DropdownIndicator>
    );

  /* Плейсхолдер */
  const Placeholder = (props) => (
      <components.Placeholder {...props}>
        <span className='text-base text-gray-600 dark:text-gray-400'>{props.children}</span>
      </components.Placeholder>
    );

  Placeholder.propTypes = {
    children: PropTypes.node,
  }

  /* Меню */
  const MenuList = (props) => (
      <components.MenuList {...props}>
        <div className='px-1.5 py-0.5 flex flex-col gap-1.5'>{props.children}</div>
      </components.MenuList>
    );

  MenuList.propTypes = {
    children: PropTypes.node,
  }

  /* Элемент меню */
  const Option = (props) => (
    <components.Option {...props}>
      <div className='px-3 py-2'>{props.children}</div>
    </components.Option>
  );

  Option.propTypes = {
    children: PropTypes.node,
  }

  /* Форматтер элемента меню */
  const formatOptionLabel = ({ label, icon, customAbbreviation }) => (
    <div className='flex items-center group flex w-full items-center text-sm gap-2 w-full h-full'>
      {icon ? <span>{icon}</span> : ''}
      <span>{label}</span>
      {customAbbreviation}
    </div>
  );

  /* Нет вариантов в фильтре */
  const NoOptionsMessage = (props) => (
      <div
        className='flex items-center justify-center flex w-full items-center bg-slate-100 dark:bg-slate-800 rounded-md'>
        <components.NoOptionsMessage {...props}>
          <span
            className='text-gray-600 dark:text-gray-400 font-medium text-base'>{noOptionsMessage || 'Результатов не найдено'}</span>
        </components.NoOptionsMessage>
      </div>
    );

  /* Метка для мульти-селекта */
  const MultiValueLabel = (props) => (
      <components.MultiValueLabel {...props}>
        <span
          className='flex items-center bg-slate-200 dark:bg-slate-700 text-gray-700 dark:text-gray-200 rounded-l-md p-1'>
          {props.children}
        </span>
      </components.MultiValueLabel>
    );

  MultiValueLabel.propTypes = {
    children: PropTypes.node,
  }

  /* Кнопка удаления для плашки мультиселекта */
  const MultiValueRemove = (props) => (
      <components.MultiValueRemove {...props}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 w-4 h-4'
        >
          <path
            d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
        </svg>
      </components.MultiValueRemove>
    );

  /* Кнопка удаления для плашки мультиселекта */
  const ClearIndicator = (props) => (
      <components.ClearIndicator {...props}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          viewBox='0 0 20 20'
          fill='currentColor'
          className='text-gray-400 dark:text-gray-500 hover:text-red-500 dark:hover:text-red-400 w-5 h-5'
        >
          <path
            d='M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z' />
        </svg>
      </components.ClearIndicator>
    );

  /* const findValues = (value, options, isMulti) => {
    if (!isMulti) {
      return options.find(c => c.value === value)
    }
    // eslint-disable-next-line
    return options.map((option)=> {
      if (option.options && option.options.length > 0) {
        return [option.options]
      }
    }).filter(c => value.includes(c.value))
  } */

  return (
    <Controller
      name={name}
      control={control}
      defaultValue={defaultValue}
      render={({ field: { value, ref }, fieldState: { error } }) => (
        <div className={classNames('flex w-full', direction === 'row' ? 'items-center justify-end' : 'flex-col', label ? 'gap-3' : '')}>

          {label ? (
            <label htmlFor={name} className={classNames('flex flex-col shrink-0', direction === 'row' ? 'text-right w-52' : 'w-full text-left ')} >
              {label}
            </label>
          ) : (
            ''
          )}
          <div className='relative rounded-md shadow-sm w-full'>
            <Select
              id={name}
              inputRef={ref}
              onFocus={() => onFocus()}
              value={isMulti ? options.filter(c => value.includes(c.value)) : options.find(c => c.value === value)}
              styles={{
                control: (base) => ({
                  ...base,
                  padding: `0`,
                  borderRadius: '0.5rem',
                  backgroundColor: tempTheme.toString() === '1' ? tailwindColors.gray['100'] : tailwindColors.gray['800'],
                  borderColor: tempTheme.toString() === '1' ? tailwindColors.slate['300'] : tailwindColors.slate['600'],
                  color: tempTheme.toString() === '1' ? tailwindColors.slate['300'] : tailwindColors.slate['600'],
                  '::placeholder': tempTheme.toString() === '1' ? tailwindColors.slate['300'] : tailwindColors.slate['600'],
                }),
                container: (base) => ({
                  ...base,
                  margin: `0`,
                  width: '100%',
                }),
                clearIndicator: (base) => ({
                  ...base,
                  padding: `0 4px 0 8px`,
                }),
                dropdownIndicator: (base) => ({
                  ...base,
                  padding: `0 8px 0 4px`,
                }),
                valueContainer: (base) => ({
                  ...base,
                  borderRadius: '0.5rem',
                  padding: `8px 12px`,
                }),
                option: (base) => ({
                  ...base,
                  padding: `0`,
                  margin: `0`,
                }),
                input: (base) => ({
                  ...base,
                  outlineRadius: '0.5rem',
                  padding: `0`,
                  margin: `0`,
                }),
                multiValue: (base) => ({
                  ...base,
                  padding: '0',
                  borderRadius: '0.5rem',
                }),
                multiValueRemove: (base) => ({
                  ...base,
                  padding: '0 3px',
                  backgroundColor: 'none',
                }),
                multiValueLabel: (base) => ({
                  ...base,
                  padding: '0',
                  backgroundColor: 'none',
                  borderRadius: '0',
                  color: 'currentcolor',
                }),
              }}
              isMulti={isMulti}
              components={{
                DropdownIndicator,
                Placeholder,
                MenuList,
                NoOptionsMessage,
                MultiValueLabel,
                Option,
                MultiValueRemove,
                ClearIndicator,
              }}
              formatOptionLabel={formatOptionLabel}
              classNamePrefix={error ? 'react-select2-error react-select2' : 'react-select2'}
              placeholder={placeholder || (isMulti === 'true' ? 'Выберите одно или несколько значений' : 'Выберите значение')}
              options={options}
              onChange={(evt) => onChange(evt)}
              isClearable={'true'}
              isDisabled={disabled}
            />
            {error ? (
              <div className='absolute inset-y-0 right-8 flex items-center pointer-events-none'>

                <Tooltip anchorId={name} content={error?.message} place="top" />

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
          </div>
        </div>
      )}
    />
  );
}

RHFSelect.propTypes = {
  options: PropTypes.array,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  isMulti: PropTypes.bool,
  label: PropTypes.node,
  direction: PropTypes.oneOf(['row', 'column']),
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  noOptionsMessage: PropTypes.string,
  disabled: PropTypes.bool,
  defaultValue: PropTypes.any
};

RHFSelect.defaultProps = {
  label: null,
  direction: 'row',
  isMulti: false,
  disabled: false,
  defaultValue: null
};
