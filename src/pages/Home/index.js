import React from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import CasesOverPeriodWidget from "./widgets/CasesOverPeriodWidget";
import useAuth from "../../hooks/useAuth";
import NoPublicatedActs from "./widgets/NoPublicatedActs";
import ProcessedWidget from "./widgets/ProcessedWidget";

const Home = () => {

  /** Состояние пользователя */
  const { user } = useAuth();

  return (
    <BasicPage title="Главная" className="main-content mx-auto px-5">
      <div className="grid grid-cols-3 gap-4">
        <div>
          <h5 className="text-gray-700">{user?.fullname}</h5>
          <h5 className="text-gray-700">{user?.professionName}</h5>
          <div className="flex flex-col gap-4">
            <CasesOverPeriodWidget user={user ?? {}} />
            <NoPublicatedActs user={user ?? {}} />
            <ProcessedWidget user={user ?? {}} />
          </div>
        </div>
      </div>
    </BasicPage>
  );
};

export default Home;
