import React, { useEffect } from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import CasesOverPeriodWidget from './widgets/CasesOverPeriodWidget';
import useAuth from '../../hooks/useAuth';
import NoPublicatedActs from './widgets/NoPublicatedActs';
import ProcessedWidget from './widgets/ProcessedWidget';
import UserWelcomeWidget from './widgets/UserWelcomeWidget';
import { WidgetWeather } from '../../components/WidgetWeather';
import { useDispatch, useSelector } from '../../store';
import { getCurrentWeather } from '../../store/slices/weather';
import NoLastEvents from "./widgets/NoLastEvents";

const Home = () => {
  /** Состояние пользователя */
  const { initialize, user } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();

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

          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default Home;
