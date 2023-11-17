import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WidgetRowCounter from '../../../../components/WidgetRowCounter';
import { useDispatch, useSelector } from '../../../../store';
import { getAllOverPeriodDecisionCases, resetAllOverPeriodDecisionCases } from '../../../../store/slices/cases/overperioddecision';
import {PATH_CASE} from "../../../../routes/paths";

const CasesOverPeriodDecisionWidgetAll = ({ user }) => {
  /** Должности, которым доступна отрисовка */
  const availableUsers = ['', 1, 2, 3, 6, 7];
  /* [
    {id: 1, profession: 'Председатель', group: 24},
    {id: 2, profession: 'Заместитель председателя', group: 24},
    {id: 3, profession: 'Судья', group: 24},
    {id: 6, profession: 'Помощник председателя суда', group: 25},
    {id: 7, profession: 'Помощник судьи', group: 25},
    ] */

  const dispatch = useDispatch();

  /** Стейты данных */
  const { overperioddecisioncasesall, overperioddecisionisLoading, overperioddecisionerror } = useSelector((state) => state.overperioddecision);

  /** Обновление данных при отрисовке компонента после загрузки запроса */
  useEffect(() => {
    if (availableUsers.includes(user.professionID)) dispatch(getAllOverPeriodDecisionCases());
    return () => {
      dispatch(resetAllOverPeriodDecisionCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  if (availableUsers.includes(user.professionID)) {
    return (
      <WidgetRowCounter
        isLoading={overperioddecisionisLoading.toString() === 'true'}
        rows={overperioddecisioncasesall ?? []}
        color="red"
        error={overperioddecisionerror}
        link={PATH_CASE.lists.overPeriodDecisionAll.client}
        title="с нарушением срока принятия"
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

CasesOverPeriodDecisionWidgetAll.propTypes = {
  user: PropTypes.object.isRequired,
};

export default CasesOverPeriodDecisionWidgetAll;
