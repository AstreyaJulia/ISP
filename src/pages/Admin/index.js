import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";

const Admin = () => {

  const breadcrumbs = [{name: "Администрирование", href: "", current: true}];

  return (
    <BasicPage title='Администрирование' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Администрирование' />
    </BasicPage>
  )
};

export default Admin;
