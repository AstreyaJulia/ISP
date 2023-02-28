import React, { useEffect } from 'react';
import WidgetRowCounter from '../../../../components/WidgetRowCounter';
import { useDispatch, useSelector } from '../../../../store';
import { getJudgeProcessedCases, resetJudgeProcessedCases } from '../../../../store/slices/cases/processed';
import {PATH_CASE} from "../../../../routes/paths";

const ProcessedWidget = () => {
  /** Должности, которым доступна отрисовка */
  /* [
    {id: 1, profession: 'Председатель', group: 24},
    {id: 2, profession: 'Заместитель председателя', group: 24},
    {id: 3, profession: 'Судья', group: 24},
    {id: 6, profession: 'Помощник председателя суда', group: 25},
    {id: 7, profession: 'Помощник судьи', group: 25},
    ] */

  const dispatch = useDispatch();

  /** Стейты данных */
  const { processedcases, processedisLoading, processederror } = useSelector((state) => state.processed);

  /** Обновление данных при отрисовке компонента после загрузки запроса */
  useEffect(() => {
    dispatch(getJudgeProcessedCases());
    return () => {
      dispatch(resetJudgeProcessedCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <WidgetRowCounter
      isLoading={processedisLoading.toString() === 'true'}
      rows={processedcases ?? []}
      color="green"
      link={PATH_CASE.lists.process.client}
      error={processederror}
      title="в производстве"
      counter={{
        single: 'Дело',
        multi: 'Дела',
        count: 'Дел',
      }}
    />
  );
};

export default ProcessedWidget;
