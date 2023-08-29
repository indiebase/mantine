import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { PinInput, Group } from '@reactgets/core';

const code = `
import { PinInput, Group } from '@reactgets/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput error />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput error />
    </Group>
  );
}

export const error: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
