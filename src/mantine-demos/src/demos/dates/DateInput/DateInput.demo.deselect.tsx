import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { DateInput } from '@reactgets/dates';

const code = `
import { DateInput } from '@reactgets/dates';

function Demo() {
  return (
    <DateInput allowDeselect label="Date input" placeholder="Date input" maw={400} mx="auto" />
  );
}
`;

function Demo() {
  return (
    <DateInput allowDeselect label="Date input" placeholder="Date input" maw={400} mx="auto" />
  );
}

export const deselect: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
