import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Box, NativeSelect } from '@reactgets/core';

const code = `
import { NativeSelect } from '@reactgets/core';

function Demo() {
  return <NativeSelect disabled data={[]} />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <NativeSelect
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled select"
        placeholder="Pick one that you like"
        disabled
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
