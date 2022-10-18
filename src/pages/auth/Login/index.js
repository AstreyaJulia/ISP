import { Link, useNavigate } from "react-router-dom";
import { Form, Input, Label } from "reactstrap";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import rocket from "../../../assets/images/pages/cosmonaut-rocket.svg";
import InputPasswordToggle from "../../../components/PasswordShow";
import { setSession } from "../../../utils/jwt";
import useAuth from "../../../hooks/useAuth";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import BasicPage from "../../pagesLayouts/BasicPage";
import LoadingButton from "../../../components/LoadingButton";
import { classNames } from "../../../utils/classNames";

const defaultValues = {
  login: "chainik",
  password: "qwer"
};

const Login = () => {
  const { login } = useAuth();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const isMountedRef = useIsMountedRef();

  const {
    reset,
    control,
    setError,
    handleSubmit,
    formState: { errors, isSubmitting }
  } = useForm({ defaultValues });

  const onSubmit = async (userData) => {
    if (Object.values(userData).every(field => field.length > 0)) {
      setSession(null);
      try {
        await login(userData.login, userData.password);
      } catch (error) {
        console.error(error);
        reset();
        if (isMountedRef.current) {
          setError("afterSubmit", { ...error, message: error.message });
        }
      }
    }
  };

  return (
    <BasicPage title="Вход" className="main-content min-h-full flex bg-white dark:bg-gray-900">
      <div
        className="hidden lg:flex relative w-0 flex-1 content-center items-center justify-center rounded-full">
        <div className="w-1/3 bg-cyan-400 rounded-full overflow-hidden">
          <img
            className="w-full"
            src={rocket}
            alt=""
          />
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-center py-12 px-4 sm:px-6 lg:flex-none lg:pr-20 xl:pr-40">
        <div className="mx-auto w-full max-w-sm lg:w-96">
          <div>
            <h2 className="mt-6 text-3xl font-extrabold text-gray-900 dark:text-gray-50">Добро
              пожаловать!</h2>
          </div>

          <div className="mt-8">
            <div className="mt-6">
              <Form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <Label className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                         for="login">
                    Имя пользователя
                  </Label>
                  <div className="mt-1">
                    <Controller
                      id="login"
                      name="login"
                      control={control}
                      render={({ field }) => (
                        <Input
                          className="bg-gray-100 dark:bg-gray-800 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                          type="text"
                          placeholder="Ivanov_II"
                          autoFocus
                          invalid={errors.login && true}
                          {...field} />
                      )}
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <Label className="block text-sm font-medium text-gray-700 dark:text-gray-200"
                         for="password">
                    Пароль
                  </Label>

                  <div className="mt-1">
                    <Controller
                      id="password"
                      name="password"
                      control={control}
                      render={({ field }) => (
                        <InputPasswordToggle className="block"
                                             invalid={errors.password && true} {...field} />
                      )}
                    />
                  </div>
                </div>
                <div className="flex items-center justify-end">
                  <div className="text-sm">
                    <Link to="/reg"
                          className="font-medium text-indigo-600 hover:text-indigo-500">
                      У меня нет пароля / Пароль был сброшен
                    </Link>
                  </div>
                </div>
                <LoadingButton type="submit" isLoading={isSubmitting} label="Войти"
                               classes={classNames(isSubmitting ? "bg-slate-600 hover:bg-slate-600 focus:ring-offset-0" : "bg-indigo-600 hover:bg-indigo-700 focus:ring-offset-2 focus:ring-indigo-500", "w-full text-sm font-medium text-white focus:outline-none")}>
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                          d="m15 14 2.045-1.533C19.469 10.648 20.542 6.98 20 4c-2.981-.542-6.649.531-8.467 2.955L10 9m5 5-3.5 2.5-4-4L10 9m5 5v2.667a4 4 0 0 1-.8 2.4l-.7.933-1-1M10 9H7.333a4 4 0 0 0-2.4.8L4 10.5l1 1M8.5 18 5 19l1.166-3.5m9.334-6a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                  </svg>
                </LoadingButton>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default Login;
