import React from "react";

import { AllRepeatDetails } from "./Repeat.types";
import IntervalTextInput from "./IntervalTextInput";

interface RepeatDailyProps {
  value: AllRepeatDetails;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
}

const RepeatDaily = ({ value, onChange, translation }: RepeatDailyProps) => (
  <IntervalTextInput translation={translation} value={value} onChange={onChange} unit="days" />
);

export default RepeatDaily;
