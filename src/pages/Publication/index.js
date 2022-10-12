import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";

const Publication = () => {
  const breadcrumbs = [{name: "Публикация судебных актов", href: "", current: true}];

  return (
    <BasicPage title='Публикация судебных актов' className='main-content max-w-6xl mx-auto px-3' >
      <PageHeader pages={breadcrumbs} header='Публикация судебных актов' />
    </BasicPage>
  )
};

export default Publication;