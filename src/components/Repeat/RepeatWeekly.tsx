import React from "react";

import ButtonGroup from "@mui/material/ButtonGroup";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { AllRepeatDetails, Weekday } from "./Repeat.types";
import IntervalTextInput from "./IntervalTextInput";
import translateLabel from "../../utils/translateLabel";

interface RepeatWeeklyProps {
  value: AllRepeatDetails;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
}

const RepeatWeekly = ({ value, onChange, translation }: RepeatWeeklyProps) => (
  <Stack direction="column" spacing={2} alignItems="flex-start" className="pr-2">
    <Stack direction="row" spacing={2} alignItems="center">
      <IntervalTextInput translation={translation} value={value} onChange={onChange} unit="weeks" />
    </Stack>
    <ButtonGroup variant="contained" fullWidth>
      {/* TODO - do this type/iteration better */}
      {Object.keys(Weekday).map((day) => {
        const dayKey = day as Weekday;
        return (
          <Button
            size="small"
            key={dayKey}
            color={value?.byDay?.includes(dayKey) ? "primary" : "inherit"}
            style={{
              width: "calc(100%/7)",
            }}
            onClick={() => {
              let selectedDays = value?.byDay || [];
              if (value?.byDay?.includes(dayKey)) {
                selectedDays = value?.byDay.filter((d) => d !== dayKey);
              } else {
                selectedDays = [...selectedDays, dayKey];
              }
              onChange({
                ...value,
                byDay: selectedDays,
              });
            }}
          >
            {translateLabel(translation, `days_short.` + (dayKey + "").toLowerCase())}
          </Button>
        );
      })}
    </ButtonGroup>
  </Stack>
);
export default RepeatWeekly;
