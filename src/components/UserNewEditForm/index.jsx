import React, { useEffect, useMemo, useState } from 'react';
import * as Yup from 'yup';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Toast, { toastStyles } from '../Toast';
import { setSession } from '../../utils/jwt';
import {
  FormProvider,
  RHFDatePicker,
  RHFGenderRadioGroup,
  RHFSelect,
  RHFSwitch,
  RHFTextareaField,
  RHFTextField,
} from '../hook-form';
import Card from '../Card';
import Typography from '../Typography';
import { makeOptionsFromArray } from '../hook-form/makeOptions';
import BasicButton from '../BasicButton';
import LoadingButton from '../LoadingButton';
import { classNames } from '../../utils/classNames';

import axios from '../../utils/axios';
import { getLoginFromName } from '../../utils/createLogin';

export default function UserNewEditForm({ isEdit, currentUser }) {

  const [loadingRooms, setLoadingRooms] = useState(false);
  const [roomsOptions, setRoomsOptions] = useState([]);

  const [loadingProfessions, setLoadingProfessions] = useState(false);
  const [professionsOptions, setProfessionsOptions] = useState([]);

  const [loadingJudges, setLoadingJudges,] = useState(false);
  const [judgesOptions, setJudgesOptions] = useState([]);

  const [profession, setProfession] = useState(0);

  const genders = [{
    value: 2, label: 'Женский',
  }, {
    value: 1, label: 'Мужской',
  }];

  const navigate = useNavigate();

  const NewUserSchema = Yup.object().shape({
    active: Yup.number(),
    sudo: Yup.number(),
    username: Yup.string().required('Имя пользователя обязательно для заполнения'),
    fullname: Yup.string().required('Фамилия, имя, отчество обязательны для заполнения'),
    gender: Yup.number().required('Пол обязателен для заполнения'),
    dob: Yup.date().typeError('Дата рождения в неправильном формате').required('Дата рождения обязательна для заполнения'),
    mobilephone: Yup.string().nullable().default(null).transform(value => value === '' ? null : value).matches(/^79[0-9]{9}$/, 'Номер телефона в неправильном формате'),
    email: Yup.string().nullable().default(null).transform(value => value === '' ? null : value).matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Адрес электронной почты в неправильном формате'),
    profession: Yup.number(),
    room: Yup.number(),
    address: Yup.string(),
    comment: Yup.string(),
    website: Yup.string(),
    affiliation: Yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      active: currentUser?.active ?? 1,
      sudo: currentUser?.sudo ?? 0,
      username: currentUser?.username ?? '',
      fullname: currentUser?.fullname ?? '',
      gender: currentUser?.gender ?? 0,
      dob: currentUser?.dob ?? '',
      mobilephone: currentUser?.mobilephone ?? '',
      email: currentUser?.email ?? '',
      profession: currentUser?.profession ?? '',
      room: parseInt(currentUser?.workplaceID, 10) ?? null,
      address: currentUser?.address ?? '',
      comment: currentUser?.comment ?? '',
      website: currentUser?.website ?? '',
      affiliation: currentUser?.affiliationJudge ?? '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser],
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    getValues,
    setValue,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

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
    try {
      /* Сохранение пользователя */
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      toast((t) => <Toast t={t} message={!isEdit ? 'Пользователь создан!' : 'Успешно обновлено!'}
                          type='success' />, { className: toastStyles });
      navigate('/admin/users');
    } catch (err) {
      const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
      if (err.code.toString() === '401') {
        setSession(null);
      }
      toast((t) => <Toast t={t} message={error} type='error' />, { className: toastStyles });
    }
  };

  const onChangeProfession = (data) => {
    /* Очистка значения принадлежности если профессия не соответствует */
    if (profession.toString() !== '6' || profession.toString() !== '7' || profession.toString() !== '9') {
      setValue('affiliation', null);
    }
    setValue('profession', data?.value || '');
    setProfession(data?.value || 0);
  };

  const onChangeAffiliation = (data) => {
    setValue('affiliation', data?.value || '');
  };

  const onChangeRoom = (data) => {
    setValue('room', data?.value || '');
  };

  const onChangeActive = (data) => {
    setValue('active', data ? 1 : 0);
    if (!data) {
      setValue('room', '');
    }
  };

  const onChangeSudo = (data) => {
    setValue('sudo', data ? 1 : 0);
  };

  const getRoomsSelect = async () => {
    await axios
      .get('/staff/workplace')
      .then((res) => {
        const roomslist = res.data.data;
        if (currentUser?.workplaceID) {
          roomslist.push({
            'id': parseInt(currentUser.workplaceID, 10),
            'value': parseInt(currentUser.workplaceID, 10),
            'label': `${currentUser.room} / ${currentUser.workplace}`,
            'selectID': 'room',
          });
        }
        const roomsOptions = roomslist.map((item) => {
          return {
            'id': item.id,
            'value': item.id,
            'label': item.label,
            'selectID': 'room',
          };
        });

        /* Получаем список рабочих мест, очищаем, обрабатываем и пишем в стейт */
        setRoomsOptions([]);
        setRoomsOptions(roomsOptions);
      })
      .catch((err) => {
        const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
        if (err.code.toString() === '401') {
          setSession(null);
        }
        toast((t) => <Toast t={t} message={error} type='error' />, { className: toastStyles });
      });
  };

  const getProfessionsSelect = async () => {
    await axios
      .get('/users/vocation')
      .then((res) => {
        const professionslist = res.data.data;
        const professionsOptions = professionslist.map((item) => {
          return {
            'id': item.id,
            'value': item.id,
            'label': item.label,
            'selectID': 'profession',
          };
        });

        /* Получаем список должностей, очищаем, обрабатываем и пишем в стейт */
        setProfessionsOptions([]);
        setProfessionsOptions(professionsOptions);
      })
      .catch((err) => {
        const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
        if (err.code.toString() === '401') {
          setSession(null);
        }
        toast((t) => <Toast t={t} message={error} type='error' />, { className: toastStyles });
      });
  };

  const getJudgesSelect = async () => {
    await axios
      .get('/users/group/24')
      .then((res) => {
        const jugdeslist = res.data.data;
        const jugdesOptions = jugdeslist.map((item) => {
          return {
            'id': item.id,
            'value': item.id,
            'label': item.label,
            'selectID': 'affiliation',
          };
        });

        /* Получаем список должностей, очищаем, обрабатываем и пишем в стейт */
        setJudgesOptions([]);
        setJudgesOptions(jugdesOptions);
      })
      .catch((err) => {
        const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
        if (err.code.toString() === '401') {
          setSession(null);
        }
        toast((t) => <Toast t={t} message={error} type='error' />, { className: toastStyles });
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
    console.log(values);
    if (values.fullname.toString() !== '') {
      setValue('username', getLoginFromName(values.fullname).toString());
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

      <div className='grid md:grid-cols-4 gap-7 p-3'>
        <Card classname='p-5 mt-4 col-span-3'>
          <div className='flex flex-col gap-4'>
            <div className='grid md:grid-cols-4 gap-5'>
              <Typography variant='subtitle1' classname='mb-2'>Аккаунт</Typography>
              <span />
              <RHFSwitch name='active' enabledLabel='Активен' disabledLabel='Заблокирован' color='emerald'
                         checkedValue={1} onChange={(evt) => onChangeActive(evt)}  />
              <RHFSwitch name='sudo' enabledLabel='Администратор' disabledLabel='Пользователь' color='indigo'
                         checkedValue={1} onChange={(evt) => onChangeSudo(evt)} />
            </div>
            <RHFTextField name='username' placeholder='Имя пользователя'
                          label={<Typography variant='label' classname='mb-1'>Имя пользователя</Typography>} />
            <Typography variant='subtitle1' classname='mb-2'>Персональные данные</Typography>
            <RHFTextField name='fullname' placeholder='Фамилия, имя, отчество'
                          label={<Typography variant='label' classname='mb-1'>Фамилия, имя, отчество</Typography>} />
            <div className='grid md:grid-cols-3 gap-5'>
              <RHFDatePicker name='dob' placeholder='Дата рождения'
                             label={<Typography variant='label' classname='mb-1'>Дата рождения</Typography>} />
              <div>
                <RHFGenderRadioGroup name='gender' defaultValue={genders[0].value} options={genders}
                                     label={<Typography variant='label' classname='mb-1'>Пол</Typography>} />
              </div>
            </div>
            <Typography variant='subtitle1' classname='mb-2'>Сведения о работе</Typography>
            <div className='grid md:grid-cols-2 gap-5'>
              <RHFSelect name='profession'
                         onChange={(evt) => onChangeProfession(evt)}
                         onFocus={() => onFocusProfession()}
                         noOptionsMessage={loadingProfessions ? 'Загрузка...' : 'Результатов не найдено'}
                         placeholder='Выберите должность'
                         options={professionsOptions}
                         label={<Typography variant='label' classname='mb-1'>Должность</Typography>} />
              {profession.toString() === '6' || profession.toString() === '7' || profession.toString() === '9' ?
                <RHFSelect name='affiliation'
                           onChange={(evt) => onChangeAffiliation(evt)}
                           onFocus={() => onFocusJudges()}
                           noOptionsMessage={loadingJudges ? 'Загрузка...' : 'Результатов не найдено'}
                           placeholder='Выберите судью'
                           options={judgesOptions}
                           label={<Typography variant='label' classname='mb-1'>Принадлежность
                             судье</Typography>} /> : null}
            </div>
            <div className='grid md:grid-cols-2 gap-5'>
              <RHFSelect name='room'
                         placeholder='Выберите рабочее место'
                         onChange={(evt) => onChangeRoom(evt)}
                         onFocus={() => onFocusRooms()}
                         noOptionsMessage={loadingRooms ? 'Загрузка...' : 'Результатов не найдено'}
                         options={roomsOptions}
                         label={<Typography variant='label' classname='mb-1'>Рабочее место</Typography>} />
            </div>

            <Typography variant='subtitle1' classname='mb-2'>Контакты</Typography>
            <div className='grid md:grid-cols-2 gap-5'>
              <RHFTextField name='mobilephone'
                            label={<Typography variant='label' classname='mb-1'>Номер мобильного</Typography>}
                            placeholder='79xxxxxxxxx' />
              <RHFTextField name='email'
                            label={<Typography variant='label' classname='mb-1'>Адрес электронной почты</Typography>}
                            placeholder='sample@sample.com' />
            </div>
            <RHFTextareaField name='address' label={<Typography variant='label' classname='mb-1'>Адрес</Typography>}
                              placeholder='Адрес' rows={2} />
            <Typography variant='subtitle1' classname='mb-2'>Прочее</Typography>
            <RHFTextareaField name='website' label={<Typography variant='label' classname='mb-1'>Ссылки на социальные
              сети</Typography>} placeholder='Ссылки на социальные сети' rows={5} />
            <RHFTextareaField name='comment'
                              label={<Typography variant='label' classname='mb-1'>Комментарий</Typography>}
                              placeholder='Комментарий' rows={7} />
          </div>
        </Card>

        <div>
          <Card classname='p-5 mt-4'>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col gap-7'>
                <div>
                  <Typography variant='label' classname='mb-2'>Сгенерировать имя пользователя из ФИО</Typography>
                  <BasicButton size='medium' label='Генерировать' onClick={generateLogin} />
                </div>

                <div>
                  {isEdit ? <>
                    <Typography variant='label' classname='mb-2'>Сбросить пароль пользователя</Typography>
                    <BasicButton size='medium' label='Сбросить' />
                  </> : ''}
                </div>

              </div>
            </div>
          </Card>

        </div>

      </div>

      <div className='flex items-center gap-5 p-3'>
        <LoadingButton
          type='submit'
          isLoading={isSubmitting}
          label='Сохранить'
          classes={classNames(isSubmitting ? 'bg-slate-600 hover:bg-slate-600 focus:ring-offset-0' : 'bg-green-600 hover:bg-green-700 focus:ring-offset-2 focus:ring-green-500', 'text-sm font-medium mt-5 text-white focus:outline-none')}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
            />
          </svg>
        </LoadingButton>
      </div>

    </FormProvider>
  );
};

