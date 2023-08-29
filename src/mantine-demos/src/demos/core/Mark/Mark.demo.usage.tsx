import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Mark, Text } from '@reactgets/core';

const code = `
import { Mark, Text } from '@reactgets/core';

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>Mantine</Mark>, you are awesome!
    </Text>
  );
}
`;

function Demo() {
  return (
    <Text>
      Thanks for stopping by and checking out <Mark>Mantine</Mark>, you are awesome!
    </Text>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
