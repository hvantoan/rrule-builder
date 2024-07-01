import React from "react";
import { AllRepeatDetails } from "../Repeat.types";
interface SelectDayWeekProps {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
    disabled: boolean;
    dense: boolean;
}
declare const SelectDayWeek: ({ value, onChange, disabled, translation, dense }: SelectDayWeekProps) => React.JSX.Element;
export default SelectDayWeek;
