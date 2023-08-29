import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Input } from '@reactgets/core';

const code = `
import { Input } from '@reactgets/core';

function Demo() {
  return (
    <Input
      placeholder="Input with custom focus styles"
      styles={(theme) => ({
        input: {
          '&:focus-within': {
            borderColor: theme.colors.orange[7],
          },
        },
      })}
    />
  );
}
`;

function Demo() {
  return (
    <Input
      placeholder="Input with custom focus styles"
      styles={(theme) => ({
        input: {
          '&:focus-within': {
            borderColor: theme.colors.orange[7],
          },
        },
      })}
    />
  );
}

export const focus: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
