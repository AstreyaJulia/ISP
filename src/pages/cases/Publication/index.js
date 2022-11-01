import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import BasicPage from '../../pagesLayouts/BasicPage';
import PageHeader from '../../../components/PageHeader';
import PublicationControl from '../../../components/DataTable/PublicationControl';
import {useDispatch, useSelector} from '../../../store';
import {getAllActPublicationCases, getJudgeActPublicationCases} from '../../../store/slices/cases/actpublication';

const Publication = ({all}) => {

    const breadcrumbs = [{name: 'Делопроизводство', href: '', current: false}, {
        name: 'Публикация судебных актов (по судье)',
        href: '',
        current: true
    }];
    const breadcrumbsAll = [{name: 'Качество', href: '/grade', current: false}, {
        name: 'Публикация судебных актов (общий список)',
        href: '',
        current: true
    }];

    const dispatch = useDispatch();

    const {nopublacts, nopublactsall, nopublactsisLoading} = useSelector((state) => state.actpublication);

    useEffect(() => {
        dispatch(all === 'true' ? getAllActPublicationCases() : getJudgeActPublicationCases());
        // eslint-disable-next-line
    }, [dispatch]);

    return (
        <BasicPage title="Публикация судебных актов" className="main-content max-w-6xl mx-auto px-5">
            <PageHeader pages={all === 'true' ? breadcrumbsAll : breadcrumbs} header={all === 'true' ? 'Публикация судебных актов (общий список)' : 'Публикация судебных актов (по судье)'}/>
            <PublicationControl
                data={all === 'true' ? nopublactsall : nopublacts ?? []}
                isLoading={nopublactsisLoading}
                all={all}
            />
        </BasicPage>
    );
};

Publication.propTypes = {
    all: PropTypes.string.isRequired,
};

export default Publication;
