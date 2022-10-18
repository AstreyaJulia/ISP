import React, { useEffect } from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import CasesOverPeriodWidget from "./widgets/CasesOverPeriodWidget";
import { useDispatch, useSelector } from "../../store";
import { getAllOverPeriodCases } from "../../store/slices/cases/overperiod";

const Home = () => {
  const dispatch = useDispatch();

  const { cases, isLoading, error } = useSelector((state) => state.overperiod);

  useEffect(() => {
    dispatch(getAllOverPeriodCases());
  }, [dispatch]);

  return (
    <BasicPage title='Главная' className='main-content max-w-6xl mx-auto px-4' >
      <div className='grid grid-cols-2 mt-4 gap-4'>
        <div className='grid grid-cols-2 gap-4'>
          <CasesOverPeriodWidget rows={cases ?? []} isLoading={isLoading} />
        </div>
      </div>
    </BasicPage>
  )
};

export default Home;
