import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Pagination } from '@reactgets/core';

const code = `
import { Pagination } from '@reactgets/core';

function Demo() {
  return (
    <Pagination
      total={10}
      position="center"
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
            border: 0,
          },
        },
      })}
    />
  );
}
`;

function Demo() {
  return (
    <Pagination
      total={10}
      position="center"
      styles={(theme) => ({
        control: {
          '&[data-active]': {
            backgroundImage: theme.fn.gradient({ from: 'red', to: 'yellow' }),
            border: 0,
          },
        },
      })}
    />
  );
}

export const stylesApi: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
