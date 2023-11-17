import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WidgetRowCounter from '../../../../components/WidgetRowCounter';
import { useDispatch, useSelector } from '../../../../store';
import { getAllNoLastEventsCases, resetAllNoLastEventsCases } from '../../../../store/slices/cases/nolastevents';
import {PATH_CASE} from "../../../../routes/paths";

const NoLastEventsAll = ({ user }) => {
  /** Должности, которым доступна отрисовка */
  const availableUsers = ['', 1, 2, 3, 9];
  /* [
        {id: 1, profession: 'Председатель', group: 24},
        {id: 2, profession: 'Заместитель председателя', group: 24},
        {id: 6, profession: 'Помощник председателя суда', group: 25},
      ] */

  const dispatch = useDispatch();

  /** Стейты данных */
  const { nolasteventsall, nolasteventsisLoading, nolasteventserror } = useSelector((state) => state.nolastevents);

  /** Обновление данных при отрисовке компонента после загрузки запроса */
  useEffect(() => {
    if (availableUsers.includes(user.professionID)) dispatch(getAllNoLastEventsCases());
    return () => {
      dispatch(resetAllNoLastEventsCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  if (availableUsers.includes(user.professionID)) {
    return (
      <WidgetRowCounter
        isLoading={nolasteventsisLoading.toString() === 'true'}
        rows={nolasteventsall}
        color="yellow"
        link={PATH_CASE.lists.noLastEventsAll.client}
        error={nolasteventserror}
        title=", по которым нет движения более 1 дня"
        counter={{
          single: 'Дела',
          multi: 'Дел',
          count: 'Дел',
        }}
      />
    );
  }

  return null;
};

NoLastEventsAll.propTypes = {
  user: PropTypes.object.isRequired,
};

export default NoLastEventsAll;