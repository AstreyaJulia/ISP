import React, { useEffect } from "react";
import PropTypes from "prop-types";
import WidgetRowCounter from "../../../../components/WidgetRowCounter";
import { useDispatch, useSelector } from "../../../../store";
import { getJudgeOverPeriodCases } from "../../../../store/slices/cases/overperiod";

const CasesOverPeriodWidget = ({ user }) => {

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

  /** Стейты данных */
  const { overperiodcases, overperiodisLoading, overperioderror } = useSelector((state) => state.overperiod);

  /** Обновление данных при отрисовке компонента после загрузки запроса */
  useEffect(() => {
    if (availableUsers.includes(user.professionID)) dispatch(getJudgeOverPeriodCases());
    // eslint-disable-next-line
  }, [dispatch]);

  if (availableUsers.includes(user.professionID)) {
    return (
      <WidgetRowCounter isLoading={overperiodisLoading} rows={overperiodcases} color="red" error={overperioderror}
                        link="/over-period" title="с нарушением срока" counter={{
        single: "Дело",
        multi: "Дела",
        count: "Дел"
      }} />
    );
  }

  return null;

};

CasesOverPeriodWidget.propTypes = {
  user: PropTypes.object.isRequired
};

export default CasesOverPeriodWidget;
