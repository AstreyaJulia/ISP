import React from "react";
import BasicPage from "../../pagesLayouts/BasicPage";
import PageHeader from "../../../components/PageHeader";
import { casesProcessed } from "../../../@mock/SampleData";
import Processed from "../../../components/DataTable/Processed";

const Process = () => {

  const breadcrumbs = [{ name: "Делопроизводство", href: "", current: false },
    { name: "Дела, находящиеся в производстве", href: "", current: true }];

  return (
    <BasicPage title="Дела, находящиеся в производстве" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Дела, находящиеся в производстве" />
      <Processed data={casesProcessed} isLoading='false' all='true' />
    </BasicPage>
  );
};

export default Process;
