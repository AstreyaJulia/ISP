import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import useAuth from "../../hooks/useAuth";
import CasesOverPeriodWidgetAll from "./widgets/CasesOverPeriodWidgetAll";
import NoPublicatedActsAll from "./widgets/NoPublicatedActsAll";

const Grade = () => {

  /** Состояние пользователя */
  const { user } = useAuth();

  const breadcrumbs = [{ name: "Статистика", href: "", current: false },
    { name: "Качество", href: "", current: true }];

  return (
    <BasicPage title="Качество" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Качество" />
      <div className="grid grid-cols-3 mt-4 gap-4">
        <div className="flex flex-col gap-4">
          <CasesOverPeriodWidgetAll user={user ?? {}} />
          <NoPublicatedActsAll user={user ?? {}} />
        </div>
      </div>
    </BasicPage>
  );
};

export default Grade;
