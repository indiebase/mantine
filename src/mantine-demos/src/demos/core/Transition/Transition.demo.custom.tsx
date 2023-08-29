import React, { useState } from 'react';
import { useClickOutside } from '@reactgets/hooks';
import { MantineDemo } from '@reactgets/ds';
import { Transition, Paper, Button, useMantineTheme, rem } from '@reactgets/core';

const code = `
import { useState } from 'react';
import { Transition, Paper, Button, rem } from '@reactgets/core';
import { useClickOutside } from '@reactgets/hooks';

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));

  return (
    <div
      style={{
        maxWidth: rem(200),
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition mounted={opened} transition={scaleY} duration={200} timingFunction="ease">
        {(styles) => (
          <Paper
            shadow="md"
            style={{ ...styles, position: 'absolute', top: 0, left: 0, right: 0, height: rem(120) }}
            ref={clickOutsideRef}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </div>
  );
}`;

const scaleY = {
  in: { opacity: 1, transform: 'scaleY(1)' },
  out: { opacity: 0, transform: 'scaleY(0)' },
  common: { transformOrigin: 'top' },
  transitionProperty: 'transform, opacity',
};

export function Demo() {
  const [opened, setOpened] = useState(false);
  const clickOutsideRef = useClickOutside(() => setOpened(false));
  const theme = useMantineTheme();

  return (
    <div
      style={{
        maxWidth: rem(200),
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        margin: 'auto',
      }}
    >
      <Button onClick={() => setOpened(true)}>Open dropdown</Button>
      <Transition
        mounted={opened}
        transition={scaleY}
        duration={200}
        timingFunction="ease"
        keepMounted
      >
        {(styles) => (
          <Paper
            shadow="md"
            ref={clickOutsideRef}
            style={{
              ...styles,
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              height: rem(120),
              padding: theme.spacing.xl,
              backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.white,
            }}
          >
            Dropdown
          </Paper>
        )}
      </Transition>
    </div>
  );
}

export const custom: MantineDemo = {
  type: 'demo',
  code,
  component: Demo,
};
