import React from 'react';
import { useViewportSize } from '@reactgets/hooks';
import { MantineDemo } from '@reactgets/ds';
import { Text } from '@reactgets/core';

const code = `
import { useViewportSize } from '@reactgets/hooks';

function Demo() {
  const { height, width } = useViewportSize();
  return <>Width: {width}, height: {height}</>;
}
`;

function Demo() {
  const { height, width } = useViewportSize();

  return (
    <Text align="center">
      Width: {width}, height: {height}
    </Text>
  );
}

export const useViewportSizeDemo: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
