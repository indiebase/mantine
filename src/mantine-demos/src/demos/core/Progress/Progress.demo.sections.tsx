import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Progress } from '@reactgets/core';

const code = `
import { Progress } from '@reactgets/core';

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'cyan' },
        { value: 20, color: 'blue' },
        { value: 15, color: 'indigo' },
      ]}
    />
  );
}
`;

function Demo() {
  return (
    <Progress
      size="xl"
      sections={[
        { value: 40, color: 'cyan' },
        { value: 20, color: 'blue' },
        { value: 15, color: 'indigo' },
      ]}
    />
  );
}

export const sections: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
