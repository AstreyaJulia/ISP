import React, { useEffect, useMemo, useState } from "react";
import * as Yup from "yup";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { isDate, parseISO } from "date-fns";
import PropTypes from "prop-types";
import Toast, { toastStyles } from "../Toast";
import { setSession } from "../../utils/jwt";
import {
  FormProvider,
  RHFDatePicker,
  RHFGenderRadioGroup,
  RHFSelect,
  RHFSwitch,
  RHFTextareaField,
  RHFTextField
} from "../hook-form";
import Card from "../Card";
import Typography from "../Typography";
import BasicButton from "../BasicButton";
import LoadingButton from "../LoadingButton";
import axios from "../../utils/axios";
import { getLoginFromName } from "../../utils/createLogin";
import Badge from "../Badge";


export default function UserNewEditForm({ isEdit, currentUser, getFunc }) {

  const [loadingRooms, setLoadingRooms] = useState(false);
  const [roomsOptions, setRoomsOptions] = useState([]);

  const [loadingProfessions, setLoadingProfessions] = useState(false);
  const [professionsOptions, setProfessionsOptions] = useState([]);

  const [loadingJudges, setLoadingJudges] = useState(false);
  const [judgesOptions, setJudgesOptions] = useState([]);

  const [profession, setProfession] = useState(0);

  const genders = [{
    value: 0, label: "Женский"
  }, {
    value: 1, label: "Мужской"
  }];

  const navigate = useNavigate();

  const NewUserSchema = Yup.object().shape({
    active: Yup.number(),
    sudo: Yup.number(),
    username: Yup.string().required("Имя пользователя обязательно для заполнения"),
    idGAS: Yup.string(),
    fullname: Yup.string().required("Фамилия, имя, отчество обязательны для заполнения"),
    gender: Yup.number().required("Пол обязателен для заполнения"),
    dob: Yup.date()
      .transform(value => {
        if (value !== "" && !isDate(value)) {
          return parseISO(value);
        }
        if (value !== "" && isDate(value)) {
          return value;
        }
        return null;
      }).required("Дата рождения обязательна для заполнения"),
    mobilephone: Yup.string().nullable().default(null).transform(value => value === "" ? null : value).matches(/^79[0-9]{9}$/, "Номер телефона в неправильном формате"),
    email: Yup.string().nullable().default(null).transform(value => value === "" ? null : value).matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, "Адрес электронной почты в неправильном формате"),
    professionID: Yup.number(),
    workplaceID: Yup.number(),
    address: Yup.string(),
    comment: Yup.string(),
    website: Yup.string(),
    affiliationJudgeID: Yup.string()
  });

  const defaultValues = useMemo(
    () => ({
      active: currentUser?.active ?? 1,
      sudo: currentUser?.sudo ?? 0,
      username: currentUser?.username ?? "",
      idGAS: currentUser?.idGAS ?? "",
      fullname: currentUser?.fullname ?? "",
      gender: currentUser?.gender ?? "",
      dob: currentUser?.dob ?? "",
      mobilephone: currentUser?.mobilephone ?? "",
      email: currentUser?.email ?? "",
      professionID: currentUser?.professionID ?? "",
      workplaceID: currentUser?.workplaceID === null ? 0 : parseInt(currentUser?.workplaceID, 10) ?? 0,
      address: currentUser?.address ?? "",
      comment: currentUser?.comment ?? "",
      website: currentUser?.website ?? "",
      affiliationJudgeID: parseInt(currentUser?.affiliationJudgeID, 10) ?? ""
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues
  });

  const {
    reset,
    getValues,
    setValue,
    handleSubmit,
    formState: { isSubmitting }
  } = methods;

  const values = getValues();

  useEffect(() => {
    getRoomsSelect();
    getProfessionsSelect();
    getJudgesSelect();

    if (isEdit && currentUser) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);


  const onSubmit = async () => {
    const values = getValues();

    try {
      if (!isEdit) {
        await axios.post(`/staff`, values);
      } else {
        await axios.patch(`/staff`, { ...values, id: currentUser.id });
      }
      /* Сохранение пользователя */
      reset();
      toast((t) => <Toast t={t} message={!isEdit ? "Пользователь создан!" : "Успешно обновлено!"}
                          type="success" />, { className: toastStyles });
      navigate(-1);
    } catch (err) {
      const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
      if (err.code.toString() === "401") {
        setSession(null);
      }
      toast((t) => <Toast t={t} message={error} type="error" />, { className: toastStyles });
    }
  };

  const onChangeProfession = (data) => {
    /* Очистка значения принадлежности если профессия не соответствует */
    if (profession.toString() !== "6" || profession.toString() !== "7" || profession.toString() !== "9") {
      setValue("affiliationJudgeID", "");
    }
    setValue("professionID", data?.value || "");
    setProfession(data?.value || 0);
  };

  const onChangeAffiliation = (data) => {
    setValue("affiliationJudgeID", data?.value || "");
  };

  const onChangeRoom = (data) => {
    setValue("workplaceID", data?.value || 0);
  };

  const onChangeActive = (data) => {
    setValue("active", data ? 1 : 0);
    if (!data) {
      setValue("workplaceID", 0);
    }
  };

  const onChangeSudo = (data) => {
    setValue("sudo", data ? 1 : 0);
  };

  const getRoomsSelect = async () => {
    await axios
      .get("/staff/workplace")
      .then((res) => {
        const roomslist = res.data.data;
        if (currentUser?.workplaceID) {
          roomslist.push({
            "id": parseInt(currentUser.workplaceID, 10),
            "value": parseInt(currentUser.workplaceID, 10),
            "label": currentUser.workplace,
            "selectID": "workplaceID"
          });
        }
        const roomsOptions = roomslist.map((item) => ({
          "id": item.id,
          "value": item.id,
          "label": item.label,
          "selectID": "workplaceID"
        }));

        /* Получаем список рабочих мест, очищаем, обрабатываем и пишем в стейт */
        setRoomsOptions([]);
        setRoomsOptions(roomsOptions);
      })
      .catch((err) => {
        const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
        if (err.code.toString() === "401") {
          setSession(null);
        }
        toast((t) => <Toast t={t} message={error} type="error" />, { className: toastStyles });
      });
  };

  const getProfessionsSelect = async () => {
    await axios
      .get("/users/vocation")
      .then((res) => {
        const professionslist = res.data.data;
        const professionsOptions = professionslist.map((item) => ({
          "id": item.id,
          "value": item.id,
          "label": item.label,
          "selectID": "professionID"
        }));

        /* Получаем список должностей, очищаем, обрабатываем и пишем в стейт */
        setProfessionsOptions([]);
        setProfessionsOptions(professionsOptions);
      })
      .catch((err) => {
        const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
        if (err.code.toString() === "401") {
          setSession(null);
        }
        toast((t) => <Toast t={t} message={error} type="error" />, { className: toastStyles });
      });
  };

  const getJudgesSelect = async () => {
    await axios
      .get("/users/group/24")
      .then((res) => {
        const jugdeslist = res.data.data;
        const jugdesOptions = jugdeslist.map((item) => ({
          "id": item.id,
          "value": item.id,
          "label": item.label,
          "selectID": "affiliationJudgeID"
        }));

        /* Получаем список должностей, очищаем, обрабатываем и пишем в стейт */
        setJudgesOptions([]);
        setJudgesOptions(jugdesOptions);
      })
      .catch((err) => {
        const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
        if (err.code.toString() === "401") {
          setSession(null);
        }
        toast((t) => <Toast t={t} message={error} type="error" />, { className: toastStyles });
      });
  };

  const onFocusRooms = async () => {
    setLoadingRooms(true);
    await getRoomsSelect().then(() => setLoadingRooms(false));
  };

  const onFocusProfession = async () => {
    setLoadingProfessions(true);
    await getProfessionsSelect().then(() => setLoadingProfessions(false));
  };

  const onFocusJudges = async () => {
    setLoadingJudges(true);
    await getJudgesSelect().then(() => setLoadingJudges(false));
  };

  const generateLogin = () => {
    const values = getValues();
    if (values.fullname.toString() !== "") {
      setValue("username", getLoginFromName(values.fullname).toString());
    }
  };

  const resetUserPass = async (userId) => {
    await axios
      .patch("/staff/resetpass", { "id": userId })
      .then((res) => {
        const message = res.data.data.info;
        toast((t) => <Toast t={t} message={message} type="success" />, { className: toastStyles });
        getFunc();
      })
      .catch((err) => {
        const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
        if (err.code.toString() === "401") {
          setSession(null);
        }
        toast((t) => <Toast t={t} message={error} type="error" />, { className: toastStyles });
      });
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)} className="max-w-3xl mx-auto">

      <div className="p-3">
        <Card classname="p-6 col-span-3">
          <div className="flex flex-col gap-3 items-start">

            <Typography variant="h5" classname="mb-2">Персональные данные</Typography>

            <RHFTextField name="fullname" placeholder="Фамилия, имя, отчество"
                          label={<Typography variant="label">Фамилия, имя, отчество</Typography>} />

            <div className="flex items-center gap-5 mb-5">
              <RHFDatePicker name="dob" placeholder="Дата рождения"
                             label={<Typography variant="label">Дата рождения</Typography>} />
              <RHFGenderRadioGroup name="gender" defaultValue={genders[1].value} options={genders} />
            </div>


            <div className="flex w-full justify-between gap-5">
              <div className="flex gap-5 items-center">
                <Typography variant="h5" classname="mb-2 w-52">Аккаунт</Typography>
                <Badge size="small" color={currentUser?.setPass === 1 ? "green" : "yellow"}
                       item={currentUser?.setPass === 1 ? <>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           className="h-3 w-3 text-green-600 mr-1"
                         >
                           <path
                             d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm-2 16l-4-4 1.41-1.41L10 14.17l6.59-6.59L18 9l-8 8z" />
                         </svg>
                         <span className="flex">Пароль установлен</span></> : <>
                         <svg
                           xmlns="http://www.w3.org/2000/svg"
                           viewBox="0 0 24 24"
                           fill="currentColor"
                           className="h-3 w-3 text-yellow-600 mr-1"
                         >
                           <path
                             d="M12 2C6.47 2 2 6.47 2 12s4.47 10 10 10 10-4.47 10-10S17.53 2 12 2zm5 13.59L15.59 17 12 13.41 8.41 17 7 15.59 10.59 12 7 8.41 8.41 7 12 10.59 15.59 7 17 8.41 13.41 12 17 15.59z" />
                         </svg>
                         <span className="flex">Пароль не установлен</span></>}
                       shape="rounded" />
              </div>

              {isEdit && currentUser?.setPass === 1 ? <>
                <BasicButton size="medium" className="w-44" variant="basic"
                             onClick={() => resetUserPass(currentUser?.id)}>Сбросить пароль</BasicButton>
              </> : ""}
            </div>
            <div className="flex w-full gap-5">
              <RHFTextField name="username" placeholder="Имя пользователя"
                            label={<Typography variant="label">Имя пользователя</Typography>} />
              <BasicButton size="medium" onClick={generateLogin} className="w-60"
                           variant="basic">Генерировать</BasicButton>
            </div>

            <div className="flex items-center gap-5 my-3">
              <div className="w-52 text-right" />

              <div className="flex gap-3 justify-end w-full">
                <RHFSwitch className="w-44" name="active" enabledLabel="Активен" disabledLabel="Заблокирован"
                           color="emerald"
                           checkedValue={1} onChange={(evt) => onChangeActive(evt)} />
                <RHFSwitch className="w-44" name="sudo" enabledLabel="Администратор" disabledLabel="Пользователь"
                           color="indigo"
                           checkedValue={1} onChange={(evt) => onChangeSudo(evt)} />
              </div>

            </div>

            <Typography variant="h5" classname="mb-2">Сведения о работе</Typography>

            <div className="flex items-center gap-5 w-full">
              <RHFSelect name="professionID"
                         onChange={(evt) => onChangeProfession(evt)}
                         onFocus={() => onFocusProfession()}
                         noOptionsMessage={loadingProfessions ? "Загрузка..." : "Результатов не найдено"}
                         placeholder="Выберите должность"
                         options={professionsOptions}
                         label="Должность" />

              <div className="flex shrink-0 w-40">
                <RHFTextField name="idGAS" placeholder='ID в ПИ "СДП"' />
              </div>
            </div>

            {values.professionID.toString() === "6" || values.professionID.toString() === "7" || values.professionID.toString() === "9" ?
              <RHFSelect name="affiliationJudgeID"
                         onChange={(evt) => onChangeAffiliation(evt)}
                         onFocus={() => onFocusJudges()}
                         noOptionsMessage={loadingJudges ? "Загрузка..." : "Результатов не найдено"}
                         placeholder="Выберите судью"
                         options={judgesOptions}
                         label="Принадлежность
                           судье" /> : null}

            <RHFSelect name="workplaceID"
                       placeholder="Выберите рабочее место"
                       onChange={(evt) => onChangeRoom(evt)}
                       onFocus={() => onFocusRooms()}
                       noOptionsMessage={loadingRooms ? "Загрузка..." : "Результатов не найдено"}
                       options={roomsOptions}
                       label="Рабочее место" />

            <Typography variant="h5" classname="mb-2">Контакты</Typography>

            <RHFTextField name="mobilephone"
                          label="Номер мобильного"
                          placeholder="79xxxxxxxxx" />
            <RHFTextField name="email"
                          label="Адрес эл. почты"
                          placeholder="sample@sample.com" />

            <RHFTextareaField name="address" label="Адрес"
                              placeholder="Адрес" rows={2} />
            <Typography variant="h5" classname="mb-2">Прочее</Typography>
            <RHFTextareaField name="website" label="Ссылки на соц.
              сети" placeholder="Ссылки на социальные сети" rows={5} />
            <RHFTextareaField name="comment"
                              label="Комментарий"
                              placeholder="Комментарий" rows={7} />
          </div>

          <div className="flex items-center justify-end gap-5 mt-5">

            <BasicButton size="medium" type="reset" variant="ghost" onClick={() => {
              reset();
              navigate(-1);
            }}
                         disabled={isSubmitting}>Отмена
            </BasicButton>

            <LoadingButton size="medium" type="submit" variant="success"
                           disabled={isSubmitting} loadingLabel="Сохранение ..." label="Сохранить" />

          </div>

        </Card>
      </div>
      
    </FormProvider>
  );
};

UserNewEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentUser: PropTypes.object,
  getFunc: PropTypes.func
};