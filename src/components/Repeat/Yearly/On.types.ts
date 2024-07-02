import { TranslationsType } from "components/End/End.types";
import { RepeatYearlyMode } from "./RepeatYearly.types";
import { MONTHS } from "constants";

export interface RepeatYearlyOnProps {
  id: string;
  mode: RepeatYearlyMode;
  on: {
    month: (typeof MONTHS)[number];
    day: number;
  };
  hasMoreModes: boolean;
  handleChange: (value: any) => void;
  translations: TranslationsType;
}
