import React from "react";

import { AllRepeatDetails } from "./Repeat.types";
import IntervalTextInput from "./IntervalTextInput";

interface RepeatHourlyProps {
  value: AllRepeatDetails;
  dense: boolean;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
}

const RepeatHourly = ({ value, onChange, translation, dense }: RepeatHourlyProps) => (
  <IntervalTextInput dense={dense} translation={translation} value={value} onChange={onChange} unit="hours" />
);

export default RepeatHourly;
