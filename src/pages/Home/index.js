import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import CategoryDataTable from "../../components/DataTable/CategoryDataTable";
import category from "../../@mock/grcategory.json";

const Home = () => {

  const breadcrumbs = [{name: "Мой профиль", href: "/myprofile", current: false},
    {name: "Редактирование моего профиля", href: "/myprofile/edit", current: true}];

  return (
    <BasicPage title='Главная' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Заголовок' />
      <CategoryDataTable rows={category} />
    </BasicPage>
  )
};

export default Home;
