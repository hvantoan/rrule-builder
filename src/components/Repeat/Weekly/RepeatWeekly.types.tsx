import { TranslationsType } from "components/End/End.types";

export interface RepeatWeeklyProps {
  id: string;
  weekly: Weekly;
  handleChange: (value: any) => void;
  translations: TranslationsType;
}

export interface Weekly {
  interval: number;
  days: {
    mon: boolean;
    tue: boolean;
    wed: boolean;
    thu: boolean;
    fri: boolean;
    sat: boolean;
    sun: boolean;
  };
  options: {
    weekStartsOnSunday?: boolean;
  };
}
