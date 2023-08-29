import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { TimeInput } from '@reactgets/dates';

const code = `
import { TimeInput } from '@reactgets/dates';

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}
`;

function Demo() {
  return <TimeInput withSeconds maw={400} mx="auto" />;
}

export const withSeconds: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
