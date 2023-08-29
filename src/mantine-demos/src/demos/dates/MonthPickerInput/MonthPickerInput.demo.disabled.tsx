import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { MonthPickerInput } from '@reactgets/dates';
import { Box } from '@reactgets/core';

const code = `
import { MonthPickerInput } from '@reactgets/dates';

function Demo() {
  return (
    <MonthPickerInput
      valueFormat="YYYY MMM"
      type="multiple"
      label="Disabled"
      placeholder="Pick month"
      disabled
    />
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <MonthPickerInput
        valueFormat="YYYY MMM"
        type="multiple"
        label="Disabled"
        placeholder="Pick month"
        disabled
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
