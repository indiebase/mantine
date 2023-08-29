import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { PinInput, Group } from '@reactgets/core';

const code = `
import { PinInput, Group } from '@reactgets/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
