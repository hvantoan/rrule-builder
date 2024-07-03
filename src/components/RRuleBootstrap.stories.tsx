import React, { useState } from "react";
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
  const [rrule, setRRule] = useState<string>(
    "DTSTART:20240702T102400Z\nRRULE:FREQ=WEEKLY;INTERVAL=1;BYDAY=MO,TU,WE,TH,FR,SA,SU;UNTIL=20240718T102500Z"
  );
  return (
    <>
      <div className="d-grid gap-4">
        <RRuleBootstrap {...args} value={rrule} onChange={(value) => setRRule(value)} />
        <input aria-label="RRuleString" className="form-control" value={rrule} disabled />
      </div>
    </>
  );
};
export const Primary = Template.bind({});
Primary.args = {
  id: "RRuleBootstrap",
  translations: trans.vietnamese,
  config: {
    hideStart: false,
    hideEnd: false,
    hideError: false,
    weekStartsOnSunday: false,
    formatStart: "DD/MM/YYYY HH:mm",
    formatEnd: "DD/MM/YYYY HH:mm",
  },
};
