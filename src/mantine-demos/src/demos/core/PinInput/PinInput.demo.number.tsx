import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { PinInput, Group } from '@reactgets/core';

const code = `
import { PinInput, Group } from '@reactgets/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput type="number" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput type="number" />
    </Group>
  );
}

export const number: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
