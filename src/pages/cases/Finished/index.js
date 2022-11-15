import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import CasesOverPeriod from '../../../components/DataTable/CasesOverPeriod';
import { useDispatch, useSelector } from '../../../store';
import {
  getAllOverPeriodCases,
  getJudgeOverPeriodCases,
  resetAllOverPeriodCases,
  resetJudgeOverPeriodCases,
} from '../../../store/slices/cases/overperiod';
import useAuth from '../../../hooks/useAuth';

const Finished = ({ all }) => {
  const dispatch = useDispatch();

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const { overperiodcases, overperiodcasesall, overperiodisLoading, overperioderror } = useSelector(
    (state) => state.overperiod
  );

  useEffect(() => {
    dispatch(all === 'true' ? getAllOverPeriodCases() : getJudgeOverPeriodCases());
    return () => {
      dispatch(all === 'true' ? resetAllOverPeriodCases() : resetJudgeOverPeriodCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  const breadcrumbs = [
    { name: 'Делопроизводство', href: '', current: false },
    { name: 'Дела, рассмотренные свыше срока (по судье)', href: '', current: true },
  ];

  const breadcrumbsAll = [
    { name: 'Качество', href: '/grade', current: false },
    { name: 'Дела, рассмотренные свыше срока (общий список)', href: '', current: true },
  ];

  return (
    <BasicPage title="Дела, рассмотренные свыше срока" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader
        pages={all === 'true' ? breadcrumbsAll : breadcrumbs}
        header={
          all === 'true'
            ? 'Дела, рассмотренные свыше срока (общий список)'
            : 'Дела, рассмотренные свыше срока (по судье)'
        }
      />
      <CasesOverPeriod
        data={all === 'true' ? overperiodcasesall : overperiodcases ?? []}
        isLoading={overperiodisLoading}
        error={overperioderror}
      />
    </BasicPage>
  );
};

Finished.propTypes = {
  all: PropTypes.string.isRequired,
};

export default Finished;
