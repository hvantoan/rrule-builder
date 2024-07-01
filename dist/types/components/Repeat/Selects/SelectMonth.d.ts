import React from "react";
import { AllRepeatDetails } from "../Repeat.types";
interface SelectMonthProps {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
    disabled: boolean;
    dense: boolean;
}
declare const SelectMonth: ({ value, onChange, disabled, translation, dense }: SelectMonthProps) => React.JSX.Element;
export default SelectMonth;
