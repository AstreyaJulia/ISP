import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import WidgetRowCounter from "../../../../components/WidgetRowCounter";

export const NoPublicatedActs = ({ data, isLoading, error, link }) => {

    const [rows, setRows] = useState(data ?? []);

    useEffect(() => {
      setRows(data)
    }, [isLoading]);

  return (
    <WidgetRowCounter isLoading={isLoading} rows={rows} color="indigo" link={link} error={error}
                      title="подлежит публикации" counter={{
      single: "Акт",
      multi: "Акта",
      count: "Акт"
    }} />
  )
}
  ;

NoPublicatedActs.propTypes = {
  data: PropTypes.array.isRequired,
  isLoading: PropTypes.string.isRequired,
  error: PropTypes.string,
  link: PropTypes.string.isRequired
};
