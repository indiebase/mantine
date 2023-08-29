import 'dayjs/locale/ru';
import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Group } from '@reactgets/core';
import { MonthPicker } from '@reactgets/dates';

const code = `
import 'dayjs/locale/ru';
import { Group } from '@reactgets/core';
import { MonthPicker } from '@reactgets/dates';

function Demo() {
  return (
    <Group position="center">
      <MonthPicker locale="ru" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <MonthPicker locale="ru" />
    </Group>
  );
}

export const locale: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
