import React from 'react';
import { useForm } from '@reactgets/form';
import { MantineDemo } from '@reactgets/ds';
import { TextInput, Button, Group, Box } from '@reactgets/core';

const code = `
import { useForm } from '@reactgets/form';
import { TextInput, Button, Group, Box } from '@reactgets/core';

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={320} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group position="center" mt="xl">
        <Button variant="outline" onClick={() => form.reset()}>
          Reset to initial values
        </Button>
      </Group>
    </Box>
  );
}
`;

function Demo() {
  const form = useForm({
    initialValues: {
      name: '',
      email: '',
    },
  });

  return (
    <Box maw={320} mx="auto">
      <TextInput label="Name" placeholder="Name" {...form.getInputProps('name')} />
      <TextInput mt="md" label="Email" placeholder="Email" {...form.getInputProps('email')} />

      <Group position="center" mt="xl">
        <Button variant="outline" onClick={() => form.reset()}>
          Reset to initial values
        </Button>
      </Group>
    </Box>
  );
}

export const reset: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
