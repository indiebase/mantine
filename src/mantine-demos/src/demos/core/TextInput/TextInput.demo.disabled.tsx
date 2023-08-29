import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { TextInput, Box } from '@reactgets/core';

const code = `
import { TextInput } from '@reactgets/core';

function Demo() {
  return <TextInput disabled />;
}
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <TextInput label="Disabled without value" placeholder="Your email" disabled />

      <TextInput
        mt="md"
        label="Disabled with value"
        placeholder="Your email"
        disabled
        value="myemail@gmail.com"
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
