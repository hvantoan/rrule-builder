import { TranslationsType } from "../End/End.types";
import { StartOnDateValue } from "./OnDate.types";

export interface StartProps {
  id: string;
  start: {
    onDate: StartOnDateValue;
  };

  handleChange: (value: any) => void;
  translations: TranslationsType;
}
