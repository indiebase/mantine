import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Group } from '@reactgets/core';
import { DatePicker } from '@reactgets/dates';

const code = `
import { Group } from '@reactgets/core';
import { DatePicker } from '@reactgets/dates';

function Demo() {
  return (
    <Group position="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker defaultLevel="decade" />
      <DatePicker defaultLevel="year" />
    </Group>
  );
}

export const defaultLevel: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
