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
      <DatePicker hideOutsideDates />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker hideOutsideDates />
    </Group>
  );
}

export const hideOutsideDates: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
