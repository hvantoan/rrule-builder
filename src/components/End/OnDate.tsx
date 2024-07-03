import React from "react";
import moment from "moment";
import DateTime from "react-datetime";
import "moment/min/locales";

import translateLabel from "../../utils/translateLabel";
import { EndOnDateProps } from "./OnDate.types";
import { DATE_TIME_FORMAT } from "../../constants";

const EndOnDate = ({ id, onDate: { date, options }, handleChange, translations }: EndOnDateProps) => {
  const CustomCalendar = options?.calendarComponent;

  const locale = options?.weekStartsOnSunday ? "en-ca" : "en-gb";
  const calendarAttributes = {
    "aria-label": translateLabel(translations, "end.tooltip"),
    value: moment(date).format(options.format),
    dateFormat: options.format,
    locale,
    readOnly: true,
  };

  return (
    <div className="col-6 col-sm-3">
      {CustomCalendar ? (
        <CustomCalendar
          key={`${id}-calendar`}
          {...calendarAttributes}
          onChange={(event: any) => {
            const editedEvent = {
              target: {
                value: event.target.value,
                name: "end.onDate.date",
              },
            };

            handleChange(editedEvent);
          }}
        />
      ) : (
        <DateTime
          {...calendarAttributes}
          inputProps={{
            id: `${id}-datetime`,
            name: "end.onDate.date",
            readOnly: true,
          }}
          locale={translateLabel(translations, "locale")}
          timeFormat={false}
          closeOnSelect
          closeOnClickOutside
          initialViewMode="days"
          onChange={(inputDate) => {
            const editedEvent = {
              target: {
                value: moment(inputDate).format(DATE_TIME_FORMAT),
                name: "end.onDate.date",
              },
            };

            handleChange(editedEvent);
          }}
        />
      )}
    </div>
  );
};

export default EndOnDate;
