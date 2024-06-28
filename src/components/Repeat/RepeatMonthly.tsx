import React, { useState } from "react";

import Stack from "@mui/material/Stack";
import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

import { MonthBy, AllRepeatDetails } from "./Repeat.types";
import SelectDayWeek from "./Selects/SelectDayWeek";
import SelectPosition from "./Selects/SelectPosition";
import SelectDayCalendar from "./Selects/SelectDayCalendar";
import IntervalTextInput from "./IntervalTextInput";
import translateLabel from "../../utils/translateLabel";
import { Grid } from "@mui/material";

interface RepeatMonthlyProps {
  value: AllRepeatDetails;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
}

const RepeatMonthly = ({ value, onChange, translation }: RepeatMonthlyProps) => {
  const maxDaysInMonth = 31;
  const [onRadio, setOnRadio] = useState<MonthBy>(MonthBy.BYMONTHDAY);
  const disabledOnBYSETPOS = onRadio === MonthBy.BYMONTHDAY;
  const disabledOnBYMONTHDAY = onRadio === MonthBy.BYSETPOS;

  return (
    <Stack direction="column" spacing={2} alignItems="flex-start" width="100%">
      <IntervalTextInput translation={translation} value={value} onChange={onChange} unit="months" />
      <RadioGroup
        name="monthly"
        value={onRadio}
        onChange={(e) => setOnRadio(e.target.value as MonthBy)}
        sx={{ width: "100%" }}
      >
        <Grid container rowGap={2}>
          {/* ON DAY SECTION */}
          <Grid container>
            <Grid sm={12} md={4}>
              <FormControlLabel
                value={MonthBy.BYMONTHDAY}
                control={<Radio />}
                label={
                  <Typography sx={{ color: disabledOnBYMONTHDAY ? "text.disabled" : "text.primary", paddingLeft: 2 }}>
                    {translateLabel(translation, "repeat.on_day")}
                  </Typography>
                }
                sx={{ width: "100%" }}
              />
            </Grid>
            <Grid sm={12} md={8}>
              <SelectDayCalendar
                translation={translation}
                value={value}
                onChange={onChange}
                maxDaysInMonth={maxDaysInMonth}
                disabled={disabledOnBYMONTHDAY}
              />
            </Grid>
          </Grid>
          {/* ON THE SECTION */}
          <Grid container>
            <Grid sm={12} md={4}>
              <FormControlLabel
                value={MonthBy.BYSETPOS}
                control={<Radio />}
                label={
                  <Typography sx={{ color: disabledOnBYSETPOS ? "text.disabled" : "text.primary", paddingLeft: 2 }}>
                    {translateLabel(translation, "repeat.on_the")}
                  </Typography>
                }
              />
            </Grid>
            <Grid sm={12} md={4}>
              <SelectPosition
                translation={translation}
                value={value}
                onChange={onChange}
                disabled={disabledOnBYSETPOS}
              />
            </Grid>
            <Grid sm={12} md={4} sx={{ paddingLeft: 2 }}>
              <SelectDayWeek
                translation={translation}
                value={value}
                onChange={onChange}
                disabled={disabledOnBYSETPOS}
              />
            </Grid>
          </Grid>
        </Grid>
      </RadioGroup>
    </Stack>
  );
};
export default RepeatMonthly;
