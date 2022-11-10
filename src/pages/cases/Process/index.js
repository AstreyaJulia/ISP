import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import Processed from '../../../components/DataTable/Processed';
import { useDispatch, useSelector } from '../../../store';
import {
    getAllProcessedCases,
    getJudgeProcessedCases, resetAllProcessedCases,
    resetJudgeProcessedCases
} from '../../../store/slices/cases/processed';

const Process = ({ all }) => {
  const breadcrumbs = [
    { name: 'Делопроизводство', href: '', current: false },
    { name: 'Дела, находящиеся в производстве (по судье)', href: '', current: true },
  ];

  const breadcrumbsAll = [
    { name: 'Качество', href: '/grade', current: false },
    { name: 'Дела, находящиеся в производстве (общий список)', href: '', current: true },
  ];

  const dispatch = useDispatch();

  const { processedcases, processedcasesall, processedisLoading } = useSelector((state) => state.processed);

  useEffect(() => {
    dispatch(all === 'true' ? getAllProcessedCases() : getJudgeProcessedCases());
      return () => {
          dispatch(all === 'true' ? resetAllProcessedCases() : resetJudgeProcessedCases());
      }
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <BasicPage title="Дела, находящиеся в производстве" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader
        pages={all === 'true' ? breadcrumbsAll : breadcrumbs}
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
      />
    </BasicPage>
  );
};

Process.propTypes = {
  all: PropTypes.string.isRequired,
};

export default Process;
