import React from "react";
import moment from "moment";
import { range } from "lodash";

import numericalFieldHandler from "../../../utils/numericalFieldHandler";
import { MONTHS } from "../../../constants/index";
import translateLabel from "../../../utils/translateLabel";
import { RepeatYearlyOnProps } from "./On.types";

const RepeatYearlyOn = ({ id, mode, on, hasMoreModes, handleChange, translations }: RepeatYearlyOnProps) => {
  const daysInMonth = moment(on.month, "MMM").daysInMonth();
  const isActive = mode === "on";

  return (
    <div className={`form-group row d-flex align-items-sm-center ${!isActive && "opacity-50"}`}>
      <div className="col-sm-1 offset-sm-2">
        {hasMoreModes && (
          <input
            id={id}
            type="radio"
            name="repeat.yearly.mode"
            aria-label="Repeat yearly on"
            value="on"
            checked={isActive}
            onChange={handleChange}
          />
        )}
      </div>

      <div className="col-sm-1">{translateLabel(translations, "repeat.yearly.on")}</div>

      <div className="col-sm-2">
        <select
          id={`${id}-month`}
          name="repeat.yearly.on.month"
          aria-label="Repeat yearly on month"
          className="form-control"
          value={on.month}
          disabled={!isActive}
          onChange={handleChange}
        >
          {MONTHS.map((month) => (
            <option key={month} value={month}>
              {translateLabel(translations, `months.${month.toLowerCase()}`)}
            </option>
          ))}
        </select>
      </div>

      <div className="col-sm-2">
        <select
          id={`${id}-day`}
          name="repeat.yearly.on.day"
          aria-label="Repeat yearly on a day"
          className="form-control"
          value={on.day}
          disabled={!isActive}
          onChange={numericalFieldHandler(handleChange)}
        >
          {range(0, daysInMonth).map((i) => (
            <option key={i} value={i + 1}>
              {i + 1}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default RepeatYearlyOn;
