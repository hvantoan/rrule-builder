import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RepeatDaily from "./RepeatDaily";
import useBuilderStore from "../../store/builderStore";
import vietnamese from "../../tranlations/vietnamese";

export default {
  title: "Repeat/RepeatDaily",
  component: RepeatDaily,
} as Meta<typeof RepeatDaily>;

const Template: StoryFn<typeof RepeatDaily> = () => {
  const builderStore = useBuilderStore();
  return (
    <RepeatDaily translation={vietnamese} value={builderStore.repeatDetails} onChange={builderStore.setRepeatDetails} />
  );
};

export const Primary = Template;
