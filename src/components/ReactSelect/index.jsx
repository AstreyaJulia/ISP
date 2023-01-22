import React from 'react';
import PropTypes from 'prop-types';
import Select, { components } from 'react-select';
import useAuth from '../../hooks/useAuth';
import { tailwindColorsConfig } from '../../utils/getTailwindconfig';

const ReactSelect = ({ isMulti, options, placeholder, defaultValue, onChange, onFocus, noOptionsMessage, error, ...other }) => {

  const { theme } = useAuth();

  /* Индикатор селекта */
  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
          <path
            fillRule="evenodd"
            d="M11.47 4.72a.75.75 0 011.06 0l3.75 3.75a.75.75 0 01-1.06 1.06L12 6.31 8.78 9.53a.75.75 0 01-1.06-1.06l3.75-3.75zm-3.75 9.75a.75.75 0 011.06 0L12 17.69l3.22-3.22a.75.75 0 111.06 1.06l-3.75 3.75a.75.75 0 01-1.06 0l-3.75-3.75a.75.75 0 010-1.06z"
            clipRule="evenodd"
          />
        </svg>
      </components.DropdownIndicator>
    );
  };

  /* Плейсхолдер */
  const Placeholder = (props) => {
    return (
      <components.Placeholder {...props}>
        <span className="text-sm text-gray-600 dark:text-gray-400">{props.children}</span>
      </components.Placeholder>
    );
  };

  /* Меню */
  const MenuList = (props) => {
    return (
      <components.MenuList {...props}>
        <div className="px-1.5 py-0.5 flex flex-col gap-1.5">{props.children}</div>
      </components.MenuList>
    );
  };

  /* Элемент меню */
  const Option = (props) => (
    <components.Option {...props}>
      <div className="px-3 py-2">{props.children}</div>
    </components.Option>
  );

  /* Форматтер элемента меню */
  const formatOptionLabel = ({ label, icon, customAbbreviation }) => (
    <div className="flex items-center group flex w-full items-center text-sm gap-2 w-full h-full">
      {icon ? <span>{icon}</span> : ''}
      <span>{label}</span>
      {customAbbreviation}
    </div>
  );

  /* Нет вариантов в фильтре */
  const NoOptionsMessage = (props) => {
    return (
      <div className="flex items-center justify-center flex w-full items-center bg-slate-100 dark:bg-slate-800 rounded-md">
        <components.NoOptionsMessage {...props}>
          <span className="text-gray-600 dark:text-gray-400 font-medium text-sm">{noOptionsMessage || 'Результатов не найдено'}</span>
        </components.NoOptionsMessage>
      </div>
    );
  };

  /* Метка для мульти-селекта */
  const MultiValueLabel = (props) => {
    return (
      <components.MultiValueLabel {...props}>
        <span className="flex items-center bg-slate-200 dark:bg-slate-700 text-gray-500 dark:text-gray-400 rounded-l-md p-1">
          {props.children}
        </span>
      </components.MultiValueLabel>
    );
  };

  /* Кнопка удаления для плашки мультиселекта */
  const MultiValueRemove = (props) => {
    return (
      <components.MultiValueRemove {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 w-4 h-4"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </components.MultiValueRemove>
    );
  };

  /* Кнопка удаления для плашки мультиселекта */
  const ClearIndicator = (props) => {
    return (
      <components.ClearIndicator {...props}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className="text-gray-500 dark:text-gray-400 hover:text-red-500 dark:hover:text-red-400 w-6 h-6"
        >
          <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
        </svg>
      </components.ClearIndicator>
    );
  };
  return (
    <div>
      <Select
        onFocus={() => onFocus()}
        styles={{
          control: (base) => ({
            ...base,
            backgroundColor: theme === 1 ? tailwindColorsConfig.theme.colors.gray['50'] : tailwindColorsConfig.theme.colors.gray['800'],
            borderColor: theme === 1 ? tailwindColorsConfig.theme.colors.slate['300'] : tailwindColorsConfig.theme.colors.slate['600'],
            color: theme === 1 ? tailwindColorsConfig.theme.colors.slate['300'] : tailwindColorsConfig.theme.colors.slate['600'],
            '::placeholder': theme === 1 ? tailwindColorsConfig.theme.colors.slate['300'] : tailwindColorsConfig.theme.colors.slate['600'],
          }),
          option: (base) => ({
            ...base,
            padding: `0`,
            margin: `0`,
            borderRadius: '0.375rem',
          }),
          input: (base) => ({
            ...base,
            outlineRadius: '0.375rem',
          }),
          multiValue: (base) => ({
            ...base,
            padding: '0',
            borderRadius: '0.375rem',
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
          ClearIndicator
        }}
        formatOptionLabel={formatOptionLabel}
        classNamePrefix={error ? 'react-select2-error react-select2' : 'react-select2'}
        placeholder={placeholder || (isMulti === 'true' ? 'Выберите одно или несколько значений' : 'Выберите значение')}
        options={options}
        defaultValue={defaultValue}
        onChange={(evt) => onChange(evt)}
        isClearable={'true'}
        {...other}
      />
      {!!error && <div className="text-sm text-red-600 dark:text-red-400 mt-2">{error.message}</div>}
    </div>
  );
};

ReactSelect.propTypes = {
  /** React Prop Types */
  isMulti: PropTypes.string,
  options: PropTypes.array.isRequired,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
  error: PropTypes.object,
};

export default ReactSelect;
