import React from "react";
import PropTypes from "prop-types";
import WidgetRowCounter from "../../../../components/WidgetRowCounter";

const CasesOverPeriodWidget = ({ rows, isLoading, error }) =>
    <WidgetRowCounter isLoading={isLoading} rows={rows} color="red" error={error} title='с нарушением срока' counter={{
        single: "Дело",
        multi: "Дела",
        count: "Дел"
    }} />

CasesOverPeriodWidget.propTypes = {
  rows: PropTypes.array.isRequired,
  isLoading: PropTypes.string.isRequired,
  error: PropTypes.string
};

export default CasesOverPeriodWidget;
