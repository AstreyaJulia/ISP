import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";

const Process = () => {

  const breadcrumbs = [{ name: "Календарь", href: "", current: true }];

  return (
    <BasicPage title="Календарь" className="max-w-6xl mx-auto px-4">
      <PageHeader pages={breadcrumbs} header="Календарь" />
    </BasicPage>
  );
};

export default Process;
