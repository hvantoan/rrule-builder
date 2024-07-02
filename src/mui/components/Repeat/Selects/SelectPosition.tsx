import React from "react";

import Select from "@mui/material/Select";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import { AllRepeatDetails, OnThe } from "../Repeat.types";
import translateLabel from "../../../utils/translateLabel";

interface SelectPositionProps {
  value: AllRepeatDetails;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
  disabled: boolean;
  dense: boolean;
}
const sxMinWidth = { minWidth: 150 };

// TODO should there be a max number of positions? Change to AutoComplete from Select?
const SelectPosition = ({ value, onChange, disabled, translation, dense }: SelectPositionProps) => (
  <FormControl fullWidth>
    <InputLabel id="select-month-label" disabled={disabled} shrink={!disabled}>
      {translateLabel(translation, "repeat.selectPos")}
    </InputLabel>
    <Select
      sx={sxMinWidth}
      size={dense ? "small" : "medium"}
      disabled={disabled}
      onChange={(e) => {
        const currentVal = e.target.value as number[];
        onChange({ ...value, bySetPos: currentVal });
      }}
      value={value.bySetPos}
      multiple
      labelId="select-pos-label"
      label={translateLabel("translation", "repeat.selectPos")}
    >
      {Object.keys(OnThe).map((key) => (
        <MenuItem key={key} value={parseInt(OnThe[key as keyof typeof OnThe], 10)}>
          {translateLabel(translation, "repeat.order." + OnThe[key as keyof typeof OnThe])}
        </MenuItem>
      ))}
    </Select>
  </FormControl>
);

export default SelectPosition;
