import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Select, Box } from '@reactgets/core';

const code = `
import { Select } from '@reactgets/core';

function Demo() {
  return <Select disabled />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <Select
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled without value"
        placeholder="Pick all that you like"
        disabled
        withinPortal
      />

      <Select
        mt="md"
        data={['React', 'Angular', 'Svelte', 'Vue']}
        label="Disabled with value"
        placeholder="Pick all that you like"
        disabled
        withinPortal
        value="React"
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
