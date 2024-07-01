import React from "react";
import { AllRepeatDetails } from "./Repeat.types";
interface RepeatHourlyProps {
    value: AllRepeatDetails;
    dense: boolean;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
}
declare const RepeatHourly: ({ value, onChange, translation, dense }: RepeatHourlyProps) => React.JSX.Element;
export default RepeatHourly;
