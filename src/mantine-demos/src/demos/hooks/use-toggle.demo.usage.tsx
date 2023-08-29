import React from 'react';
import { Button, Group } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { useToggle, upperFirst } from '@reactgets/hooks';

const code = `
import { Button } from '@reactgets/core';
import { useToggle } from '@reactgets/hooks';

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Button color={value} onClick={() => toggle()}>
      {value}
    </Button>
  );
}
`;

function Demo() {
  const [value, toggle] = useToggle(['blue', 'orange', 'cyan', 'teal']);

  return (
    <Group position="center">
      <Button color={value} onClick={() => toggle()}>
        {upperFirst(value)}
      </Button>
    </Group>
  );
}

export const useToggleDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
