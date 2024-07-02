import React from "react";
import { Typography } from "@mui/material";
import TextField from "@mui/material/TextField";
import { AllRepeatDetails } from "./Repeat.types";
import { baseRepeatDetails } from "../../store/builderStore";
import translateLabel from "../../utils/translateLabel";
import { Col, Row } from "react-bootstrap";

type IntervalTextInputProps = {
  value: AllRepeatDetails;
  translation: any;
  dense: boolean;
  onChange: (value: AllRepeatDetails) => void;
  unit: string;
};

const IntervalTextInput = ({ value, onChange, unit, translation, dense }: IntervalTextInputProps) => (
  <Row className="d-flex justify-center align-items-center">
    <Col sm="2" md="2" className="text-left">
      <Typography>{translateLabel(translation, "repeat.every")}</Typography>
    </Col>
    <Col sm="2" md="4" className="pe-0">
      <TextField
        size={dense ? "small" : "medium"}
        fullWidth
        id="outlined-basic"
        label=""
        variant="outlined"
        type="number"
        value={value.interval}
        onChange={(e) => onChange({ ...baseRepeatDetails, interval: parseInt(e.target.value, 10) })}
      />
    </Col>
    <Col>
      <Typography>{translateLabel(translation, `repeat.${unit}`)}</Typography>
    </Col>
  </Row>
);

export default IntervalTextInput;
