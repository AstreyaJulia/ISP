import React from 'react';
import PropTypes from 'prop-types';
import { fDate, monthYear } from '../../utils/formatTime';
import { classNames } from '../../utils/classNames';
import BasicButton from '../../components/BasicButton';

const VIEW_OPTIONS = [
  {
    value: 'dayGridMonth',
    label: 'Месяц',
  },
  {
    value: 'timeGridWeek',
    label: 'Неделя',
  },
  {
    value: 'timeGridDay',
    label: 'День',
  },
];

const viewTitle = (view, date, start, end) => {
  const settings = {
    dayGridMonth: monthYear(date),
    timeGridWeek: `${fDate(start)} - ${fDate(end - 1)}`,
    timeGridDay: `${fDate(start)}`,
  };

  return settings[view];
};

export const CalendarToolbar = ({ date, view, onToday, onNextDate, onPrevDate, onChangeView, onAddEvent, dates }) => (
  <div className="flex items-center justify-between  p-4">
    <div className="flex items-center gap-2 justify-center">
      <BasicButton variant='basic' shape='rounded' onClick={onToday} size='medium' type='button' >Сегодня</BasicButton>
      <button
        type="button"
        onClick={onPrevDate}
        className="cursor-pointer text-gray-700 dark:text-gray-300 focus:outline-none rounded-full p-2 flex items-center justify-center text-base hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
        </svg>
      </button>
      <button
        type="button"
        onClick={onNextDate}
        className="cursor-pointer text-gray-700 dark:text-gray-300 focus:outline-none rounded-full p-2 flex items-center justify-center text-base hover:bg-gray-100"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-5 h-5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
        </svg>
      </button>

      <h4
        className={classNames(
          'text-2xl font-medium text-gray-700 dark:text-gray-300 flex justify-center items-center shrink-0',
          view === 'dayGridMonth' ? 'capitalize' : ''
        )}
      >
        {viewTitle(view, date, dates.start, dates.end)}
      </h4>
    </div>

    <div className="flex items-center gap-6">

      <div className="flex items-center ml-3 justify-start">
        <label htmlFor="view_option" className="sr-only">
          Вид:
        </label>
        <select
          id="view_option"
          name="view_option"
          defaultValue={view}
          onChange={(evt) => onChangeView(evt.target.value)}
          className="shadow-sm grow-0 block pl-3 pr-10 py-2 text-base bg-white dark:bg-gray-900 border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 rounded-md"
        >
          {VIEW_OPTIONS.map((option) => (
            <option key={option.label} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>

      <div className="pl-6 border-l border-gray-400 dark:border-gray-600">
        <BasicButton variant='primary' shape='rounded' onClick={onAddEvent} size='medium' type='button' >Добавить</BasicButton>
      </div>
    </div>
  </div>
);

CalendarToolbar.propTypes = {
  date: PropTypes.object,
  view: PropTypes.string,
  onToday: PropTypes.func,
  onNextDate: PropTypes.func,
  onPrevDate: PropTypes.func,
  onChangeView: PropTypes.func,
  onAddEvent: PropTypes.func,
  dates: PropTypes.object,
};
