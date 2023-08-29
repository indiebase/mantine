import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { Select } from '@reactgets/core';

const code = `
import { Select } from '@reactgets/core';

function Demo() {
  return <Select allowDeselect />;
}
`;

function Demo() {
  return (
    <Select
      maw={320}
      mx="auto"
      label="Your favorite framework/library"
      placeholder="Pick one"
      allowDeselect
      withinPortal
      defaultValue="react"
      data={[
        { value: 'react', label: 'React' },
        { value: 'ng', label: 'Angular' },
        { value: 'svelte', label: 'Svelte' },
        { value: 'vue', label: 'Vue' },
      ]}
    />
  );
}

export const deselect: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
