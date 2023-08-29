import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { DateInput } from '@reactgets/dates';

const code = `
import { DateInput } from '@reactgets/dates';

function Demo() {
  return (
    <DateInput
      valueFormat="YYYY MMM DD"
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  return (
    <DateInput
      valueFormat="YYYY MMM DD"
      label="Date input"
      placeholder="Date input"
      maw={400}
      mx="auto"
    />
  );
}

export const format: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
