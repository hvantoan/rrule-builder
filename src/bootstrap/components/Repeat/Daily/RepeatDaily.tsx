import React from "react";
import numericalFieldHandler from "../../../utils/numericalFieldHandler";
import translateLabel from "../../../utils/translateLabel";
import { RepeatDailyProps } from "./RepeatDaily.types";

const RepeatDaily = ({ id, daily: { interval }, handleChange, translations }: RepeatDailyProps) => (
  <div className="form-group row d-flex align-items-sm-center">
    <div className="col-sm-1 offset-sm-2">{translateLabel(translations, "repeat.daily.every")}</div>
    <div className="col-sm-2">
      <input
        id={`${id}-interval`}
        name="repeat.daily.interval"
        aria-label="Repeat daily interval"
        className="form-control"
        value={interval}
        onChange={numericalFieldHandler(handleChange)}
      />
    </div>
    <div className="col-sm-1">{translateLabel(translations, "repeat.daily.days")}</div>
  </div>
);

export default RepeatDaily;
