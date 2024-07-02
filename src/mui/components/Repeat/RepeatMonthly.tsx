import React, { useState } from "react";
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
import { Col, Row, Stack } from "react-bootstrap";

interface RepeatMonthlyProps {
  value: AllRepeatDetails;
  dense: boolean;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
}

const RepeatMonthly = ({ value, onChange, translation, dense }: RepeatMonthlyProps) => {
  const maxDaysInMonth = 31;
  const [onRadio, setOnRadio] = useState<MonthBy>(MonthBy.BYMONTHDAY);
  const disabledOnBYSETPOS = onRadio === MonthBy.BYMONTHDAY;
  const disabledOnBYMONTHDAY = onRadio === MonthBy.BYSETPOS;

  return (
    <Stack gap={2}>
      <IntervalTextInput dense={dense} translation={translation} value={value} onChange={onChange} unit="months" />
      <Row sm={12} md={12}>
        <RadioGroup
          name="monthly"
          value={onRadio}
          onChange={(e) => setOnRadio(e.target.value as MonthBy)}
          sx={{ width: "100%" }}
        >
          <Stack gap={2}>
            {/* ON DAY SECTION */}
            <Row>
              <Col sm={12} md={2}>
                <FormControlLabel
                  value={MonthBy.BYMONTHDAY}
                  control={<Radio />}
                  label={
                    <Typography sx={{ color: disabledOnBYMONTHDAY ? "text.disabled" : "text.primary" }}>
                      {translateLabel(translation, "repeat.on_day")}
                    </Typography>
                  }
                  sx={{ width: "100%" }}
                />
              </Col>
              <Col sm={12} md={4} className="pe-0">
                <SelectDayCalendar
                  dense={dense}
                  translation={translation}
                  value={value}
                  onChange={onChange}
                  maxDaysInMonth={maxDaysInMonth}
                  disabled={disabledOnBYMONTHDAY}
                />
              </Col>
            </Row>
            {/* ON THE SECTION */}
            <Row>
              <Col sm={12} md={2}>
                <FormControlLabel
                  value={MonthBy.BYSETPOS}
                  control={<Radio />}
                  label={
                    <Typography sx={{ color: disabledOnBYSETPOS ? "text.disabled" : "text.primary" }}>
                      {translateLabel(translation, "repeat.on_the")}
                    </Typography>
                  }
                />
              </Col>
              <Col sm={12} md={4} className="pe-0">
                <SelectPosition
                  dense={dense}
                  translation={translation}
                  value={value}
                  onChange={onChange}
                  disabled={disabledOnBYSETPOS}
                />
              </Col>
              <Col sm={12} md={4}>
                <SelectDayWeek
                  dense={dense}
                  translation={translation}
                  value={value}
                  onChange={onChange}
                  disabled={disabledOnBYSETPOS}
                />
              </Col>
            </Row>
          </Stack>
        </RadioGroup>
      </Row>
    </Stack>
  );
};
export default RepeatMonthly;
