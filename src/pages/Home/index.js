import React, {useEffect} from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import CasesOverPeriodWidget from "./widgets/CasesOverPeriodWidget";
import useAuth from "../../hooks/useAuth";
import NoPublicatedActs from "./widgets/NoPublicatedActs";
import ProcessedWidget from "./widgets/ProcessedWidget";
import UserWelcomeWidget from "./widgets/UserWelcomeWidget";
import { classNames } from "../../utils/classNames";
import {WidgetWeather} from "../../components/WidgetWeather";
import {useDispatch, useSelector} from "../../store";
import {getCurrentWeather} from "../../store/slices/weather";

const Home = () => {

  /** Состояние пользователя */
  const { user, sidebar } = useAuth();

  const dispatch = useDispatch();

  const { currentWeather, currentIsLoading, currentError } = useSelector((state) => state.weather);

  useEffect(() => {
    dispatch(getCurrentWeather());
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
      <div className={classNames(sidebar?.toString() === "0" ? 'xl:grid-cols-3' : 'xl:grid-cols-2', "pt-2 flex sm:grid md:grid-cols-2 gap-3 sm:gap-5 xl:gap-7")}>
        <div>
          <div className="flex flex-col gap-4">
            {/* 1-я колонка */}
            <UserWelcomeWidget user={user ?? {}} />
            <CasesOverPeriodWidget user={user ?? {}} />
            <NoPublicatedActs user={user ?? {}} />
            <ProcessedWidget user={user ?? {}} />
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            {/* 2-я колонка */}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            {/* 3-я колонка */}
            <WidgetWeather currentWeather={currentWeather} currentIsLoading={currentIsLoading} currentError={currentError} />
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default Home;
