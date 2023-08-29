import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Progress } from '@reactgets/core';

const code = `
import { Progress } from '@reactgets/core';

function Demo() {
  return <Progress value={75} animate />;
}
`;

function Label() {
  return <Progress value={75} animate />;
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Label,
};
