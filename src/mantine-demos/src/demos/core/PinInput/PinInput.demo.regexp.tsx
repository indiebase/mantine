import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { PinInput, Group } from '@reactgets/core';

const code = `
import { PinInput, Group } from '@reactgets/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput type={/^[0-3]+/} inputType="tel" inputMode="numeric" />
    </Group>
  );
}

export const regexp: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
