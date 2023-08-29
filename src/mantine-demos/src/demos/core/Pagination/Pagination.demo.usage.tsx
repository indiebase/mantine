import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Pagination } from '@reactgets/core';

function Demo() {
  return <Pagination total={10} position="center" />;
}

export const usage: MantineDemo = {
  type: 'demo',
  component: Demo,
};
