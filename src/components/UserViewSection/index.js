import {Avatar} from "../Avatar";
import {getInitials, getInitialsOnly} from "../../utils/getInitials";
import {getAvatarColor} from "../../utils/getAvatarColor";
import Badge from "../Badge";
import {getHighlightedText} from "../../utils/getHighlightedText";

export default function UserViewSection({ currentUser }) {

    return (
        <div className="py-10">
            {/* Page header */}
            <div className="max-w-3xl mx-auto px-4 sm:px-6 md:flex md:items-center md:justify-between md:space-x-5 lg:max-w-7xl lg:px-8">
                <div className="flex items-center space-x-5">
                    <div className="flex-shrink-0">
                        <div className="relative">
                            <Avatar
                                size='16'
                                name={getInitialsOnly(currentUser?.fullname ? currentUser?.fullname : currentUser?.username)}
                                color={currentUser?.fullname ? getAvatarColor(currentUser?.fullname) : 'indigo'}
                                shape='circle'
                            />
                            <span className="absolute inset-0 shadow-inner rounded-full" aria-hidden="true" />
                        </div>
                    </div>
                    <div>
                        <h1 className="text-2xl font-bold text-gray-900">{currentUser?.fullname}</h1>
                        <p className="text-sm font-medium text-gray-500">
                            {currentUser?.profession}{' '}
                            {currentUser?.affiliationJudge ? <span className="text-gray-900">: {getInitials(currentUser?.affiliationJudge)}</span> : ''}
                        </p>
                    </div>
                </div>
            </div>

            <div className="mt-8 max-w-3xl mx-auto grid grid-cols-1 gap-6 sm:px-6 lg:max-w-7xl lg:grid-flow-col-dense lg:grid-cols-3">
                <div className="space-y-6 lg:col-start-1 lg:col-span-2">

                    <section aria-labelledby="applicant-information-title">
                        <div className="bg-white shadow sm:rounded-lg">
                            <div className="border-t border-gray-200 px-4 py-5 sm:px-6">
                                <dl className="grid grid-cols-1 gap-x-4 gap-y-8 sm:grid-cols-2">
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">День рождения</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{currentUser?.dob}</dd>
                                    </div>
                                    <div className="sm:col-span-1"/>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Должность</dt>
                                        <dd className="mt-1 text-sm text-gray-900">{currentUser?.profession}{' '}
                                            {currentUser?.affiliationJudge ? <span className="text-gray-900">: {getInitials(currentUser?.affiliationJudge)}</span> : ''}</dd>
                                    </div>
                                    <div className="sm:col-span-1">
                                        <dt className="text-sm font-medium text-gray-500">Рабочее место</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            {currentUser?.workplace !== 'Нет здания, нет кабинета, нет рабочего места' ? <p
                                            className='text-sm text-slate-800 dark:text-slate-200 flex items-center'>
                                            <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 16 16' className='w-4 h-4 text-slate-400 mr-2'>
                                                <path fill='currentColor'
                                                      d='M11 3V0H2v14H0v1h7v-5h2V8h5V3h-3zm-5 7H4V8h2v2zm0-3H4V5h2v2zm0-3H4V2h2v2zm3 3H7V5h2v2zm0-3H7V2h2v2zm4 3h-2V5h2v2zm1 4h2v5H8v-5h2V9h4v2z' />
                                            </svg>
                                                {currentUser?.workplace}
                                        </p> : <svg xmlns='http://www.w3.org/2000/svg' aria-hidden='true'
                                                    viewBox='0 0 24 24' className='w-4 h-4 text-slate-400'>
                                            <g fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round' strokeWidth='2'>
                                                <path d='M5 12H3l4.497-4.497m1.999-1.999L12 3l9 9h-2M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2m0-4v-3' />
                                                <path d='M9 21v-6a2 2 0 0 1 2-2h2m2 2v6M3 3l18 18' />
                                            </g>
                                        </svg>}</dd>
                                    </div>
                                    <div className="sm:col-span-2">
                                        <dt className="text-sm font-medium text-gray-500">About</dt>
                                        <dd className="mt-1 text-sm text-gray-900">
                                            Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat.
                                            Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia
                                            proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.
                                        </dd>
                                    </div>
                                </dl>
                            </div>
                        </div>
                    </section>


                </div>
                <section aria-labelledby="timeline-title" className="lg:col-start-3 lg:col-span-1">
                    <div className="bg-white shadow sm:rounded-lg">
                        <div className="px-4 py-5 sm:px-6 flex gap-3 justify-between">
                            <h2 id="applicant-information-title" className="text-lg leading-6 font-medium text-gray-900">
                                {currentUser?.username}
                            </h2>
                            <div className='flex gap-2'>
                                <Badge item={currentUser?.setPass.toString() === '0' ? 'Пароль не установлен' : 'Пароль установлен'} size='small' color={currentUser?.setPass.toString() === '0' ? 'yellow' : 'green'} shape='rounded' />
                                </div>
                        </div>
                        <div className='flex gap-2 px-4 py-5 '>

                            <Badge item={currentUser?.active.toString() === '0' ? 'Заблокирован' : 'Активен'} size='small' color={currentUser?.active.toString() === '0' ? 'red' : 'green'} shape='rounded' />
                            <Badge item={currentUser?.sudo.toString() === '0' ? 'Пользователь' : 'Администратор'} size='small' color={currentUser?.sudo.toString() === '0' ? 'indigo' : 'cyan'} shape='rounded' />
                        </div>
                        <div className="px-4 py-5 flex flex-col justify-stretch">
                            <button
                                type="button"
                                className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                            >
                                Сброс пароля
                            </button>
                        </div>
                    </div>

                </section>
            </div>
        </div>)
    ;
};