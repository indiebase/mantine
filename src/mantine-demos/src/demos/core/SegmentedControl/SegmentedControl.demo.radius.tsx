import React from 'react';
import { MANTINE_SIZES, Box } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { SegmentedControlWrapper } from './Wrapper';

function Demo() {
  const items = MANTINE_SIZES.map((size, index) => (
    <Box mt={index === 0 ? undefined : 'md'} key={size}>
      <SegmentedControlWrapper size="lg" radius={size} />
    </Box>
  ));

  return <>{items}</>;
}

export const radius: MantineDemo = {
  type: 'demo',
  component: Demo,
};
