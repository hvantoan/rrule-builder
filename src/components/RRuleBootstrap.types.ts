import { Frequency } from "./Repeat/Repeat.types";
import { RepeatYearlyMode } from "./Repeat/Yearly/RepeatYearly.types";
import { RepeatMonthlyMode } from "./Repeat/Monthly/RepeatMonthly.types";
import { EndMode, TranslationsType } from "./End/End.types";
import "../styles/index.css";

export interface RRuleBootstrapProps {
  id?: string | undefined | null;
  config?: RRuleConfig;
  value?: string;
  onChange?: (value: string) => void;
  calendarComponent?: React.ElementType | undefined | null;
  translations?: TranslationsType;
}

export interface RRuleConfig {
  frequency?: Frequency[]; // Options for Rule
  yearly?: RepeatYearlyMode; // List option repeat for yearly
  monthly?: RepeatMonthlyMode; // List option repeat for monthly
  end?: EndMode[]; // List Option For End
  hideStart?: boolean;
  hideEnd?: boolean;
  hideError?: boolean; // Hide validate error
  weekStartsOnSunday?: boolean; // Week start on Sunday
  formatStart?: string; // Format  display value for Start Date
  formatEnd?: string; // Format display value for End Date
}
