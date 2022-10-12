import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";

const Profile = () => {

  const breadcrumbs = [{name: "Мой профиль", href: "", current: true}];

  return (
    <BasicPage title='Мой профиль' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Мой профиль' />
    </BasicPage>
  )
};

export default Profile;
