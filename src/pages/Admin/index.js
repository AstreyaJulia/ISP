import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";

const Admin = () => {

  const breadcrumbs = [{name: "Администрирование", href: "", current: true}];

  return (
    <BasicPage title='Администрирование' className='max-w-6xl mx-auto px-4' >
      <PageHeader pages={breadcrumbs} header='Администрирование' />
    </BasicPage>
  )
};

export default Admin;
