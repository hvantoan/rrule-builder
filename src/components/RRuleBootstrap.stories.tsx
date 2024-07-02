import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import RRuleBootstrap from "./RRuleBootstrap";

import "bootstrap/dist/css/bootstrap.min.css";
import { trans } from "../../src";

export default {
  title: "RRuleBootstrap",
  component: RRuleBootstrap,
} as Meta<typeof RRuleBootstrap>;
``;

const Template: StoryFn<typeof RRuleBootstrap> = (args) => {
  const [rrule, setRRule] = React.useState<string>("");
  return (
    <>
      <div className="d-grid gap-4">
        <RRuleBootstrap {...args} onChange={(value) => setRRule(value)} />
        <input aria-label="RRuleString" className="form-control" value={rrule} disabled />
      </div>
    </>
  );
};
export const Primary = Template.bind({});
Primary.args = {
  id: "RRuleBootstrap",
  translations: trans.vietnamese,
  value: "",
  config: {
    hideStart: false,
    hideEnd: false,
    hideError: false,
    weekStartsOnSunday: false,
  },
};
