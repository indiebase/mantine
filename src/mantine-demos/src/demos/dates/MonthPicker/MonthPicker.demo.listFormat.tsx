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
      <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <MonthPicker monthsListFormat="MM" yearsListFormat="YY" />
    </Group>
  );
}

export const listFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
