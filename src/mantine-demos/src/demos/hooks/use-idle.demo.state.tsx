import React from 'react';
import { Group, Badge } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { useIdle } from '@reactgets/hooks';

const initialStateCode = `
import { Badge } from '@reactgets/core';
import { useIdle } from '@reactgets/hooks';

function Demo() {
  const idle = useIdle(2000, { initialState: false });
  return <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>;
}
`;

function InitialStateDemo() {
  const idle = useIdle(2000, { initialState: false });

  return (
    <Group position="center">
      <Badge color={idle ? 'blue' : 'teal'}>Current state: {idle ? 'idle' : 'not idle'}</Badge>
    </Group>
  );
}

export const useIdleInitialState: MantineDemo = {
  type: 'demo',
  code: initialStateCode,
  component: InitialStateDemo,
};
