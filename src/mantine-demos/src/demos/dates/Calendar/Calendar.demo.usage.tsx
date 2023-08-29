import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Group } from '@reactgets/core';
import { Calendar } from '@reactgets/dates';

const code = `
import { Group } from '@reactgets/core';
import { Calendar } from '@reactgets/dates';

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Calendar />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
