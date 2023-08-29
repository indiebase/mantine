import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { PinInput, Group } from '@reactgets/core';

const code = `
import { PinInput, Group } from '@reactgets/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput length={6} />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <PinInput length={6} />
    </Group>
  );
}

export const length: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
