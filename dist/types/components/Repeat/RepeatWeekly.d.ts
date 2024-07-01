import React from "react";
import { AllRepeatDetails } from "./Repeat.types";
interface RepeatWeeklyProps {
    value: AllRepeatDetails;
    dense: boolean;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
}
declare const RepeatWeekly: ({ value, onChange, translation, dense }: RepeatWeeklyProps) => React.JSX.Element;
export default RepeatWeekly;
