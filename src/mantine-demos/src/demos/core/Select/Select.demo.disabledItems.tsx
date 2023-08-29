import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Select } from '@reactgets/core';

const code = `
import { Select } from '@reactgets/core';

function Demo() {
  return (
    <Select
      label="Select with disabled items"
      placeholder="Select something"
      data={[
        { value: 'react', label: 'React', disabled: true },
        { value: 'ng', label: 'Angular', disabled: true },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}
`;

export function Demo() {
  return (
    <Select
      maw={320}
      mx="auto"
      label="Select with disabled items"
      placeholder="Select something"
      withinPortal
      data={[
        { value: 'react', label: 'React', disabled: true },
        { value: 'ng', label: 'Angular', disabled: true },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}

export const disabledItems: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
