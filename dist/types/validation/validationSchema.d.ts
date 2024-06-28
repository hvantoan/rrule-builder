import * as Yup from "yup";
import { Frequency } from "rrule";
import { Weekday } from "../components/Repeat/Repeat.types";
declare const getValidationSchema: (frequency: Frequency) => Yup.ObjectSchema<{
    frequency: NonNullable<Frequency | undefined>;
    interval: number;
}, Yup.AnyObject, {
    frequency: undefined;
    interval: undefined;
}, ""> | Yup.ObjectSchema<{
    frequency: Frequency.YEARLY;
    interval: Yup.Maybe<undefined>;
    bySetPos: (number | undefined)[] | undefined;
    byDay: (Weekday | undefined)[] | undefined;
    byMonthDay: (number | undefined)[] | undefined;
    byMonth: (number | undefined)[] | undefined;
}, Yup.AnyObject, {
    frequency: undefined;
    interval: undefined;
    bySetPos: "";
    byDay: "";
    byMonthDay: "";
    byMonth: "";
}, "">;
export default getValidationSchema;
