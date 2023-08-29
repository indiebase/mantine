import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { FileInput } from '@reactgets/core';

const code = `
import { FileInput } from '@reactgets/core';

function Demo() {
  return <FileInput label="Upload files" placeholder="Upload files" multiple />;
}
`;

function Demo() {
  return <FileInput maw={320} mx="auto" label="Upload files" placeholder="Upload files" multiple />;
}

export const multiple: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
