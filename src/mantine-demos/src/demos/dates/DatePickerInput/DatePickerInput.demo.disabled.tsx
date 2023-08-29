import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { DatePickerInput } from '@reactgets/dates';
import { Box } from '@reactgets/core';

const code = `
import { DatePickerInput } from '@reactgets/dates';

function Demo() {
  return (
    <DatePickerInput
      valueFormat="YYYY MMM DD"
      type="multiple"
      label="Disabled"
      placeholder="Pick date"
    />
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <DatePickerInput
        valueFormat="YYYY MMM DD"
        type="multiple"
        label="Disabled"
        placeholder="Pick date"
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
