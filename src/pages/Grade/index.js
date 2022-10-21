import React, {useEffect} from "react";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import CasesOverPeriodWidget from "../Home/widgets/CasesOverPeriodWidget";
import {useDispatch, useSelector} from "../../store";
import {getAllOverPeriodCases} from "../../store/slices/cases/overperiod";
import {NoPublicatedActs} from "../Home/widgets/NoPublicatedActs";
import {getAllActPublicationCases} from "../../store/slices/cases/actpublication";
import useAuth from "../../hooks/useAuth";

const Grade = () => {

    /** Состояние пользователя */
    const { user } = useAuth();

    const breadcrumbs = [{name: "Статистика", href: "", current: false},
        {name: "Качество", href: "", current: true}];

    const dispatch = useDispatch();

    const {nopublactsall, nopublactsisLoading, nopublactserror} = useSelector((state) => state.actpublication);

    useEffect(() => {
        dispatch(getAllOverPeriodCases());
        dispatch(getAllActPublicationCases());
    }, [dispatch]);

    return (
        <BasicPage title="Качество" className="main-content max-w-6xl mx-auto px-4">
            <PageHeader pages={breadcrumbs} header="Качество"/>
            <div className="grid grid-cols-3 mt-4 gap-4">
                <div className='flex flex-col gap-4'>
                    <CasesOverPeriodWidget user={user ?? 0}/>
                    <NoPublicatedActs data={nopublactsall} error={nopublactserror} link="/publication-all" isLoading={nopublactsisLoading}/>
                </div>
            </div>
        </BasicPage>
    );
};

export default Grade;
