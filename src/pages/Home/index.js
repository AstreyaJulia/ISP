import React from "react";
import BasicPage from "../pagesLayouts/basicPage";
import HeaderBreadcrumbs from "../../components/HeaderBreadcrumbs";

const Home = () => {

  const breadcrumbs = [{name: "Мой профиль", href: "/myprofile", current: false},
    {name: "Редактирование моего профиля", href: "/myprofile/edit", current: true}];

  return (
    <BasicPage title='Главная' className='main-content max-w-6xl mx-auto' >
      <HeaderBreadcrumbs header='Заголовок' pages={breadcrumbs}/>
    </BasicPage>
  )
};

export default Home;