import React from "react";

import { AllRepeatDetails } from "./Repeat.types";
import IntervalTextInput from "./IntervalTextInput";

interface RepeatHourlyProps {
  value: AllRepeatDetails;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
}

const RepeatHourly = ({ value, onChange, translation }: RepeatHourlyProps) => (
  <IntervalTextInput translation={translation} value={value} onChange={onChange} unit="hours" />
);

export default RepeatHourly;
