import React from 'react';
import { useDebouncedState } from '@reactgets/hooks';
import { MantineDemo } from '@reactgets/ds';
import { TextInput, Text, Box } from '@reactgets/core';

const code = `
import { useDebouncedState } from '@reactgets/hooks';
import { TextInput, Text } from '@reactgets/core';

function Demo() {
  const [value, setValue] = useDebouncedState('', 200, { leading: true });

  return (
    <>
      <TextInput
        label="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />

      <Text>Debounced value: {value}</Text>
    </>
  );
}
`;

function Demo() {
  const [value, setValue] = useDebouncedState('', 200, { leading: true });

  return (
    <Box maw={400} mx="auto">
      <TextInput
        label="Enter value to see debounce effect"
        placeholder="Enter value to see debounce effect"
        defaultValue={value}
        onChange={(event) => setValue(event.currentTarget.value)}
      />
      <Text mt="sm">
        <Text component="span" color="dimmed" size="sm">
          Debounced value:
        </Text>{' '}
        {value.trim() || '[empty string]'}
      </Text>
    </Box>
  );
}

export const useDebouncedStateLeading: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
