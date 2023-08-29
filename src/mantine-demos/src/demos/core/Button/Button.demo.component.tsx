import React from 'react';
import { IconExternalLink } from '@tabler/icons-react';
import { MantineDemo } from '@reactgets/ds';
import { Button, Group } from '@reactgets/core';

const code = `
import { Button } from '@reactgets/core';
import { IconExternalLink } from '@tabler/icons-react';

function Demo() {
  return (
    <Button component="a" href="#" variant="outline" leftIcon={<IconExternalLink size="0.9rem" />}>
      Open in new tab
    </Button>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <Button<'a'>
        component="a"
        href="#"
        variant="outline"
        leftIcon={<IconExternalLink size="0.9rem" />}
      >
        Open in new tab
      </Button>
    </Group>
  );
}

export const component: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
