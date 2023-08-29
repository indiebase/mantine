import React from 'react';
import { IconDatabase } from '@tabler/icons-react';
import { MantineDemo } from '@reactgets/ds';
import { Button, Group, ButtonProps } from '@reactgets/core';

function Wrapper(props: ButtonProps) {
  return (
    <Group position="center">
      <Button leftIcon={<IconDatabase size="1rem" />} {...props}>
        Connect to database
      </Button>
    </Group>
  );
}

const codeTemplate = (props: string) => `
import { IconDatabase } from '@tabler/icons-react';
import { Button } from '@reactgets/core';

function Demo() {
  return (
    <Button leftIcon={<IconDatabase size="1rem" />}${props}>
      Connect to database
    </Button>
  );
}
`;

export const loadingConfigurator: MantineDemo = {
  type: 'configurator',
  component: Wrapper,
  codeTemplate,
  configurator: [
    { name: 'loading', type: 'boolean', initialValue: false, defaultValue: false },
    {
      name: 'loaderPosition',
      capitalize: true,
      type: 'segmented',
      data: [
        { label: 'Left', value: 'left' },
        { label: 'Right', value: 'right' },
        { label: 'Center', value: 'center' },
      ],
      initialValue: 'left',
      defaultValue: 'left',
    },
  ],
};
