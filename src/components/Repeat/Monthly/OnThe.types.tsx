import { DAYS } from "constants";
import { RepeatMonthlyMode } from "./RepeatMonthly.types";
import { TranslationsType } from "components/End/End.types";

export interface RepeatMonthlyOnTheProps {
  id: string;
  mode: RepeatMonthlyMode;
  onThe: {
    which: OnTheWhich;
    day: (typeof DAYS)[number];
  };
  hasMoreModes: boolean;
  handleChange: (value: any) => void;
  translations: TranslationsType;
}

export type OnTheWhich = "First" | "Second" | "Third" | "Fourth" | "Last";
