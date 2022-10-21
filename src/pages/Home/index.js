import React, { useEffect } from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import CasesOverPeriodWidget from "./widgets/CasesOverPeriodWidget";
import { useDispatch, useSelector } from "../../store";
import { getJudgeOverPeriodCases } from "../../store/slices/cases/overperiod";
import { getJudgeActPublicationCases } from "../../store/slices/cases/actpublication";
import useAuth from "../../hooks/useAuth";
import { NoPublicatedActs } from "./widgets/NoPublicatedActs";

const Home = () => {

  const dispatch = useDispatch();

  /** Стейты для виджетов */
  const { nopublacts, nopublactsisLoading, nopublactserror } = useSelector((state) => state.actpublication);

  /** Состояние пользователя */
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getJudgeOverPeriodCases());
    dispatch(getJudgeActPublicationCases());
  }, [dispatch]);

  return (
    <BasicPage title="Главная" className="main-content max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-3 mt-4 gap-4">
        <div>
          <h5 className="text-gray-700">{user?.fullname}</h5>
          <h5 className="text-gray-700">{user?.professionName}</h5>
          <div className="flex flex-col gap-4">
            <CasesOverPeriodWidget user={user ?? 0} />
            <NoPublicatedActs data={nopublacts} error={nopublactserror} link="/publication"
                              isLoading={nopublactsisLoading} />
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default Home;
