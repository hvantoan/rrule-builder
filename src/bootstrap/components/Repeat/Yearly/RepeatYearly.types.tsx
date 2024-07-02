import { TranslationsType } from "bootstrap/components/End/End.types";
import { RepeatYearlyWich } from "./OnThe.types";
import { DAYS, MONTHS } from "bootstrap/constants";

export type RepeatYearlyMode = "on" | "on the";

export interface RepeatYearlyProps {
  id: string;
  yearly: Yearly;
  handleChange: (value: any) => void;
  translations: TranslationsType;
}

export interface Yearly {
  mode: RepeatYearlyMode;
  on: {
    month: (typeof MONTHS)[number];
    day: number;
  };
  onThe: {
    which: RepeatYearlyWich;
    month: (typeof MONTHS)[number];
    day: (typeof DAYS)[number];
  };
  options: {
    modes: RepeatYearlyMode;
  };
}
