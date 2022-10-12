import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import CategoryDataTable from "../../components/DataTable/CategoryDataTable";
import category from "../../@mock/grcategory.json";
import CasesList from "../../components/CasesList";
import { outdatedCases } from "../../@mock/SampleData";

const Home = () => {

  const breadcrumbs = [{name: "Мой профиль", href: "/myprofile", current: false},
    {name: "Редактирование моего профиля", href: "/myprofile/edit", current: true}];

    const tableGrColumns = {"PREFIX": 'Префикс', "NAME": 'Название', "PARENT_VA_CODE": 'PARENT_VA_CODE', "VA_CODE": 'VA_CODEа'}
  return (
    <BasicPage title='Главная' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Заголовок' />
      <CategoryDataTable rows={category} columnNames={tableGrColumns} />
    </BasicPage>
  )
};

export default Home;
