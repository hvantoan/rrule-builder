import React from "react";
import { AllRepeatDetails } from "./Repeat.types";
interface RepeatDailyProps {
    value: AllRepeatDetails;
    translation: any;
    onChange: (value: AllRepeatDetails) => void;
}
declare const RepeatDaily: ({ value, onChange, translation }: RepeatDailyProps) => React.JSX.Element;
export default RepeatDaily;
