import React from 'react';
import { MANTINE_SIZES, Box, SegmentedControl } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';

function Demo() {
  const items = MANTINE_SIZES.map((size, index) => (
    <Box mt={index === 0 ? undefined : 15} key={size}>
      <SegmentedControl size={size} data={['React', 'Angular', 'Vue']} />
    </Box>
  ));

  return <>{items}</>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
