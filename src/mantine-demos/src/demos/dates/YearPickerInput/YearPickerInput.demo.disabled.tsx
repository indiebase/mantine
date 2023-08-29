import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { YearPickerInput } from '@reactgets/dates';
import { Box } from '@reactgets/core';

const code = `
import { YearPickerInput } from '@reactgets/dates';

function Demo() {
  return (
    <YearPickerInput
      valueFormat="YY"
      label="Disabled"
      placeholder="Pick year"
    />
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <YearPickerInput
        valueFormat="YY"
        type="multiple"
        label="Disabled"
        placeholder="Pick year"
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
