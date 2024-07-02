import { RepeatYearlyMode, Yearly } from "./Yearly/RepeatYearly.types";
import { Monthly, RepeatMonthlyMode } from "./Monthly/RepeatMonthly.types";
import { TranslationsType } from "../End/End.types";
import { Weekly } from "./Weekly/RepeatWeekly.types";
import { Daily } from "./Daily/RepeatDaily.types";
import { Hourly } from "./Hourly/RepeatHourly.types";

export type Frequency = "Yearly" | "Monthly" | "Weekly" | "Daily" | "Hourly";

export interface RepeatProps {
  id: string;
  repeat: RepeatDetail;
  handleChange: (value: any) => void;
  translations: TranslationsType;
}

export interface RepeatDetail {
  frequency: Frequency;
  yearly: Yearly;
  monthly: Monthly;
  weekly: Weekly;
  daily: Daily;
  hourly: Hourly;
  options: {
    frequency: Frequency[];
    yearly: RepeatYearlyMode;
    monthly: RepeatMonthlyMode;
  };
}
