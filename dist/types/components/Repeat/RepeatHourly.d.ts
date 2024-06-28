import React from "react";
import { AllRepeatDetails } from "./Repeat.types";
interface RepeatHourlyProps {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
}
declare const RepeatHourly: ({ value, onChange, translation }: RepeatHourlyProps) => React.JSX.Element;
export default RepeatHourly;
