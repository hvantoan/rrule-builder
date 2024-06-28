import React from "react";
import { Frequency } from "rrule";
interface RepeatSelectProps {
    rruleFrequencyOptions?: Frequency[];
    onFrequencyChange: (frequency: Frequency) => void;
    frequencySelected: Frequency;
    enableYearlyInterval: boolean;
    translation: any;
}
declare const RepeatSelect: ({ rruleFrequencyOptions, frequencySelected, onFrequencyChange, enableYearlyInterval, translation, }: RepeatSelectProps) => React.JSX.Element;
export default RepeatSelect;
