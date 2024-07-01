import React from "react";
import { AllRepeatDetails } from "./Repeat.types";
interface RepeatMonthlyProps {
    value: AllRepeatDetails;
    dense: boolean;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
}
declare const RepeatMonthly: ({ value, onChange, translation, dense }: RepeatMonthlyProps) => React.JSX.Element;
export default RepeatMonthly;
