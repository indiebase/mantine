import { Box, Group, Switch } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import React from 'react';

const code = `
import { Switch } from '@reactgets/core';

function Demo() {
  return <Switch disabled >;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Group position="center">
        <Switch disabled />
      </Group>
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
