import React from "react";
import BasicPage from "../../pagesLayouts/BasicPage";
import PageHeader from "../../../components/PageHeader";
import { outdatedCases } from "../../../@mock/SampleData";
import CasesOverPeriod from "../../../components/CasesList/CasesOverPeriod";

const Finished = () => {

  const breadcrumbs = [{name: "Делопроизводство", href: "", current: false},
    {name: "Дела, рассмотренные свыше срока", href: "", current: true}];

  return (
    <BasicPage title='Дела, рассмотренные свыше срока' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Дела, рассмотренные свыше срока' />
      <CasesOverPeriod rows={outdatedCases} />
    </BasicPage>
  )
};

export default Finished;
