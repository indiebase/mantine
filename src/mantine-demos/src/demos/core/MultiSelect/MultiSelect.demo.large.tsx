import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { MultiSelect } from '@reactgets/core';

const code = `
import { MultiSelect } from '@reactgets/core';

const data = Array(50).fill(0).map((_, index) => \`Item \${index}\`);

function Demo() {
  return (
    <MultiSelect
      data={data}
      label="Large data set"
      placeholder="Scroll to see all options"
      maxDropdownHeight={160}
    />
  );
}
`;

const data = Array(50)
  .fill(0)
  .map((_, index) => `Item ${index}`);

function Demo() {
  return (
    <MultiSelect
      maw={400}
      mx="auto"
      data={data}
      label="Large data set"
      placeholder="Scroll to see all options"
      maxDropdownHeight={160}
    />
  );
}

export const large: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
