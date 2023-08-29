import React from 'react';
import { useHash, randomId } from '@reactgets/hooks';
import { MantineDemo } from '@reactgets/ds';
import { Group, Button, Text, Code } from '@reactgets/core';

const code = `
import { useHash, randomId } from '@reactgets/hooks';
import { Button, Text, Code } from '@reactgets/core';

function Demo() {
  const [hash, setHash] = useHash();
  return (
    <>
      <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      <Text>Current hash: <Code>{hash}</Code></Text>
    </>
  );
}`;

function Demo() {
  const [hash, setHash] = useHash();

  return (
    <>
      <Group position="center">
        <Button onClick={() => setHash(randomId())}>Set hash to random string</Button>
      </Group>

      <Text align="center" mt="md">
        Current hash: <Code>{hash}</Code>
      </Text>
    </>
  );
}

export const useHashDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
