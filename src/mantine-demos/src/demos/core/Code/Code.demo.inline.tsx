import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Code } from '@reactgets/core';

const code = `
import { Code } from '@reactgets/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}
`;

function Demo() {
  return <Code>React.createElement()</Code>;
}

export const inline: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
