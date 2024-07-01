import React from "react";
import { AllRepeatDetails } from "./Repeat.types";
type IntervalTextInputProps = {
    value: AllRepeatDetails;
    translation: any;
    dense: boolean;
    onChange: (value: AllRepeatDetails) => void;
    unit: string;
};
declare const IntervalTextInput: ({ value, onChange, unit, translation, dense }: IntervalTextInputProps) => React.JSX.Element;
export default IntervalTextInput;
