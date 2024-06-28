export declare enum Weekday {
    MO = "MO",
    TU = "TU",
    WE = "WE",
    TH = "TH",
    FR = "FR",
    SA = "SA",
    SU = "SU"
}
export declare enum Months {
    JAN = "1",
    FEB = "2",
    MAR = "3",
    APR = "4",
    MAY = "5",
    JUN = "6",
    JUL = "7",
    AUG = "8",
    SEP = "9",
    OCT = "10",
    NOV = "11",
    DEC = "12"
}
export declare enum MonthBy {
    BYMONTHDAY = "BYMONTHDAY",
    BYSETPOS = "BYSETPOS"
}
export declare enum YearlyBy {
    BYMONTH = "BYMONTH",
    BYSETPOS = "BYSETPOS"
}
export declare enum WeekdayExtras {
    DAY = "DAY",
    WEEKDAY = "WEEKDAY",
    WEEKEND = "WEEKEND"
}
export declare enum OnThe {
    FIRST = "1",
    SECOND = "2",
    THIRD = "3",
    FOURTH = "4",
    LAST = "-1"
}
export declare const AllWeekDayOptions: {
    DAY: WeekdayExtras.DAY;
    WEEKDAY: WeekdayExtras.WEEKDAY;
    WEEKEND: WeekdayExtras.WEEKEND;
    MO: Weekday.MO;
    TU: Weekday.TU;
    WE: Weekday.WE;
    TH: Weekday.TH;
    FR: Weekday.FR;
    SA: Weekday.SA;
    SU: Weekday.SU;
};
export type AllRepeatDetails = {
    interval: number | null;
    bySetPos: number[] | null;
    byDay: Weekday[] | null;
    byMonthDay: number[] | null;
    byMonth: number[] | null;
};
