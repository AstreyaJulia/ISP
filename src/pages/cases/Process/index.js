import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import Processed from '../../../components/DataTable/Processed';
import { useDispatch, useSelector } from '../../../store';
import {
  getAllProcessedCases,
  getJudgeProcessedCases,
  resetAllProcessedCases,
  resetJudgeProcessedCases,
} from '../../../store/slices/cases/processed';
import useAuth from '../../../hooks/useAuth';

const Process = ({ all }) => {

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const dispatch = useDispatch();

  const { processedcases, processedcasesall, processedisLoading, processederror } = useSelector(
    (state) => state.processed
  );

  useEffect(() => {
    dispatch(all === 'true' ? getAllProcessedCases() : getJudgeProcessedCases());
    return () => {
      dispatch(all === 'true' ? resetAllProcessedCases() : resetJudgeProcessedCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <BasicPage title="Дела, находящиеся в производстве" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader
        header={
          all === 'true'
            ? 'Дела, находящиеся в производстве (общий список)'
            : 'Дела, находящиеся в производстве (по судье)'
        }
      />
      <Processed
        data={all === 'true' ? processedcasesall : processedcases ?? []}
        isLoading={processedisLoading}
        all={all}
        error={processederror}
      />
    </BasicPage>
  );
};

Process.propTypes = {
  all: PropTypes.string.isRequired,
};

export default Process;
