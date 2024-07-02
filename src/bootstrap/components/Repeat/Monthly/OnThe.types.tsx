import { DAYS } from "bootstrap/constants";
import { RepeatMonthlyMode } from "./RepeatMonthly.types";
import { TranslationsType } from "bootstrap/components/End/End.types";

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
