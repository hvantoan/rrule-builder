import React, { useCallback, useMemo, useState } from "react";

import Radio from "@mui/material/Radio";
import Typography from "@mui/material/Typography";
import RadioGroup from "@mui/material/RadioGroup";

import { DateTime } from "luxon";

import { YearlyBy, AllRepeatDetails } from "./Repeat.types";
import SelectDayWeek from "./Selects/SelectDayWeek";
import SelectPosition from "./Selects/SelectPosition";
import SelectDayCalendar from "./Selects/SelectDayCalendar";
import IntervalTextInput from "./IntervalTextInput";
import SelectMonth from "./Selects/SelectMonth";
import { Col, Row, Stack } from "react-bootstrap";
import translateLabel from "./../../utils/translateLabel";

interface RepeatYearlyProps {
  value: AllRepeatDetails;
  translation: any;
  onChange: (value: AllRepeatDetails) => void;
  enableYearlyInterval?: boolean;
}

const RepeatYearly = ({ value, onChange, enableYearlyInterval, translation }: RepeatYearlyProps) => {
  const maxDaysInMonth = useMemo(() => {
    if (value.byMonth) {
      return DateTime.fromObject({ month: value.byMonth[0] }).daysInMonth || 31;
    }
    return 31;
  }, [value]);
  const [onRadio, setOnRadio] = useState<YearlyBy>(YearlyBy.BYMONTH);
  const disabledOnBYSETPOS = onRadio === YearlyBy.BYMONTH;
  const disabledOnBYMONTH = onRadio === YearlyBy.BYSETPOS;

  const handleRadioChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const radioVal = e.target.value as YearlyBy;
      if (radioVal === YearlyBy.BYMONTH) {
        onChange({
          ...value,
          bySetPos: [],
          byDay: [],
          byMonth: [],
        });
      } else {
        onChange({ ...value, byMonthDay: [], byMonth: [] });
      }

      setOnRadio(radioVal);
    },
    [onChange, value]
  );

  return (
    <Stack gap={2}>
      {enableYearlyInterval && (
        <IntervalTextInput translation={translation} value={value} onChange={onChange} unit="years" />
      )}
      <Row md={12}>
        <RadioGroup name="Yearly" value={onRadio} onChange={handleRadioChange}>
          <Stack gap={2}>
            <Row>
              <Col md="2">
                <Stack direction="horizontal">
                  <Radio value={YearlyBy.BYMONTH} name="day" />
                  <Typography sx={{ color: disabledOnBYMONTH ? "text.disabled" : "text.primary" }}>
                    {translateLabel(translation, "repeat.on")}
                  </Typography>
                </Stack>
              </Col>
              <Col>
                <SelectMonth translation={translation} value={value} onChange={onChange} disabled={disabledOnBYMONTH} />
              </Col>
              <Col>
                <SelectDayCalendar
                  translation={translation}
                  maxDaysInMonth={maxDaysInMonth}
                  value={value}
                  onChange={onChange}
                  disabled={disabledOnBYMONTH}
                />
              </Col>
            </Row>
            <Row className="d-flex justify-center align-items-center">
              <Col md="2">
                <Stack direction="horizontal">
                  <Radio value={YearlyBy.BYSETPOS} name="day" />
                  <Typography sx={{ color: disabledOnBYSETPOS ? "text.disabled" : "text.primary" }}>
                    {translateLabel(translation, "repeat.on_the")}
                  </Typography>
                </Stack>
              </Col>
              <Col md="3">
                <SelectPosition
                  translation={translation}
                  value={value}
                  onChange={onChange}
                  disabled={disabledOnBYSETPOS}
                />
              </Col>
              <Col md="3">
                <SelectDayWeek
                  translation={translation}
                  value={value}
                  onChange={onChange}
                  disabled={disabledOnBYSETPOS}
                />
              </Col>
              <Col>
                <Typography sx={{ color: disabledOnBYSETPOS ? "text.disabled" : "text.primary" }}>
                  {translateLabel(translation, "repeat.of")}
                </Typography>
              </Col>
              <Col md="3">
                <SelectMonth
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
export default RepeatYearly;
