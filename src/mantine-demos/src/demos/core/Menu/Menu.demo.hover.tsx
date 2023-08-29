import React from 'react';
import { Menu, Group } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { DemoMenuItems } from './_menu-items';

const code = `
import { Menu } from '@reactgets/core';

function Demo() {
  return (
    <Menu trigger="hover" openDelay={100} closeDelay={400}>
      {/* ... menu items */}
    </Menu>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Menu trigger="hover" openDelay={100} closeDelay={400}>
        <DemoMenuItems />
      </Menu>
    </Group>
  );
}

export const hover: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
