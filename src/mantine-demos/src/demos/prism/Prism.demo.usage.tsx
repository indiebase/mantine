import React from 'react';
import { Prism } from '@reactgets/prism';
import { MantineDemo } from '@reactgets/ds';

export const demoCode = `
import { Button } from '@reactgets/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@reactgets/prism';

const demoCode = \`import { Button } from '@reactgets/core';

function Demo() {
  return <Button>Hello</Button>
}\`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}
`;

function Demo() {
  return <Prism language="tsx">{demoCode}</Prism>;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
