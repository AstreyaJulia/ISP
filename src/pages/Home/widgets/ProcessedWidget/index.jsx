import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WidgetRowCounter from '../../../../components/WidgetRowCounter';
import { useDispatch, useSelector } from '../../../../store';
import { getJudgeProcessedCases, resetJudgeProcessedCases } from '../../../../store/slices/cases/processed';
import useAuth from '../../../../hooks/useAuth';

const ProcessedWidget = () => {
  /** Должности, которым доступна отрисовка */
  const availableUsers = [1, 2, 3, 6, 7];
  /* [
    {id: 1, profession: 'Председатель', group: 24},
    {id: 2, profession: 'Заместитель председателя', group: 24},
    {id: 3, profession: 'Судья', group: 24},
    {id: 6, profession: 'Помощник председателя суда', group: 25},
    {id: 7, profession: 'Помощник судьи', group: 25},
    ] */

  const dispatch = useDispatch();
  const { user } = useAuth();

  /** Стейты данных */
  const { processedcases, processedisLoading, processederror } = useSelector((state) => state.processed);

  /** Обновление данных при отрисовке компонента после загрузки запроса */
  useEffect(() => {
    if (availableUsers.includes(user?.professionID)) dispatch(getJudgeProcessedCases());
    return () => {
      dispatch(resetJudgeProcessedCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  if (availableUsers.includes(user.professionID)) {
    return (
      <WidgetRowCounter
        isLoading={processedisLoading}
        rows={processedcases}
        color="green"
        link="/process"
        error={processederror}
        title="в производстве"
        counter={{
          single: 'Дело',
          multi: 'Дела',
          count: 'Дел',
        }}
      />
    );
  }

  return null;
};

ProcessedWidget.propTypes = {
  user: PropTypes.object.isRequired,
};

export default ProcessedWidget;
