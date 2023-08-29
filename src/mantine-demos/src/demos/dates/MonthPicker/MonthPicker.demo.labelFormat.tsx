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
        decadeLabelFormat="YY"
        yearLabelFormat="YYYY [year]"
        value={value}
        onChange={setValue}
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
        decadeLabelFormat="YY"
        yearLabelFormat="YYYY [year]"
        value={value}
        onChange={setValue}
      />
    </Group>
  );
}

export const labelFormat: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
