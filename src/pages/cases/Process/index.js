import React, { useEffect } from "react";
import BasicPage from "../../pagesLayouts/BasicPage";
import PageHeader from "../../../components/PageHeader";
import Processed from "../../../components/DataTable/Processed";
import { useDispatch, useSelector } from "../../../store";
import { getJudgeProcessedCases, getAllProcessedCases } from "../../../store/slices/cases/processed";

const Process = ({ all }) => {

  const breadcrumbs = [{ name: "Делопроизводство", href: "", current: false },
    { name: "Дела, находящиеся в производстве", href: "", current: true }];

  const dispatch = useDispatch();

  const { processedcases, processedcasesall, processedisLoading } = useSelector((state) => state.processed);

  useEffect(() => {
    dispatch(all === "true" ? getAllProcessedCases() : getJudgeProcessedCases());
    // eslint-disable-next-line
  }, [dispatch]);


  return (
    <BasicPage title="Дела, находящиеся в производстве" className="main-content max-w-6xl mx-auto px-5">
      <PageHeader pages={breadcrumbs} header="Дела, находящиеся в производстве" />
      <Processed data={all === "true" ? processedcasesall : processedcases ?? []} isLoading={processedisLoading} all={all} />
    </BasicPage>
  );
};

export default Process;
