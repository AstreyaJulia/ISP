import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import CasesOverPeriodDecision from '../../../components/DataTable/CasesOverPeriodDecision';
import { useDispatch, useSelector } from '../../../store';
import {
  getAllOverPeriodDecisionCases,
  getJudgeOverPeriodDecisionCases,
  resetAllOverPeriodDecisionCases,
  resetJudgeOverPeriodDecisionCases,
} from '../../../store/slices/cases/overperioddecision';
import useAuth from '../../../hooks/useAuth';

const OverPeriodDecision = ({ all }) => {
  const dispatch = useDispatch();

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const { overperioddecisioncases, overperioddecisioncasesall, overperioddecisionisLoading, overperioddecisionerror } = useSelector(
    (state) => state.overperioddecision
  );

  useEffect(() => {
    dispatch(all === 'true' ? getAllOverPeriodDecisionCases() : getJudgeOverPeriodDecisionCases());
    return () => {
      dispatch(all === 'true' ? resetAllOverPeriodDecisionCases() : resetJudgeOverPeriodDecisionCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <BasicPage title="Дела, принятые к производству свыше срока" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader
        header={
          all === 'true'
            ? 'Дела, принятые к производству свыше срока (общий список)'
            : 'Дела, принятые к производству свыше срока (по судье)'
        }
      />
      <CasesOverPeriodDecision
        data={all === 'true' ? overperioddecisioncasesall : overperioddecisioncases ?? []}
        isLoading={overperioddecisionisLoading}
        error={overperioddecisionerror}
        all={all}
      />
    </BasicPage>
  );
};

OverPeriodDecision.propTypes = {
  all: PropTypes.string.isRequired,
};

export default OverPeriodDecision;
