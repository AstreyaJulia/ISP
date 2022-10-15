import React, { useState } from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import UsersList from "../../components/DataTable/UsersList";
import { UsersList as rows} from "../../@mock/SampleData";

const Phonebook = () => {

  const breadcrumbs = [{name: "Информация", href: "", current: false},
    {name: "Сотрудники", href: "", current: true}];

  return (
    <BasicPage title='Сотрудники' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Сотрудники' />
      <UsersList rows={rows} />
    </BasicPage>
  )
};

export default Phonebook;
