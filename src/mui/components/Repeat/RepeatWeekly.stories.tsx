import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RepeatWeekly from "./RepeatWeekly";
import useBuilderStore from "../../store/builderStore";
import vietnamese from "../../tranlations/vietnamese";

export default {
  title: "Repeat/RepeatWeekly",
  component: RepeatWeekly,
} as Meta<typeof RepeatWeekly>;

const Template: StoryFn<typeof RepeatWeekly> = () => {
  const builderStore = useBuilderStore();
  return (
    <RepeatWeekly
      translation={vietnamese}
      value={builderStore.repeatDetails}
      onChange={builderStore.setRepeatDetails}
    />
  );
};

export const Primary = Template;
