import React from "react";
import { Meta, StoryFn } from "@storybook/react";
import { Box, Typography } from "@mui/material";
import Button from "@mui/material/Button";
import { DateTime } from "luxon";
import RRuleBuilder from "./RRuleBuilder";
import { useBuilderStore } from "../../index";

export default {
  title: "RRuleBuilder",
  component: RRuleBuilder,
} as Meta<typeof RRuleBuilder>;

const Template: StoryFn<typeof RRuleBuilder> = (args) => {
  const { validateForm, validationErrors, buildRRuleString, RRuleString } = useBuilderStore();
  const errors = Object.keys(validationErrors);
  return (
    <>
      <RRuleBuilder {...args} />
      <hr />
      <Button
        onClick={() => {
          validateForm();
        }}
      >
        Validate
      </Button>
      {!errors.length ? (
        <Typography color="info">Form is valid</Typography>
      ) : (
        <Typography color="error">Form is invalid</Typography>
      )}
      {!errors.length &&
        errors.map((key) => (
          <Typography key={key} color="error">
            {validationErrors[key]}
          </Typography>
        ))}
      <hr />
      <Button onClick={buildRRuleString}>Build String</Button>
      {/*  pre-wrap shows the line break in the output */}
      <Typography sx={{ whiteSpace: "pre-wrap" }}>{RRuleString}</Typography>
    </>
  );
};
export const Primary = Template.bind({});
Primary.args = {
  datePickerInitialDate: DateTime.now(),
  enableYearlyInterval: true,
  hideStart: false,
  hideEnd: false,
};

const SmallTemplate: StoryFn<typeof RRuleBuilder> = (args) => (
  <Box sx={{ width: 300, backgroundColor: "lightblue" }}>
    <RRuleBuilder {...args} />
  </Box>
);

export const SmallEmbedded = SmallTemplate.bind({});

const WithRRuleStringTemplate: StoryFn<typeof RRuleBuilder> = (args) => (
  <>
    <Typography marginY={4} sx={{ whiteSpace: "pre-wrap" }}>
      {/* eslint-disable-next-line react/destructuring-assignment */}
      {`Start string:\n${args.rruleString}`}
    </Typography>
    <Typography marginY={4}>
      Important note: To have the date start in the same string you must have a \n after the start date for a new line
      before the RRULE.
    </Typography>
    <RRuleBuilder {...args} />
  </>
);

export const WithRRuleString = WithRRuleStringTemplate.bind({});
WithRRuleString.args = {
  datePickerInitialDate: DateTime.now(),
  rruleString: "RRULE:FREQ=YEARLY;UNTIL=20290605T020600Z;COUNT=12;INTERVAL=3;WKST=MO",
  hideStart: false,
  hideEnd: false,
  // rruleString: "DTSTART:20240917T114341Z\nRRULE:INTERVAL=2;FREQ=WEEKLY;BYDAY=FR;COUNT=2",
};
