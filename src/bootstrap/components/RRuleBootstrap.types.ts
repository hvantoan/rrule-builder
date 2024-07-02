import { Frequency } from "./Repeat/Repeat.types";
import { RepeatYearlyMode } from "./Repeat/Yearly/RepeatYearly.types";
import { RepeatMonthlyMode } from "./Repeat/Monthly/RepeatMonthly.types";
import { EndMode, TranslationsType } from "./End/End.types";

export interface RRuleBootstrapProps {
  id?: string | undefined | null;
  config?: {
    frequency?: Frequency[];
    yearly?: RepeatYearlyMode;
    monthly?: RepeatMonthlyMode;
    end?: EndMode[];
    hideStart?: boolean;
    hideEnd?: boolean;
    hideError?: boolean;
    weekStartsOnSunday?: boolean;
  };
  value?: string;
  onChange?: (value: string) => void;
  calendarComponent?: React.ElementType | undefined | null;
  translations?: TranslationsType;
}
