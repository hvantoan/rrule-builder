import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useMemo, useCallback, useEffect } from 'react';
import Stack$1 from '@mui/material/Stack';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterLuxon } from '@mui/x-date-pickers/AdapterLuxon';
import { DateTime } from 'luxon';
import { Frequency, RRule } from 'rrule';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { create } from 'zustand';
import * as Yup from 'yup';
import forEach from 'lodash/forEach';
import isFunction from 'lodash/isFunction';
import isPlainObject from 'lodash/isPlainObject';
import get from 'lodash/get';
import { Row, Col, Stack, Card } from 'react-bootstrap';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import Radio from '@mui/material/Radio';
import Typography$1 from '@mui/material/Typography';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import { ThemeProvider } from '@emotion/react';
import { createTheme } from '@mui/material/styles';

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Weekday;
(function (Weekday) {
    Weekday["MO"] = "MO";
    Weekday["TU"] = "TU";
    Weekday["WE"] = "WE";
    Weekday["TH"] = "TH";
    Weekday["FR"] = "FR";
    Weekday["SA"] = "SA";
    Weekday["SU"] = "SU";
})(Weekday || (Weekday = {}));
var Months;
(function (Months) {
    Months["JAN"] = "1";
    Months["FEB"] = "2";
    Months["MAR"] = "3";
    Months["APR"] = "4";
    Months["MAY"] = "5";
    Months["JUN"] = "6";
    Months["JUL"] = "7";
    Months["AUG"] = "8";
    Months["SEP"] = "9";
    Months["OCT"] = "10";
    Months["NOV"] = "11";
    Months["DEC"] = "12";
})(Months || (Months = {}));
var MonthBy;
(function (MonthBy) {
    MonthBy["BYMONTHDAY"] = "BYMONTHDAY";
    MonthBy["BYSETPOS"] = "BYSETPOS";
})(MonthBy || (MonthBy = {}));
var YearlyBy;
(function (YearlyBy) {
    YearlyBy["BYMONTH"] = "BYMONTH";
    YearlyBy["BYSETPOS"] = "BYSETPOS";
})(YearlyBy || (YearlyBy = {}));
var WeekdayExtras;
(function (WeekdayExtras) {
    WeekdayExtras["DAY"] = "DAY";
    WeekdayExtras["WEEKDAY"] = "WEEKDAY";
    WeekdayExtras["WEEKEND"] = "WEEKEND";
})(WeekdayExtras || (WeekdayExtras = {}));
var OnThe;
(function (OnThe) {
    OnThe["FIRST"] = "1";
    OnThe["SECOND"] = "2";
    OnThe["THIRD"] = "3";
    OnThe["FOURTH"] = "4";
    OnThe["LAST"] = "-1";
})(OnThe || (OnThe = {}));
const AllWeekDayOptions = Object.assign(Object.assign({}, Weekday), WeekdayExtras);

// TODO clean up the schemas to match types
const repeatDetailsBaseSchema = Yup.object({
    frequency: Yup.mixed().required("Frequency is required"),
    interval: Yup.number().required(),
});
const yearlyRepeatDetailsSchema = repeatDetailsBaseSchema.shape({
    frequency: Yup.mixed().required(),
    bySetPos: Yup.array().of(Yup.number()).optional(),
    byDay: Yup.array().of(Yup.mixed()).optional(),
    byMonthDay: Yup.array().of(Yup.number()).optional(),
    byMonth: Yup.array().of(Yup.number()).optional(),
    interval: Yup.mixed().optional().notRequired(),
});
const monthlyRepeatDetailsSchema = repeatDetailsBaseSchema.shape({
    frequency: Yup.mixed().required(),
    interval: Yup.number().required(),
    bySetPos: Yup.array().of(Yup.number()).optional(),
    byDay: Yup.array().of(Yup.mixed()).optional(),
    byMonthDay: Yup.array().of(Yup.number()).optional(),
});
const weeklyRepeatDetailsSchema = repeatDetailsBaseSchema.shape({
    frequency: Yup.mixed().required(),
    interval: Yup.number().required(),
    byDay: Yup.array().of(Yup.mixed()).required(),
});
const getValidationSchema = (frequency) => {
    switch (frequency) {
        case Frequency.YEARLY:
            return yearlyRepeatDetailsSchema;
        case Frequency.MONTHLY:
            return monthlyRepeatDetailsSchema;
        case Frequency.WEEKLY:
            return weeklyRepeatDetailsSchema;
        default:
            return repeatDetailsBaseSchema;
    }
};

var EndType;
(function (EndType) {
    EndType["NEVER"] = "never";
    EndType["AFTER"] = "after";
    EndType["ON"] = "on";
})(EndType || (EndType = {}));

const buildRRuleString = (options) => {
    var _a, _b, _c, _d;
    const { frequency, startDate, repeatDetails, endDetails } = options;
    const ruleOptions = {
        byeaster: null,
        byhour: null,
        byminute: null,
        bymonth: null,
        bymonthday: null,
        bynmonthday: null,
        bynweekday: null,
        bysecond: null,
        bysetpos: null,
        byweekday: null,
        byweekno: null,
        byyearday: null,
        count: null,
        interval: 0,
        tzid: null,
        until: null,
        wkst: null,
        freq: frequency,
        dtstart: (_a = startDate === null || startDate === void 0 ? void 0 : startDate.toJSDate()) !== null && _a !== void 0 ? _a : null,
    };
    if (repeatDetails.interval) {
        ruleOptions.interval = repeatDetails.interval;
    }
    if ("byDay" in repeatDetails && repeatDetails.byDay) {
        ruleOptions.byweekday = repeatDetails.byDay.map((day) => RRule[day]);
    }
    if ("byMonthDay" in repeatDetails && repeatDetails.byMonthDay) {
        ruleOptions.bymonthday = repeatDetails.byMonthDay;
    }
    if ("byMonth" in repeatDetails && repeatDetails.byMonth) {
        ruleOptions.bymonth = repeatDetails.byMonth;
    }
    if ("bySetPos" in repeatDetails && repeatDetails.bySetPos) {
        ruleOptions.bysetpos = repeatDetails.bySetPos;
    }
    switch (endDetails.endingType) {
        case EndType.NEVER:
            break;
        case EndType.AFTER:
            ruleOptions.count = (_b = endDetails.occurrences) !== null && _b !== void 0 ? _b : null;
            break;
        case EndType.ON:
            ruleOptions.until = (_d = (_c = endDetails.endDate) === null || _c === void 0 ? void 0 : _c.toJSDate()) !== null && _d !== void 0 ? _d : null;
            break;
    }
    const rrule = new RRule(ruleOptions);
    return rrule.toString();
};

const baseRepeatDetails = {
    interval: 1,
    bySetPos: [],
    byMonth: [],
    byMonthDay: [],
    byDay: [],
};
const initialState = {
    repeatDetails: baseRepeatDetails,
    frequency: Frequency.DAILY,
    startDate: DateTime.now(),
    validationErrors: {},
    endDetails: { endingType: EndType.NEVER, endDate: null, occurrences: null },
};
const useBuilderStore = create((set, get) => (Object.assign(Object.assign({}, initialState), { validationErrors: {}, setFrequency: (frequency) => {
        // clear repeat details when changing frequency
        set({ frequency });
        set({ repeatDetails: initialState.repeatDetails });
        // clear validation errors
        set({ validationErrors: {} });
        // rebuild the rrule string
        get().buildRRuleString();
    }, setStartDate: (startDate) => {
        const { endDate } = get().endDetails;
        // don't allow end date to be before start date, add one 1 day
        if (endDate && startDate && startDate > endDate) {
            set({
                endDetails: Object.assign(Object.assign({}, get().endDetails), { endDate: startDate.plus({ days: 1 }) }),
            });
        }
        // set the value
        set({ startDate });
        // clear validation errors
        set({ validationErrors: {} });
        // rebuild the rrule string
        get().buildRRuleString();
    }, setEndDetails: (details) => {
        set({ endDetails: details });
        // rebuild the rrule string
        get().buildRRuleString();
    }, setRepeatDetails: (details) => {
        set({ repeatDetails: details });
        // rebuild the rrule string
        get().buildRRuleString();
    }, validateForm: () => __awaiter(void 0, void 0, void 0, function* () {
        const { repeatDetails, frequency } = get();
        const validationSchema = getValidationSchema(frequency);
        try {
            yield validationSchema.validate(Object.assign(Object.assign({}, repeatDetails), { frequency }), { abortEarly: false });
            set({ validationErrors: {} });
            return true;
        }
        catch (error) {
            const errors = error.inner.reduce((acc, err) => (Object.assign(Object.assign({}, acc), { [err.path]: err.message })), {});
            set({ validationErrors: errors });
            return false;
        }
    }), buildRRuleString: () => {
        const { repeatDetails, frequency, startDate, endDetails } = get();
        const output = buildRRuleString({
            frequency,
            startDate,
            repeatDetails,
            endDetails,
        });
        set({ RRuleString: output });
        // if there is an onChange function, call it with the output
        const { onChange } = get();
        if (onChange)
            onChange(output);
    }, setOnChange: (onChange) => set({ onChange }), setStoreFromRRuleString: (rruleString) => {
        var _a;
        const parsedObj = RRule.parseString(rruleString);
        const { setFrequency, setStartDate, setEndDetails, setRepeatDetails } = get();
        // set the frequency
        if (parsedObj.freq) {
            setFrequency(parsedObj.freq);
        }
        // set the start date
        if (parsedObj.dtstart) {
            setStartDate(DateTime.fromJSDate(parsedObj.dtstart));
        }
        // set the end date
        if (parsedObj.until) {
            setEndDetails({
                endingType: EndType.ON,
                endDate: DateTime.fromJSDate(parsedObj.until),
                occurrences: null,
            });
        }
        else if (parsedObj.count) {
            setEndDetails({
                endingType: EndType.AFTER,
                occurrences: parsedObj.count,
                endDate: null,
            });
        }
        // set the repeat details
        const repeatDetails = {
            interval: (_a = parsedObj.interval) !== null && _a !== void 0 ? _a : null,
            byDay: [],
            byMonthDay: [],
            byMonth: [],
            bySetPos: [],
        };
        // set the byMonth
        if (parsedObj.bymonth) {
            if (!Array.isArray(parsedObj.bymonth)) {
                repeatDetails.byMonth = [parsedObj.bymonth];
            }
            else {
                repeatDetails.byMonth = parsedObj.bymonth;
            }
        }
        // set the byMonthDay
        if (parsedObj.bymonthday) {
            if (!Array.isArray(parsedObj.bymonthday)) {
                repeatDetails.byMonthDay = [parsedObj.bymonthday];
            }
            else {
                repeatDetails.byMonthDay = parsedObj.bymonthday;
            }
        }
        // set the byDay (by weekday)
        if (parsedObj.byweekday) {
            if (!Array.isArray(parsedObj.byweekday)) {
                repeatDetails.byDay = [parsedObj.byweekday];
            }
            else {
                repeatDetails.byDay = parsedObj.byweekday.map((day) => {
                    if (typeof day !== "number") {
                        // @ts-ignore
                        return Weekday[day];
                    }
                    // TODO what is the number parse to weekday?
                    return day;
                });
            }
        }
        // set the bySetPos
        if (parsedObj.bysetpos) {
            if (!Array.isArray(parsedObj.bysetpos)) {
                repeatDetails.bySetPos = [parsedObj.bysetpos];
            }
            else {
                repeatDetails.bySetPos = parsedObj.bysetpos;
            }
        }
        // TODO finish fixing the types
        setRepeatDetails(repeatDetails);
    } })));

const replacePlaceholder = (text, replacements = {}) => {
    forEach(replacements, (value, key) => {
        text = text.replace(`%{${key}}`, value);
    });
    return text;
};
const translateLabel = (translations, key, replacements = {}) => {
    if (isFunction(translations)) {
        return translations(key, replacements);
    }
    else if (isPlainObject(translations)) {
        return replacePlaceholder(get(translations, key, `[translation missing '${key}']`), replacements);
    }
    return null;
};

const IntervalTextInput = ({ value, onChange, unit, translation }) => (React.createElement(Row, { className: "d-flex justify-center align-items-center" },
    React.createElement(Col, { sm: "2", md: "2", className: "text-left" },
        React.createElement(Typography, null, translateLabel(translation, "repeat.every"))),
    React.createElement(Col, { sm: "2", md: "4", className: "pe-0" },
        React.createElement(TextField, { fullWidth: true, id: "outlined-basic", label: "", variant: "outlined", type: "number", value: value.interval, onChange: (e) => onChange(Object.assign(Object.assign({}, baseRepeatDetails), { interval: parseInt(e.target.value, 10) })) })),
    React.createElement(Col, null,
        React.createElement(Typography, null, translateLabel(translation, `repeat.${unit}`)))));

const RepeatHourly = ({ value, onChange, translation }) => (React.createElement(IntervalTextInput, { translation: translation, value: value, onChange: onChange, unit: "hours" }));

const RepeatWeekly = ({ value, onChange, translation }) => (React.createElement(Stack, { direction: "vertical", gap: 3 },
    React.createElement(IntervalTextInput, { translation: translation, value: value, onChange: onChange, unit: "weeks" }),
    React.createElement(ButtonGroup, { variant: "contained", fullWidth: true }, Object.keys(Weekday).map((day) => {
        var _a;
        const dayKey = day;
        return (React.createElement(Button, { size: "small", key: dayKey, color: ((_a = value === null || value === void 0 ? void 0 : value.byDay) === null || _a === void 0 ? void 0 : _a.includes(dayKey)) ? "primary" : "inherit", style: {
                width: "calc(100%/7)",
            }, onClick: () => {
                var _a;
                let selectedDays = (value === null || value === void 0 ? void 0 : value.byDay) || [];
                if ((_a = value === null || value === void 0 ? void 0 : value.byDay) === null || _a === void 0 ? void 0 : _a.includes(dayKey)) {
                    selectedDays = value === null || value === void 0 ? void 0 : value.byDay.filter((d) => d !== dayKey);
                }
                else {
                    selectedDays = [...selectedDays, dayKey];
                }
                onChange(Object.assign(Object.assign({}, value), { byDay: selectedDays }));
            } }, translateLabel(translation, `days_short.` + (dayKey + "").toLowerCase())));
    }))));

const sxMinWidth$3 = { minWidth: 120 };
const SelectDayWeek = ({ value, onChange, disabled, translation }) => (React.createElement(FormControl, { fullWidth: true },
    React.createElement(InputLabel, { id: "select-day-label", disabled: disabled }, translateLabel(translation, "repeat.selectDayOfWeek")),
    React.createElement(Select, { sx: sxMinWidth$3, disabled: disabled, onChange: (e) => {
            let setVal = [e.target.value];
            if (e.target.value === AllWeekDayOptions.DAY) {
                // this means all days in the array
                setVal = [Weekday.SU, Weekday.MO, Weekday.TU, Weekday.WE, Weekday.TH, Weekday.FR, Weekday.SA];
            }
            else if (e.target.value === AllWeekDayOptions.WEEKDAY) {
                // this means all weekdays in the array
                setVal = [Weekday.MO, Weekday.TU, Weekday.WE, Weekday.TH, Weekday.FR];
            }
            else if (e.target.value === AllWeekDayOptions.WEEKEND) {
                // this means all weekends in the array
                setVal = [Weekday.SA, Weekday.SU];
            }
            onChange(Object.assign(Object.assign({}, value), { byDay: setVal }));
        }, value: value.byDay, labelId: "select-day-label", label: translateLabel(translation, "repeat.selectDayOfWeek") }, Object.keys(AllWeekDayOptions).map((key) => (React.createElement(MenuItem, { key: key, value: key }, translateLabel(translation, `days.` + key.toLocaleLowerCase())))))));

const sxMinWidth$2 = { minWidth: 150 };
// TODO should there be a max number of positions? Change to AutoComplete from Select?
const SelectPosition = ({ value, onChange, disabled, translation }) => (React.createElement(FormControl, { fullWidth: true },
    React.createElement(InputLabel, { id: "select-month-label", disabled: disabled, shrink: !disabled }, translateLabel(translation, "repeat.selectPos")),
    React.createElement(Select, { sx: sxMinWidth$2, disabled: disabled, onChange: (e) => {
            const currentVal = e.target.value;
            onChange(Object.assign(Object.assign({}, value), { bySetPos: currentVal }));
        }, value: value.bySetPos, multiple: true, labelId: "select-pos-label", label: translateLabel("translation", "repeat.selectPos") }, Object.keys(OnThe).map((key) => (React.createElement(MenuItem, { key: key, value: parseInt(OnThe[key], 10) }, translateLabel(translation, "repeat.order." + OnThe[key])))))));

const sxMinWidth$1 = { minWidth: 120 };
const SelectDayCalendar = ({ value, onChange, maxDaysInMonth, disabled, translation }) => (React.createElement(FormControl, { fullWidth: true },
    React.createElement(InputLabel, { id: "select-day-cal-label", disabled: disabled }, translateLabel(translation, "repeat.selectDay")),
    React.createElement(Select, { sx: sxMinWidth$1, disabled: disabled, onChange: (e) => onChange(Object.assign(Object.assign({}, value), { byMonthDay: [parseInt(e.target.value, 10)] })), value: value.byMonthDay, labelId: "select-day-cal-label", label: translateLabel(translation, "repeat.selectDay") }, Array.from({ length: maxDaysInMonth }, (_, i) => i + 1).map((day) => (React.createElement(MenuItem, { key: day, value: day }, day))))));

const RepeatMonthly = ({ value, onChange, translation }) => {
    const maxDaysInMonth = 31;
    const [onRadio, setOnRadio] = useState(MonthBy.BYMONTHDAY);
    const disabledOnBYSETPOS = onRadio === MonthBy.BYMONTHDAY;
    const disabledOnBYMONTHDAY = onRadio === MonthBy.BYSETPOS;
    return (React.createElement(Stack, { gap: 2 },
        React.createElement(IntervalTextInput, { translation: translation, value: value, onChange: onChange, unit: "months" }),
        React.createElement(Row, { sm: 12, md: 12 },
            React.createElement(RadioGroup, { name: "monthly", value: onRadio, onChange: (e) => setOnRadio(e.target.value), sx: { width: "100%" } },
                React.createElement(Stack, { gap: 2 },
                    React.createElement(Row, null,
                        React.createElement(Col, { sm: 12, md: 2 },
                            React.createElement(FormControlLabel, { value: MonthBy.BYMONTHDAY, control: React.createElement(Radio, null), label: React.createElement(Typography$1, { sx: { color: disabledOnBYMONTHDAY ? "text.disabled" : "text.primary" } }, translateLabel(translation, "repeat.on_day")), sx: { width: "100%" } })),
                        React.createElement(Col, { sm: 12, md: 4, className: "pe-0" },
                            React.createElement(SelectDayCalendar, { translation: translation, value: value, onChange: onChange, maxDaysInMonth: maxDaysInMonth, disabled: disabledOnBYMONTHDAY }))),
                    React.createElement(Row, null,
                        React.createElement(Col, { sm: 12, md: 2 },
                            React.createElement(FormControlLabel, { value: MonthBy.BYSETPOS, control: React.createElement(Radio, null), label: React.createElement(Typography$1, { sx: { color: disabledOnBYSETPOS ? "text.disabled" : "text.primary" } }, translateLabel(translation, "repeat.on_the")) })),
                        React.createElement(Col, { sm: 12, md: 4, className: "pe-0" },
                            React.createElement(SelectPosition, { translation: translation, value: value, onChange: onChange, disabled: disabledOnBYSETPOS })),
                        React.createElement(Col, { sm: 12, md: 4 },
                            React.createElement(SelectDayWeek, { translation: translation, value: value, onChange: onChange, disabled: disabledOnBYSETPOS }))))))));
};

const RepeatDaily = ({ value, onChange, translation }) => (React.createElement(IntervalTextInput, { translation: translation, value: value, onChange: onChange, unit: "days" }));

// TODO does RRULE have a built-in mapping for this?
({
    [Frequency.YEARLY]: "Yearly",
    [Frequency.MONTHLY]: "Monthly",
    [Frequency.WEEKLY]: "Weekly",
    [Frequency.DAILY]: "Daily",
    [Frequency.HOURLY]: "Hourly",
});
({
    [Weekday.MO]: "Monday",
    [Weekday.TU]: "Tuesday",
    [Weekday.WE]: "Wednesday",
    [Weekday.TH]: "Thursday",
    [Weekday.FR]: "Friday",
    [Weekday.SA]: "Saturday",
    [Weekday.SU]: "Sunday",
    [WeekdayExtras.DAY]: "Day",
    [WeekdayExtras.WEEKDAY]: "Weekday",
    [WeekdayExtras.WEEKEND]: "Weekend",
});
({
    [Weekday.MO]: "Mon",
    [Weekday.TU]: "Tue",
    [Weekday.WE]: "Wed",
    [Weekday.TH]: "Thu",
    [Weekday.FR]: "Fri",
    [Weekday.SA]: "Sat",
    [Weekday.SU]: "Sun",
});
({
    [Months.JAN]: "January",
    [Months.FEB]: "February",
    [Months.MAR]: "March",
    [Months.APR]: "April",
    [Months.MAY]: "May",
    [Months.JUN]: "June",
    [Months.JUL]: "July",
    [Months.AUG]: "August",
    [Months.SEP]: "September",
    [Months.OCT]: "October",
    [Months.NOV]: "November",
    [Months.DEC]: "December",
});
const monthShortTextMapping = {
    [Months.JAN]: "Jan",
    [Months.FEB]: "Feb",
    [Months.MAR]: "Mar",
    [Months.APR]: "Apr",
    [Months.MAY]: "May",
    [Months.JUN]: "Jun",
    [Months.JUL]: "Jul",
    [Months.AUG]: "Aug",
    [Months.SEP]: "Sep",
    [Months.OCT]: "Oct",
    [Months.NOV]: "Nov",
    [Months.DEC]: "Dec",
};

const sxMinWidth = { minWidth: 120 };
const SelectMonth = ({ value, onChange, disabled, translation }) => {
    var _a, _b;
    const displayValue = disabled ? null : (_b = (_a = value === null || value === void 0 ? void 0 : value.byMonth) === null || _a === void 0 ? void 0 : _a[0]) !== null && _b !== void 0 ? _b : null;
    return (React.createElement(FormControl, { fullWidth: true },
        React.createElement(InputLabel, { id: "select-month-label", disabled: disabled, shrink: !disabled && !!displayValue }, translateLabel(translation, "repeat.selectMonth")),
        React.createElement(Select, { sx: sxMinWidth, disabled: disabled, onChange: (e) => onChange(Object.assign(Object.assign({}, value), { byMonth: [parseInt(e.target.value, 10)] })), value: displayValue, labelId: "select-month-label", label: !disabled && !!displayValue ? translateLabel(translation, "repeat.selectMonth") : undefined }, Object.values(Months).map((key) => (React.createElement(MenuItem, { key: key, value: key }, translateLabel(translation, "months." + monthShortTextMapping[key].toLocaleLowerCase())))))));
};

const RepeatYearly = ({ value, onChange, enableYearlyInterval, translation }) => {
    const maxDaysInMonth = useMemo(() => {
        if (value.byMonth) {
            return DateTime.fromObject({ month: value.byMonth[0] }).daysInMonth || 31;
        }
        return 31;
    }, [value]);
    const [onRadio, setOnRadio] = useState(YearlyBy.BYMONTH);
    const disabledOnBYSETPOS = onRadio === YearlyBy.BYMONTH;
    const disabledOnBYMONTH = onRadio === YearlyBy.BYSETPOS;
    const handleRadioChange = useCallback((e) => {
        const radioVal = e.target.value;
        if (radioVal === YearlyBy.BYMONTH) {
            onChange(Object.assign(Object.assign({}, value), { bySetPos: [], byDay: [], byMonth: [] }));
        }
        else {
            onChange(Object.assign(Object.assign({}, value), { byMonthDay: [], byMonth: [] }));
        }
        setOnRadio(radioVal);
    }, [onChange, value]);
    return (React.createElement(Stack, { gap: 2 },
        enableYearlyInterval && (React.createElement(IntervalTextInput, { translation: translation, value: value, onChange: onChange, unit: "years" })),
        React.createElement(Row, { md: 12 },
            React.createElement(RadioGroup, { name: "Yearly", value: onRadio, onChange: handleRadioChange },
                React.createElement(Stack, { gap: 2 },
                    React.createElement(Row, null,
                        React.createElement(Col, { md: "2" },
                            React.createElement(Stack, { direction: "horizontal" },
                                React.createElement(Radio, { value: YearlyBy.BYMONTH, name: "day" }),
                                React.createElement(Typography$1, { sx: { color: disabledOnBYMONTH ? "text.disabled" : "text.primary" } }, translateLabel(translation, "repeat.on")))),
                        React.createElement(Col, null,
                            React.createElement(SelectMonth, { translation: translation, value: value, onChange: onChange, disabled: disabledOnBYMONTH })),
                        React.createElement(Col, null,
                            React.createElement(SelectDayCalendar, { translation: translation, maxDaysInMonth: maxDaysInMonth, value: value, onChange: onChange, disabled: disabledOnBYMONTH }))),
                    React.createElement(Row, { className: "d-flex justify-center align-items-center" },
                        React.createElement(Col, { md: "2" },
                            React.createElement(Stack, { direction: "horizontal" },
                                React.createElement(Radio, { value: YearlyBy.BYSETPOS, name: "day" }),
                                React.createElement(Typography$1, { sx: { color: disabledOnBYSETPOS ? "text.disabled" : "text.primary" } }, translateLabel(translation, "repeat.on_the")))),
                        React.createElement(Col, { md: "3" },
                            React.createElement(SelectPosition, { translation: translation, value: value, onChange: onChange, disabled: disabledOnBYSETPOS })),
                        React.createElement(Col, { md: "3" },
                            React.createElement(SelectDayWeek, { translation: translation, value: value, onChange: onChange, disabled: disabledOnBYSETPOS })),
                        React.createElement(Col, null,
                            React.createElement(Typography$1, { sx: { color: disabledOnBYSETPOS ? "text.disabled" : "text.primary" } }, translateLabel(translation, "repeat.of"))),
                        React.createElement(Col, { md: "3" },
                            React.createElement(SelectMonth, { translation: translation, value: value, onChange: onChange, disabled: disabledOnBYSETPOS }))))))));
};

const defaultFrequencyOptions = [
    Frequency.HOURLY,
    Frequency.DAILY,
    Frequency.WEEKLY,
    Frequency.MONTHLY,
    Frequency.YEARLY,
];
const RepeatSelect = ({ rruleFrequencyOptions = defaultFrequencyOptions, frequencySelected, onFrequencyChange, enableYearlyInterval, translation, }) => {
    const { setRepeatDetails, repeatDetails } = useBuilderStore();
    const translateSelect = (fre) => {
        switch (fre) {
            case Frequency.HOURLY:
                return translateLabel(translation, "repeat.hourly");
            case Frequency.DAILY:
                return translateLabel(translation, "repeat.daily");
            case Frequency.WEEKLY:
                return translateLabel(translation, "repeat.weekly");
            case Frequency.MONTHLY:
                return translateLabel(translation, "repeat.monthly");
            case Frequency.YEARLY:
                return translateLabel(translation, "repeat.yearly");
            case Frequency.SECONDLY:
                return translateLabel(translation, "repeat.secondly");
            case Frequency.MINUTELY:
                return translateLabel(translation, "repeat.minutely");
            default:
                return null;
        }
    };
    const menuItems = rruleFrequencyOptions.map((option) => (React.createElement(MenuItem, { dense: true, key: option, value: option }, translateSelect(option))));
    const repeatComponentToRender = useMemo(() => {
        // type narrow the repeatDetails
        switch (frequencySelected) {
            case Frequency.HOURLY:
                return React.createElement(RepeatHourly, { translation: translation, value: repeatDetails, onChange: setRepeatDetails });
            case Frequency.DAILY:
                return React.createElement(RepeatDaily, { translation: translation, value: repeatDetails, onChange: setRepeatDetails });
            case Frequency.WEEKLY:
                return React.createElement(RepeatWeekly, { translation: translation, value: repeatDetails, onChange: setRepeatDetails });
            case Frequency.MONTHLY:
                return React.createElement(RepeatMonthly, { translation: translation, value: repeatDetails, onChange: setRepeatDetails });
            case Frequency.YEARLY:
                return (React.createElement(RepeatYearly, { translation: translation, value: repeatDetails, onChange: setRepeatDetails, enableYearlyInterval: enableYearlyInterval }));
            default:
                return null;
        }
    }, [enableYearlyInterval, frequencySelected, repeatDetails, setRepeatDetails]);
    return (React.createElement(Card, { className: "p-3" },
        React.createElement(Stack$1, { direction: "column", spacing: 2 },
            React.createElement(Select, { variant: "outlined", value: frequencySelected, onChange: (e) => onFrequencyChange(e.target.value), fullWidth: true }, menuItems),
            repeatComponentToRender)));
};

const vietnamese = {
    locale: 'vi',
    invalid_rrule: "Bạn đã cung cấp một giá trị RRule không hợp lệ cho thành phần.'%{value}' không phải là chuỗi rrule chính xác.",
    months: {
        jan: 'Tháng 1',
        feb: 'Tháng 2',
        mar: 'Tháng 3',
        apr: 'Tháng 4',
        may: 'Tháng 5',
        jun: 'Tháng 6',
        jul: 'Tháng 7',
        aug: 'Tháng 8',
        sep: 'Tháng 9',
        oct: 'Tháng 10',
        nov: 'Tháng 11',
        dec: 'Tháng 12'
    },
    days_short: {
        mo: 'T2',
        tu: 'T3',
        we: 'T4',
        th: 'T5',
        fr: 'T6',
        sa: 'T7',
        su: 'CN',
    },
    days: {
        mo: 'Thứ hai',
        tu: 'Thứ ba',
        we: 'Thứ Tư',
        th: 'Thứ năm',
        fr: 'Thứ sáu',
        sa: 'Thứ bảy',
        su: 'Chủ nhật',
        day: "Ngày",
        weekday: "Ngày trong tuần",
        weekend: "Ngày cuối tuần"
    },
    numerals: {
        first: 'First',
        second: 'Second',
        third: 'Third',
        fourth: 'Fourth',
        fifth: 'Fifth',
        sixth: 'Sixth',
        last: 'Last'
    },
    start: {
        label: 'Ngày bắt đầu',
        tooltip: 'Chọn ngày bắt đầu'
    },
    repeat: {
        label: 'Lặp lại',
        every: 'Cách mỗi',
        seconds: "giây",
        minutes: "phút",
        hours: "giờ",
        days: 'ngày',
        weeks: 'tuần',
        months: 'tháng',
        years: 'năm',
        on: 'Trong',
        on_the: 'Trong',
        of: 'của',
        on_day: 'Vào ngày',
        yearly: 'Hàng năm',
        monthly: 'Hàng tháng',
        weekly: 'Hàng tuần',
        daily: 'Hàng ngày',
        hourly: 'Hàng giờ',
        secondly: 'Hàng giây',
        minutely: 'Hàng phút',
        selectPos: "Chọn vị trí",
        selectDay: "Chọn ngày",
        selectDayOfWeek: "Chọn ngày trong tuần",
        selectMonth: "Chọn tháng",
        order: {
            "1": "Đầu tiên",
            "2": "Thứ hai",
            "3": "Ngày thứ ba",
            "4": "Thứ tư",
            "-1": "Cuối cùng",
        }
    },
    end: {
        label: 'Kết thúc',
        tooltip: 'Chọn ngày kết thúc',
        never: 'Không ngày kết thúc',
        after: 'Kết thúc sau',
        on: 'Kết thúc ngày',
        executions: 'executions.',
        occurrences: "Số ngày lặp lại"
    }
};

const End = ({ translation = vietnamese }) => {
    var _a;
    const { startDate, endDetails, setEndDetails } = useBuilderStore();
    return (React.createElement(Row, { className: "col-12 px-0" },
        React.createElement(Col, { xs: 12, sm: 12, md: 6, className: "px-0" },
            React.createElement(FormControl, { fullWidth: true },
                React.createElement(InputLabel, { id: "end-label" }, translateLabel(translation, "end.label")),
                React.createElement(Select, { value: endDetails === null || endDetails === void 0 ? void 0 : endDetails.endingType, onChange: (e) => setEndDetails(Object.assign(Object.assign({}, endDetails), { endingType: e.target.value })), labelId: "end-label", label: "End" }, Object.entries(EndType).map(([key, value]) => (React.createElement(MenuItem, { key: key, value: value },
                    React.createElement(Typography, null, translateLabel(translation, "end." + value)))))))),
        React.createElement(Col, { sm: 12, md: 6, className: "pe-0" },
            (endDetails === null || endDetails === void 0 ? void 0 : endDetails.endingType) === EndType.ON && (React.createElement(DatePicker, { sx: { width: "100%" }, label: translateLabel(translation, "end.label"), value: endDetails === null || endDetails === void 0 ? void 0 : endDetails.endDate, 
                // earliest possible end date is the start date
                minDate: startDate !== null && startDate !== void 0 ? startDate : undefined, disabled: !startDate, onChange: (newDate) => setEndDetails(Object.assign(Object.assign({}, endDetails), { endDate: newDate })) })),
            (endDetails === null || endDetails === void 0 ? void 0 : endDetails.endingType) === EndType.AFTER && (React.createElement(FormControl, { fullWidth: true },
                React.createElement(TextField, { label: translateLabel(translation, "end.occurrences"), type: "number", value: (_a = endDetails.occurrences) !== null && _a !== void 0 ? _a : "", onChange: (e) => setEndDetails(Object.assign(Object.assign({}, endDetails), { occurrences: parseInt(e.target.value, 10) })) }))))));
};

const defaultTheme = createTheme({
    palette: {
        primary: {
            main: "#2781db",
        },
    },
    components: {
        MuiInputBase: {
            styleOverrides: {
                root: {
                    padding: "4px", // Adjust padding as needed
                    backgroundColor: "white",
                },
            },
        },
        MuiOutlinedInput: {
            styleOverrides: {
                input: {
                    padding: "4px", // Adjust padding as needed
                },
            },
        },
        MuiInputLabel: {
            styleOverrides: {
                root: {
                    "&.Mui-focused": {
                        transform: "translate(10px, -10px) scale(1)", // Custom transform when label is focused or shrunk
                    },
                    "&.MuiInputLabel-shrink": {
                        transform: "translate(10px, -10px) scale(1)", // Custom transform when label has filled value
                    },
                    transform: "translate(10px, 10px) scale(1);",
                },
            },
        },
    },
});

const RRuleBuilder = ({ datePickerInitialDate, onChange, rruleOptions, rruleString, 
// TODO implement small screen detection
// enableSmallScreenDetection = true,
// smallScreenBreakpoint = 350,
// TODO implement dense mode - make all things smaller with less padding
// dense = false,
enableYearlyInterval = false, hideStart = false, hideEnd = false, theme, translation = vietnamese, }) => {
    const { 
    // TODO Implement validation errors on date picker
    // validationErrors,
    startDate, setStartDate, frequency, setFrequency, setOnChange, setStoreFromRRuleString, onChange: onChangeStored, } = useBuilderStore();
    // TODO Implement small screen detection
    // const containerRef = useRef<HTMLDivElement>(null);
    // const [size, setSize] = useState(0);
    //
    // const handleResize = () => {
    //   if (containerRef.current) {
    //     setSize(containerRef.current.getBoundingClientRect().width);
    //   }
    // };
    //
    // useEffect(() => {
    //   if (containerRef.current) {
    //     // Watch width of container for responsive design
    //     window.addEventListener("resize", handleResize);
    //   }
    //
    //   // Call handleResize initially to set the initial size
    //   handleResize();
    //
    //   return () => {
    //     window.removeEventListener("resize", handleResize);
    //   };
    // }, []);
    // init the store with user provided initial data
    useEffect(() => {
        if (datePickerInitialDate) {
            setStartDate(datePickerInitialDate);
        }
        // store the users onChange function if it exists and is not already stored
        if (onChange && !onChangeStored) {
            setOnChange(onChange);
        }
        // you can only init the store with rrule options or a string, not both
        // TODO finish rruleOptions parse and move to store
        if (rruleOptions) {
            // if we are init the store with rrule options
            // set the frequency
            if (rruleOptions.freq) {
                setFrequency(rruleOptions.freq);
            }
            // set the start date
            if (rruleOptions.dtstart) {
                setStartDate(DateTime.fromJSDate(rruleOptions.dtstart));
            }
        }
        else if (rruleString) {
            // if we are rehydrating the store with rrule options from a string
            setStoreFromRRuleString(rruleString);
        }
        // this is intentional to only run on mount
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    return (React.createElement(ThemeProvider, { theme: theme || defaultTheme },
        React.createElement(Card, { className: "p-3" },
            React.createElement(Stack$1, { direction: "column", spacing: 2 },
                React.createElement(LocalizationProvider, { dateAdapter: AdapterLuxon },
                    !hideStart && (React.createElement(DatePicker, { label: translateLabel(translation, "start.label"), value: startDate, format: "dd/MM/yyyy HH:mm", onChange: (newDate) => setStartDate(newDate) })),
                    React.createElement(RepeatSelect, { translation: translation, frequencySelected: frequency, onFrequencyChange: setFrequency, enableYearlyInterval: enableYearlyInterval }),
                    !hideEnd && React.createElement(End, { translation: translation }))))));
};

const english = {
    locale: 'en',
    invalid_rrule: "You provided an invalid RRule value to component. '%{value}' is not a correct RRule string.",
    months: {
        jan: 'Jan',
        feb: 'Feb',
        mar: 'Mar',
        apr: 'Apr',
        may: 'May',
        jun: 'Jun',
        jul: 'Jul',
        aug: 'Aug',
        sep: 'Sep',
        oct: 'Oct',
        nov: 'Nov',
        dec: 'Dec'
    },
    days_short: {
        mon: 'Mon',
        tue: 'Tue',
        wed: 'Wed',
        thu: 'Thu',
        fri: 'Fri',
        sat: 'Sat',
        sun: 'Sun',
        day: 'Day',
        weekday: 'Weekday',
        'weekend day': 'Weekend day'
    },
    days: {
        monday: 'Monday',
        tuesday: 'Tuesday',
        wednesday: 'Wednesday',
        thursday: 'Thursday',
        friday: 'Friday',
        saturday: 'Saturday',
        sunday: 'Sunday',
        day: 'Day',
        weekday: 'Weekday',
        'weekend day': 'Weekend day'
    },
    numerals: {
        first: 'First',
        second: 'Second',
        third: 'Third',
        fourth: 'Fourth',
        fifth: 'Fifth',
        sixth: 'Sixth',
        last: 'Last'
    },
    start: {
        label: 'Start',
        tooltip: 'Datetime picker for start on date'
    },
    repeat: {
        label: 'Repeat',
        yearly: {
            label: 'Yearly',
            on: 'on',
            on_the: 'on the',
            of: 'of'
        },
        monthly: {
            label: 'Monthly',
            every: 'every',
            months: 'month(s)',
            on_day: 'on day',
            on_the: 'on the'
        },
        weekly: {
            label: 'Weekly',
            every: 'every',
            weeks: 'week(s)'
        },
        daily: {
            label: 'Daily',
            every: 'every',
            days: 'day(s)'
        },
        hourly: {
            label: 'Hourly',
            every: 'every',
            hours: 'hour(s)'
        }
    },
    end: {
        label: 'End',
        tooltip: 'Datetime picker for end on date',
        never: 'Never',
        after: 'After',
        on_date: 'On date',
        executions: 'executions.'
    }
};

// eslint-disable-next-line import/no-anonymous-default-export
var index = {
    english,
    vietnamese
};

export { RRuleBuilder, defaultTheme, index as tranlations, useBuilderStore };
