import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import PublicationControl from "../../components/DataTable/PublicationControl";
import publication from '../../@mock/publication_acts.json'

const Publication = () => {
  const breadcrumbs = [{name: "Публикация судебных актов", href: "", current: true}];

  return (
    <BasicPage title='Публикация судебных актов' className='main-content max-w-6xl mx-auto px-4' >
      <PageHeader pages={breadcrumbs} header='Публикация судебных актов' />
      <PublicationControl data={publication} />
    </BasicPage>
  )
};

export default Publication;