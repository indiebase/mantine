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
      <DatePicker hideWeekdays />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker hideWeekdays />
    </Group>
  );
}

export const hideWeekdays: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
