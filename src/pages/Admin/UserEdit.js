import React, { useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';

import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';
import {
  FormProvider, RHFDatePicker, RHFTextField, RHFGenderRadioGroup, RHFTextareaField, RHFSelect, RHFSwitch,
} from '../../components/hook-form';
import Card from '../../components/Card';
import Typography from '../../components/Typography';
import { classNames } from '../../utils/classNames';
import LoadingButton from '../../components/LoadingButton';
import BasicButton from '../../components/BasicButton';
import { makeOptionsFromArray } from '../../components/ReactSelect/makeOptions';
import axios from '../../utils/axios';
import { setSession } from '../../utils/jwt';
import Toast, { toastStyles } from '../../components/Toast';
import { getLoginFromName } from '../../utils/createLogin';

const UserEdit = () => {
  const breadcrumbs = [{ name: 'Пользователи', href: '/admin/users/', current: false }, {
    name: 'Добавить пользователя', href: '', current: true,
  }];
  const breadcrumbsEdit = [{
    name: 'Пользователи', href: '/admin/users/', current: false,
  }, { name: 'Редактирование пользователя', href: '', current: true }];

  /** Состояние пользователя */
  const { initialize } = useAuth();
  const navigate = useNavigate();

  const { id = '' } = useParams();
  const { pathname } = useLocation();
  const isEdit = pathname.includes('edit');

  const [loadingRooms, setLoadingRooms] = useState(false);
  const [roomsOptions, setRoomsOptions] = useState([]);

  const [loadingProfessions, setLoadingProfessions] = useState(false);
  const [professionsOptions, setProfessionsOptions] = useState([]);

  const [profession, setProfession] = useState(0);
  const [currentUser, setCurrentUser] = useState({});

  const profIdOptions = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23];
  const profLabelsOptions = ['Председатель', 'Заместитель председателя', 'Судья', 'Начальник отдела', 'Заместитель начальника отдела', 'Помощник председателя суда', 'Помощник судьи', 'Консультант', 'Секретарь судебного заседания', 'Главный специалист', 'Ведущий специалист', 'Секретарь суда', 'Специалист', 'Старший специалист 1 разряда', 'Старший специалист 2 разряда', 'Старший специалист 3 разряда', 'Специалист 1 разряда', 'Специалист 2 разряда', 'Специалист 3 разряда', 'Администратор', 'Рабочий 1 разряд', 'Рабочий 2 разряд', 'Рабочий 3 разряд'];

  const getUser = async () => {
    if (isEdit) {
      await axios
        .get(`/staff/${id}`)
        .then((res) => setCurrentUser(res.data.data[0]))
        .catch((err) => {
          const error = err.message && err.info ? `${err.message}: ${err.info}` : err.toString();
          if (err.code.toString() === '401') {
            setSession(null);
          }
          toast((t) => <Toast t={t} message={error} type='error' />, { className: toastStyles });
        });
    }
  }

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
    getUser()
    // установить стейт профессии
  }, []);

  const UserSchema = Yup.object().shape({
    username: Yup.string().required('Имя пользователя обязательно для заполнения'),
    fullname: Yup.string().required('Фамилия, имя, отчество обязательны для заполнения'),
    gender: Yup.string().required('Пол обязателен для заполнения'),
    dob: Yup.date().typeError('Дата рождения в неправильном формате').required('Дата рождения обязательна для заполнения'),
    mobilephone: Yup.string().nullable().default(null).transform(value => value === '' ? null : value).matches(/^79[0-9]{9}$/, 'Номер телефона в неправильном формате'),
    email: Yup.string().nullable().default(null).transform(value => value === '' ? null : value).matches(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Адрес электронной почты в неправильном формате'),
  });

  const defaultValues = useMemo(
    () => ({
      active: currentUser?.active ?? 1,
      sudo: currentUser?.sudo ?? 0,
      username: currentUser?.username ?? '',
      fullname: currentUser?.fullname ?? '',
      gender: currentUser?.gender ?? '',
      dob: currentUser?.dob ?? '',
      mobilephone: currentUser?.mobilephone ?? '',
      email: currentUser?.email ?? '',
      profession: currentUser?.profession ?? '',
      room: currentUser?.room ?? '',
      address: currentUser?.address ?? '',
      comment: currentUser?.comment ?? '',
      website: currentUser?.website ?? '',
      affiliation: currentUser?.affiliationJudge ?? '',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(UserSchema), defaultValues,
  });

  const {
    handleSubmit, reset, formState: { isSubmitting }, setValue, getValues, watch
  } = methods;

  const values = watch();

  // console.log(values)

  useEffect(() => {
    if (isEdit && currentUser) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit]);

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

  const getRoomsSelect = async () => {
    await axios
      .get('/staff/workplace')
      .then((res) => {
        const roomslist = res.data.data;
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

  const onFocusRooms = async () => {
    setLoadingRooms(true);
    await getRoomsSelect().then(() => setLoadingRooms(false));
  };

  const onFocusProfession = async () => {
    setLoadingProfessions(true);
    await getProfessionsSelect().then(() => setLoadingProfessions(false));
  };

  const generateLogin = () => {
    const values = getValues();
    console.log(values);
    if (values.fullname.toString() !== '') {
      setValue('username', getLoginFromName(values.fullname).toString());
    }
  };

  const genders = [{
    value: '0', label: 'Женский',
  }, {
    value: '1', label: 'Мужской',
  }];

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

  return (
    <BasicPage title={!isEdit ? 'Добавить пользователя' : 'Редактирование пользователя'}
               className='max-w-6xl mx-auto px-5'>
      <PageHeader pages={!isEdit ? breadcrumbs : breadcrumbsEdit}
                  header={!isEdit ? 'Добавить пользователя' : 'Редактирование пользователя'} />
      <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>

        <div className='grid md:grid-cols-4 gap-7 p-3'>
          <Card classname='p-5 mt-4 col-span-3'>
            <div className='flex flex-col gap-4'>
              <div className='grid md:grid-cols-4 gap-5'>
                <Typography variant='subtitle1' classname='mb-2'>Аккаунт</Typography>
                <span />
                <RHFSwitch name='active' enabledLabel='Активен' disabledLabel='Заблокирован' color='emerald'
                           checkedValue={1} />
                <RHFSwitch name='sudo' enabledLabel='Администратор' disabledLabel='Пользователь' color='indigo'
                           checkedValue={1} />
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
                             onFocus={() => null}
                             placeholder='Выберите судью'
                             options={makeOptionsFromArray(profIdOptions, profLabelsOptions, 'affiliation', [])}
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
    </BasicPage>);
};

export default UserEdit;
