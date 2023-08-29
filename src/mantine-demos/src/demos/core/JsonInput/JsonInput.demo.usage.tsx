import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { JsonInput } from '@reactgets/core';

const code = `
import { JsonInput } from '@reactgets/core';

function Demo() {
  return (
    <JsonInput
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}
`;

function Demo() {
  return (
    <JsonInput
      maw={400}
      mx="auto"
      label="Your package.json"
      placeholder="Textarea will autosize to fit the content"
      validationError="Invalid JSON"
      formatOnBlur
      autosize
      minRows={4}
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
