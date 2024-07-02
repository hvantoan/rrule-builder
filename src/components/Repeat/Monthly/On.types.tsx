import { TranslationsType } from "components/End/End.types";
import { RepeatMonthlyMode } from "./RepeatMonthly.types";

export interface RepeatMonthlyOnProps {
  id: string;
  mode: RepeatMonthlyMode; // Simplified since only "on" mode is allowed
  on: {
    day: number;
  };
  hasMoreModes: boolean;
  handleChange: (value: any) => void;
  translations: TranslationsType; // Reuse the TranslationsType from previous responses
}
