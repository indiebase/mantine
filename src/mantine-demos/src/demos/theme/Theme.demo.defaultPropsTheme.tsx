import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { MantineProvider, Button } from '@reactgets/core';

const code = `
import { MantineProvider, Button } from '@reactgets/core';

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            defaultProps: (theme) => ({
              color: theme.colorScheme === 'dark' ? 'orange' : 'cyan',
            }),
          },
        },
      }}
    >
      <Button>Demo button</Button>
    </MantineProvider>
  );
}
`;

function Demo() {
  return (
    <MantineProvider
      inherit
      theme={{
        components: {
          Button: {
            defaultProps: (theme) => ({
              color: theme.colorScheme === 'dark' ? 'orange' : 'cyan',
            }),
          },
        },
      }}
    >
      <Button>Demo button</Button>
    </MantineProvider>
  );
}

export const defaultPropsTheme: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
