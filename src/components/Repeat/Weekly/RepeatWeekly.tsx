import React from "react";
import { toPairs } from "lodash";
import numericalFieldHandler from "../../../utils/numericalFieldHandler";
import translateLabel from "../../../utils/translateLabel";
import { RepeatWeeklyProps } from "./RepeatWeekly.types";

const RepeatWeekly = ({ id, weekly: { interval, days, options }, handleChange, translations }: RepeatWeeklyProps) => {
  let daysArray = toPairs(days);
  if (options.weekStartsOnSunday) {
    daysArray = daysArray.slice(-1).concat(daysArray.slice(0, -1));
  }

  return (
    <div className="px-0 d-grid gap-2">
      <div className="form-group row d-flex align-items-sm-center">
        <div className="col-sm-1 offset-sm-2">{translateLabel(translations, "repeat.weekly.every")}</div>
        <div className="col-sm-3">
          <input
            id={`${id}-interval`}
            name="repeat.weekly.interval"
            aria-label="Repeat weekly interval"
            className="form-control"
            value={interval}
            onChange={numericalFieldHandler(handleChange)}
          />
        </div>
        <div className="col-sm-1">{translateLabel(translations, "repeat.weekly.weeks")}</div>
      </div>

      <div className="form-group row">
        <div className="col-sm-2"></div>
        <div className="col-sm-10 btn-group btn-group-toggle">
          {daysArray.map(([dayName, isDayActive]) => (
            <label
              htmlFor={`${id}-${dayName}`}
              key={dayName}
              className={`btn btn-primary ${isDayActive ? "active" : ""}`}
            >
              <input
                hidden
                type="checkbox"
                id={`${id}-${dayName}`}
                name={`repeat.weekly.days[${dayName}]`}
                className="form-control"
                checked={isDayActive}
                onChange={(event) => {
                  const editedEvent = {
                    ...event,
                    target: {
                      ...event.target,
                      value: !isDayActive,
                      name: event.target.name,
                    },
                  };

                  handleChange(editedEvent);
                }}
              />
              {translateLabel(translations, `days_short.${dayName.toLowerCase()}`)}
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RepeatWeekly;
