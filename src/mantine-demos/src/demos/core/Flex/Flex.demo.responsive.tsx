import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Flex, Button } from '@reactgets/core';

const code = `
import { Flex, Button } from '@reactgets/core';

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}
`;

function Demo() {
  return (
    <Flex
      direction={{ base: 'column', sm: 'row' }}
      gap={{ base: 'sm', sm: 'lg' }}
      justify={{ sm: 'center' }}
    >
      <Button>Button 1</Button>
      <Button>Button 2</Button>
      <Button>Button 3</Button>
    </Flex>
  );
}

export const responsive: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
