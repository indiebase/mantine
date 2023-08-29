import React from 'react';
import { Group, Badge } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { useColorScheme } from '@reactgets/hooks';

const code = `
import { Badge } from '@reactgets/core';
import { useColorScheme } from '@reactgets/hooks';

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
      Your system color scheme is {colorScheme}
    </Badge>
  );
}`;

function Demo() {
  const colorScheme = useColorScheme();

  return (
    <Group position="center">
      <Badge color={colorScheme === 'dark' ? 'blue' : 'teal'} variant="filled">
        Your system color scheme is {colorScheme}
      </Badge>
    </Group>
  );
}

export const useColorSchemeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
