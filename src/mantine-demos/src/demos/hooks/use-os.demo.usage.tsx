import React from 'react';
import { useOs } from '@reactgets/hooks';
import { MantineDemo } from '@reactgets/ds';
import { Text } from '@reactgets/core';

const code = `
import { useOs } from '@reactgets/hooks';

function Demo() {
  const os = useOs();
  return <>Your os is <b>{os}</b></>;
}
`;

function Demo() {
  const os = useOs();
  return (
    <Text align="center">
      Your os is <b>{os}</b>
    </Text>
  );
}

export const useOsDemo: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
