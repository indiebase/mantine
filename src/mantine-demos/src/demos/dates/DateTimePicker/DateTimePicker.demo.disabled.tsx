import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { DateTimePicker } from '@reactgets/dates';
import { Box } from '@reactgets/core';

const code = `
import { DateTimePicker } from '@reactgets/dates';

function Demo() {
  return (
    <DateTimePicker
      label="Disabled"
      placeholder="Pick date and time"
    />
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <DateTimePicker
        label="Disabled"
        placeholder="Pick date and time"
        popoverProps={{ withinPortal: true }}
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
