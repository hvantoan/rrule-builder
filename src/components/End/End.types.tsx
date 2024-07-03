export interface EndSettings {
  mode: string;
  after: number;
  onDate: any; // Consider refining based on expected structure
  options: EndOptions;
}

export type EndMode = "Never" | "After" | "On date";

export interface EndOptions {
  format?: string;
  modes: EndMode[];
  weekStartsOnSunday?: boolean; // Optional property
}

export type TranslationsType = any | undefined | null; // Function for translations

export interface EndProps {
  id: string;
  end: EndSettings;
  handleChange: (value: any) => void; // Update based on actual argument type
  translations: TranslationsType;
}
