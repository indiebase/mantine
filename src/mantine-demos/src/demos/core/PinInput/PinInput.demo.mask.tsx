import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { PinInput, Group } from '@reactgets/core';

const code = `
import { PinInput, Group } from '@reactgets/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput mask />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput mask />
    </Group>
  );
}

export const mask: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
