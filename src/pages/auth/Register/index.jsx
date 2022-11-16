import React from 'react';
import { useForm } from 'react-hook-form';
import * as Yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import { setSession } from '../../../utils/jwt';
import BasicPage from '../../pagesLayouts/BasicPage';
import cosmonaut from '../../../assets/images/pages/cosmonaut-flag-on-moon.svg';
import { FormProvider, RHFPasswordHideShow, RHFTextField } from '../../../components/hook-form';
import LoadingButton from '../../../components/LoadingButton';
import { classNames } from '../../../utils/classNames';
import Typography from '../../../components/Typography';
import Alert from '../../../components/Alert';

const Register = () => {
  const { register } = useAuth();
  const isMountedRef = useIsMountedRef();

  const RegSchema = Yup.object().shape({
    login: Yup.string().required('Логин обязателен для заполнения'),
    password: Yup.string().required('Пароль обязателен для заполнения'),
    passrep: Yup.string().required('Подтверждение пароля обязательно для заполнения'),
  });

  const defaultValues = {
    login: 'chainik',
    password: 'qwer',
    passrep: 'qwer',
  };

  const methods = useForm({
    resolver: yupResolver(RegSchema),
    defaultValues,
  });

  const {
    reset,
    setError,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = async (userData) => {
    if (Object.values(userData).every((field) => field.length > 0)) {
      setSession(null);
      try {
        await register(userData.login, userData.password, userData.passrep);
      } catch (error) {
        console.error(error);
        reset();
        if (isMountedRef.current) {
          setError('afterSubmit', { ...error, message: error.message });
        }
      }
    }
  };

  return (
    <BasicPage title="Смена / установка пароля" className="main-content min-h-full flex bg-white dark:bg-gray-900">
      <div className="hidden lg:flex relative w-0 flex-1 content-center items-center justify-center rounded-full">
        <div className="w-96 h-96 bg-indigo-900 rounded-full overflow-hidden relative">
          <img className="w-96 absolute -bottom-14 left-0" src={cosmonaut} alt="" />
          <svg
            className="animate-pulse absolute w-3 h-3 top-20 left-36"
            version="1.0"
            fill="#EECC15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <g>
              <polygon
                fill="#EECC15"
                points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	"
              />
            </g>
          </svg>
          <svg
            className="animate-pulse absolute w-6 h-6 top-12 left-20"
            version="1.0"
            fill="#EECC15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <g>
              <polygon
                fill="#EECC15"
                points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	"
              />
            </g>
          </svg>
          <svg
            className="absolute w-3 h-3 top-10 right-24"
            version="1.0"
            fill="#EECC15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <g>
              <polygon
                fill="#EECC15"
                points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	"
              />
            </g>
          </svg>

          <svg
            className="absolute w-3 h-3 bottom-10 right-24"
            version="1.0"
            fill="#EECC15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <g>
              <polygon
                fill="#EECC15"
                points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	"
              />
            </g>
          </svg>
          <svg
            className="absolute w-5 h-5 top-12 right-20"
            version="1.0"
            fill="#EECC15"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 200 200"
          >
            <g>
              <polygon
                fill="#EECC15"
                points="169.8,99.9 111.2,110.7 99.9,188.7 88.5,110.7 30.2,99.9 88.8,89.3 99.9,11.3 111.2,89.3 	"
              />
            </g>
          </svg>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:pr-20 xl:pr-40">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <Alert alertType="info" title="Установите пароль, используя выданное вам имя пользователя">
            <p>Пароль и подтверждение пароля должны полностью совпадать. Других ограничений для пароля нет.</p>
          </Alert>

          <div className="mt-8">
            <div className="mt-6">
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                  <RHFTextField
                    name="login"
                    label={<Typography variant="label">Имя пользователя</Typography>}
                    placeholder="Ivanov_II"
                  />
                  <RHFPasswordHideShow
                    name="password"
                    label={<Typography variant="label">Пароль</Typography>}
                    placeholder="Пароль"
                  />
                  <RHFPasswordHideShow
                    name="passrep"
                    label={<Typography variant="label">Подтверждение пароля</Typography>}
                    placeholder="Подтверждение пароля"
                  />
                </div>

                <div className="flex items-center justify-end mb-5">
                  <div className="text-sm">
                    <Link to="/auth/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                      У меня уже есть пароль
                    </Link>
                  </div>
                </div>
                <LoadingButton
                  type="submit"
                  isLoading={isSubmitting}
                  label="Установить пароль"
                  classes={classNames(
                    isSubmitting
                      ? 'bg-slate-600 hover:bg-slate-600 focus:ring-offset-0'
                      : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-offset-2 focus:ring-indigo-500',
                    'w-full text-sm font-medium text-white focus:outline-none'
                  )}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                    <path
                      fillRule="evenodd"
                      d="M12 1.5a5.25 5.25 0 00-5.25 5.25v3a3 3 0 00-3 3v6.75a3 3 0 003 3h10.5a3 3 0 003-3v-6.75a3 3 0 00-3-3v-3c0-2.9-2.35-5.25-5.25-5.25zm3.75 8.25v-3a3.75 3.75 0 10-7.5 0v3h7.5z"
                      clipRule="evenodd"
                    />
                  </svg>
                </LoadingButton>
              </FormProvider>
            </div>
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default Register;
