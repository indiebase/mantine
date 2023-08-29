import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Anchor } from '@reactgets/core';

const code = `
import { Anchor } from '@reactgets/core';

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Mantine docs
    </Anchor>
  );
}
`;

function Demo() {
  return (
    <Anchor href="https://mantine.dev/" target="_blank">
      Mantine docs
    </Anchor>
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
