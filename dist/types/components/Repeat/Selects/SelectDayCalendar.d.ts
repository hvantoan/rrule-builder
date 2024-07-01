import React from "react";
import { AllRepeatDetails } from "../Repeat.types";
interface SelectDayCalendarProps {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
    maxDaysInMonth: number;
    disabled: boolean;
    dense: boolean;
}
declare const SelectDayCalendar: ({ value, onChange, maxDaysInMonth, disabled, translation, dense, }: SelectDayCalendarProps) => React.JSX.Element;
export default SelectDayCalendar;
