import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import { useDispatch, useSelector } from '../../../store';
import {
  getAllNoLastEventsCases,
  getJudgeNoLastEventsCases,
  resetAllNoLastEventsCases,
  resetJudgeNoLastEventsCases,
} from '../../../store/slices/cases/nolastevents';
import NoLastEvents from '../../../components/DataTable/NoLastEvents';
import useAuth from '../../../hooks/useAuth';

const NoLastEventsPage = ({ all }) => {
  const dispatch = useDispatch();

  /** Состояние пользователя */
  const { initialize } = useAuth();

  useEffect(() => {
    initialize();
    // eslint-disable-next-line
  }, []);

  const { nolastevents, nolasteventsall, nolasteventsisLoading, nolasteventserror } = useSelector(
    (state) => state.nolastevents
  );

  useEffect(() => {
    dispatch(all === 'true' ? getAllNoLastEventsCases() : getJudgeNoLastEventsCases());
    return () => {
      dispatch(all === 'true' ? resetAllNoLastEventsCases() : resetJudgeNoLastEventsCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  const breadcrumbs = [
    { name: 'Делопроизводство', href: '', current: false },
    {
      name: 'Дела, не отмеченным более 5 дней после передачи, более 1 дня кроме переданных судье (по судье)',
      href: '',
      current: true,
    },
  ];

  const breadcrumbsAll = [
    { name: 'Качество', href: '/grade', current: false },
    {
      name: 'Дела, не отмеченным более 5 дней после передачи, более 1 дня кроме переданных судье (общий список)',
      href: '',
      current: true,
    },
  ];

  return (
    <BasicPage
      title="Дела, не отмеченным более 5 дней после передачи, более 1 дня кроме переданных судье"
      className="main-content max-w-6xl mx-auto px-5"
    >
      <PageHeader
        pages={all === 'true' ? breadcrumbsAll : breadcrumbs}
        header={
          all === 'true'
            ? 'Дела, не отмеченным более 5 дней после передачи, более 1 дня кроме переданных судье (общий список)'
            : 'Дела, не отмеченным более 5 дней после передачи, более 1 дня кроме переданных судье (по судье)'
        }
      />
      <NoLastEvents
        data={all === 'true' ? nolasteventsall : nolastevents ?? []}
        isLoading={nolasteventsisLoading}
        error={nolasteventserror}
      />
    </BasicPage>
  );
};

NoLastEventsPage.propTypes = {
  all: PropTypes.string.isRequired,
};

export default NoLastEventsPage;
