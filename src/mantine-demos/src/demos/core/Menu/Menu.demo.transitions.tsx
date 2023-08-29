import React from 'react';
import { Group, Menu } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@reactgets/core';

function Demo() {
  return (
    <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
      {/* Menu content */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu transitionProps={{ transition: 'rotate-right', duration: 150 }}>
        <DemoMenuItems />
      </Menu>
    </Group>
  );
}

export const transitions: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
