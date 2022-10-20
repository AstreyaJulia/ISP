import React, { useEffect } from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import CasesOverPeriodWidget from "./widgets/CasesOverPeriodWidget";
import { useDispatch, useSelector } from "../../store";
import { getJudgeOverPeriodCases } from "../../store/slices/cases/overperiod";
import useAuth from "../../hooks/useAuth";

const Home = () => {
  const dispatch = useDispatch();

  const { overperiodcases, overperiodisLoading, overperioderror } = useSelector((state) => state.overperiod);
  const { user } = useAuth();

  useEffect(() => {
    dispatch(getJudgeOverPeriodCases());
  }, [dispatch]);

  return (
    <BasicPage title="Главная" className="main-content max-w-6xl mx-auto px-4">
      <div className="grid grid-cols-3 mt-4 gap-4">
        <div>
          <h5 className="text-gray-700">{user?.fullname}</h5>
          <h5 className="text-gray-700">{user?.professionName}</h5>
          {user?.professionID !== null ?
            <CasesOverPeriodWidget rows={overperiodcases ?? []} isLoading={overperiodisLoading} error={overperioderror ?? null} /> : ""}
        </div>
      </div>
    </BasicPage>
  );
};

export default Home;
