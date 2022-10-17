import React, {useEffect} from "react";
import BasicPage from "../../pagesLayouts/BasicPage";
import PageHeader from "../../../components/PageHeader";
import { outdatedCases } from "../../../@mock/SampleData";
import CasesOverPeriod from "../../../components/DataTable/CasesOverPeriod";
import { useDispatch, useSelector } from '../../../store';
import { getAllOverPeriodCases, getJudgeOverPeriodCases} from '../../../store/slices/cases/overperiod';

const Finished = () => {

    const dispatch = useDispatch();

    const { cases, isLoading, error } = useSelector((state) => state.overperiod);

    useEffect(() => {
        // console.log(getAllOverPeriodCases());
        dispatch(getAllOverPeriodCases());
    }, [dispatch]);

  const breadcrumbs = [{name: "Делопроизводство", href: "", current: false},
    {name: "Дела, рассмотренные свыше срока", href: "", current: true}];

  return (
    <BasicPage title='Дела, рассмотренные свыше срока' className='main-content max-w-6xl mx-auto px-4' >
      <PageHeader pages={breadcrumbs} header='Дела, рассмотренные свыше срока' />
      <CasesOverPeriod rows={cases ?? []} isLoading={isLoading} />
    </BasicPage>
  )
};

export default Finished;
