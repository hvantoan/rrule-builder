import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectDayWeek from "./SelectDayWeek";
import useBuilderStore from "../../../store/builderStore";
import vietnamese from "../../../tranlations/vietnamese";

export default {
  title: "Selects/SelectDayWeek",
  component: SelectDayWeek,
} as Meta<typeof SelectDayWeek>;

const Template: StoryFn<typeof SelectDayWeek> = (args) => {
  const builderStore = useBuilderStore();
  const { disabled } = args;
  return (
    <SelectDayWeek
      translation={vietnamese}
      value={builderStore.repeatDetails}
      onChange={builderStore.setRepeatDetails}
      disabled={disabled}
    />
  );
};

export const Primary = Template;
Primary.args = {
  disabled: false,
};
