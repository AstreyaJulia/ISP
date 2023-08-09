import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import React, { useEffect, useMemo, useState } from "react";
import { endOfDay, isDate, parseISO, startOfDay } from "date-fns";
import PropTypes from "prop-types";
import toast from "react-hot-toast";
import {
  FormProvider,
  RHFDatePicker,
  RHFSelect,
  RHFTextareaField, RHFTextField
} from "../../components/hook-form";
import Typography from "../../components/Typography";
import BasicButton from "../../components/BasicButton";
import LoadingButton from "../../components/LoadingButton";
import { classNames } from "../../utils/classNames";
import axios from "../../utils/axios";
import Toast, { toastStyles } from "../../components/Toast";
import { getInitials, getInitialsOnly } from "../../utils/getInitials";
import { Avatar } from "../../components/Avatar";
import { getAvatarColor } from "../../utils/getAvatarColor";
import DeleteModal from "../../components/Modal/DeleteModal";
import { createEvent, deleteEvent, updateEvent } from "../../store/slices/calendar";
import { dispatch } from "../../store";
import { formatYyyyMmDdHHMMDate } from "../../utils/formatTime";
import apiErrorHelper from "../../utils/apiErrorHelper";
import Modal from "../../components/Modal";
import NewCalendarLabelForm from "./NewCalendarLabelForm";


const NewEditEventForm = ({ currentEvent, isEdit, onCloseModal, user, updateEvents }) => {

  const [descriptionShow, setDescriptionShow] = useState(false);
  const [loadingUsers, setLoadingUsers] = useState(false);
  const [usersOptions, setUsersOptions] = useState([]);
  const [loadingColors, setLoadingColors] = useState(false);
  const [colorOptions, setColorOptions] = useState([]);
  const [openDialog, setOpenDialog] = useState(false); // модал удаления события
  const [openCalendarAddModal, setCalendarAddModal] = useState(false); // модал добавления метки
  const [openCalendarDialog, setOpenCalendarDialog] = useState(false); // модал удаления метки

  const NewEventSchema = Yup.object().shape({
    title: Yup.string().required("Название обязательно для заполнения"),
    calendar: Yup.string().required(),
    start: Yup.date()
      .transform(value => {
        if (value !== "" && !isDate(value)) {
          return parseISO(value);
        }
        if (value !== "" && isDate(value)) {
          return value;
        }
        return null;
      }).required("Дата начала события обязательна для заполнения"),
    end: Yup.date()
      .transform(value => {
        if (value !== "" && !isDate(value)) {
          return parseISO(value);
        }
        if (value !== "" && isDate(value)) {
          return value;
        }
        return null;
      }).required("Дата окончания события обязательна для заполнения"),
    allDay: Yup.string().required(""),
    creator: Yup.number(),
    users: Yup.array().min(1, "Нужно выбрать хотя бы 1 пользователя"),
    description: Yup.string(),
    display: Yup.string()
  });

  const defaultValues = useMemo(
    () => ({
      title: currentEvent?.title ?? "",
      start: currentEvent?.start ?? "",
      end: currentEvent?.end ?? "",
      allDay: currentEvent?.allDay ?? "false",
      users: currentEvent?.users ?? [],
      description: currentEvent?.description ?? "",
      calendar: currentEvent?.calendar ?? "",
      creator: currentEvent?.creator ?? user?.id,
      display: currentEvent?.display ?? ""
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentEvent]
  );

  const methods = useForm({
    resolver: yupResolver(NewEventSchema),
    defaultValues
  });

  const {
    reset,
    watch,
    getValues,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const values = watch();

  useEffect(() => {
    getUsersSelect();
    getColorsSelect();

    if (isEdit && currentEvent) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentEvent]);

  const onSubmit = async () => {
    const values = getValues();

    try {
      if (!isEdit) {
        dispatch(createEvent({
          ...values,
          users: values.users.join(","),
          creator: isEdit ? currentEvent?.creator.toString() : user.id.toString(),
          allDay: values.allDay === "true" ? "1" : "0",
          display: values.display || "",
          start: formatYyyyMmDdHHMMDate(values.start),
          end: formatYyyyMmDdHHMMDate(values.end)
        }));
      } else {
        dispatch(updateEvent(currentEvent?.id, {
          ...values,
          users: values.users.join(","),
          creator: isEdit ? currentEvent?.creator.toString() : user.id.toString(),
          allDay: values.allDay === "true" ? "1" : "0",
          display: values.display || "",
          start: formatYyyyMmDdHHMMDate(values.start),
          end: formatYyyyMmDdHHMMDate(values.end)
        }));
      }
      updateEvents();
      reset();
      toast((t) => <Toast t={t} message={!isEdit ? "Событие создано!" : "Успешно обновлено!"}
                          type="success" />, { className: toastStyles });
    } catch (error) {
      apiErrorHelper(error);
    }
  };

  const onDelete = async (id) => {

    try {
      dispatch(deleteEvent(id));
      updateEvents();
      /* Сохранение пользователя */
      reset();
      toast((t) => <Toast t={t} message={!isEdit ? "Событие создано!" : "Успешно обновлено!"}
                          type="success" />, { className: toastStyles });
    } catch (error) {
      apiErrorHelper(error);
    }
  };

  const onDeleteCalendar = async () => {
    getColorsSelect();

    await axios
      .delete("/calendar/category", {
        data: {
          id: colorOptions.find((option) => option.id === values.calendar).id
        }
      }).then(() => {
        setOpenCalendarDialog(false);
      })
      .catch((err) => apiErrorHelper(err));

    onChangeCalendar(null);
    getColorsSelect();
  };

  const colorBgOptions = {
    indigo: "bg-indigo-500 dark:bg-indigo-600",
    green: "bg-green-500 dark:bg-green-600",
    cyan: "bg-cyan-500 dark:bg-cyan-600",
    yellow: "bg-yellow-500 dark:bg-yellow-600",
    red: "bg-red-500 dark:bg-red-600",
    pink: "bg-pink-500 dark:bg-pink-600",
    blue: "bg-blue-500 dark:bg-blue-600",
    orange: "bg-orange-500 dark:bg-orange-600",
    teal: "bg-teal-500 dark:bg-teal-600"
  };

  const getColorsSelect = async () => {
    await axios
      .get("/calendar/category")
      .then((res) => {
        const colorslist = res.data.data;
        const colorsOptions = colorslist.map((item) => ({
          "id": item.id,
          "value": item.id,
          "label": <div className="flex gap-2 items-center">
      <span
        className={classNames("mr-2 w-3 h-3 rounded-full", colorBgOptions[item.color])} />
            <span>{item.title}</span>
          </div>,
          "calendar": item.title,
          "color": item.color,
          "selectID": "calendar"
        }));

        /* Получаем список рабочих мест, очищаем, обрабатываем и пишем в стейт */
        setColorOptions([]);
        setColorOptions(colorsOptions);
      })
      .catch((err) => apiErrorHelper(err));
  };

  const getUsersSelect = async () => {
    await axios
      .get("/calendar/staffCalendar")
      .then((res) => {
        const userslist = res.data.data;
        const usersOptions = userslist.map((item) => (
          {
            "id": item.id,
            "value": item.id,
            "label": getInitials(item.label),
            "icon": <Avatar size="6" shape="circle" color={item?.label ? getAvatarColor(item?.label) : "indigo"}
                            name={getInitialsOnly(item.label)} />,
            "selectID": "users"
          }
        ));

        // С группами
        /*
                const usersOptions = [...new Set(usersList.map((item) => item.groupName))].map((i)=>({
          label: i,
          options: usersList.filter((user) => user.groupName === i).map((groupItem) => ({
              "id": groupItem.id,
              "value": groupItem.id,
              "label": getInitials(groupItem.label),
              "icon": <Avatar size="6" shape="circle"
                              color={groupItem?.label ? getAvatarColor(groupItem?.label) : "indigo"}
                              name={getInitialsOnly(groupItem.label)} />,
              "selectID": "users"
            })
          )
        }))
         */

        /* Получаем список рабочих мест, очищаем, обрабатываем и пишем в стейт */
        setUsersOptions([]);
        setUsersOptions(usersOptions);
      })
      .catch((err) => apiErrorHelper(err));
  };

  const onFocusUsers = async () => {
    setLoadingUsers(true);
    await getUsersSelect().then(() => setLoadingUsers(false));
  };

  const onFocusColors = async () => {
    setLoadingColors(true);
    await getColorsSelect().then(() => setLoadingColors(false));
  };

  const onChangeUsers = (value) => {
    setValue("users", value.map((item) => item.value));
  };

  const onSelectAllUsers = () => {
    setValue("users", usersOptions.map((item) => item.value));
  };

  const onChangeCalendar = (value) => {
    setValue("calendar", value ? value.id : reset({ "calendar": "" }));
  };

  const onChangeAllDay = () => {
    const values = getValues();
    if (values.start !== "") {
      setValue("start", startOfDay(new Date(values.start)));
    }
    if (values.end !== "") {
      setValue("end", endOfDay(new Date(values.end)));
    }
  };

  const dateOnchangeHandler = (date, field) => {

    const values = getValues();

    if (field === "start") {
      if (values.end === "") {
        setValue(field, date, {
          shouldValidate: true
        });
      } else {
        // eslint-disable-next-line
        if (values.end > date) {
          setValue(field, date, {
            shouldValidate: true
          });
        } else {
          setValue(field, date, {
            shouldValidate: true
          });
          setValue("end", date, {
            shouldValidate: true
          });
        }

      }
    } else {
      // eslint-disable-next-line
      if (values.start === "") {
        setValue(field, date, {
          shouldValidate: true
        });
      } else {
        // eslint-disable-next-line
        if (values.start < date) {
          setValue(field, date, {
            shouldValidate: true
          });
        } else {
          setValue(field, date, {
            shouldValidate: true
          });
          setValue("start", date, {
            shouldValidate: true
          });
        }

      }
    }
  };


  return (
    <>
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3 items-start mt-6">
          <RHFTextField name="title" placeholder="Название события" direction="column"
                        disabled={isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
                        label={<Typography variant="label">Название события</Typography>} />
          <div className="w-full flex justify-end items-center">
            <BasicButton
              disabled={isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
              size="small" onClick={() => setDescriptionShow(!descriptionShow)} type="button"
              variant="basic">{descriptionShow ? "Скрыть описание" : "Развернуть описание"}</BasicButton>
          </div>


          {descriptionShow || (isEdit && currentEvent?.description !== "") ?
            <RHFTextareaField
              disabled={isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
              name="description" className="mt-2" direction="column" placeholder="Описание события"
              rows={12} /> : ""}

          <div className="flex items-end gap-4">

            <RHFDatePicker
              onChange={(date) => dateOnchangeHandler(date, "start")}
              disabled={isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
              name="start" placeholder="Начало" direction="column"
              dateFormat={"dd.MM.yyyy HH:mm"}
              /* eslint-disable-next-line */
              showTimeSelect={true}
              label={<Typography variant="label">Начало</Typography>} />
            <RHFDatePicker
              onChange={(date) => dateOnchangeHandler(date, "end")}
              disabled={isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
              name="end" placeholder="Окончание" direction="column"
              dateFormat={"dd.MM.yyyy HH:mm"}
              /* eslint-disable-next-line */
              showTimeSelect={true}
              label={<Typography variant="label">Окончание</Typography>} />
            <BasicButton
              className="mb-2"
              title="Выбрать весь день"
              disabled={isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
              size="small" onClick={() => onChangeAllDay()} type="button"
              variant="basic">Весь день</BasicButton>
          </div>


          <div className="w-full flex gap-4 items-end">
            <RHFSelect
              disabled={isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
              name="users"
              /* eslint-disable-next-line */
              isMulti={true}
              direction="column"
              onChange={(evt) => onChangeUsers(evt)}
              onFocus={() => onFocusUsers()}
              noOptionsMessage={loadingUsers ? "Загрузка..." : "Результатов не найдено"}
              placeholder="Выберите пользователя или пользователей"
              options={usersOptions}
              label={<Typography variant="label">Видимость пользователям</Typography>} />
            <BasicButton
              title="Выбрать всех работающих сотрудников"
              disabled={isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
              size="medium" onClick={() => onSelectAllUsers()} type="button" variant="basic" className="shrink-0 mb-1">Выбрать
              всех</BasicButton>
          </div>

          <div className="w-full flex gap-4 items-end">
            <RHFSelect
              disabled={isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
              name="calendar"
              direction="column"
              onChange={(evt) => onChangeCalendar(evt)}
              onFocus={() => onFocusColors()}
              noOptionsMessage={loadingColors ? "Загрузка..." : "Результатов не найдено"}
              placeholder="Выберите метку события"
              options={colorOptions}
              defaultValue={colorOptions.find((option) => option.id === values?.calendar)}
              label={<Typography variant="label">Метка</Typography>} />
            {user?.sudo.toString() === "1" ? <BasicButton
              title="Добавить новую метку"
              size="medium" onClick={() => setCalendarAddModal(true)} type="button" variant="primary"
              className="shrink-0 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path
                  d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
              </svg>
            </BasicButton> : ""}
            {user?.sudo.toString() === "1" ? <BasicButton
              title="Удалить выбранную метку"
              disabled={values.calendar === ""}
              size="medium" onClick={() => setOpenCalendarDialog(true)} type="button" variant="ghost"
              className="shrink-0 mb-1">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                <path fillRule="evenodd"
                      d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z"
                      clipRule="evenodd" />
              </svg>
            </BasicButton> : ""}
          </div>

          <div className={classNames("flex items-center mt-5 w-full", isEdit ? "justify-between" : "justify-end")}>

            {isEdit ? <BasicButton
              disabled={isSubmitting || isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
              size="medium" type="button" variant="ghost" onClick={() => setOpenDialog(true)}
            >
              <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px"
                   fill="currentColor" className="h-5 w-5 mr-2 text-gray-700 dark:text-gray-300">
                <path d="M0 0h24v24H0V0z" fill="none" />
                <path
                  d="M16 9v10H8V9h8m-1.5-6h-5l-1 1H5v2h14V4h-3.5l-1-1zM18 7H6v12c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7z" />
              </svg>
              Удалить
            </BasicButton> : ""}

            <div className="flex items-center justify-end gap-5">
              <BasicButton size="medium" type="reset" variant="ghost" onClick={() => {
                reset();
                onCloseModal();
              }}
                           disabled={isSubmitting}>Отмена
              </BasicButton>

              <LoadingButton
                disabled={isSubmitting || isEdit && (currentEvent?.creator.toString() !== user?.id.toString() && user?.sudo.toString() !== "1")}
                size="medium" type="submit" variant="success"
                loadingLabel="Сохранение ..." label={isEdit ? "Обновить" : "Создать"} />
            </div>

          </div>

        </div>
      </FormProvider>
      <DeleteModal open={openDialog} setOpen={setOpenDialog} deleteOnClick={() => onDelete(currentEvent?.id)}
                   deleteTitle='Удаление события'
                   deleteMessage="Вы уверены, что хотите удалить это событие? Сведения будут полностью удалены. Операцию невозможно будет отменить." />
      <DeleteModal open={openCalendarDialog} setOpen={setOpenCalendarDialog} deleteOnClick={() => onDeleteCalendar()}
                   deleteTitle='Удаление метки'
                   deleteMessage="Вы уверены, что хотите удалить эту метку? Сведения будут полностью удалены. Операцию невозможно будет отменить." />
      <Modal title="Создать метку для календаря" setOpen={() => setCalendarAddModal(false)} open={openCalendarAddModal}
             size="sm" onModalClose={() => setCalendarAddModal(false)}>
        <NewCalendarLabelForm colorOptions={colorOptions} onCloseModal={(id) => {
          setCalendarAddModal(false);
          getColorsSelect();
          onChangeCalendar({ id: parseInt(id, 10) });
        }} />
      </Modal>
    </>
  );
};

export default NewEditEventForm;

NewEditEventForm.propTypes = {
  currentEvent: PropTypes.object,
  isEdit: PropTypes.bool,
  onCloseModal: PropTypes.func,
  user: PropTypes.object,
  updateEvents: PropTypes.func
};

NewEditEventForm.defaultProps = {
  currentEvent: {},
  isEdit: false,
  onCloseModal:() => null,
  user: {},
  updateEvents: () => null
};