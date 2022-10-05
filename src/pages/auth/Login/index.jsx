import {Link, useNavigate} from "react-router-dom";
import {Button, Form, Input, Label} from "reactstrap";
import React, { Fragment, useState } from "react";
import {useDispatch} from "react-redux";
import {Controller, useForm} from "react-hook-form";
import {Helmet} from "react-helmet";
import rocket from "../../../assets/images/pages/cosmonaut-rocket.svg";
import InputPasswordToggle from "../../../components/PasswordShow";
import { setSession } from "../../../utils/jwt";
import useAuth from "../../../hooks/useAuth";
import useIsMountedRef from "../../../hooks/useIsMountedRef";
import { APP_NAME } from "../../../config";

const defaultValues = {
  login: "chainik",
  password: "qwer"
}

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
    formState: {errors, isSubmitting}
  } = useForm({defaultValues});

  const onSubmit = async (userData) => {
    if (Object.values(userData).every(field => field.length > 0)) {
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
  }

  return (
    <>
      <Helmet>
        <title>{APP_NAME} - Вход</title>
      </Helmet>

      <div className="min-h-full flex bg-white dark:bg-gray-900">
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
                        render={({field}) => (
                          <Input
                            className="bg-gray-100 dark:bg-gray-800 appearance-none block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 text-gray-900 dark:text-gray-100 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                            type="text"
                            placeholder="Ivanov_II"
                            autoFocus
                            invalid={errors.login && true}
                            {...field}/>
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
                        render={({field}) => (
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
                        У меня нет пароля
                      </Link>
                    </div>
                  </div>
                  <div>
                    <Button type="submit"
                            className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                            block>
                      Войти
                    </Button>
                  </div>
                </Form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
