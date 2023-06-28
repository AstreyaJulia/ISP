import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import WidgetRowCounter from '../../../../components/WidgetRowCounter';
import { useDispatch, useSelector } from '../../../../store';
import { getAllActPublicationCases, resetAllActPublicationCases } from '../../../../store/slices/cases/actpublication';
import {PATH_CASE} from "../../../../routes/paths";

const NoPublicatedActsAll = ({ user }) => {
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
  const { nopublactsall, nopublactsisLoading, nopublactserror } = useSelector((state) => state.actpublication);

  /** Обновление данных при отрисовке компонента после загрузки запроса */
  useEffect(() => {
    if (availableUsers.includes(user.professionID)) dispatch(getAllActPublicationCases());
    return () => {
      dispatch(resetAllActPublicationCases());
    };
    // eslint-disable-next-line
  }, [dispatch]);

  if (availableUsers.includes(user.professionID)) {
    return (
      <WidgetRowCounter
        isLoading={nopublactsisLoading.toString() === 'true'}
        rows={nopublactsall ?? []}
        color="indigo"
        link={PATH_CASE.publication.neededPublicationAll.client}
        error={nopublactserror}
        title="подлежит публикации"
        counter={{
          single: 'Акт',
          multi: 'Акта',
          count: 'Актов',
        }}
      />
    );
  }
  return null;
};

NoPublicatedActsAll.propTypes = {
  user: PropTypes.object.isRequired,
};

export default NoPublicatedActsAll;
