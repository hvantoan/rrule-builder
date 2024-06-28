import React from "react";
import { AllRepeatDetails } from "./Repeat.types";
interface RepeatWeeklyProps {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
}
declare const RepeatWeekly: ({ value, onChange, translation }: RepeatWeeklyProps) => React.JSX.Element;
export default RepeatWeekly;
