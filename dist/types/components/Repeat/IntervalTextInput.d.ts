import React from "react";
import { AllRepeatDetails } from "./Repeat.types";
type IntervalTextInputProps = {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
    unit: string;
};
declare const IntervalTextInput: ({ value, onChange, unit, translation }: IntervalTextInputProps) => React.JSX.Element;
export default IntervalTextInput;
