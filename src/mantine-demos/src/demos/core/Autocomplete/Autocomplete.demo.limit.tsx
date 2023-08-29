import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Autocomplete } from '@reactgets/core';

const code = `
import { Autocomplete } from '@reactgets/core';

function Demo() {
  return (
    <Autocomplete
      label="Only 2 options at a time"
      placeholder="Your favorite framework"
      limit={2}
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
      label="Only 2 options at a time"
      placeholder="Your favorite framework"
      limit={2}
      data={['React', 'Angular', 'Svelte', 'Vue']}
    />
  );
}

export const limit: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
