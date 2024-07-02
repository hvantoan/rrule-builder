import React from "react";
import RepeatYearlyOn from "./On";
import RepeatYearlyOnThe from "./OnThe";
import { RepeatYearlyMode, RepeatYearlyProps } from "./RepeatYearly.types";

const RepeatYearly = ({ id, yearly: { mode, on, onThe, options }, handleChange, translations }: RepeatYearlyProps) => {
  const isTheOnlyOneMode = (option: RepeatYearlyMode) => options.modes === option;
  const isOptionAvailable = (option: RepeatYearlyMode) => !options.modes || isTheOnlyOneMode(option);
  return (
    <div className="d-grid gap-2">
      {isOptionAvailable("on") && (
        <RepeatYearlyOn
          id={`${id}-on`}
          mode={mode}
          on={on}
          hasMoreModes={!isTheOnlyOneMode("on")}
          handleChange={handleChange}
          translations={translations}
        />
      )}
      {isOptionAvailable("on the") && (
        <RepeatYearlyOnThe
          id={`${id}-onThe`}
          mode={mode}
          onThe={onThe}
          hasMoreModes={!isTheOnlyOneMode("on the")}
          handleChange={handleChange}
          translations={translations}
        />
      )}
    </div>
  );
};

export default RepeatYearly;
