import { Frequency } from "rrule";
import { DateTime } from "luxon";
import { AllRepeatDetails } from "../components/Repeat/Repeat.types";
import { EndDetails } from "../components/End/End.types";
interface BuilderState {
    repeatDetails: AllRepeatDetails;
    frequency: Frequency;
    startDate: DateTime | null;
    validationErrors: Record<string, string>;
    endDetails: EndDetails;
    RRuleString?: string;
}
interface BuilderActions {
    validationErrors: Record<string, string>;
    setFrequency: (frequency: Frequency) => void;
    setRepeatDetails: (details: AllRepeatDetails) => void;
    validateForm: () => Promise<boolean>;
    setEndDetails: (details: EndDetails) => void;
    setStartDate: (startDate: DateTime | null) => void;
    buildRRuleString: () => void;
    onChange?: (rruleString: string) => void;
    setOnChange: (onChange: (rruleString: string) => void) => void;
    setStoreFromRRuleString: (rruleString: string) => void;
}
export declare const baseRepeatDetails: AllRepeatDetails;
declare const useBuilderStore: import("zustand").UseBoundStore<import("zustand").StoreApi<BuilderState & BuilderActions>>;
export default useBuilderStore;
