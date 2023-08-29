import React from 'react';
import { Group, Badge } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { useIdle } from '@reactgets/hooks';

const code = `
import { Badge } from '@reactgets/core';
import { useIdle } from '@reactgets/hooks';

function Demo() {
  const idle = useIdle(2000);
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function Demo() {
  const idle = useIdle(2000);

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
