import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import DataTable from "../../components/DataTable";
import people from "../../components/DataTable/people.json";

const Home = () => {

  const breadcrumbs = [{name: "Мой профиль", href: "/myprofile", current: false},
    {name: "Редактирование моего профиля", href: "/myprofile/edit", current: true}];

  const tableColumns = {"_id": 'ID', "name": 'Имя', "company": 'Компания', "email": 'Е-почта', "phone":'Телефон', "address": 'Адрес'}

  return (
    <BasicPage title='Главная' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Заголовок' />
      <DataTable rows={people} columnNames={tableColumns} />
    </BasicPage>
  )
};

export default Home;