import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import CategoryDataTable from "../../components/DataTable/CategoryDataTable";
import people from "../../components/DataTable/people.json";
import category from "../../components/DataTable/CategoryDataTable/grcategory.json";

const Home = () => {

  const breadcrumbs = [{name: "Мой профиль", href: "/myprofile", current: false},
    {name: "Редактирование моего профиля", href: "/myprofile/edit", current: true}];

  const tableColumns = {"_id": 'ID', "name": 'Имя', "company": 'Компания', "email": 'Е-почта', "phone":'Телефон', "address": 'Адрес'}
    const tableGrColumns = {"PREFIX": 'Префикс', "NAME": 'Название', "PARENT_VA_CODE": 'PARENT_VA_CODE', "VA_CODE": 'VA_CODEа'}
  return (
    <BasicPage title='Главная' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Заголовок' />
      <CategoryDataTable rows={category} columnNames={tableGrColumns} />
    </BasicPage>
  )
};

export default Home;
