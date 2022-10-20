import React from "react";
import PropTypes from "prop-types";
import WidgetRowCounter from "../../../../components/WidgetRowCounter";

export const NoPublicatedActs = ({ rows, isLoading, error, link }) =>
  <WidgetRowCounter isLoading={isLoading} rows={rows} color="indigo" link={link} error={error}
                    title="подлежит публикации" counter={{
    single: "Акт",
    multi: "Акта",
    count: "Акт"
  }} />;

NoPublicatedActs.propTypes = {
  rows: PropTypes.array.isRequired,
  isLoading: PropTypes.string.isRequired,
  error: PropTypes.string,
  link: PropTypes.string.isRequired
};
