import React from "react";
import { AllRepeatDetails } from "../Repeat.types";
interface SelectMonthProps {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
    disabled: boolean;
}
declare const SelectMonth: ({ value, onChange, disabled, translation }: SelectMonthProps) => React.JSX.Element;
export default SelectMonth;
