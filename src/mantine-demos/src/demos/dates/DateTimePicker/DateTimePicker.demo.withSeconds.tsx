import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { DateTimePicker } from '@reactgets/dates';

const code = `
import { DateTimePicker } from '@reactgets/dates';

function Demo() {
  return (
    <DateTimePicker
      withSeconds
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  return (
    <DateTimePicker
      withSeconds
      label="Pick date and time"
      placeholder="Pick date and time"
      maw={400}
      mx="auto"
    />
  );
}

export const withSeconds: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
