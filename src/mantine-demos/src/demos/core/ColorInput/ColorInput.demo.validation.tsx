import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { ColorInput, Box } from '@reactgets/core';

const code = `
import { ColorInput } from '@reactgets/core';

function Demo() {
  return (
    <>
      {/* Error as boolean – red border color */}
      <ColorInput label="Your favorite color" placeholder="Enter color" error />

      {/* Error as React node – red border color and message below input */}
      <ColorInput
        mt="md"
        label="Your favorite color"
        placeholder="Enter color"
        error="You cannot pick white"
      />
    </>
  );
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      {/* Error as boolean – red border color */}
      <ColorInput label="Your favorite color" placeholder="Enter color" error />

      {/* Error as React node – red border color and message below input */}
      <ColorInput
        mt="md"
        label="Your favorite color"
        placeholder="Enter color"
        error="You cannot pick white"
      />
    </Box>
  );
}

export const validation: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
