import React, {Fragment} from "react";
import {Menu, Transition} from "@headlessui/react";
import {MessageSquare} from "react-feather";
import {messages} from "../../../../@mock/SampleData";
import {getInitials} from "../../../../utils";
import moment from "moment";
import {Avatar} from "../../../../components/elements/Avatar";
import Badge from "../../../../components/elements/Badge";
import {PlusIcon} from "@heroicons/react/outline";

const MessageDropdown = () => {
    return (
        <Menu as="div" className="relative inline-block text-left ml-4">
            <div>
                <Menu.Button
                    className="messages-dropdown-button bg-white dark:bg-gray-900 p-1 rounded-full text-gray-400 dark:text-gray-500 dark:hover:text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                    <MessageSquare className="h-6 w-6" aria-hidden="true"/>
                </Menu.Button>
            </div>

            <Transition
                as={Fragment}
                enter="transition ease-out duration-100"
                enterFrom="transform opacity-0 scale-95"
                enterTo="transform opacity-100 scale-100"
                leave="transition ease-in duration-75"
                leaveFrom="transform opacity-100 scale-100"
                leaveTo="transform opacity-0 scale-95"
            >
                <Menu.Items
                    className="dark:border dark:border-gray-700 origin-top-right absolute right-0 mt-2 w-96 rounded-md shadow-lg py-1 bg-white dark:bg-gray-900 ring-1 ring-black ring-opacity-5 focus:outline-none divide-y divide-gray-100 dark:divide-gray-800">
                    <div className="flex px-4 py-3 items-center justify-between">
                        <p className="text-base leading-6 font-medium text-gray-600 dark:text-gray-500">Новые
                            сообщения</p>
                        {messages.length > 0
                            ? <Badge color="red" item={messages.length.toString()}/>
                            : null}
                    </div>
                    {messages.length > 0 ? messages.map((message) => (
                            <Menu.Item key={message.id}>
                                {({active}) => (
                                    <div className="flex space-x-3 p-3">
                                        <Avatar size="6" avatar={message.user.avatar} name={message.user.fullname} color={message.user.color} />
                                        <div className="flex-1 space-y-1">
                                            <div className="flex items-center justify-between">
                                                <h3 className="text-sm font-medium text-gray-800 dark:text-gray-200">{getInitials(message.user.fullname)}</h3>
                                                <p className="text-sm text-gray-500">{moment(message.time).fromNow()}</p>
                                            </div>
                                            <p className="text-sm text-gray-500 line-clamp-2">
                                                {message.message}
                                            </p>
                                        </div>
                                    </div>
                                )}
                            </Menu.Item>
                        ))
                        : <div className="text-center p-3">
                            <MessageSquare className="mx-auto h-12 w-12 text-gray-400"/>
                            <h3 className="mt-1 text-sm text-gray-500">Новых сообщений нет</h3>
                            <div className="mt-6">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                >
                                    <PlusIcon className="-ml-1 mr-2 h-5 w-5" aria-hidden="true"/>
                                    Написать сообщение
                                </button>
                            </div>
                        </div>}
                </Menu.Items>
            </Transition>
        </Menu>
    );
};

export default MessageDropdown;