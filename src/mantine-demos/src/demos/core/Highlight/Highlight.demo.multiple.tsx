import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Highlight } from '@reactgets/core';

const code = `
import { Highlight } from '@reactgets/core';

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}
`;

function Demo() {
  return <Highlight highlight={['this', 'that']}>Highlight this and also that</Highlight>;
}

export const multiple: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
