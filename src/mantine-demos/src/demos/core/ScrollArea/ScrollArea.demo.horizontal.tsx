import React from 'react';
import { Group, ScrollArea, Box } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { Content } from './_content';

const code = `
import { ScrollArea, Box } from '@reactgets/core';

function Demo() {
  return (
    <ScrollArea w={300} h={200}>
      <Box w={600}>
        {/* ... content */}
      </Box>
    </ScrollArea>
  );
}
`;

function Demo() {
  return (
    <Group position="center">
      <ScrollArea w={300} h={200}>
        <Box w={600}>
          <Content />
        </Box>
      </ScrollArea>
    </Group>
  );
}

export const horizontal: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
