import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { TimeInput } from '@reactgets/dates';
import { Box } from '@reactgets/core';

const code = `
import { IconClock } from '@tabler/icons-react';
import { TimeInput } from '@reactgets/dates';

function Demo() {
  return <TimeInput disabled />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <TimeInput disabled />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
