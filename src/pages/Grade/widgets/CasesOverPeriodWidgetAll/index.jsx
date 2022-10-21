import React, { useEffect } from "react";
import PropTypes from "prop-types";
import WidgetRowCounter from "../../../../components/WidgetRowCounter";
import { useDispatch, useSelector } from "../../../../store";
import { getAllOverPeriodCases, getJudgeOverPeriodCases } from "../../../../store/slices/cases/overperiod";

const CasesOverPeriodWidgetAll = ({ user }) => {

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
  const {overperiodcasesall, overperiodisLoading, overperioderror} = useSelector((state) => state.overperiod);

  /** Обновление данных при отрисовке компонента после загрузки запроса */
  useEffect(() => {
    dispatch(getAllOverPeriodCases());
  }, [dispatch]);

  if (availableUsers.includes(user)) {
    return (
      <WidgetRowCounter isLoading={overperiodisLoading} rows={overperiodcasesall} color="red" error={overperioderror}
                        link="/over-period-all" title="с нарушением срока" counter={{
        single: "Дело",
        multi: "Дела",
        count: "Дел"
      }} />
    );
  }

};

CasesOverPeriodWidgetAll.propTypes = {
  user: PropTypes.number.isRequired
};

export default CasesOverPeriodWidgetAll;
