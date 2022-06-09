import React from 'react';
import classnames from "classnames";
import {Link} from 'react-router-dom'
import {getAmount} from "../../utils";
import {BadgeCheckIcon, ClockIcon, UsersIcon,} from '@heroicons/react/outline'

const actions = [
    {
        title: 'Дел с нарушением срока',
        href: '#',
        icon: ClockIcon,
        col: 1,
        iconForeground: 'text-red-700 dark:text-red-200',
        iconBackground: 'bg-red-500/30',
    },
    {
        title: 'Не отмечен результат события',
        href: '#',
        icon: BadgeCheckIcon,
        col: 1,
        iconForeground: 'text-indigo-700 dark:text-indigo-200',
        iconBackground: 'bg-indigo-500/30',
    },
    {
        title: 'Не сдано в канцелярию',
        href: '#',
        icon: UsersIcon,
        col: 1,
        iconForeground: 'text-blue-700 dark:text-blue-200',
        iconBackground: 'bg-blue-500/30',
    },
]

export const JudgeDeadlines = ({className}) => {


    return (
        <div className={className || ""}>
            <h2 className="text-gray-500 dark:text-gray-400 text-xs font-medium uppercase tracking-wide">Внимание!</h2>
            <div
                className="mt-3 rounded-lg bg-gray-200 dark:bg-gray-700 overflow-hidden shadow divide-y divide-gray-200 dark:divide-gray-700 sm:divide-y-0 sm:grid sm:grid-cols-2 sm:gap-px">
                {actions.map((action, actionIdx) => (
                    <div
                        key={action.title}
                        className={classnames(
                            actionIdx === 0 ? 'rounded-tl-lg rounded-tr-lg sm:rounded-tr-none' : '',
                            actionIdx === 1 ? 'sm:rounded-tr-lg' : '',
                            actionIdx === actions.length - 2 ? 'sm:rounded-bl-lg' : '',
                            actionIdx === actions.length - 1 ? 'rounded-bl-lg rounded-br-lg sm:rounded-bl-none' : '',
                            'relative group bg-white dark:bg-gray-900 focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500'
                        )}
                    >
                        <Link to={action.href} className="w-full h-full p-4 focus:outline-none flex">

                            <div className="flex items-center">
            <span
                className={classnames(
                    action.iconBackground,
                    action.iconForeground,
                    'rounded-lg inline-flex p-3 ring-4 ring-white dark:ring-gray-900'
                )}
            >
              <action.icon className="h-6 w-6" aria-hidden="true"/>
            </span>
                                {/* Extend touch target to entire panel */}
                                <div className="flex-1 px-4 py-2 text-sm truncate">
                                    {action.title}
                                    <p className="text-gray-500">{action.col} {`${getAmount(action.col, {
                                        single: "дело",
                                        multi: "дела",
                                        count: "дел"
                                    })}`}</p>
                                </div>

                            </div>
                        </Link>

                    </div>
                ))}
            </div>
        </div>
    );
};
