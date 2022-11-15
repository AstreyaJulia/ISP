import React, { useEffect, useMemo, useState } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import toast from 'react-hot-toast';
import Toast, { toastStyles } from '../Toast';
import { getLoginFromName } from '../../utils/createLogin';
import { FormProvider, RHFTextField } from '../hook-form';
import Card from '../Card';
import Badge from '../Badge';
import Typography from '../Typography';

const UserCreateEditForm = ({ isEdit, currentUser }) => {
  const navigate = useNavigate();

  const [prof, setProf] = useState(currentUser?.profession || '');

  const [log, setLog] = useState(currentUser?.login || '');

  const [userName, setUserName] = useState(currentUser?.fullname || '');

  useEffect(() => {
    if (currentUser?.profession !== '' && currentUser) {
      setProf(currentUser.profession);
    }
    if (currentUser?.login !== '' && currentUser) {
      setLog(currentUser.login);
    }
    if (currentUser?.fullname !== '' && currentUser) {
      setUserName(currentUser.fullname);
    }
  }, [currentUser]);

  const handleProfSelect = (evt) => {
    evt.preventDefault();
    setProf(evt.target.value);
  };

  const generateLogin = () => {
    if (userName !== '') setLog(getLoginFromName(userName));
  };

  const nameChangeHandler = (evt) => {
    evt.preventDefault();
    setUserName(evt.target.value);
  };

  const NewUserSchema = Yup.object().shape({
    username: Yup.string().required('Логин нужно заполнить'),
    fullname: Yup.string().required('Имя нужно заполнить'),
    gender: Yup.string().required('Пол нужно заполнить'),
    email: Yup.string(),
    mobilephone: Yup.string(),
    address: Yup.string(),
    idGAS: Yup.number(),
    social: Yup.string(),
    comment: Yup.string(),
    profession: Yup.string().required('Должность нужно заполнить'),
    room: Yup.string(),
    sudo: Yup.string().required('sudo Number is required'),
    active: Yup.string(),
  });

  const defaultValues = useMemo(
    () => ({
      username: log || '',
      fullname: currentUser?.fullname || '',
      gender: currentUser?.gender || '',
      dob: currentUser?.dob ? new Date(currentUser.dob) : null,
      email: currentUser?.email || '',
      mobilephone: currentUser?.mobilephone || '',
      address: currentUser?.address || '',
      website: currentUser?.website || '',
      comment: currentUser?.comment || '',
      profession: currentUser?.profession || '',
      room: currentUser?.room || '',
      active: currentUser?.active || '1',
      sudo: currentUser?.sudo || '0',
    }),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [currentUser]
  );

  const methods = useForm({
    resolver: yupResolver(NewUserSchema),
    defaultValues,
  });

  const {
    reset,
    watch,
    control,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const values = watch();

  useEffect(() => {
    if (isEdit && currentUser) {
      reset(defaultValues);
    }
    if (!isEdit) {
      reset(defaultValues);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isEdit, currentUser]);

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      reset();
      toast((t) => <Toast t={t} message={!isEdit ? 'Успешно добавлено!' : 'Успешно обновлено!'} type="success" />, {
        className: toastStyles,
      });
      navigate('/admin/users');
    } catch (error) {
      toast((t) => <Toast t={t} message={error} type="error" />, { className: toastStyles });
      console.error(error);
    }
  };

  return (
    <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
      <Card>
        <div>
          {isEdit && (
            <Badge
              size="large"
              shape="rounded"
              item={values.active === '0' ? 'Не активен' : 'Активен'}
              color={values.active === '0' ? 'red' : 'green'}
            />
          )}
          {isEdit && values.sudo === '1' && (
            <Badge size="large" shape="rounded" item="Админ" color="cyan" className="ml-3" />
          )}
        </div>

        <RHFTextField name="username" placeholder="Фамилия_ИО" label="Логин" value={log} />
        <button
          type="button"
          onClick={generateLogin}
          className="cursor-pointer text-white shadow border border-indigo-600 bg-indigo-600 dark:bg-indigo-700 dark:border-indigo-700 focus:outline-none border rounded-md py-2 px-4 flex items-center justify-center text-sm font-medium"
        >
          <span>Генерировать логин</span>
        </button>

        <Typography classname="mb-3" variant="caption">
          Заполните поле "Полное имя", чтобы сгенерировать логин автоматически
        </Typography>

        <Typography variant="subtitle2">Заблокирован</Typography>
        <Typography variant="body2">Включите, чтобы заблокировать аккаунт</Typography>
      </Card>
    </FormProvider>
  );
};

UserCreateEditForm.propTypes = {
  isEdit: PropTypes.bool,
  currentUser: PropTypes.object,
};

export default UserCreateEditForm;
