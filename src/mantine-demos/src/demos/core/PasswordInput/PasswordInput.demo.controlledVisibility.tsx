import React from 'react';
import { useDisclosure } from '@reactgets/hooks';
import { MantineDemo } from '@reactgets/ds';
import { PasswordInput, Stack } from '@reactgets/core';

const code = `
import { useDisclosure } from '@reactgets/hooks';
import { PasswordInput, Stack } from '@reactgets/core';

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack maw={380} mx="auto">
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}

`;

function Demo() {
  const [visible, { toggle }] = useDisclosure(false);
  return (
    <Stack maw={380} mx="auto">
      <PasswordInput
        label="Password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
      <PasswordInput
        label="Confirm password"
        defaultValue="secret"
        visible={visible}
        onVisibilityChange={toggle}
      />
    </Stack>
  );
}

export const controlledVisibility: MantineDemo = {
  type: 'demo',
  component: Demo,
  code,
};
