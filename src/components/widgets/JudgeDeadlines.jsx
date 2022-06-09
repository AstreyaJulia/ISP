import React from 'react';
import classnames from "classnames";
import {Link} from 'react-router-dom'
import {getAmount} from "../../utils";
import {Avatar} from "../elements/Avatar";

const actions = [
    {
        title: 'Дел с нарушением срока',
        href: '#',
        icon: "mdi-clock-outline",
        col: 1,
        color: 'red'
    },
    {
        title: 'Не отмечен результат события',
        href: '#',
        icon: "mdi-check-circle-outline",
        col: 1,
        color: 'indigo'
    },
    {
        title: 'Не сдано в канцелярию',
        href: '#',
        icon: "mdi-flag-remove-outline",
        col: 1,
        color: 'blue'
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
                        <Link to={action.href} className="w-full focus:outline-none min-w-0">
                            <div className="flex items-center p-4">
                                <Avatar size="14" color={action.color} icon={<i className={['text-2xl mdi', action.icon].join(' ')} />} shape="roundedLG" classname="flex-shrink-0" />
                                {/* Extend touch target to entire panel */}
                                <div className="min-w-0 flex flex-col px-4 py-2 text-sm">
                                    <span className="truncate">{action.title}</span>
                                    <p className="text-gray-500 truncate">{action.col} {`${getAmount(action.col, {
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
