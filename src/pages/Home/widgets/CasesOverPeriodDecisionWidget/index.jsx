import React, { useEffect } from 'react';
import WidgetRowCounter from '../../../../components/WidgetRowCounter';
import { useDispatch, useSelector } from '../../../../store';
import { getJudgeOverPeriodDecisionCases, resetJudgeOverPeriodDecisionCases } from '../../../../store/slices/cases/overperioddecision';
import {PATH_CASE} from "../../../../routes/paths";

const CasesOverPeriodDecisionWidget = () => {
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
  const { overperioddecisioncases, overperioddecisionisLoading, overperioddecisionerror } = useSelector((state) => state.overperioddecision);

  /** Обновление данных при отрисовке компонента после загрузки запроса */
  useEffect(() => {
    dispatch(getJudgeOverPeriodDecisionCases());
    return () => {
      dispatch(resetJudgeOverPeriodDecisionCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <WidgetRowCounter
      isLoading={overperioddecisionisLoading.toString() === 'true'}
      rows={overperioddecisioncases ?? []}
      color="red"
      error={overperioddecisionerror}
      link={PATH_CASE.lists.overPeriodDecision.client}
      title="с нарушением срока принятия"
      counter={{
        single: 'Дело',
        multi: 'Дела',
        count: 'Дел',
      }}
    />
  );
};

export default CasesOverPeriodDecisionWidget;
