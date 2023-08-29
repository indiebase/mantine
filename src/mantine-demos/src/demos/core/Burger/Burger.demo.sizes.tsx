import React from 'react';
import { MANTINE_SIZES, Group } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { DemoBase } from './_base';

const items = MANTINE_SIZES.map((size) => <DemoBase size={size} key={size} />);

export function Demo() {
  return <Group position="center">{items}</Group>;
}

export const sizes: MantineDemo = {
  type: 'demo',
  component: Demo,
};
