import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";

const Phonebook = () => {

  const breadcrumbs = [{name: "Информация", href: "", current: false},
    {name: "Сотрудники", href: "", current: true}];

  return (
    <BasicPage title='Сотрудники' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Сотрудники' />
    </BasicPage>
  )
};

export default Phonebook;
