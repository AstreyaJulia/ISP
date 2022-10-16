import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";

const Grade = () => {

  const breadcrumbs = [{name: "Статистика", href: "", current: false},
    {name: "Качество", href: "", current: true}];

  return (
    <BasicPage title='Качество' className='main-content max-w-6xl mx-auto px-4' >
      <PageHeader pages={breadcrumbs} header='Качество' />
    </BasicPage>
  )
};

export default Grade;
