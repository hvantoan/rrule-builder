import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import SelectPosition from "./SelectPosition";
import useBuilderStore from "../../../store/builderStore";
import vietnamese from "../../../tranlations/vietnamese";

export default {
  title: "Selects/SelectPosition",
  component: SelectPosition,
} as Meta<typeof SelectPosition>;

const Template: StoryFn<typeof SelectPosition> = (args) => {
  const builderStore = useBuilderStore();
  const { disabled } = args;
  return (
    <SelectPosition
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