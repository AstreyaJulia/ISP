import React from 'react';
import PropTypes from "prop-types";
import WidgetRowCounter from "../../../../components/WidgetRowCounter";
import CasesOverPeriodWidget from "../CasesOverPeriodWidget";

export const NoPublicatedActs = ({ rows, isLoading, error }) =>
    <WidgetRowCounter isLoading={isLoading} rows={rows} color="indigo" error={error} title='подлежит публикации' counter={{
        single: "Акт",
        multi: "Акта",
        count: "Акт"
    }} />

NoPublicatedActs.propTypes = {
    rows: PropTypes.array.isRequired,
    isLoading: PropTypes.string.isRequired,
    error: PropTypes.string
};
