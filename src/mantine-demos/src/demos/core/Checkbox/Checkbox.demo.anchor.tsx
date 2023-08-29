import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Checkbox, Anchor } from '@reactgets/core';

const code = `
import { Checkbox, Anchor } from '@reactgets/core';

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}
`;

function Demo() {
  return (
    <Checkbox
      label={
        <>
          I accept{' '}
          <Anchor href="https://mantine.dev" target="_blank">
            terms and conditions
          </Anchor>
        </>
      }
    />
  );
}

export const anchor: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
