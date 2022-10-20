import React from "react";
import PropTypes from "prop-types";
import WidgetRowCounter from "../../../../components/WidgetRowCounter";

const CasesOverPeriodWidget = ({ rows, isLoading, error, link }) =>
    <WidgetRowCounter isLoading={isLoading} rows={rows} color="red" error={error} link={link} title='с нарушением срока' counter={{
        single: "Дело",
        multi: "Дела",
        count: "Дел"
    }} />

CasesOverPeriodWidget.propTypes = {
  rows: PropTypes.array.isRequired,
  isLoading: PropTypes.string.isRequired,
  error: PropTypes.string,
  link: PropTypes.string.isRequired
};

export default CasesOverPeriodWidget;
