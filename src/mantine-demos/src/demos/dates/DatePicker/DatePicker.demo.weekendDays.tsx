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
      <DatePicker weekendDays={[1, 2]} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <DatePicker weekendDays={[1, 2]} />
    </Group>
  );
}

export const weekendDays: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
