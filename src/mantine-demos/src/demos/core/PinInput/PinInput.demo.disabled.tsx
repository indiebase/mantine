import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { PinInput, Group, Box } from '@reactgets/core';

const code = `
import { PinInput, Group } from '@reactgets/core';

function Demo() {
  return (
    <Group position="center">
      <PinInput disabled />
    </Group>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Group position="center">
        <PinInput disabled />
      </Group>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
