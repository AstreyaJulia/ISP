import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";

const Home = () => {

  const breadcrumbs = [{name: "Мой профиль", href: "/myprofile", current: false},
    {name: "Редактирование моего профиля", href: "/myprofile/edit", current: true}];

  return (
    <BasicPage title='Главная' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Заголовок' />
    </BasicPage>
  )
};

export default Home;