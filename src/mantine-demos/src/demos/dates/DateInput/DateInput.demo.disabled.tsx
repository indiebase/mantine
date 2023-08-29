import React, { useState } from 'react';
import { MantineDemo } from '@reactgets/ds';
import { DateInput } from '@reactgets/dates';
import { Box } from '@reactgets/core';

const code = `
import { DateInput } from '@reactgets/dates';

function Demo() {
  return (
    <DateInput
      label="Disabled"
      placeholder="Date input"
      disabled
    />
  );
}
`;

function Demo() {
  const [value, setValue] = useState<Date | null>(null);
  return (
    <Box maw={320} mx="auto">
      <DateInput
        value={value}
        onChange={setValue}
        label="Disabled"
        placeholder="Date input"
        disabled
      />
    </Box>
  );
}

export const disabled: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
