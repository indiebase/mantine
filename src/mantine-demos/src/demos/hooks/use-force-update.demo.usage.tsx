import React from 'react';
import { Button, Text, Group } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { useForceUpdate, randomId } from '@reactgets/hooks';

const code = `
import { Button, Text, Group } from '@reactgets/core';
import { useForceUpdate, randomId } from '@reactgets/hooks';

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}
`;

function Demo() {
  const forceUpdate = useForceUpdate();

  return (
    <Group position="center">
      <Text>{randomId()}</Text>
      <Button onClick={forceUpdate}>Force update</Button>
    </Group>
  );
}

export const useForceUpdateDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
