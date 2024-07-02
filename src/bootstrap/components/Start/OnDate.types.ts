import { TranslationsType } from "../End/End.types";

export interface StartOnDateProps {
  id: string;
  onDate: StartOnDateValue;
  handleChange: (value: any) => void;
  translations: TranslationsType;
}

export type StartOnDateValue = {
  date: string;
  options: {
    weekStartsOnSunday: boolean;
    calendarComponent: React.ElementType;
  };
};
