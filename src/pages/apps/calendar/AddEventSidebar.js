import React, {Fragment, useEffect, useState} from "react";
import {Avatar} from "../../../components/elements/Avatar";
import toast from "react-hot-toast";
import Flatpickr from "react-flatpickr";
import Select, {components} from "react-select"; // eslint-disable-line
import {Controller, useForm} from "react-hook-form";
import {Form, Input, Label} from "reactstrap";
import {isObjEmpty} from "../../../utils";
import PrimaryButton from "../../../components/elements/PrimaryButton";
import DangerButton from "../../../components/elements/DangerButton";
import {Dialog, Switch, Transition} from "@headlessui/react";
import {XIcon} from "@heroicons/react/outline";
import classNames from "classnames";
import CardHeader from "../../../components/elements/CardHeader";
import Dot from "../../../components/elements/Dot";
import {usersOptions, calendCat} from "../../../@mock/SampleData";

const AddEventSidebar = props => {

    const {
        open,
        store,
        dispatch,
        addEvent,
        calendarApi,
        selectEvent,
        updateEvent,
        removeEvent,
        refetchEvents,
        calendarsColor,
        handleAddEventSidebar
    } = props;

    const selectedEvent = store.selectedEvent,
        {
            control,
            setError,
            setValue,
            getValues,
            handleSubmit,
            formState: {errors}
        } = useForm({
            defaultValues: {title: ""}
        });


    /** Создает селект с метками событий из настроек
     * @param object - объект
     * @param key1 - имя ключа для значения
     * @param key2 - имя ключа для метки
     * @returns {*[]}
     */
    const makeColorOptionsForReactSelect = (object, key1, key2) => {
        const array = [];
        for (let i = 0; i < object.length; i++) {
            // eslint-disable-next-line
            let obj = new Map;
            obj.set("value", object[i][key1]);
            obj.set("label", object[i][key2]);
            array.push(Object.fromEntries(obj))
        }
        return array;
    }

    const colorOptions = makeColorOptionsForReactSelect(calendCat, "color", "name");

    //const [owner, setOwner] = useState(0); // owner
    const [desc, setDesc] = useState(""); // description
    const [users, setUsers] = useState([]); // users
    const [allDay, setAllDay] = useState(false); // allDay
    const [endPicker, setEndPicker] = useState(new Date()); // end
    const [startPicker, setStartPicker] = useState(new Date()); // start
    const [calendarLabel, setCalendarLabel] = useState(colorOptions[0]); // calendar

    /** Конструктор компонента Option
     * @param data - данные, из к-рых берутся значения по ключу color
     * @param props - пропсы
     * @returns {JSX.Element}
     * @constructor
     */
    const OptionComponent = ({data, ...props}) => {
        return (
            <components.Option {...props}>
                <div className="flex flex-wrap items-center">
                    <Dot className="mr-3" color={data.value} size="3"/>
                    <span>{data.label}</span>
                </div>
            </components.Option>
        )
    }

    /** Констркутор компонента с пользователями
     * @param data - данные
     * @param props - пропсы
     * @returns {JSX.Element}
     * @constructor
     */
    const UsersComponent = ({data, ...props}) => {
        return (
            <components.Option {...props}>
                <div className="flex flex-wrap items-center">
                    <Avatar size="6" avatar={data.avatar} name={data.name} color={data.color}/>
                    <span
                        className="ml-3">{data.label.split(" ").slice(0, 1)} {data.label.split(" ").slice(1).map((n) => n[0]).join(". ").toUpperCase()}</span>
                </div>
            </components.Option>
        )
    }

    /** Добавление события */
    const handleAddEvent = () => {
        const obj = {
            title: getValues("title"),
            start: startPicker,
            end: endPicker,
            allDay,
            display: "block",
            extendedProps: {
                calendar: calendarLabel[0].label,
                users: users.length ? users : undefined,
                desc: desc.length ? desc : undefined
            }
        };
        dispatch(addEvent(obj));
        refetchEvents();
        handleCloseSidebar();
        toast.success("Событие успешно добавлено");
    }

    /** Сброс полей формы при закрытии */
    const handleResetInputValues = () => {
        dispatch(selectEvent({}));
        setValue("title", "");
        setAllDay(false);
        setDesc("");
        setUsers([]);
        setCalendarLabel(colorOptions[0]);
        setStartPicker(new Date());
        setEndPicker(new Date());
    };

    const handleCloseSidebar = () => {
        handleAddEventSidebar();
        handleResetInputValues();
    }

    /** Установить поля сайдбара  */
    const handleSelectedEvent = () => {
        if (!isObjEmpty(selectedEvent)) {

            const calendar = selectedEvent.extendedProps.calendar;

            const resolveLabel = () => {
                if (calendar.length) {
                    return {label: calendarsColor[calendar], value: calendar, color: calendar};
                } else {
                    return colorOptions[0];
                }
            }

            /** Ищет пользователей из списка по id пользователя
             * @returns {[]} - массив значений для селекта
             */
            const resolveUsers = () => {
                const array = [];
                if (selectedEvent.extendedProps.users) {
                    const userList = selectedEvent.extendedProps.users.length;
                    if (userList > 0) {
                        for (let i = 0; i < usersOptions.length; i++) {
                            let opt = usersOptions[i]['options'];
                            const filter = opt.filter(ob => selectedEvent.extendedProps.users.includes(ob.value));
                            if (filter.length > 0) {
                                Array.prototype.push.apply(array, filter)
                            }
                        }
                    }
                }
                return array;
            }

            setValue("title", selectedEvent.title || getValues("title"));
            setAllDay(selectedEvent.allDay || allDay);
            setDesc(selectedEvent.extendedProps.description || desc);
            setUsers(resolveUsers());
            setStartPicker(new Date(selectedEvent.start));
            setEndPicker(selectedEvent.allDay ? new Date(selectedEvent.start) : new Date(selectedEvent.end));
            setCalendarLabel([resolveLabel()]);
        }
    }

    /**
     * (UI) updateEventInCalendar
     * @param updatedEventData
     * @param propsToUpdate
     * @param extendedPropsToUpdate
     */
    const updateEventInCalendar = (updatedEventData, propsToUpdate, extendedPropsToUpdate) => {
        const existingEvent = calendarApi.getEventById(updatedEventData.id)

        // ** Set event properties except date related
        // ? Docs: https://fullcalendar.io/docs/Event-setProp
        // ** dateRelatedProps => ["start", "end", "allDay"]
        // ** eslint-disable-next-line no-plusplus
        for (let index = 0; index < propsToUpdate.length; index++) {
            const propName = propsToUpdate[index]
            existingEvent.setProp(propName, updatedEventData[propName])
        }

        // ** Set date related props
        // ? Docs: https://fullcalendar.io/docs/Event-setDates
        existingEvent.setDates(new Date(updatedEventData.start), new Date(updatedEventData.end), {
            allDay: updatedEventData.allDay
        })

        // ** Set event"s extendedProps
        // ? Docs: https://fullcalendar.io/docs/Event-setExtendedProp
        // ** eslint-disable-next-line no-plusplus
        for (let index = 0; index < extendedPropsToUpdate.length; index++) {
            const propName = extendedPropsToUpdate[index]
            existingEvent.setExtendedProp(propName, updatedEventData.extendedProps[propName])
        }
    }

    /** Обновляет событие в Store */
    const handleUpdateEvent = () => {
        if (getValues("title").length) {
            const eventToUpdate = {
                id: selectedEvent.id,
                title: getValues("title"),
                allDay: allDay,
                start: startPicker,
                end: endPicker,
                extendedProps: {
                    description: desc,
                    users: users,
                    calendar: calendarLabel[0].value
                }
            }

            const propsToUpdate = ["id", "title"];
            const extendedPropsToUpdate = ["calendar", "users", "description"];
            dispatch(updateEvent(eventToUpdate));
            updateEventInCalendar(eventToUpdate, propsToUpdate, extendedPropsToUpdate);

            handleCloseSidebar();
            toast.success("Событие обновлено");
        } else {
            setError("title", {
                type: "manual"
            })
        }
    }

    /** UI удалить событие из календаря
     * @param eventId - ID события
     * FIXME изменить на fetch
     */
    const removeEventInCalendar = eventId => {
        calendarApi.getEventById(eventId).remove();
    }

    /** Хандл удаления события */
    const handleDeleteEvent = () => {
        dispatch(removeEvent(selectedEvent.id))
        removeEventInCalendar(selectedEvent.id)
        handleCloseSidebar()
        toast.error("Событие удалено")
    }

    /** Конструтор Кнопок редактирования / удаления / добавления события
     * @returns {JSX.Element}
     * @constructor
     */
    const EventActions = () => {
        if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
            return (
                <Fragment>
                    <PrimaryButton type="submit" label="Добавить"/>
                    <DangerButton type="reset" label="Отмена" onClick={handleCloseSidebar}/>
                </Fragment>
            )
        } else {
            return (
                <Fragment>
                    <PrimaryButton type="button" label="Обновить" onClick={handleUpdateEvent}/>
                    <DangerButton type="button" label="Удалить" onClick={handleDeleteEvent}/>
                </Fragment>
            )
        }
    }

    useEffect(() => {
        if (open && selectEvent) {
            handleSelectedEvent()
        }
        // eslint-disable-next-line
    }, [open])

    return (
        <Transition.Root show={open} as={Fragment}>
            <Dialog
                as="div"
                className="fixed right-0 top-16 overflow-hidden"
                onClose={handleResetInputValues}
            >
                <div className="absolute right-0 top-16 overflow-hidden">
                    <Transition.Child
                        as={Fragment}
                        enter="ease-in-out duration-500"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in-out duration-500"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <Dialog.Overlay className="absolute inset-0 bg-gray-500 bg-opacity-75 transition-opacity"/>
                    </Transition.Child>
                    <div className="fixed right-0 top-16 bottom-0 pl-10 max-w-full flex">
                        <Transition.Child
                            as={Fragment}
                            enter="transform transition ease-in-out duration-500 sm:duration-700"
                            enterFrom="translate-x-full"
                            enterTo="translate-x-0"
                            leave="transform transition ease-in-out duration-500 sm:duration-700"
                            leaveFrom="translate-x-0"
                            leaveTo="translate-x-full"
                        >
                            <div className="relative w-96">
                                <Transition.Child
                                    as={Fragment}
                                    enter="ease-in-out duration-500"
                                    enterFrom="opacity-0"
                                    enterTo="opacity-100"
                                    leave="ease-in-out duration-500"
                                    leaveFrom="opacity-100"
                                    leaveTo="opacity-0"
                                >
                                    <div className="absolute top-0 left-0 -ml-8 pt-4 pr-2 flex sm:-ml-10 sm:pr-4">
                                        <button
                                            type="button"
                                            className="rounded-md text-gray-700 dark:text-gray-200 hover:text-gray-500 dark:hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                            onClick={handleCloseSidebar}
                                        >
                                            <span className="sr-only">Закрыть</span>
                                            <XIcon className="h-6 w-6" aria-hidden="true"/>
                                        </button>
                                    </div>
                                </Transition.Child>
                                <div
                                    className="h-full bg-white dark:bg-gray-900 p-6 overflow-y-auto border-l border-gray-200 dark:border-gray-700 shadow-lg">
                                    <div className="pb-16 space-y-6">
                                        <CardHeader className=""
                                                    title={selectedEvent && selectedEvent.title && selectedEvent.title.length ? "Обновление События" : "Добавление События"}/>
                                        <Form
                                            onSubmit={handleSubmit(data => {
                                                if (data.title.length) {
                                                    if (isObjEmpty(errors)) {
                                                        if (isObjEmpty(selectedEvent) || (!isObjEmpty(selectedEvent) && !selectedEvent.title.length)) {
                                                            handleAddEvent()
                                                        } else {
                                                            handleUpdateEvent()
                                                        }
                                                        handleCloseSidebar()
                                                    }
                                                } else {
                                                    setError("title", {
                                                        type: "manual"
                                                    })
                                                }
                                            })}
                                        >
                                            <div className="grid gap-2">
                                                <div className="mb-1">
                                                    <Label
                                                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                                        for="title">
                                                        Название события <span className="text-red-400">*</span>
                                                    </Label>
                                                    <Controller
                                                        name="title"
                                                        control={control}
                                                        render={({field}) => (
                                                            <Input
                                                                className="mt-1 bg-white dark:bg-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                                id="title" placeholder="Введите название"
                                                                invalid={errors.title && true} {...field} />
                                                        )}
                                                    />
                                                </div>
                                                <div className="mb-1">
                                                    <Label
                                                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                                        for="label">
                                                        Категория события
                                                    </Label>
                                                    <Select
                                                        id="label"
                                                        value={calendarLabel}
                                                        options={colorOptions}
                                                        className="mt-1 react-select bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 sm:text-sm"
                                                        classNamePrefix="select"
                                                        isClearable={false}
                                                        onChange={data => setCalendarLabel([data])}
                                                        components={{
                                                            Option: OptionComponent
                                                        }}
                                                    />
                                                </div>
                                                <div className="mb-1">
                                                    <Label
                                                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                                        for="startDate">
                                                        Начало события
                                                    </Label>
                                                    <Flatpickr
                                                        required
                                                        id="startDate"
                                                        name="startDate"
                                                        className="mt-1 bg-white dark:bg-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        onChange={date => setStartPicker(date[0])}
                                                        value={startPicker}
                                                        options={{
                                                            enableTime: allDay === false,
                                                            dateFormat: "Y-m-d H:i"
                                                        }}
                                                    />
                                                </div>
                                                <div className="mb-1">
                                                    <Label
                                                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                                        for="endDate">
                                                        Конец события
                                                    </Label>
                                                    <Flatpickr
                                                        required
                                                        id="endDate"
                                                        // tag={Flatpickr}
                                                        name="endDate"
                                                        className="mt-1 bg-white dark:bg-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        onChange={date => setEndPicker(date[0])}
                                                        value={endPicker}
                                                        options={{
                                                            enableTime: allDay === false,
                                                            dateFormat: "Y-m-d H:i"
                                                        }}
                                                    />
                                                </div>
                                                <div className="form-switch mt-1 flex items-center">
                                                    <Switch
                                                        checked={allDay}
                                                        onChange={setAllDay}
                                                        className="flex-shrink-0 group relative rounded-full inline-flex items-center justify-center h-5 w-10 cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                                                    >
                                                        <span className="sr-only">Use setting</span>
                                                        <span aria-hidden="true"
                                                              className="pointer-events-none absolute bg-white w-full h-full rounded-md"/>
                                                        <span
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                allDay ? "bg-indigo-600" : "bg-gray-200",
                                                                "pointer-events-none absolute h-4 w-9 mx-auto rounded-full transition-colors ease-in-out duration-200"
                                                            )}
                                                        />
                                                        <span
                                                            aria-hidden="true"
                                                            className={classNames(
                                                                allDay ? "translate-x-5" : "translate-x-0",
                                                                "pointer-events-none absolute left-0 inline-block h-5 w-5 border border-gray-200 rounded-full bg-white shadow transform ring-0 transition-transform ease-in-out duration-200"
                                                            )}
                                                        />
                                                    </Switch>
                                                    <Label
                                                        className="ml-2 text-sm font-medium text-gray-700 dark:text-gray-200"
                                                        for="allDay">
                                                        Весь день
                                                    </Label>
                                                </div>
                                                <div className="mb-1">
                                                    <Label
                                                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                                        for="users">
                                                        Назначить
                                                    </Label>
                                                    <Select
                                                        isMulti
                                                        Group
                                                        placeholder="Выберите сотрудников"
                                                        id="users"
                                                        className="mt-1 react-select bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 placeholder-gray-400 sm:text-sm"
                                                        classNamePrefix="select"
                                                        isClearable={false}
                                                        options={usersOptions}
                                                        value={users.length ? [...users] : null}
                                                        onChange={data => setUsers([...data])}
                                                        components={{
                                                            Option: UsersComponent
                                                        }}
                                                    />
                                                </div>
                                                <div className="mb-1">
                                                    <Label
                                                        className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                                                        for="description">
                                                        Описание события
                                                    </Label>
                                                    <Input
                                                        className="mt-1 bg-white dark:bg-gray-900 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                                                        type="textarea"
                                                        name="text"
                                                        id="description"
                                                        rows="3"
                                                        value={desc}
                                                        onChange={e => setDesc(e.target.value)}
                                                        placeholder="Введите описание"
                                                    />
                                                </div>
                                                <div className="flex mt-4">
                                                    <EventActions/>
                                                </div>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition.Root>
    )
}

export default AddEventSidebar
