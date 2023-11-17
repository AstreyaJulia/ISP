import React, { useEffect } from 'react';
import WidgetRowCounter from '../../../../components/WidgetRowCounter';
import { useDispatch, useSelector } from '../../../../store';
import { getJudgeNoLastEventsCases, resetJudgeNoLastEventsCases } from '../../../../store/slices/cases/nolastevents';
import {PATH_CASE} from "../../../../routes/paths";

const NoLastEvents = () => {
  /** Должности, которым доступна отрисовка */
  /* [
        {id: 1, profession: 'Председатель', group: 24},
        {id: 2, profession: 'Заместитель председателя', group: 24},
        {id: 3, profession: 'Судья', group: 24},
        {id: 9, profession: 'Секретарь судебного заседания', group: 26,}
      ] */

  const dispatch = useDispatch();

  /** Стейты данных */
  const { nolastevents, nolasteventsisLoading, nolasteventserror } = useSelector((state) => state.nolastevents);

  /** Обновление данных при отрисовке компонента после загрузки запроса */
  useEffect(() => {
    dispatch(getJudgeNoLastEventsCases());
    return () => {
      dispatch(resetJudgeNoLastEventsCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <WidgetRowCounter
      isLoading={nolasteventsisLoading.toString() === 'true'}
      rows={nolastevents ?? []}
      color="yellow"
      link={PATH_CASE.lists.noLastEvents.client}
      error={nolasteventserror}
      title=", по которым нет движения более 1 дня"
      counter={{
        single: 'Дела',
        multi: 'Дел',
        count: 'Дел',
      }}
    />
  );
};

export default NoLastEvents;
