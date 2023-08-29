import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Group } from '@reactgets/core';
import { MonthPicker } from '@reactgets/dates';

const code = `
import { Group } from '@reactgets/core';
import { MonthPicker } from '@reactgets/dates';

function Demo() {
  return (
    <Group position="center">
      <MonthPicker maxLevel="year" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <MonthPicker maxLevel="year" />
    </Group>
  );
}

export const maxLevel: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
