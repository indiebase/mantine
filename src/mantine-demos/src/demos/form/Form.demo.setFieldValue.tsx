import React from 'react';
import { useForm } from '@reactgets/form';
import { TextInput, Button, Group, Box } from '@reactgets/core';
import { MantineDemo } from '@reactgets/ds';
import { randomId } from '@reactgets/hooks';

const code = `
import { useForm } from '@reactgets/form';
import { TextInput, Button, Group, Box } from '@reactgets/core';
import { randomId } from '@reactgets/hooks';

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
        <Button variant="outline" onClick={() => form.setFieldValue('name', randomId())}>
          Random name
        </Button>
        <Button
          variant="outline"
          onClick={() => form.setFieldValue('email', \`\${randomId()}@test.com\`)}
        >
          Random email
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
        <Button variant="outline" onClick={() => form.setFieldValue('name', randomId())}>
          Random name
        </Button>
        <Button
          variant="outline"
          onClick={() => form.setFieldValue('email', `${randomId()}@test.com`)}
        >
          Random email
        </Button>
      </Group>
    </Box>
  );
}

export const setFieldValue: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
