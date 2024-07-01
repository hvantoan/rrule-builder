import React, { useMemo } from "react";
import { Frequency } from "rrule";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Stack from "@mui/material/Stack";
import RepeatHourly from "./RepeatHourly";
import RepeatWeekly from "./RepeatWeekly";
import RepeatMonthly from "./RepeatMonthly";
import RepeatDaily from "./RepeatDaily";
import RepeatYearly from "./RepeatYearly";
import useBuilderStore from "../../store/builderStore";
import translateLabel from "../../utils/translateLabel";
import { Card } from "react-bootstrap";

interface RepeatSelectProps {
  rruleFrequencyOptions?: Frequency[];
  onFrequencyChange: (frequency: Frequency) => void;
  frequencySelected: Frequency;
  enableYearlyInterval: boolean;
  translation: any;
  dense: boolean;
}

const defaultFrequencyOptions: Frequency[] = [
  Frequency.HOURLY,
  Frequency.DAILY,
  Frequency.WEEKLY,
  Frequency.MONTHLY,
  Frequency.YEARLY,
];

const RepeatSelect = ({
  rruleFrequencyOptions = defaultFrequencyOptions,
  frequencySelected,
  onFrequencyChange,
  enableYearlyInterval,
  translation,
  dense,
}: RepeatSelectProps) => {
  const { setRepeatDetails, repeatDetails } = useBuilderStore();

  const translateSelect = (fre: Frequency) => {
    switch (fre) {
      case Frequency.HOURLY:
        return translateLabel(translation, "repeat.hourly");
      case Frequency.DAILY:
        return translateLabel(translation, "repeat.daily");
      case Frequency.WEEKLY:
        return translateLabel(translation, "repeat.weekly");
      case Frequency.MONTHLY:
        return translateLabel(translation, "repeat.monthly");
      case Frequency.YEARLY:
        return translateLabel(translation, "repeat.yearly");
      case Frequency.SECONDLY:
        return translateLabel(translation, "repeat.secondly");
      case Frequency.MINUTELY:
        return translateLabel(translation, "repeat.minutely");
      default:
        return null;
    }
  };

  const menuItems = rruleFrequencyOptions.map((option) => (
    <MenuItem dense key={option} value={option}>
      {translateSelect(option)}
    </MenuItem>
  ));

  const repeatComponentToRender = useMemo(() => {
    // type narrow the repeatDetails

    switch (frequencySelected) {
      case Frequency.HOURLY:
        return (
          <RepeatHourly dense={dense} translation={translation} value={repeatDetails} onChange={setRepeatDetails} />
        );
      case Frequency.DAILY:
        return (
          <RepeatDaily dense={dense} translation={translation} value={repeatDetails} onChange={setRepeatDetails} />
        );
      case Frequency.WEEKLY:
        return (
          <RepeatWeekly dense={dense} translation={translation} value={repeatDetails} onChange={setRepeatDetails} />
        );
      case Frequency.MONTHLY:
        return (
          <RepeatMonthly dense={dense} translation={translation} value={repeatDetails} onChange={setRepeatDetails} />
        );
      case Frequency.YEARLY:
        return (
          <RepeatYearly
            dense={dense}
            translation={translation}
            value={repeatDetails}
            onChange={setRepeatDetails}
            enableYearlyInterval={enableYearlyInterval}
          />
        );
      default:
        return null;
    }
  }, [enableYearlyInterval, frequencySelected, repeatDetails, setRepeatDetails]);

  return (
    <Card className="p-3">
      <Stack direction="column" spacing={2}>
        <Select
          size={dense ? "small" : "medium"}
          variant={"outlined"}
          value={frequencySelected}
          onChange={(e) => onFrequencyChange(e.target.value as Frequency)}
          fullWidth
        >
          {menuItems}
        </Select>
        {repeatComponentToRender}
      </Stack>
    </Card>
  );
};

export default RepeatSelect;
