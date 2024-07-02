import { TranslationsType } from "components/End/End.types";
import { DAYS } from "constants";
import { OnTheWhich } from "./OnThe.types";

export type RepeatMonthlyMode = "on" | "on the";

export interface RepeatMonthlyProps {
  id: string;
  monthly: Monthly;
  handleChange: (value: any) => void;
  translations: TranslationsType; // Reuse the TranslationsType from previous responses
}

export interface Monthly {
  mode: "on" | "on the";
  interval: number;
  on: {
    day: number;
  };
  onThe: {
    day: (typeof DAYS)[number];
    which: OnTheWhich;
  };
  options: {
    modes: RepeatMonthlyMode;
  };
}
