import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { RingProgress, Group } from '@reactgets/core';

const code = `
import { RingProgress } from '@reactgets/core';

function Demo() {
  return (
    <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <RingProgress sections={[{ value: 40, color: 'yellow' }]} rootColor="red" />
    </Group>
  );
}

export const rootColor: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
