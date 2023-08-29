import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Box, NumberInput } from '@reactgets/core';

const code = `
import { NumberInput } from '@reactgets/core';

function Demo() {
  return <NumberInput disabled />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <NumberInput label="Disabled" placeholder="Your age" disabled value={20} />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
