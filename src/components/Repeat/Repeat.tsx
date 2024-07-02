import React from "react";
import RepeatYearly from "./Yearly/RepeatYearly";
import RepeatMonthly from "./Monthly/RepeatMonthly";
import RepeatWeekly from "./Weekly/RepeatWeekly";
import RepeatDaily from "./Daily/RepeatDaily";
import RepeatHourly from "./Hourly/RepeatHourly";
import translateLabel from "../../utils/translateLabel";
import { Frequency, RepeatProps } from "./Repeat.types";

const Repeat = ({
  id,
  repeat: { frequency, yearly, monthly, weekly, daily, hourly, options },
  handleChange,
  translations,
}: RepeatProps) => {
  const isOptionAvailable = (option: Frequency) => !options.frequency || options.frequency.indexOf(option) !== -1;
  const isOptionSelected = (option: Frequency) => frequency === option;

  return (
    <div className="px-3 d-grid gap-2">
      <div className="form-group row">
        <div className="col-sm-2 text-sm-right">
          <label htmlFor={`${id}-frequency`} className="col-form-label">
            <strong>{translateLabel(translations, "repeat.label")}</strong>
          </label>
        </div>
        <div className="col-sm-6">
          <select
            name="repeat.frequency"
            id={`${id}-frequency`}
            className="form-control"
            value={frequency}
            onChange={handleChange}
          >
            {isOptionAvailable("Yearly") && (
              <option value="Yearly">{translateLabel(translations, "repeat.yearly.label")}</option>
            )}
            {isOptionAvailable("Monthly") && (
              <option value="Monthly">{translateLabel(translations, "repeat.monthly.label")}</option>
            )}
            {isOptionAvailable("Weekly") && (
              <option value="Weekly">{translateLabel(translations, "repeat.weekly.label")}</option>
            )}
            {isOptionAvailable("Daily") && (
              <option value="Daily">{translateLabel(translations, "repeat.daily.label")}</option>
            )}
            {isOptionAvailable("Hourly") && (
              <option value="Hourly">{translateLabel(translations, "repeat.hourly.label")}</option>
            )}
          </select>
        </div>
      </div>

      {isOptionSelected("Yearly") && (
        <RepeatYearly id={`${id}-yearly`} yearly={yearly} handleChange={handleChange} translations={translations} />
      )}
      {isOptionSelected("Monthly") && (
        <RepeatMonthly id={`${id}-monthly`} monthly={monthly} handleChange={handleChange} translations={translations} />
      )}
      {isOptionSelected("Weekly") && (
        <RepeatWeekly id={`${id}-weekly`} weekly={weekly} handleChange={handleChange} translations={translations} />
      )}
      {isOptionSelected("Daily") && (
        <RepeatDaily id={`${id}-daily`} daily={daily} handleChange={handleChange} translations={translations} />
      )}
      {isOptionSelected("Hourly") && (
        <RepeatHourly id={`${id}-hourly`} hourly={hourly} handleChange={handleChange} translations={translations} />
      )}
    </div>
  );
};

export default Repeat;
