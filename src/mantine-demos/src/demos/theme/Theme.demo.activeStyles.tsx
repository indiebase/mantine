import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Button, MantineProvider, Group } from '@reactgets/core';

const code = `
import { Button, MantineProvider } from '@reactgets/core';

function Demo() {
  return (
    <MantineProvider theme={{ activeStyles: { transform: 'scale(0.95)' } }}>
      <Button>Press me</Button>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider inherit theme={{ activeStyles: { transform: 'scale(0.95)' } }}>
      <Group position="center">
        <Button>Press me</Button>
      </Group>
    </MantineProvider>
  );
}

export const activeStyles: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
