import React from 'react';
import { Text, Code } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { useMouse } from '@reactgets/hooks';

const code = `
import { Text, Code } from '@reactgets/core';
import { useMouse } from '@reactgets/hooks';

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{\`{ x: \${x}, y: \${y} }\`}</Code>
    </Text>
  );
}`;

function Demo() {
  const { x, y } = useMouse();

  return (
    <Text align="center">
      Mouse coordinates <Code>{`{ x: ${x}, y: ${y} }`}</Code>
    </Text>
  );
}

export const useMouseUsage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
