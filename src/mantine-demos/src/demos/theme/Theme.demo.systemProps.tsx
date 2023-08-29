import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Box } from '@reactgets/core';

const code = `
import { Box } from '@reactgets/core';

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg="blue.7"
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
}
`;

function Demo() {
  return (
    <Box
      w={{ base: 200, sm: 400, lg: 500 }}
      py={{ base: 'xs', sm: 'md', lg: 'xl' }}
      bg="blue.7"
      c="#fff"
      ta="center"
      mx="auto"
    >
      Box with responsive style props
    </Box>
  );
}

export const systemProps: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
