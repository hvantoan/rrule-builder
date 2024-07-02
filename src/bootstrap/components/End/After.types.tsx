import { TranslationsType } from "./End.types";

export interface AfterProps {
  id: string; // Inherited from previous response
  after: number; // Inherited from previous response
  handleChange: (value: {
    // Update based on actual argument type
    mode?: string; // Optional mode property (could be added based on context)
    after?: number; // Optional after property (could be added based on context)
  }) => void;
  translations: TranslationsType; // Reuse the TranslationsType from previous responses
}
