import React, { useEffect } from "react";
import PropTypes from "prop-types";
import BasicPage from "../pagesLayouts/BasicPage";
import PageHeader from "../../components/PageHeader";
import PublicationControl from "../../components/DataTable/PublicationControl";
import { useDispatch, useSelector } from "../../store";
import { getAllActPublicationCases, getJudgeActPublicationCases } from "../../store/slices/cases/actpublication";

const Publication = ({ all }) => {
  const breadcrumbs = [{ name: "Публикация судебных актов", href: "", current: true }];

  const dispatch = useDispatch();

  const { nopublacts, nopublactsall, nopublactsisLoading } = useSelector((state) => state.actpublication);

  useEffect(() => {
    dispatch(all === "true" ? getAllActPublicationCases() : getJudgeActPublicationCases());
    // eslint-disable-next-line
  }, [dispatch]);

  return (
    <BasicPage title="Публикация судебных актов" className="main-content max-w-6xl mx-auto px-4">
      <PageHeader pages={breadcrumbs} header="Публикация судебных актов" />
      <PublicationControl data={all === "true" ? nopublactsall : nopublacts ?? []} isLoading={nopublactsisLoading}
                          all={all} />
    </BasicPage>
  );
};

Publication.propTypes = {
  all: PropTypes.string.isRequired
};

export default Publication;
