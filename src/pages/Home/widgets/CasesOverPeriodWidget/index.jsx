import React, { useEffect } from 'react';
import WidgetRowCounter from '../../../../components/WidgetRowCounter';
import { useDispatch, useSelector } from '../../../../store';
import { getJudgeOverPeriodCases, resetJudgeOverPeriodCases } from '../../../../store/slices/cases/overperiod';
import {PATH_CASE} from "../../../../routes/paths";

const CasesOverPeriodWidget = () => {
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
  const { overperiodcases, overperiodisLoading, overperioderror } = useSelector((state) => state.overperiod);

  /** Обновление данных при отрисовке компонента после загрузки запроса */
  useEffect(() => {
    dispatch(getJudgeOverPeriodCases());
    return () => {
      dispatch(resetJudgeOverPeriodCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <WidgetRowCounter
      isLoading={overperiodisLoading.toString() === 'true'}
      rows={overperiodcases ?? []}
      color="red"
      error={overperioderror}
      link={PATH_CASE.lists.overPeriod.client}
      title="с нарушением срока"
      counter={{
        single: 'Дело',
        multi: 'Дела',
        count: 'Дел',
      }}
    />
  );
};

export default CasesOverPeriodWidget;
