import { DAYS, MONTHS } from "bootstrap/constants";
import { RepeatYearlyMode } from "./RepeatYearly.types";
import { TranslationsType } from "bootstrap/components/End/End.types";

export type RepeatYearlyWich = "First" | "Second" | "Third" | "Fourth" | "Last";

export interface RepeatYearlyOnTheProps {
  id: string;
  mode: RepeatYearlyMode;
  onThe: {
    which: RepeatYearlyWich;
    month: (typeof MONTHS)[number];
    day: (typeof DAYS)[number];
  };
  hasMoreModes: boolean;
  handleChange: (value: any) => void;
  translations: TranslationsType;
}
