import React from "react";
import EndAfter from "./After";
import EndOnDate from "./OnDate";

import translateLabel from "../../utils/translateLabel";
import { EndMode, EndProps } from "./End.types";

export const End = ({ id, end, handleChange, translations }: EndProps) => {
  const isOptionAvailable = (option: EndMode) => !end.options.modes || end.options.modes.indexOf(option) !== -1;
  const isOptionSelected = (option: string) => end.mode === option;
  return (
    <div className="px-3">
      <div className="form-group row pb-3">
        <div className="col-sm-2 text-sm-right">
          <label htmlFor={id} className="col-form-label">
            <strong>{translateLabel(translations, "end.label")}</strong>
          </label>
        </div>
        <div className="col-sm-3">
          <select name="end.mode" id={id} className="form-control" value={end.mode} onChange={handleChange}>
            {isOptionAvailable("Never") && <option value="Never">{translateLabel(translations, "end.never")}</option>}
            {isOptionAvailable("After") && <option value="After">{translateLabel(translations, "end.after")}</option>}
            {isOptionAvailable("On date") && (
              <option value="On date">{translateLabel(translations, "end.on_date")}</option>
            )}
          </select>
        </div>

        {isOptionSelected("After") && (
          <EndAfter id={`${id}-after`} after={end.after} handleChange={handleChange} translations={translations} />
        )}
        {isOptionSelected("On date") && (
          <EndOnDate id={`${id}-onDate`} onDate={end.onDate} handleChange={handleChange} translations={translations} />
        )}
      </div>
    </div>
  );
};

export default End;
