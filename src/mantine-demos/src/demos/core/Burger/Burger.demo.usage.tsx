import React from 'react';
import { Group } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { DemoBase } from './_base';

const code = `
import { useDisclosure } from '@reactgets/hooks';
import { Burger } from '@reactgets/core';

function Demo() {
  const [opened, { toggle }] = useDisclosure(false);
  const label = opened ? 'Close navigation' : 'Open navigation';
  return <Burger opened={opened} onClick={toggle} aria-label={label} />;
}
`;

export function Demo() {
  return (
    <Group position="center">
      <DemoBase />
    </Group>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
