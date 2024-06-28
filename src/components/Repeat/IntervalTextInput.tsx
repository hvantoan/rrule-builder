import React from "react";
import Stack from "@mui/material/Stack";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AllRepeatDetails } from "./Repeat.types";
import { baseRepeatDetails } from "../../store/builderStore";
import translateLabel from "../../utils/translateLabel";

type IntervalTextInputProps = {
  value: AllRepeatDetails;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
  unit: string;
};

const IntervalTextInput = ({ value, onChange, unit, translation }: IntervalTextInputProps) => (
  <Stack direction="row" spacing={2} alignItems="center">
    <Typography>{translateLabel(translation, "repeat.every")}</Typography>
    <TextField
      id="outlined-basic"
      label=""
      variant="outlined"
      type="number"
      value={value.interval}
      onChange={(e) => onChange({ ...baseRepeatDetails, interval: parseInt(e.target.value, 10) })}
    />
    <Typography>{translateLabel(translation, `repeat.${unit}`)}</Typography>
  </Stack>
);

export default IntervalTextInput;
