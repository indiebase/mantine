import React, { useState } from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Group } from '@reactgets/core';
import { YearPicker } from '@reactgets/dates';

const code = `
import { useState } from 'react';
import { Group } from '@reactgets/core';
import { YearPicker } from '@reactgets/dates';

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker
        value={value}
        onChange={setValue}
        getYearControlProps={(date) => {
          if (date.getFullYear() === new Date().getFullYear()) {
            return {
              sx: (theme) => ({
                color: theme.fn.primaryColor(),
                fontWeight: 700,
              }),
            };
          }

          if (date.getFullYear() === new Date().getFullYear() + 1) {
            return { disabled: true };
          }

          return {};
        }}
      />
    </Group>
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Group position="center">
      <YearPicker
        value={value}
        onChange={setValue}
        getYearControlProps={(date) => {
          if (date.getFullYear() === new Date().getFullYear()) {
            return {
              sx: (theme) => ({
                color: theme.fn.primaryColor(),
                fontWeight: 700,
              }),
            };
          }

          if (date.getFullYear() === new Date().getFullYear() + 1) {
            return { disabled: true };
          }

          return {};
        }}
      />
    </Group>
  );
}

export const controlProps: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
