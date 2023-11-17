import React from 'react';
import PropTypes from 'prop-types';
import Card from '../../../../components/Card';
import { Avatar } from '../../../../components/Avatar';
import { getInitialsOnly } from '../../../../utils/getInitials';
import { getAvatarColor } from '../../../../utils/getAvatarColor';
import { getAmount } from '../../../../utils/getAmount';

const WidgetUsersBirthdays = ({ birthdays, error }) => (
  <Card classname="p-4 flex flex-col">
    <p className="text-sm font-medium uppercase text-gray-500 dark:text-gray-400 mb-3">Дни рождения сегодня</p>
    {!error && birthdays?.length > 0 ? (
      birthdays?.map((item, key) => (
        <div key={key} className="flex px-3 py-3 items-center">
          <Avatar
            size="10"
            shape="circle"
            name={getInitialsOnly(item.fullname)}
            color={getAvatarColor(item.fullname)}
          />
          <div className="flex flex-col ml-4">
            <p className="text-base font-medium text-gray-800 dark:text-gray-300 mb-1">{item.fullname}</p>
            <p className="text-sm font-medium text-gray-600 dark:text-gray-400 flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.87c1.355 0 2.697.055 4.024.165C17.155 8.51 18 9.473 18 10.608v2.513m-3-4.87v-1.5m-6 1.5v-1.5m12 9.75l-1.5.75a3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0 3.354 3.354 0 00-3 0 3.354 3.354 0 01-3 0L3 16.5m15-3.38a48.474 48.474 0 00-6-.37c-2.032 0-4.034.125-6 .37m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.17c0 .62-.504 1.124-1.125 1.124H4.125A1.125 1.125 0 013 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 016 13.12M12.265 3.11a.375.375 0 11-.53 0L12 2.845l.265.265zm-3 0a.375.375 0 11-.53 0L9 2.845l.265.265zm6 0a.375.375 0 11-.53 0L15 2.845l.265.265z"
                />
              </svg>
              <span className="ml-1">{item.age}</span>
              <span>{getAmount(item.age, { single: 'год', multi: 'года', count: 'лет' })}</span>
            </p>
          </div>
        </div>
      ))
    ) : (
      <p className="text-base font-medium text-gray-400 dark:text-gray-600 mb-1 text-center">
        Сегодня нет дней рождения
      </p>
    )}
  </Card>
);

WidgetUsersBirthdays.propTypes = {
  birthdays: PropTypes.array.isRequired,
  error: PropTypes.object,
};

export default WidgetUsersBirthdays;
