import React from 'react';
import { MantineDemo } from '@reactgets/ds';
import { useDisclosure } from '@reactgets/hooks';
import { Modal, Group, Button } from '@reactgets/core';

const code = `
import { useDisclosure } from '@reactgets/hooks';
import { Modal, Group, Button } from '@reactgets/core';

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open Modal</Button>
      </Group>
    </>
  );
}

`;

function Demo() {
  const [opened, { open, close }] = useDisclosure(false);

  return (
    <>
      <Modal opened={opened} onClose={close} withCloseButton={false}>
        Modal without header, press escape or click on overlay to close
      </Modal>

      <Group position="center">
        <Button onClick={open}>Open Modal</Button>
      </Group>
    </>
  );
}

export const header: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
