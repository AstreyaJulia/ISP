import React, { useEffect } from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import CasesOverPeriodWidget from './widgets/CasesOverPeriodWidget';
import useAuth from '../../hooks/useAuth';
import NoPublicatedActs from './widgets/NoPublicatedActs';
import ProcessedWidget from './widgets/ProcessedWidget';
import UserWelcomeWidget from './widgets/UserWelcomeWidget';
import NoLastEvents from './widgets/NoLastEvents';
import { useDispatch, useSelector } from '../../store';
import { WidgetWeather } from './widgets/WidgetWeather';
import { getCurrentWeather } from '../../store/slices/weather';
import { getBirthdaysList } from '../../store/slices/users';
import WidgetUsersBirthdays from './widgets/WidgetUsersBirthdays';

const Home = () => {
  /** Состояние пользователя */
  const { initialize, user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const { currentWeather, currentIsLoading, currentError } = useSelector((state) => state.weather);
  const { usersBirthdays, isLoading, error } = useSelector((state) => state.phonebook);

  useEffect(() => {
    dispatch(getCurrentWeather());
    dispatch(getBirthdaysList());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    setInterval(() => {
      dispatch(getCurrentWeather());
    }, 300000);
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title="Главная" className="main-content mx-auto px-5">
      <div className="pt-2 flex sm:grid md:grid-cols-2 gap-3 sm:gap-5 xl:gap-7 xl:grid-cols-3">
        <div>
          <div className="flex flex-col gap-4">
            {/* 1-я колонка */}
            <UserWelcomeWidget user={user ?? {}} />
            <CasesOverPeriodWidget user={user ?? {}} />
            <NoPublicatedActs user={user ?? {}} />
            <ProcessedWidget user={user ?? {}} />
            <NoLastEvents user={user ?? {}} />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">{/* 2-я колонка */}</div>
        </div>
        <div>
          <div className="flex flex-col gap-4">

            {/* 3-я колонка */}
            <WidgetWeather
              currentWeather={currentWeather}
              currentIsLoading={currentIsLoading}
              currentError={currentError}
            />

            {usersBirthdays.length > 0 ? <WidgetUsersBirthdays birthdays={usersBirthdays ?? []} error={error} /> : ''}

          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default Home;
