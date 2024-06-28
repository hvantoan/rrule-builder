import React from "react";
import { AllRepeatDetails } from "./Repeat.types";
interface RepeatMonthlyProps {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
}
declare const RepeatMonthly: ({ value, onChange, translation }: RepeatMonthlyProps) => React.JSX.Element;
export default RepeatMonthly;
