import React, { useEffect } from 'react';
import BasicPage from '../pagesLayouts/BasicPage';
import PageHeader from '../../components/PageHeader';
import useAuth from '../../hooks/useAuth';
import CasesOverPeriodWidgetAll from './widgets/CasesOverPeriodWidgetAll';
import CasesOverPeriodDecisionWidgetAll from './widgets/CasesOverPeriodDecisionWidgetAll';
import NoPublicatedActsAll from './widgets/NoPublicatedActsAll';
import ProcessedWidgetAll from './widgets/ProcessedWidgetAll';
import NoLastEventsAll from './widgets/NoLastEventsAll';

const Grade = () => {
  /** Состояние пользователя */
  const { initialize, user } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  return (
    <BasicPage title="Качество" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader header="Качество" />
      <div className="grid grid-cols-3 mt-4 gap-4">
        <div className="flex flex-col gap-4">
          <CasesOverPeriodWidgetAll user={user ?? {}} />
          <CasesOverPeriodDecisionWidgetAll user={user ?? {}} />
          <NoPublicatedActsAll user={user ?? {}} />
          <ProcessedWidgetAll user={user ?? {}} />
          <NoLastEventsAll user={user ?? {}} />
        </div>
      </div>
    </BasicPage>
  );
};

export default Grade;
