import React from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { AllRepeatDetails } from "../Repeat.types";
import translateLabel from "../../../utils/translateLabel";

interface SelectDayCalendarProps {
  value: AllRepeatDetails;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
  maxDaysInMonth: number;
  disabled: boolean;
  dense: boolean;
}
const sxMinWidth = { minWidth: 120 };

const SelectDayCalendar = ({
  value,
  onChange,
  maxDaysInMonth,
  disabled,
  translation,
  dense,
}: SelectDayCalendarProps) => (
  <FormControl fullWidth>
    <InputLabel id="select-day-cal-label" disabled={disabled}>
      {translateLabel(translation, "repeat.selectDay")}
    </InputLabel>
    <Select
      size={dense ? "small" : "medium"}
      sx={sxMinWidth}
      disabled={disabled}
      onChange={(e) => onChange({ ...value, byMonthDay: [parseInt(e.target.value as string, 10)] })}
      value={value.byMonthDay}
      labelId="select-day-cal-label"
      label={translateLabel(translation, "repeat.selectDay")}
    >
      {Array.from({ length: maxDaysInMonth }, (_, i) => i + 1).map((day) => (
        <MenuItem key={day} value={day}>
          {day}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectDayCalendar;
