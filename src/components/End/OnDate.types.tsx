import { TranslationsType } from "./End.types";

export interface EndOnDateProps {
  id: string;
  onDate: {
    date: string; // Assuming date is a JavaScript Date object
    options: {
      // Optional options object
      // Add specific properties and types for options if needed
      format: string;
      weekStartsOnSunday?: boolean;
      calendarComponent?: React.ElementType;
    };
  };
  handleChange: (value: any) => void; // Update based on actual argument type
  translations: TranslationsType; // Reuse the TranslationsType from previous response
}
