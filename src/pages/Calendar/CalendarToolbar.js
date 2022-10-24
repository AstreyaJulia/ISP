import { RadioGroup } from "@headlessui/react";
import { classNames } from "../../utils/classNames";
import { monthYear } from "../../utils/formatTime";

const VIEW_OPTIONS = [
  {
    value: "dayGridMonth",
    label: "Месяц",
    icon:
      <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
        <g>
          <path d="M0,0h24v24H0V0z" fill="none" />
        </g>
        <g>
          <path
            d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M8,11H4V6h4V11z M14,11h-4V6h4V11z M20,11h-4V6h4V11z M8,18H4v-5h4V18z M14,18h-4v-5h4V18z M20,18h-4v-5h4V18z" />
        </g>
      </svg>
  },
  {
    value: "timeGridWeek",
    label: "Неделя",
    icon: <svg className="w-5 h-5" fill="currentColor"  xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <g>
        <path d="M0,0h24v24H0V0z" fill="none" />
      </g>
      <g>
        <path
          d="M20,4H4C2.9,4,2,4.9,2,6v12c0,1.1,0.9,2,2,2h16c1.1,0,2-0.9,2-2V6C22,4.9,21.1,4,20,4z M13,6h2.5v12H13V6z M11,18H8.5V6H11 V18z M4,6h2.5v12H4V6z M20,18h-2.5V6H20V18z" />
      </g>
    </svg>
  },
  {
    value: "timeGridDay",
    label: "День",
    icon: <svg className="w-5 h-5" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M3 17h18v2H3zm0-7h18v5H3zm0-4h18v2H3z" />
    </svg>
  }
];

export const CalendarToolbar = ({ date, view, onToday, onNextDate, onPrevDate, onChangeView, onAddEvent }) => {

  return (
    <div className='grid grid-cols-3 p-4'>

      <div className='flex items-center gap-3'>
        <RadioGroup value={view} onChange={onChangeView} className="flex items-center gap-2">
          <RadioGroup.Label className="sr-only">Выберите вид календаря</RadioGroup.Label>
          <div className="grid grid-cols-3 gap-3">
            {VIEW_OPTIONS.map((option) => (
              <RadioGroup.Option
                key={option.label}
                value={option.value}
                className={({ active, checked }) =>
                  classNames(
                    active ? "text-gray-500" : "",
                    checked
                      ? "bg-indigo-600 border-transparent text-white hover:bg-indigo-700 text-gray-200"
                      : "bg-white border-gray-200 text-gray-900 hover:bg-gray-50",
                    "cursor-pointer text-gray-500 focus:outline-none border rounded-md p-2 flex items-center justify-center text-sm font-medium uppercase sm:flex-1"
                  )
                }
              >
                {option.icon}
              </RadioGroup.Option>
            ))}
          </div>
        </RadioGroup>

      </div>

      <div className='flex items-center gap-3 justify-center'>
        <button type="button" onClick={onPrevDate} className='cursor-pointer text-gray-500 focus:outline-none rounded-md p-2 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
          </svg>
        </button>

        <h4 className='text-xl font-bold text-gray-700 capitalize w-40 flex justify-center items-center'>{monthYear(date)}</h4>

        <button type="button" onClick={onNextDate} className='cursor-pointer text-gray-500 focus:outline-none rounded-md p-2 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
               stroke="currentColor" className="w-5 h-5">
            <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
          </svg>
        </button>

      </div>

      <div className='flex items-center justify-end gap-3'>
        <button type="button" onClick={onAddEvent} className='cursor-pointer text-gray-500 focus:outline-none border rounded-md p-2 flex items-center justify-center text-sm font-medium uppercase sm:flex-1'>
          <span>Добавить событие</span>
        </button>
        <button type="button" onClick={onToday} className='cursor-pointer text-gray-500 focus:outline-none border rounded-md p-2 flex items-center text-sm font-medium uppercase '>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" >
            <path d="M0 0h24v24H0z" fill="none" />
            <path
              d="M19 3h-1V1h-2v2H8V1H6v2H5c-1.11 0-1.99.9-1.99 2L3 19c0 1.1.89 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V8h14v11zM7 10h5v5H7z" />
          </svg>
        </button>
      </div>
    </div>
  );

};