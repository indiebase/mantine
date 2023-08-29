import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Tooltip, Button, Group } from '@reactgets/core';

const code = `
import { Tooltip, Button } from '@reactgets/core';

function Demo() {
  return (
    <Tooltip
      label="top"
      position="top"
      closeDelay={1500}
    >
      <Tooltip
        label="bottom"
        position="bottom"
        openDelay={500}
        closeDelay={1000}
      >
        <Tooltip
          label="left"
          position="left"
          openDelay={1000}
          closeDelay={500}
        >
          <Tooltip
            label="right"
            position="right"
            openDelay={1500}
          >
            <Button variant="outline">Nested Tooltips</Button>
          </Tooltip>
        </Tooltip>
      </Tooltip>
    </Tooltip>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Tooltip label="top" position="top" closeDelay={1500}>
        <Tooltip label="bottom" position="bottom" openDelay={500} closeDelay={1000}>
          <Tooltip label="left" position="left" openDelay={1000} closeDelay={500}>
            <Tooltip label="right" position="right" openDelay={1500}>
              <Button variant="outline">Nested Tooltips</Button>
            </Tooltip>
          </Tooltip>
        </Tooltip>
      </Tooltip>
    </Group>
  );
}

export const nested: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
