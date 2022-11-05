import { Link } from 'react-router-dom';
import React from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import rocket from '../../../assets/images/pages/cosmonaut-rocket.svg';
import { setSession } from '../../../utils/jwt';
import useAuth from '../../../hooks/useAuth';
import useIsMountedRef from '../../../hooks/useIsMountedRef';
import BasicPage from '../../pagesLayouts/BasicPage';
import LoadingButton from '../../../components/LoadingButton';
import { classNames } from '../../../utils/classNames';
import { FormProvider, RHFPasswordHideShow, RHFTextField } from '../../../components/hook-form';

const Login = () => {
  const { login } = useAuth();
  const isMountedRef = useIsMountedRef();

  const AuthSchema = Yup.object().shape({
    login: Yup.string().required('Логин обязателен для заполнения'),
    password: Yup.string().required('Пароль обязателен для заполнения'),
  });

  const defaultValues = {
    login: 'chainik',
    password: 'qwer',
  };

  const methods = useForm({
    resolver: yupResolver(AuthSchema),
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
        await login(userData.login, userData.password);
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
    <BasicPage title="Вход" className="main-content min-h-full flex bg-white dark:bg-gray-900">
      <div className="hidden lg:flex relative w-0 flex-1 content-center items-center justify-center rounded-full">
        <div className="w-1/3 bg-cyan-400 rounded-full overflow-hidden">
          <img className="w-full" src={rocket} alt="" />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:pr-20 xl:pr-40">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-50">Добро пожаловать!</h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <FormProvider methods={methods} onSubmit={handleSubmit(onSubmit)}>
                <div className="flex flex-col">
                  <RHFTextField name="login" label="Имя пользователя" placeholder="Ivanov_II" />
                  <RHFPasswordHideShow name="password" label="Пароль" placeholder="Пароль" />
                </div>

                <div className="flex items-center justify-end mb-5">
                  <div className="text-sm">
                    <Link to="/reg" className="font-medium text-indigo-600 hover:text-indigo-500">
                      У меня нет пароля / Пароль был сброшен
                    </Link>
                  </div>
                </div>
                <LoadingButton
                  type="submit"
                  isLoading={isSubmitting}
                  label="Войти"
                  classes={classNames(
                    isSubmitting
                      ? 'bg-slate-600 hover:bg-slate-600 focus:ring-offset-0'
                      : 'bg-indigo-600 hover:bg-indigo-700 focus:ring-offset-2 focus:ring-indigo-500',
                    'w-full text-sm font-medium text-white focus:outline-none'
                  )}
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m15 14 2.045-1.533C19.469 10.648 20.542 6.98 20 4c-2.981-.542-6.649.531-8.467 2.955L10 9m5 5-3.5 2.5-4-4L10 9m5 5v2.667a4 4 0 0 1-.8 2.4l-.7.933-1-1M10 9H7.333a4 4 0 0 0-2.4.8L4 10.5l1 1M8.5 18 5 19l1.166-3.5m9.334-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z"
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

export default Login;
