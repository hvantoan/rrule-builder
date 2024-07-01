import React from "react";
import { AllRepeatDetails } from "../Repeat.types";
interface SelectPositionProps {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
    disabled: boolean;
    dense: boolean;
}
declare const SelectPosition: ({ value, onChange, disabled, translation, dense }: SelectPositionProps) => React.JSX.Element;
export default SelectPosition;
