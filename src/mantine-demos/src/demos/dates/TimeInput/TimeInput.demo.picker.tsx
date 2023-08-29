import React, { useRef } from 'react';
import { MantineDemo } from '@reactgets/ds';
import { IconClock } from '@tabler/icons-react';
import { ActionIcon } from '@reactgets/core';
import { TimeInput } from '@reactgets/dates';

const code = `
import { useRef } from 'react';
import { ActionIcon } from '@reactgets/core';
import { TimeInput } from '@reactgets/dates';
import { IconClock } from '@tabler/icons-react';

function Demo() {
  const ref = useRef<HTMLInputElement>();

  return (
    <TimeInput
      label="Click icon to show browser picker"
      ref={ref}
      rightSection={
        <ActionIcon onClick={() => ref.current.showPicker()}>
          <IconClock size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      maw={400}
      mx="auto"
    />
  );
}
`;

function Demo() {
  const ref = useRef<HTMLInputElement>();

  return (
    <TimeInput
      label="Click icon to show browser picker"
      ref={ref}
      rightSection={
        <ActionIcon onClick={() => ref.current.showPicker()}>
          <IconClock size="1rem" stroke={1.5} />
        </ActionIcon>
      }
      maw={400}
      mx="auto"
    />
  );
}

export const picker: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
