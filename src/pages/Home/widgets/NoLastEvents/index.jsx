import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import WidgetRowCounter from '../../../../components/WidgetRowCounter';
import {useDispatch, useSelector} from '../../../../store';
import {getJudgeNoLastEventsCases, resetJudgeNoLastEventsCases} from '../../../../store/slices/cases/nolastevents';

const NoLastEvents = ({user}) => {
    /** Должности, которым доступна отрисовка */
    const availableUsers = [1, 2, 3, 9];
    /* [
        {id: 1, profession: 'Председатель', group: 24},
        {id: 2, profession: 'Заместитель председателя', group: 24},
        {id: 3, profession: 'Судья', group: 24},
        {id: 9, profession: 'Секретарь судебного заседания', group: 26,}
      ] */

    const dispatch = useDispatch();

    /** Стейты данных */
    const {nolastevents, nolasteventsisLoading, nolasteventserror} = useSelector((state) => state.nolastevents);

    /** Обновление данных при отрисовке компонента после загрузки запроса */
    useEffect(() => {
        if (availableUsers.includes(user.professionID)) dispatch(getJudgeNoLastEventsCases());
        return () => {
            dispatch(resetJudgeNoLastEventsCases());
        };
        // eslint-disable-next-line
    }, [dispatch]);

    if (availableUsers.includes(user.professionID)) {
        return (
            <WidgetRowCounter
                isLoading={nolasteventsisLoading}
                rows={nolastevents}
                color="yellow"
                link="/no-last-events"
                error={nolasteventserror}
                title="нет движения более 1 дня"
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

NoLastEvents.propTypes = {
    user: PropTypes.object.isRequired,
};

export default NoLastEvents;
