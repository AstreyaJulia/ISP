import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BasicPage from "../../pagesLayouts/BasicPage";
import PageHeader from "../../../components/PageHeader";
import CasesOverPeriod from "../../../components/DataTable/CasesOverPeriod";
import { useDispatch, useSelector } from "../../../store";
import { getAllOverPeriodCases, getJudgeOverPeriodCases } from "../../../store/slices/cases/overperiod";

const Finished = ({ all }) => {

  const dispatch = useDispatch();

  const { overperiodcases, overperiodcasesall, overperiodisLoading } = useSelector((state) => state.overperiod);

  useEffect(() => {
    dispatch(all === "true" ? getAllOverPeriodCases() : getJudgeOverPeriodCases());
    // eslint-disable-next-line
  }, [dispatch]);

  const breadcrumbs = [{ name: "Делопроизводство", href: "", current: false },
    { name: "Дела, рассмотренные свыше срока", href: "", current: true }];

  return (
    <BasicPage title="Дела, рассмотренные свыше срока" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Дела, рассмотренные свыше срока" />
      <CasesOverPeriod data={all === "true" ? overperiodcasesall : overperiodcases ?? []}
                       isLoading={overperiodisLoading} />
    </BasicPage>
  );
};

Finished.propTypes = {
  all: PropTypes.string.isRequired
};

export default Finished;
