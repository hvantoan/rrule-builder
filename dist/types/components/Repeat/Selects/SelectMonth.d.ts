import React from "react";
import { AllRepeatDetails } from "../Repeat.types";
interface SelectMonthProps {
    value: AllRepeatDetails;
    onChange: (value: AllRepeatDetails) => void;
    disabled: boolean;
}
declare const SelectMonth: ({ value, onChange, disabled, }: SelectMonthProps) => React.JSX.Element;
export default SelectMonth;
