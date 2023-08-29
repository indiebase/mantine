import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Highlight } from '@reactgets/core';

const code = `
import { Highlight } from '@reactgets/core';

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
    >
      Mantine website
    </Highlight>
  );
}

`;

function Demo() {
  return (
    <Highlight
      component="a"
      href="https://mantine.dev"
      target="_blank"
      highlight="mantine"
      fw={500}
    >
      Mantine website
    </Highlight>
  );
}

export const props: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
