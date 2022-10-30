import React from 'react';
import { fDate, monthYear } from '../../utils/formatTime';
import { classNames } from '../../utils/classNames';

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

export const CalendarToolbar = ({ date, view, onToday, onNextDate, onPrevDate, onChangeView, onAddEvent, dates }) => {
  return (
    <div className="flex items-center justify-between  p-4">
      <div className="flex items-center gap-2 justify-center">
        <button
          type="button"
          onClick={onToday}
          className="mr-2 cursor-pointer text-gray-700 dark:text-gray-300 focus:outline-none border border-slate-300 dark:border-gray-700 shadow rounded-md py-2 px-4 flex items-center text-sm font-medium hover:bg-slate-100"
        >
          Сегодня
        </button>
        <button
          type="button"
          onClick={onPrevDate}
          className="cursor-pointer text-gray-700 dark:text-gray-300 focus:outline-none rounded-full p-2 flex items-center justify-center text-base hover:bg-slate-100"
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
          className="cursor-pointer text-gray-700 dark:text-gray-300 focus:outline-none rounded-full p-2 flex items-center justify-center text-base hover:bg-slate-100"
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
            className="shadow grow-0 mt-1 block pl-3 pr-10 py-2 text-base bg-white dark:bg-slate-900 border-slate-300 dark:border-slate-700 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm rounded-md"
          >
            {VIEW_OPTIONS.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>

        <div className="pl-6 border-l border-gray-400 dark:border-gray-600">
          <button
            type="button"
            onClick={onAddEvent}
            className="cursor-pointer text-white shadow border border-indigo-600 bg-indigo-600 dark:bg-indigo-700 dark:border-indigo-700 focus:outline-none border rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium"
          >
            <span>Добавить</span>
          </button>
        </div>
      </div>
    </div>
  );
};
