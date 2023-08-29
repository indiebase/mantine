import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Text, Title } from '@reactgets/core';

const code = `
import { Text, Title } from '@reactgets/core';

function Demo() {
  return <Title order={3}>Title in which you want to <Text span c="blue" inherit>highlight</Text> something</Title>;
}
`;

function Demo() {
  return (
    <Title order={3}>
      Title in which you want to{' '}
      <Text span c="blue" inherit>
        highlight
      </Text>{' '}
      something
    </Title>
  );
}

export const inherit: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
