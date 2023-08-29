import React from 'react';
import { useDisclosure } from '@reactgets/hooks';
import { Burger } from '@reactgets/core';

export function DemoBase(
  props: Omit<React.ComponentPropsWithoutRef<typeof Burger>, 'opened' | 'onChange'>
) {
  const [opened, { toggle }] = useDisclosure(false);
  return <Burger m="xs" opened={opened} onClick={toggle} {...props} />;
}
