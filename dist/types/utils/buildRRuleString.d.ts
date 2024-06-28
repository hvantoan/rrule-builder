import { Frequency } from "rrule";
import { DateTime } from "luxon";
import { AllRepeatDetails } from "../components/Repeat/Repeat.types";
import { EndDetails } from "../components/End/End.types";
export interface BuildRRuleStringParams {
    frequency: Frequency;
    startDate: DateTime | null;
    repeatDetails: AllRepeatDetails;
    endDetails: EndDetails;
}
export declare const buildRRuleString: (options: BuildRRuleStringParams) => string;
