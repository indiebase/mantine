import React, { useState } from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Group } from '@reactgets/core';
import { MonthPicker } from '@reactgets/dates';

const code = `
import { useState } from 'react';
import { Group } from '@reactgets/core';
import { MonthPicker } from '@reactgets/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <MonthPicker
        value={value}
        onChange={setValue}
        defaultDate={new Date(2022, 1)}
        minDate={new Date(2022, 1, 1)}
        maxDate={new Date(2022, 8, 1)}
      />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <MonthPicker
        value={value}
        onChange={setValue}
        defaultDate={new Date(2022, 1)}
        minDate={new Date(2022, 1, 1)}
        maxDate={new Date(2022, 8, 1)}
      />
    </Group>
  );
}

export const minMax: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
