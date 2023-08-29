import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Select } from '@reactgets/core';

const code = `
import { Select } from '@reactgets/core';

function Demo() {
  return (
    <Select
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
      withinPortal
    />
  );
}
`;

function Demo() {
  return (
    <Select
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
      transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
      withinPortal
    />
  );
}

export const animations: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
