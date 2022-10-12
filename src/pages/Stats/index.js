import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";

const Stats = () => {

  const breadcrumbs = [{name: "Статистика", href: "", current: false},
    {name: "Графики", href: "", current: true}];

  return (
    <BasicPage title='Графики' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Графики' />
    </BasicPage>
  )
};

export default Stats;
