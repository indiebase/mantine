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
  return <Prism colorScheme="dark" language="tsx">{/* ...code */}</Prism>;
}
`;

function Demo() {
  return (
    <Prism language="tsx" colorScheme="dark">
      {demoCode}
    </Prism>
  );
}

export const themeOverride: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
