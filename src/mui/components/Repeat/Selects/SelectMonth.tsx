import React from "react";

import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import { AllRepeatDetails, Months } from "../Repeat.types";
import { monthShortTextMapping } from "../utils";
import translateLabel from "../../../utils/translateLabel";

interface SelectMonthProps {
  value: AllRepeatDetails;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
  disabled: boolean;
  dense: boolean;
}
const sxMinWidth = { minWidth: 120 };

const SelectMonth = ({ value, onChange, disabled, translation, dense }: SelectMonthProps) => {
  const displayValue = disabled ? null : value?.byMonth?.[0] ?? null;

  return (
    <FormControl fullWidth>
      <InputLabel id="select-month-label" disabled={disabled} shrink={!disabled && !!displayValue}>
        {translateLabel(translation, "repeat.selectMonth")}
      </InputLabel>
      <Select
        sx={sxMinWidth}
        size={dense ? "small" : "medium"}
        disabled={disabled}
        onChange={(e) => onChange({ ...value, byMonth: [parseInt(e.target.value as string, 10)] })}
        value={displayValue}
        labelId="select-month-label"
        label={!disabled && !!displayValue ? translateLabel(translation, "repeat.selectMonth") : undefined}
      >
        {Object.values(Months).map((key) => (
          <MenuItem key={key} value={key}>
            {translateLabel(translation, "months." + monthShortTextMapping[key].toLocaleLowerCase())}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

export default SelectMonth;
