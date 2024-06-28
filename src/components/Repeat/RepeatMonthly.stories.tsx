import { Meta, StoryFn } from "@storybook/react";
import RepeatMonthly from "./RepeatMonthly";
import useBuilderStore from "../../store/builderStore";
import vietnamese from "../../tranlations/vietnamese";

export default {
  title: "Repeat/RepeatMonthly",
  component: RepeatMonthly,
} as Meta<typeof RepeatMonthly>;

const Template: StoryFn<typeof RepeatMonthly> = () => {
  const builderStore = useBuilderStore();
  return (
    <RepeatMonthly
      translation={vietnamese}
      value={builderStore.repeatDetails}
      onChange={builderStore.setRepeatDetails}
    />
  );
};

export const Primary = Template;
