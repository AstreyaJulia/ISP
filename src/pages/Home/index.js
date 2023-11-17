import React, { useEffect } from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import CasesOverPeriodWidget from "./widgets/CasesOverPeriodWidget";
import CasesOverPeriodDecisionWidget from "./widgets/CasesOverPeriodDecisionWidget";
import useAuth from "../../hooks/useAuth";
import NoPublicatedActs from "./widgets/NoPublicatedActs";
import ProcessedWidget from "./widgets/ProcessedWidget";
import UserWelcomeWidget from "./widgets/UserWelcomeWidget";
import NoLastEvents from "./widgets/NoLastEvents";
import { useDispatch, useSelector } from "../../store";
import { WidgetWeather } from "../../components/Weather/WidgetWeather";
import { getCurrentWeather } from "../../store/slices/weather";
import { getBirthdaysList } from "../../store/slices/users";
import WidgetUsersBirthdays from "./widgets/WidgetUsersBirthdays";


const Home = () => {
  /** Состояние пользователя */
  const { initialize, user } = useAuth();
  const dispatch = useDispatch();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const { currentWeather, currentIsLoading, currentError } = useSelector((state) => state.weather);
  const { usersBirthdays, error } = useSelector((state) => state.phonebook);

  useEffect(() => {
    dispatch(getCurrentWeather());
    dispatch(getBirthdaysList());
    // eslint-disable-next-line
  }, [dispatch]);

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(getCurrentWeather());
      dispatch(getBirthdaysList());
    }, (1000 * 60 * 5)); // милисекунды * секунды * минуты
    // очистка интервала
    return () => clearInterval(interval);
  });

  return (
    <BasicPage title="Главная" className="main-content max-w-7xl mx-auto px-5">
      <div className="pt-2 flex flex-col md:grid md:grid-cols-2 gap-3 xl:gap-7 xl:grid-cols-3">
        <div>
          <div className="flex flex-col gap-4">
            {/* 1-я колонка */}
            <UserWelcomeWidget />
            {[1, 2, 3, 6, 7].includes(user?.professionID) ? <CasesOverPeriodWidget /> : ""}
            {[1, 2, 3, 6, 7].includes(user?.professionID) ? <CasesOverPeriodDecisionWidget /> : ""}
            {[1, 2, 3, 6, 7].includes(user?.professionID) ? <NoPublicatedActs /> : ""}
            {[1, 2, 3, 6, 7].includes(user?.professionID) ? <ProcessedWidget /> : ""}
            {[1, 2, 3, 9].includes(user?.professionID) ? <NoLastEvents /> : ""}
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-4">{/* 2-я колонка */}</div>
        </div>
        <div>
          <div className="flex flex-col gap-4">
            {/* 3-я колонка */}
            <WidgetWeather
              currentWeather={currentWeather ?? {}}
              currentIsLoading={currentIsLoading}
              currentError={currentError}
            />

            {usersBirthdays.length > 0 ? <WidgetUsersBirthdays birthdays={usersBirthdays ?? []} error={error} /> : ""}
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default Home;