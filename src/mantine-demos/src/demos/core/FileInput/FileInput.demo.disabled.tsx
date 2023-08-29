import { Box, FileInput } from '@reactgets/core';
import React from 'react';
import { MantineDemo } from '@reactgets/ds';

const code = `
import { FileInput } from '@reactgets/core';

function Demo() {
  return <FileInput disabled />;
`;

function Demo() {
  return (
    <Box maw={320} mx="auto">
      <FileInput disabled label="Disabled" placeholder="Upload files" />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
