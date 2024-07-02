import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RepeatHourly from "./RepeatHourly";
import useBuilderStore from "../../store/builderStore";
import vietnamese from "../../tranlations/vietnamese";

export default {
  title: "Repeat/RepeatHourly",
  component: RepeatHourly,
} as Meta<typeof RepeatHourly>;

const Template: StoryFn<typeof RepeatHourly> = () => {
  const builderStore = useBuilderStore();
  return (
    <RepeatHourly
      translation={vietnamese}
      value={builderStore.repeatDetails}
      onChange={builderStore.setRepeatDetails}
    />
  );
};

export const Primary = Template;
