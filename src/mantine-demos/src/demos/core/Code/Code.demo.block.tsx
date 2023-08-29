import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Code } from '@reactgets/core';

const code = `
import { Code } from '@reactgets/core';

const codeForPreviousDemo = \`import React from 'react';
import { Code } from '@reactgets/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}\`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}
`;

const codeForPreviousDemo = `import React from 'react';
import { Code } from '@reactgets/core';

function Demo() {
  return <Code>React.createElement()</Code>;
}`;

function Demo() {
  return <Code block>{codeForPreviousDemo}</Code>;
}

export const block: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
