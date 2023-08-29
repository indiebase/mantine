import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Autocomplete } from '@reactgets/core';

const code = `
import { Autocomplete } from '@reactgets/core';

function Demo() {
  return (
    <Autocomplete
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}
`;

function Demo() {
  return (
    <Autocomplete
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}

export const usage: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
