import React from 'react';
import { Prism } from '@reactgets/prism';
import { MantineDemo } from '@reactgets/ds';

const demoCode = `
import { Button } from '@reactgets/core';

function Demo() {
  return <Button>Hello</Button>
}
`;

const code = `
import { Prism } from '@reactgets/prism';

function Demo() {
  return <Prism withLineNumbers language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" withLineNumbers>
      {demoCode}
    </Prism>
  );
}

export const lineNumbers: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
