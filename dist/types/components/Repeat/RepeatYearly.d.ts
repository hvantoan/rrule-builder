import React from "react";
import { AllRepeatDetails } from "./Repeat.types";
interface RepeatYearlyProps {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
    enableYearlyInterval?: boolean;
    dense: boolean;
}
declare const RepeatYearly: ({ value, onChange, enableYearlyInterval, translation, dense }: RepeatYearlyProps) => React.JSX.Element;
export default RepeatYearly;
