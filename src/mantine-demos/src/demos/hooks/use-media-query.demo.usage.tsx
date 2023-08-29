import React from 'react';
import { Group, Badge, em } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { useMediaQuery } from '@reactgets/hooks';

const code = `
import { Badge } from '@reactgets/core';
import { useMediaQuery } from '@reactgets/hooks';

function Demo() {
  const matches = useMediaQuery('(min-width: ${em(900)})');

  return (
    <Badge color={matches ? 'teal' : 'red'} variant="filled">
      Breakpoint {matches ? 'matches' : 'does not match'}
    </Badge>
  );
}`;

function Demo() {
  const matches = useMediaQuery(`(min-width: ${em(900)})`);

  return (
    <Group position="center">
      <Badge color={matches ? 'teal' : 'red'} variant="filled">
        Breakpoint {matches ? 'matches' : 'does not match'}
      </Badge>
    </Group>
  );
}

export const useMediaQueryDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
