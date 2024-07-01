import React from "react";
import { DateTime } from "luxon";
import { Options } from "rrule";
import { Theme } from "@mui/material";
interface RRuleBuilderProps {
    datePickerInitialDate?: DateTime;
    onChange?: (rruleString: string) => void;
    rruleOptions?: Options;
    rruleString?: string;
    dense?: boolean;
    enableYearlyInterval?: boolean;
    theme?: Theme;
    hideStart?: boolean;
    hideEnd?: boolean;
    translation?: any;
}
declare const RRuleBuilder: ({ datePickerInitialDate, onChange, rruleOptions, rruleString, dense, enableYearlyInterval, hideStart, hideEnd, translation, }: RRuleBuilderProps) => React.JSX.Element;
export default RRuleBuilder;
