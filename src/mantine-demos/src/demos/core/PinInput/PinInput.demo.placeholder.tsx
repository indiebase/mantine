import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { PinInput, Group } from '@reactgets/core';

const code = `
import { PinInput, Group } from '@reactgets/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput placeholder="⊡" />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput placeholder="⊡" />
    </Group>
  );
}

export const placeholder: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
